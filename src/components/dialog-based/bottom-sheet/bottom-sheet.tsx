import React, { FC, PropsWithChildren } from 'react';
import cx from 'classnames';
import { Dialog } from 'src/components/dialog-based/dialog';
import { BottomSheetProps } from './types';
import classes from './styles.module.css';

// TODO forwardRef
const BottomSheet: FC<PropsWithChildren<BottomSheetProps>> = ({ className, ...dialogProps }) => {
    return <Dialog className={cx(classes.bottomSheet, className)} {...dialogProps} />;
};

export default BottomSheet;
