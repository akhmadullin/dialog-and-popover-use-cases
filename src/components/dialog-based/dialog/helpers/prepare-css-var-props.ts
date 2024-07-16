import { PropsForCssVars } from '../types';

const prepeareCssVarProps = (cssVarProps: PropsForCssVars) => {
    return Object.entries(cssVarProps).reduce(
        (acc, [key, value]) => {
            if (!value) {
                return acc;
            }

            acc[key] = value;

            return acc;
        },
        {} as Record<string, string>
    );
};

export default prepeareCssVarProps;
