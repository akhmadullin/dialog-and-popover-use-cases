import { useEffect } from 'react';
import { DialogInnerId, NonModalDialogsQueue } from '../types';

const useNonModalQueueRegistrator = (
    dialogInnerId: DialogInnerId,
    isModal: boolean,
    isOpen: boolean,
    nonModalDialogsQueue: NonModalDialogsQueue
) => {
    useEffect(() => {
        if (isModal) {
            return;
        }

        if (isOpen) {
            nonModalDialogsQueue.queue.push(dialogInnerId);
        } else {
            nonModalDialogsQueue.queue = nonModalDialogsQueue.queue.filter((item) => item !== dialogInnerId);
        }

        return () => {
            if (isModal) {
                return;
            }

            nonModalDialogsQueue.queue = nonModalDialogsQueue.queue.filter((item) => item !== dialogInnerId);
        };
    }, [isModal, isOpen]);
};

export default useNonModalQueueRegistrator;
