import { useRef, useCallback, MutableRefObject } from 'react';

type Key = number | string;
type RefMapType<T> = {
    [key in Key]: T;
};

export type Collector<T> = (key: Key, ref: T | null) => void;
export type RefMap<T> = MutableRefObject<RefMapType<T>>;

type UseRefMap<T> = [RefMap<T>, Collector<T>];

const useRefMap = <T>(): UseRefMap<T> => {
    const refMap = useRef<RefMapType<T>>({});

    const collector: Collector<T> = useCallback((key, ref): void => {
        if (ref == null) {
            delete refMap.current[key];
            return;
        }

        refMap.current = {
            ...refMap.current,
            [key]: ref,
        };
    }, []);

    return [refMap, collector];
};

export default useRefMap;
