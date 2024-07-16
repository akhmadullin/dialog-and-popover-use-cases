import { useState, useLayoutEffect } from 'react';
import { RefMap } from './use-ref-map';
import adjustDropdownScroll from '../helpers/adjust-dropdown-scroll';

interface UseScrollOnOpenConfig {
    isOpen: boolean;
    getIndexToScroll: () => number;
    dropdown: HTMLDivElement | null;
    optionsMapRef: RefMap<HTMLElement>;
    optionsGap: number;
}

const useScrollOnOpen = ({ isOpen, getIndexToScroll, dropdown, optionsMapRef, optionsGap }: UseScrollOnOpenConfig) => {
    const [needScoll, setNeedScroll] = useState(false);

    useLayoutEffect(() => {
        setNeedScroll(isOpen);
    }, [isOpen]);

    useLayoutEffect(() => {
        if (isOpen && needScoll) {
            const idx = getIndexToScroll();
            const option = optionsMapRef.current[idx];
            if (option && dropdown) {
                adjustDropdownScroll(dropdown, option, optionsGap);
            }
            setNeedScroll(false);
        }
    }, [dropdown, getIndexToScroll, isOpen, needScoll, optionsGap, optionsMapRef]);
};

export default useScrollOnOpen;
