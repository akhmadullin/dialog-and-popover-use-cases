import scrollParentToChild from './scroll-parent-to-child';
// import { rowGap } from '../Dropdown';

const rowGap = 5;

const adjustDropdownScroll = (dropdown: HTMLElement, highlightedOption: HTMLElement, optionsGap = rowGap): void => {
    if (highlightedOption.offsetTop - dropdown.scrollTop < 0) {
        scrollParentToChild(dropdown, highlightedOption, optionsGap);
    } else if (
        highlightedOption.offsetTop + highlightedOption.offsetHeight - dropdown.scrollTop - dropdown.clientHeight >
        0
    ) {
        dropdown.scrollTop =
            highlightedOption.offsetTop - dropdown.clientHeight + highlightedOption.offsetHeight + optionsGap;
    }
};

export default adjustDropdownScroll;
