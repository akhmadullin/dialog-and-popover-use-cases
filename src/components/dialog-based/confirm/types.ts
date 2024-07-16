import { DialogProps } from 'src/components/dialog-based/dialog';

export type ConfrimProps = DialogProps & {
    question: string;
    description?: string;
    okText: string;
    cancelText: string;
    okCallback: () => void;
    cancelCallback: () => void;
};
