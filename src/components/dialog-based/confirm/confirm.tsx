import React, { FC } from 'react';
import { Dialog } from 'src/components/dialog-based/dialog';
import Heading from './components/heading';
import OkButton from './components/ok-button';
import CancelButton from './components/cancel-button';
import classes from './styles.module.css';
import { ConfrimProps } from './types';

const Confrim: FC<ConfrimProps> = ({
    close,
    question,
    description,
    okText,
    cancelText,
    okCallback,
    cancelCallback,
    ...dialogProps
}) => {
    const okHandler = () => {
        close();
        okCallback();
    };

    const cancelHandler = () => {
        close();
        cancelCallback();
    };

    return (
        <Dialog close={cancelHandler} {...dialogProps}>
            <Heading className={classes.marginBottomMedium}>{question}</Heading>
            {description && <p className={classes.marginBottomMedium}>{description}</p>}
            <div className={classes.buttonsRow}>
                <OkButton onClick={okHandler} autoFocus>
                    {okText}
                </OkButton>
                <CancelButton onClick={cancelHandler}>{cancelText}</CancelButton>
            </div>
        </Dialog>
    );
};

export default Confrim;
