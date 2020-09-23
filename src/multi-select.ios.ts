import { MSOption } from "./multi-select.common";
import { Color } from "tns-core-modules/color/color";

declare var AAMultiSelectViewController;

export class MultiSelect {
    private MSSelect: AAMultiSelectViewController;
    private _selectedItems: Array<any>; // predefined/selected items list

    constructor() {
        this._selectedItems = new Array<any>();
    }

    public show(options: MSOption): void {
        const self = rootVC();
        this.MSSelect = AAMultiSelectViewController.alloc().init();

        // assign title
        this.MSSelect.titleText = options.title;
        this.MSSelect.view.frame = CGRectMake(0, 0, CGRectGetWidth(self.view.frame) * .9, CGRectGetHeight(self.view.frame) * .9);

        // assign confirm button text
        if (options.confirmButtonText) {
            this.MSSelect.confirmButtonTitleText = options.confirmButtonText;
        }

        // assign cancel button text
        if (options.cancelButtonText) {
            this.MSSelect.cancelButtonTitleText = options.cancelButtonText;
        }

        // assign predefined selected items
        if (options.selectedItems && options.selectedItems instanceof Array) {
            this._selectedItems = options.selectedItems.filter(() => true);
        }

        // assign items
        this.MSSelect.dataArray = this.dataArray(options.items.filter(() => true), options.displayLabel, options.bindValue);

        // on confirm button tapped
        this.MSSelect.confirmBlock = (selectedItems: NSArray<AAMultiSelectModel>) => {
            const items: Array<any> = new Array();
            for (let i = 0; i < selectedItems.count; i++) {
                let item = selectedItems.objectAtIndex(i);
                items.push(options.bindValue ? options.items[item.multiSelectId][options.bindValue] : options.items[item.multiSelectId]);
            }
            options.onConfirm(items);
        };

        // on item selected
        if (options.onItemSelected) {
            this.MSSelect.selectedBlock = (item: any) => {
                options.onItemSelected(options.bindValue ? options.items[item.multiSelectId][options.bindValue] : options.items[item.multiSelectId]);
            };
        }

        // on cancel button tapped
        if (options.onCancel) {
            this.MSSelect.cancelBlock = (p1: any) => {
                options.onCancel();
            };
        }

        // assign ios options
        if (options.ios) {
            const _ios = options.ios;

            // assign item text color
            if (_ios.itemColor) {
                this.MSSelect.itemTitleColor = new Color(_ios.itemColor).ios;
            }

            // assign cancel button background color
            if (_ios.cancelButtonBgColor) {
                this.MSSelect.cancelButtonBackgroudColor = new Color(_ios.cancelButtonBgColor).ios;
            }

            // assign confirm button background color
            if (_ios.confirmButtonBgColor) {
                this.MSSelect.confirmButtonBackgroudColor = new Color(_ios.confirmButtonBgColor).ios;
            }

            // assign cancel button text color
            if (_ios.cancelButtonTextColor) {
                this.MSSelect.confirmButtonTitleColor = new Color(_ios.cancelButtonTextColor).ios;
            }

            // assign confirm text color
            if (_ios.confirmButtonTextColor) {
                this.MSSelect.confirmButtonTitleColor = new Color(_ios.confirmButtonTextColor).ios;
            }

            // assign animation on show popup
            if (_ios.showType) {
                this.MSSelect.popupShowType = _ios.showType;
            }

            // assign animation on dismiss popup
            if (_ios.dismissType) {
                this.MSSelect.popupDismissType = _ios.dismissType;
            }

        }

        // Show
        this.MSSelect.show();
    }

    private dataArray(items, displayValue, bindValue): NSArray<any> {
        const mutableArray: NSMutableArray<any> = NSMutableArray.array();

        // populate list to be display
        items.forEach((item, index) => {
            const model: AAMultiSelectModel = AAMultiSelectModel.new();

            if (typeof item === "string") {
                model.title = item; // assign item name if item is a string
            } else if (item instanceof Object) {
                model.title = item[displayValue]; // assign item name through if item is a object
            }

            // auto select items based on the predefined lists
            if (this._selectedItems) {
                let index;

                if (bindValue) {
                    index = this._selectedItems.findIndex(sItem => sItem === item[bindValue]);
                } else {
                    index = this._selectedItems.findIndex(sItem => JSON.stringify(sItem) === JSON.stringify(item));
                }

                if (index >= 0) {
                    model.isSelected = true;
                }
            }
            model.multiSelectId = index;
            mutableArray.addObject(model);
        });

        return mutableArray;
    }
}

const rootVC = function () {
    let appwindow = UIApplication.sharedApplication.keyWindow;
    return appwindow.rootViewController;
};


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