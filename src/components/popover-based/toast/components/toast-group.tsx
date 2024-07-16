import React, { FC, useState, useLayoutEffect, PropsWithChildren } from 'react';
import useRefMap from '../hooks/use-ref-map';
import Toast from './toast';
import {
    ToastId,
    ToastifyFunction,
    AddToastEvent,
    RemoveToastEvent,
    AddEventToastOptionsWithId,
    AddToastEventPayload,
    ToastStore,
    RemoveToast,
} from '../types';

const addToastEventName = 'toast-add';
const removeToastEventName = 'toast-remove';

const TOAST_TIMEOUT_IN_MS = 5000;

const generateRandomId = (): string => {
    return `${String.fromCharCode(Math.random() * 26 + 97)}${Math.random().toString(36).substr(2, 28)}`;
};

export const remove = (id: ToastId) => {
    const removeEvent: RemoveToastEvent = new CustomEvent(removeToastEventName, {
        detail: id,
    });
    window.dispatchEvent(removeEvent);
};

export const toastify: ToastifyFunction = (content, options = {}) => {
    const addEvent: AddToastEvent = new CustomEvent(addToastEventName, {
        detail: {
            content,
            options:
                options.id !== undefined
                    ? (options as AddEventToastOptionsWithId)
                    : { ...options, id: generateRandomId() },
        },
    });
    window.dispatchEvent(addEvent);
};

const waitTransitionsEnd = (node: HTMLElement) => {
    return Promise.allSettled(node.getAnimations().map((animation) => animation.finished));
};

const ToastGroup: FC<PropsWithChildren> = ({ children }) => {
    const [toasts, setToasts] = useState<ToastStore>({});

    const [toastsRef, collector] = useRefMap<HTMLDivElement>();

    useLayoutEffect(() => {
        const removeToastFromState: RemoveToast = (id) => {
            setToasts((prevState) => {
                if (prevState[id]) {
                    clearTimeout(prevState[id].timeoutId);
                    const updatedState = { ...prevState };
                    delete updatedState[id];
                    return updatedState;
                }
                return prevState;
            });
        };

        const removeToastWithAnimation = async (id: ToastId) => {
            const ref = toastsRef.current[id];

            if (ref) {
                ref.setAttribute('hidden', 'true');
                await waitTransitionsEnd(ref);
                removeToastFromState(id);
            } else {
                removeToastFromState(id);
            }
        };

        const addToast = ({ content, options }: AddToastEventPayload) => {
            const { id, closeHandler, withCloseButton = true, timeout = TOAST_TIMEOUT_IN_MS } = options;
            const removeHandler = () => {
                removeToastWithAnimation(id);
            };

            const addNewToast = () =>
                setToasts((prevState) => {
                    return {
                        ...prevState,
                        [id]: {
                            timeoutId: setTimeout(removeHandler, timeout),
                            props: {
                                content,
                                withCloseButton,
                                close: withCloseButton
                                    ? () => {
                                          removeHandler();
                                          if (closeHandler) closeHandler();
                                      }
                                    : undefined,
                            },
                        },
                    };
                });

            if (toastsRef.current[id]) {
                removeToastFromState(id);
                requestAnimationFrame(() => {
                    addNewToast();
                });
            } else {
                addNewToast();
            }
        };

        const onAddEventListener = ({ detail }: AddToastEvent) => {
            addToast(detail);
        };
        window.addEventListener(addToastEventName, onAddEventListener as EventListener);

        const onRemoveEventListener = (event: RemoveToastEvent) => {
            removeToastWithAnimation(event.detail);
        };
        window.addEventListener(removeToastEventName, onRemoveEventListener as EventListener);

        return () => {
            window.removeEventListener(addToastEventName, onAddEventListener as EventListener);
            window.removeEventListener(removeToastEventName, onRemoveEventListener as EventListener);
        };
    }, []);

    return (
        <>
            {Object.entries(toasts).map(([id, { props }], index, array) => (
                <Toast
                    key={id}
                    ref={(ref: HTMLDivElement | null) => {
                        collector(id, ref);
                        ref?.showPopover();
                    }}
                    withCloseButton={props.withCloseButton}
                    close={props.close}
                    currentToastName={`--toast-${id}`}
                    prevToastName={index === 0 ? null : `--toast-${array[index - 1][0]}`}
                >
                    {props.content}
                </Toast>
            ))}
            {children}
        </>
    );
};

export default ToastGroup;
