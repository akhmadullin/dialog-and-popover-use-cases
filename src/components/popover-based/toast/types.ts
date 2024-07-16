export type ToastType = 'info' | 'success' | 'warning' | 'error';

interface ToastPrivateProps {
    currentToastName: string;
    prevToastName: string | null;
}

export interface ToastPublicProps {
    withCloseButton?: boolean;
    close?: () => void;
}

export interface ToastProps extends ToastPrivateProps, ToastPublicProps {}

export type ToastId = string;

type ToastStoreItemData = {
    timeoutId: NodeJS.Timeout;
    props: ToastPublicProps & {
        content: string;
    };
};

export type ToastStore = Record<ToastId, ToastStoreItemData>;

export type ToastContent = string;

export interface AddEventToastOptions extends Pick<ToastPublicProps, 'withCloseButton'> {
    id?: ToastId;
    timeout?: number;
    closeHandler?: () => void;
}

export interface AddEventToastOptionsWithId extends Omit<AddEventToastOptions, 'id'> {
    id: ToastId;
}

export type AddToastEventPayload = {
    content: ToastContent;
    options: AddEventToastOptionsWithId;
};
export type AddToastEvent = CustomEvent<AddToastEventPayload>;

export type RemoveToastEvent = CustomEvent<ToastId>;

export type RemoveToast = (id: ToastId) => void;

export type ToastifyFunction = (content: ToastContent, options?: AddEventToastOptions) => void;
