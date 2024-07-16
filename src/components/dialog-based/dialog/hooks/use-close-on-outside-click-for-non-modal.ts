import { useEffect } from 'react';
import { DialogInnerId, DialogRef, NonModalDialogsQueue } from '../types';

const useCloseOnOutsideClickForNonModal = (
    dialogRef: DialogRef,
    dialogInnerId: DialogInnerId,
    isModal: boolean,
    withCloseOnOutsideClick: boolean,
    nonModalDialogsQueue: NonModalDialogsQueue
) => {
    useEffect(() => {
        if (isModal || !withCloseOnOutsideClick) {
            return;
        }

        const dialog = dialogRef.current;

        if (!dialog) {
            return;
        }

        const closeOnOutsideClick = (event: MouseEvent | TouchEvent) => {
            if (dialogInnerId !== nonModalDialogsQueue.queue[nonModalDialogsQueue.queue.length - 1]) {
                return;
            }

            if (dialog.contains(event.target as Node)) {
                return;
            }

            dialog.close();
        };
        const options: AddEventListenerOptions = { passive: true };

        document.addEventListener('mousedown', closeOnOutsideClick, options);
        document.addEventListener('touchstart', closeOnOutsideClick, options);

        return () => {
            if (isModal || !withCloseOnOutsideClick) {
                return;
            }

            const dialog = dialogRef.current;

            if (!dialog) {
                return;
            }

            document.removeEventListener('mousedown', closeOnOutsideClick, options);
            document.removeEventListener('touchstart', closeOnOutsideClick, options);
        };
    }, [withCloseOnOutsideClick, isModal]);
};

export default useCloseOnOutsideClickForNonModal;
