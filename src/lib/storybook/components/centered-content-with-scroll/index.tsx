import React, { FC, PropsWithChildren, useRef, useLayoutEffect } from 'react';
import cx from 'classnames';
import classes from './styles.module.css';

const CenteredContentWithScroll: FC<PropsWithChildren> = ({ children }) => {
    const containerRef = useRef<HTMLDivElement | null>(null);

    const withoutBorder = location ? new URLSearchParams(location.search).get('withoutBorder') : false;
    const fixedHeight = location ? new URLSearchParams(location.search).get('fixedHeight') : null;

    useLayoutEffect(() => {
        containerRef.current?.scrollTo({
            top: containerRef.current?.offsetHeight / 2,
            left: containerRef.current?.offsetWidth / 2,
            behavior: 'instant',
        });
    }, []);

    return (
        <div
            ref={containerRef}
            className={cx(classes.container, {
                [classes.containerWithoutBorder]: withoutBorder,
                [classes.containerWithFixedHeight]: Boolean(fixedHeight),
                [classes.containerFullScreen]: !fixedHeight,
            })}
            style={{ height: fixedHeight ?? undefined }}
        >
            <div className={classes.wrapper}>
                <div className={classes.contentContainer}>{children}</div>
            </div>
        </div>
    );
};

export default CenteredContentWithScroll;
