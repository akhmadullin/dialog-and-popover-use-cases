import { MutableRefObject } from 'react';

export type DialogRefElement = HTMLDialogElement | null;

export type DialogRef = MutableRefObject<DialogRefElement>;

export type PropsForCssVars = {
    minWidth?: string;
    maxWidth?: string;
    minHeight?: string;
    maxHeight?: string;
};

type LabelOrLabeledBy =
    | {
          label: string;
          labeledBy?: undefined;
      }
    | {
          label?: undefined;
          labeledBy: string;
      };

type ModalOrNonModalOptions =
    | {
          isModal: true;
          withCloseOnEscapeForNonModal?: undefined;
      }
    | {
          isModal: false;
          withCloseOnEscapeForNonModal?: boolean;
      };

export type DialogProps = {
    isOpen: boolean;
    close: () => void;
    className?: string;
    withPageScrollLock?: boolean;
    withCloseOnOutsideClick?: boolean;
} & PropsForCssVars &
    LabelOrLabeledBy &
    ModalOrNonModalOptions;

export type DialogInnerId = string;

export type NonModalDialogsQueue = {
    queue: DialogInnerId[];
};
