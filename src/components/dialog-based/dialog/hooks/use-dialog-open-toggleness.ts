import { useEffect } from 'react';
import { DialogRef } from '../types';

const useDialogOpenToggleness = (dialogRef: DialogRef, isModal: boolean, isOpen: boolean) => {
    useEffect(() => {
        const dialog = dialogRef.current;

        if (!dialog) {
            return;
        }

        if (isOpen && !dialog.open) {
            const method = isModal ? 'showModal' : 'show';
            dialog[method]();
            return;
        }

        if (!isOpen && dialog.open) {
            dialog.close();
        }
    }, [isModal, isOpen]);
};

export default useDialogOpenToggleness;
