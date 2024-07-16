export enum ViewportType {
    MobileSmall = 'MobileSmall',
    MobileMedium = 'MobileMedium',
    MobileLarge = 'MobileLarge',
    DesktopSmall = 'DesktopSmall',
    DesktopHuge = 'DesktopHuge',
}

interface ViewportParams {
    name: string;
    styles: {
        width: string,
        height: string,
    }
}

const getViewportParams = (name: string, width: string, height: string): ViewportParams => {
    return {
        name,
        styles: {
            width,
            height
        }
    };
}

export const viewports: Record<ViewportType, ViewportParams> = {
    [ViewportType.MobileSmall]: getViewportParams(ViewportType.MobileSmall, '320px', '568px'),
    [ViewportType.MobileMedium]: getViewportParams(ViewportType.MobileMedium, '360px', '640px'),
    [ViewportType.MobileLarge]: getViewportParams(ViewportType.MobileLarge, '414px', '736px'),
    [ViewportType.DesktopSmall]: getViewportParams(ViewportType.DesktopSmall, '1024px', '100%'),
    [ViewportType.DesktopHuge]: getViewportParams(ViewportType.DesktopHuge, '1920px', '100%'),
};

export default viewports;
