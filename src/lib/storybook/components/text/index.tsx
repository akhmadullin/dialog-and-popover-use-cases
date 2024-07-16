import React, { FC, HTMLAttributes, PropsWithChildren } from 'react';

const Text: FC<PropsWithChildren<HTMLAttributes<HTMLParagraphElement>>> = (props) => {
    return <p {...props} />;
};

export default Text;
