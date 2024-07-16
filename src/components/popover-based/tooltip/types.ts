export interface CssPropsForTooltip {
    width?: string;
    height?: string;
    maxWidth?: string;
    maxHeight?: string;
}

export type CssPropsForTooltipDict = Partial<Record<keyof CssPropsForTooltip, string>>;

export interface TooltipProps extends CssPropsForTooltip {
    id: string;
    anchorElementName: string;
    className?: string;
}
