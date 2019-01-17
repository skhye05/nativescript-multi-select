export interface MSOption {
  title: string;
  itemColor?: string;
  confirmButtonTextColor?: string;
  confirmButtonText?: string;
  cancelButtonTextColor?: string;
  cancelButtonText?: string;
  items: Array<any>;
  bindValue: string;
  ios?: MSiOSOption;
  onConfirm: (selectedItems: Array<any>) => void;
  onItemSelected?: (selectedItem: any) => void;
  onCancel?: () => void;
}

export interface MSiOSOption {
  cancelButtonBgColor: string;
  confirmButtonBgColor: string;
  image?: string;
  showType?: number;
  dismissType?: number;
}

export enum AShowType {
  TypeNone = 0,
  TypeFadeIn,
  TypeGrowIn,
  TypeShrinkIn,
  TypeSlideInFromTop,
  TypeSlideInFromBottom,
  TypeSlideInFromLeft,
  TypeSlideInFromRight,
  TypeBounceIn,
  TypeBounceInFromTop,
  TypeBounceInFromBottom,
  TypeBounceInFromLeft,
  TypeBounceInFromRight,
}

export enum ADismissType {
  TypeNone = 0,
  TypeFadeOut,
  TypeGrowOut,
  TypeShrinkOut,
  TypeSlideOutToTop,
  TypeSlideOutToBottom,
  TypeSlideOutToLeft,
  TypeSlideOutToRight,
  TypeBounceOut,
  TypeBounceOutToTop,
  TypeBounceOutToBottom,
  TypeBounceOutToLeft,
  TypeBounceOutToRight,
}