import { useEffect } from 'react';
import { DialogRef } from '../types';

const useCloseOnOutsideClickForModal = (dialogRef: DialogRef, isModal: boolean, withCloseOnOutsideClick: boolean) => {
    useEffect(() => {
        if (!isModal || !withCloseOnOutsideClick) {
            return;
        }

        const dialog = dialogRef.current;

        if (!dialog) {
            return;
        }

        const closeOnOutsideClick = (event: MouseEvent) => {
            const modalDimensions = dialog.getBoundingClientRect();
            if (
                event.clientX < modalDimensions.left ||
                event.clientX > modalDimensions.right ||
                event.clientY < modalDimensions.top ||
                event.clientY > modalDimensions.bottom
            ) {
                dialog.close();
            }
        };

        dialog.addEventListener('click', closeOnOutsideClick);

        return () => {
            if (!isModal || !withCloseOnOutsideClick) {
                return;
            }

            const dialog = dialogRef.current;

            if (!dialog) {
                return;
            }

            dialog.removeEventListener('click', closeOnOutsideClick);
        };
    }, [withCloseOnOutsideClick, isModal]);
};

export default useCloseOnOutsideClickForModal;
