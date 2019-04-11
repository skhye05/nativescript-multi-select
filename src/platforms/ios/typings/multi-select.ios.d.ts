
declare var AAMultiSelectControllerVersionNumber: number;

declare var AAMultiSelectControllerVersionNumberVar: number;

declare var AAMultiSelectControllerVersionString: interop.Reference<number>;

declare var AAMultiSelectControllerVersionStringVar: interop.Reference<number>;

declare class AAMultiSelectModel extends NSObject {

    static alloc(): AAMultiSelectModel; // inherited from NSObject

    static new(): AAMultiSelectModel; // inherited from NSObject

    isSelected: boolean;

    multiSelectId: number;

    title: string;
}

declare class AAMultiSelectTableViewCell extends UITableViewCell {

    static alloc(): AAMultiSelectTableViewCell; // inherited from NSObject

    static appearance(): AAMultiSelectTableViewCell; // inherited from UIAppearance

    static appearanceForTraitCollection(trait: UITraitCollection): AAMultiSelectTableViewCell; // inherited from UIAppearance

    static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): AAMultiSelectTableViewCell; // inherited from UIAppearance

    static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): AAMultiSelectTableViewCell; // inherited from UIAppearance

    static appearanceWhenContainedIn(ContainerClass: typeof NSObject): AAMultiSelectTableViewCell; // inherited from UIAppearance

    static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): AAMultiSelectTableViewCell; // inherited from UIAppearance

    static new(): AAMultiSelectTableViewCell; // inherited from NSObject

    selectedImageHidden: interop.Pointer | interop.Reference<boolean>;

    title: string;

    titleFont: UIFont;

    titleTextColor: UIColor;
}

declare class AAMultiSelectViewController extends UIViewController {

    static alloc(): AAMultiSelectViewController; // inherited from NSObject

    static new(): AAMultiSelectViewController; // inherited from NSObject

    cancelBlock: (p1: interop.Pointer | interop.Reference<boolean>) => void;

    cancelButtonBackgroudColor: UIColor;

    cancelButtonTitleColor: UIColor;

    cancelButtonTitleFont: UIFont;

    cancelButtonTitleText: string;

    confirmBlock: (p1: NSArray<any>) => void;

    confirmButtonBackgroudColor: UIColor;

    confirmButtonTitleColor: UIColor;

    confirmButtonTitleFont: UIFont;

    confirmButtonTitleText: string;

    dataArray: NSArray<any>;

    dismissOnBackgroundTouch: boolean;

    itemTitleColor: UIColor;

    itemTitleFont: UIFont;

    originalDataArray: NSArray<any>;

    popupDismissType: AAPopupViewDismissType;

    popupMaskType: AAPopupViewMaskType;

    popupShowType: AAPopupViewShowType;

    selectedBlock: (p1: NSObject) => void;

    titleFont: UIFont;

    titleText: string;

    titleTextColor: UIColor;

    show(): void;
}

declare class AAPopupView extends UIView {

    static alloc(): AAPopupView; // inherited from NSObject

    static appearance(): AAPopupView; // inherited from UIAppearance

    static appearanceForTraitCollection(trait: UITraitCollection): AAPopupView; // inherited from UIAppearance

    static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): AAPopupView; // inherited from UIAppearance

    static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): AAPopupView; // inherited from UIAppearance

    static appearanceWhenContainedIn(ContainerClass: typeof NSObject): AAPopupView; // inherited from UIAppearance

    static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): AAPopupView; // inherited from UIAppearance

    static dismissAllPopups(): void;

    static new(): AAPopupView; // inherited from NSObject

    static popupWithContentView(contentView: UIView): AAPopupView;

    static popupWithContentViewShowTypeDismissTypeMaskTypeDismissOnBackgroundTouch(contentView: UIView, showType: AAPopupViewShowType, dismissType: AAPopupViewDismissType, maskType: AAPopupViewMaskType, shouldDismissOnBackgroundTouch: boolean): AAPopupView;

    static popupWithContentViewShowTypeDismissTypeMaskTypeDismissOnBackgroundTouchDismissOnContentTouch(contentView: UIView, showType: AAPopupViewShowType, dismissType: AAPopupViewDismissType, maskType: AAPopupViewMaskType, shouldDismissOnBackgroundTouch: boolean, shouldDismissOnContentTouch: boolean): AAPopupView;

    readonly backgroundView: UIView;

    readonly containerView: UIView;

    contentView: UIView;

    didFinishDismissingCompletion: () => void;

    didFinishShowingCompletion: () => void;

    dimmedMaskAlpha: number;

    dismissType: AAPopupViewDismissType;

    readonly isBeingDismissed: boolean;

    readonly isBeingShown: boolean;

    readonly isShowing: boolean;

    maskType: AAPopupViewMaskType;

    shouldDismissOnBackgroundTouch: boolean;

    shouldDismissOnContentTouch: boolean;

    showType: AAPopupViewShowType;

    willStartDismissingCompletion: () => void;

    willStartShowingCompletion: () => void;

    didFinishDismissing(): void;

    didFinishShowing(): void;

    dismiss(animated: boolean): void;

    show(): void;

    showAtCenterInView(center: CGPoint, view: UIView): void;

    showAtCenterInViewWithDuration(center: CGPoint, view: UIView, duration: number): void;

    showWithDuration(duration: number): void;

    showWithLayout(layout: AAPopupViewLayout): void;

    showWithLayoutDuration(layout: AAPopupViewLayout, duration: number): void;

    willStartDismissing(): void;

    willStartShowing(): void;
}

declare const enum AAPopupViewDismissType {

    None = 0,

    FadeOut = 1,

    GrowOut = 2,

    ShrinkOut = 3,

    SlideOutToTop = 4,

    SlideOutToBottom = 5,

    SlideOutToLeft = 6,

    SlideOutToRight = 7,

    BounceOut = 8,

    BounceOutToTop = 9,

    BounceOutToBottom = 10,

    BounceOutToLeft = 11,

    BounceOutToRight = 12
}

declare const enum AAPopupViewHorizontalLayout {

    Custom = 0,

    Left = 1,

    LeftOfCenter = 2,

    Center = 3,

    RightOfCenter = 4,

    Right = 5
}

interface AAPopupViewLayout {
    horizontal: AAPopupViewHorizontalLayout;
    vertical: AAPopupViewVerticalLayout;
}
declare var AAPopupViewLayout: interop.StructType<AAPopupViewLayout>;

declare var AAPopupViewLayoutCenter: AAPopupViewLayout;

declare function AAPopupViewLayoutMake(horizontal: AAPopupViewHorizontalLayout, vertical: AAPopupViewVerticalLayout): AAPopupViewLayout;

declare const enum AAPopupViewMaskType {

    None = 0,

    Clear = 1,

    Dimmed = 2
}

declare const enum AAPopupViewShowType {

    None = 0,

    FadeIn = 1,

    GrowIn = 2,

    ShrinkIn = 3,

    SlideInFromTop = 4,

    SlideInFromBottom = 5,

    SlideInFromLeft = 6,

    SlideInFromRight = 7,

    BounceIn = 8,

    BounceInFromTop = 9,

    BounceInFromBottom = 10,

    BounceInFromLeft = 11,

    BounceInFromRight = 12
}

declare const enum AAPopupViewVerticalLayout {

    Custom = 0,

    Top = 1,

    AboveCenter = 2,

    Center = 3,

    BelowCenter = 4,

    Bottom = 5
}
