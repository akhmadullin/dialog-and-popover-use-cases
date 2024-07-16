import React, { FC, useRef } from 'react';
import { Dialog } from 'src/components/dialog-based/dialog';
import Heading from './components/heading';
import Input from './components/input';
import OkButton from './components/ok-button';
import CancelButton from './components/cancel-button';
import classes from './styles.module.css';
import { PromptProps } from './types';

const Prompt: FC<PromptProps> = ({
    close,
    question,
    placeholder,
    okText,
    cancelText,
    okCallback,
    cancelCallback,
    ...dialogProps
}) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const okHandler = () => {
        const input = inputRef.current;

        if (!input) {
            return;
        }

        close();
        okCallback(input.value);

        input.value = '';
    };

    const cancelHandler = () => {
        const input = inputRef.current;

        if (!input) {
            return;
        }

        close();
        cancelCallback();

        input.value = '';
    };

    return (
        <Dialog close={cancelHandler} {...dialogProps}>
            <Heading className={classes.question}>{question}</Heading>
            <form method="dialog" onSubmit={okHandler}>
                <Input
                    ref={inputRef}
                    type="text"
                    required
                    autoFocus
                    minLength={1}
                    placeholder={placeholder}
                    className={classes.answer}
                />
                <div className={classes.buttonsRow}>
                    <OkButton type="submit">{okText}</OkButton>
                    <CancelButton type="reset" onClick={cancelHandler}>
                        {cancelText}
                    </CancelButton>
                </div>
            </form>
        </Dialog>
    );
};

export default Prompt;
