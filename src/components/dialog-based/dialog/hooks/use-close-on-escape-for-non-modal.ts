import { useEffect } from 'react';
import { DialogInnerId, DialogRef, NonModalDialogsQueue } from '../types';

const useCloseOnEscapeForNonModal = (
    dialogRef: DialogRef,
    dialogInnerId: DialogInnerId,
    isModal: boolean,
    withCloseOnEscapeForNonModal: boolean,
    nonModalDialogsQueue: NonModalDialogsQueue
) => {
    useEffect(() => {
        if (isModal || !withCloseOnEscapeForNonModal) {
            return;
        }
        // TODO вынести
        const ESCAPE = 27;
        const closeOnEscape = (e: KeyboardEvent): void => {
            if (
                e.keyCode === ESCAPE &&
                dialogInnerId === nonModalDialogsQueue.queue[nonModalDialogsQueue.queue.length - 1]
            ) {
                dialogRef.current?.close();
            }
        };

        window.addEventListener('keydown', closeOnEscape);
        return () => {
            if (isModal) {
                return;
            }
            window.removeEventListener('keydown', closeOnEscape);
        };
    }, [isModal]);
};

export default useCloseOnEscapeForNonModal;
