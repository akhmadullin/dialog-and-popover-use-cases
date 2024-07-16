import React, { PropsWithChildren, forwardRef, useRef, useImperativeHandle } from 'react';
import cx from 'classnames';
import useDialogOpenToggleness from './hooks/use-dialog-open-toggleness';
import useCloseOnOutsideClickForModal from './hooks/use-close-on-outside-click-for-modal';
import useNonModalQueueRegistrator from './hooks/use-non-modal-queue-registrator';
import useCloseOnOutsideClickForNonModal from './hooks/use-close-on-outside-click-for-non-modal';
import useCloseOnEscapeForNonModal from './hooks/use-close-on-escape-for-non-modal';
import classes from './styles.module.css';
import generateRandomId from './helpers/generate-random-id';
import prepeareCssVarProps from './helpers/prepare-css-var-props';
import { DialogProps, DialogRefElement, DialogInnerId, NonModalDialogsQueue } from './types';

const nonModalDialogsQueue: NonModalDialogsQueue = {
    queue: [],
};

const Dialog = forwardRef<DialogRefElement, PropsWithChildren<DialogProps>>(
    (
        {
            isOpen,
            isModal,
            close,
            withPageScrollLock,
            withCloseOnOutsideClick = false,
            withCloseOnEscapeForNonModal = false,
            label,
            labeledBy,
            minWidth,
            maxWidth,
            minHeight,
            maxHeight,
            children,
            className,
        },
        forwardedRef
    ) => {
        const dialogRef = useRef<DialogRefElement>(null);
        const dialogInnerId = useRef<DialogInnerId>(generateRandomId());
        useImperativeHandle<DialogRefElement, DialogRefElement>(forwardedRef, () => dialogRef.current);

        // Для работы нативных браузерных фич диалога достаточно только этого хука
        // он открывает, закрывает диалог на основе смена значения пропа isOpen
        useDialogOpenToggleness(dialogRef, isModal, isOpen);

        // Все остальные хуки добавляют дополнительное поведение,
        // которого нет по дефолту в веб-платформе для элемента dialog

        // Добавляет возможность закрывать модальный диалог по клику на область за пределами дилога
        useCloseOnOutsideClickForModal(dialogRef, isModal, withCloseOnOutsideClick);

        // Регистрирует очередность немодальных диалогов - нужно, чтобы мочь закрывать самый верхний диалог:
        // 1) на клик за пределами диалога
        // 2) на клавишу Escape
        useNonModalQueueRegistrator(dialogInnerId.current, isModal, isOpen, nonModalDialogsQueue);

        // Добавляет возможность закрывать немодальный диалог по клику на область за пределами дилога
        useCloseOnOutsideClickForNonModal(
            dialogRef,
            dialogInnerId.current,
            isModal,
            withCloseOnOutsideClick,
            nonModalDialogsQueue
        );

        // Добавляет возможность закрывать немодальный диалог нажатию на Escape
        useCloseOnEscapeForNonModal(
            dialogRef,
            dialogInnerId.current,
            isModal,
            withCloseOnEscapeForNonModal,
            nonModalDialogsQueue
        );

        return (
            <dialog
                ref={dialogRef}
                onClose={close}
                aria-label={label}
                aria-labelledby={labeledBy}
                className={cx(
                    classes.modal,
                    {
                        [classes.nonmodal]: !isModal,
                        [classes.modalWithScrollLock]: withPageScrollLock,
                    },
                    className
                )}
                style={prepeareCssVarProps({ minWidth, maxWidth, minHeight, maxHeight })}
            >
                {children}
                <button type="button" aria-label="Закрыть диалог" onClick={close} className={classes.closeButton} />
            </dialog>
        );
    }
);

export default Dialog;
