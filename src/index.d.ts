export declare interface MSOption {
  title: string;
  confirmButtonText?: string;
  cancelButtonText?: string;
  selectedItems?: Array<any>;
  items: Array<any>;
  bindValue?: string;
  displayLabel?: string;
  ios?: MSiOSOption;
  android?: MSAndroidOption;
  onConfirm: (selectedItems: Array<any>) => void;
  onItemSelected?: (selectedItem: any) => void;
  onCancel?: () => void;
}
export declare interface MSiOSOption {
  cancelButtonBgColor?: string;
  confirmButtonBgColor?: string;
  confirmButtonTextColor?: string;
  cancelButtonTextColor?: string;
  image?: string;
  showType?: number;
  dismissType?: number;
  itemColor?: string;
}
export declare interface MSAndroidOption {
  titleSize?: number;
  confirmButtonTextColor?: string;
  cancelButtonTextColor?: string;
}

export declare enum AShowType {
  TypeNone = 0,
  TypeFadeIn = 1,
  TypeGrowIn = 2,
  TypeShrinkIn = 3,
  TypeSlideInFromTop = 4,
  TypeSlideInFromBottom = 5,
  TypeSlideInFromLeft = 6,
  TypeSlideInFromRight = 7,
  TypeBounceIn = 8,
  TypeBounceInFromTop = 9,
  TypeBounceInFromBottom = 10,
  TypeBounceInFromLeft = 11,
  TypeBounceInFromRight = 12,
}
export declare enum ADismissType {
  TypeNone = 0,
  TypeFadeOut = 1,
  TypeGrowOut = 2,
  TypeShrinkOut = 3,
  TypeSlideOutToTop = 4,
  TypeSlideOutToBottom = 5,
  TypeSlideOutToLeft = 6,
  TypeSlideOutToRight = 7,
  TypeBounceOut = 8,
  TypeBounceOutToTop = 9,
  TypeBounceOutToBottom = 10,
  TypeBounceOutToLeft = 11,
  TypeBounceOutToRight = 12,
}

export declare class MultiSelect {
  constructor();
  show(options: MSOption): void;
}
