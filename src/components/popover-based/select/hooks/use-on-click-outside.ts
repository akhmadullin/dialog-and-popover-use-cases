import { useEffect, useRef, RefObject } from 'react';

const useOnClickOutside = <T extends HTMLElement = HTMLDivElement>(
    handler: (event?: MouseEvent | TouchEvent) => void
): RefObject<T> => {
    const outsideElementRef = useRef<T>(null);

    useEffect(() => {
        const listener = (event: MouseEvent | TouchEvent) => {
            if (!outsideElementRef.current || outsideElementRef.current.contains(event.target as Node)) {
                return;
            }

            handler(event);
        };
        const options: AddEventListenerOptions = { passive: true };

        document.addEventListener('mousedown', listener, options);
        document.addEventListener('touchstart', listener, options);

        return () => {
            document.removeEventListener('mousedown', listener, options);
            document.removeEventListener('touchstart', listener, options);
        };
    }, [handler]);

    return outsideElementRef;
};

export default useOnClickOutside;
