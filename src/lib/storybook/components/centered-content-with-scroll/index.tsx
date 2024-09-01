import React, { FC, PropsWithChildren, useRef, useLayoutEffect } from 'react';
import classes from './styles.module.css';

const CenteredContentWithScroll: FC<PropsWithChildren> = ({ children }) => {
    const containerRef = useRef<HTMLDivElement | null>(null);

    useLayoutEffect(() => {
        containerRef.current?.scrollTo({
            top: containerRef.current?.offsetHeight / 2,
            left: containerRef.current?.offsetWidth / 2,
            behavior: 'instant',
        });
    }, []);

    return (
        <div ref={containerRef} className={classes.container}>
            <div className={classes.wrapper}>
                <div className={classes.contentContainer}>{children}</div>
            </div>
        </div>
    );
};

export default CenteredContentWithScroll;
