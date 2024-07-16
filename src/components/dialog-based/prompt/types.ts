import { DialogProps } from 'src/components/dialog-based/dialog';

export type PromptProps = DialogProps & {
    question: string;
    placeholder: string;
    okText: string;
    cancelText: string;
    okCallback: (answer: string) => void;
    cancelCallback: () => void;
};
