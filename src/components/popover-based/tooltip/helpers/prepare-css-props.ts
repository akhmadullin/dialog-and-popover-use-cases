import { CssPropsForTooltip, CssPropsForTooltipDict } from '../types';

const prepareCssProps = (cssProps: CssPropsForTooltip) => {
    return Object.entries(cssProps).reduce((acc, [key, value]) => {
        if (!value) {
            return acc;
        }

        acc[key as keyof CssPropsForTooltipDict] = value;

        return acc;
    }, {} as CssPropsForTooltipDict);
};

export default prepareCssProps;
