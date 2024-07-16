import React, { PropsWithChildren, forwardRef } from 'react';
import cx from 'classnames';
import classes from '../styles.module.css';
import { ToastProps } from '../types';

const Toast = forwardRef<HTMLDivElement, PropsWithChildren<ToastProps>>(
    ({ currentToastName, prevToastName, close, withCloseButton, children }, ref) => {
        return (
            <div
                ref={ref}
                role="alert"
                popover="manual"
                className={cx(classes.toast, {
                    [classes.toastUnderAnother]: Boolean(prevToastName),
                    [classes.toastWithCloseButton]: withCloseButton,
                })}
                style={{
                    '--anchor-name': currentToastName,
                    '--position-anchor': prevToastName,
                }}
            >
                <div className={classes.contentWrapper}>
                    {children}
                    {withCloseButton && (
                        <button
                            type="button"
                            aria-label="Close tooltip"
                            onClick={close}
                            className={classes.closeButton}
                        />
                    )}
                </div>
            </div>
        );
    }
);

export default Toast;
