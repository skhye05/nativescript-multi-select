import { MSOption } from "./multi-select.common";
import { Color } from "tns-core-modules/color/color";

export class MultiSelect {
    private MSSelect: AAMultiSelectViewController;
    private _selectedItems: Array<any>;

    constructor() {
        this._selectedItems = new Array<any>();
    }

    public init(options: MSOption): void {

    }

    public show(options: MSOption): void {
        const self = rootVC();
        this.MSSelect = AAMultiSelectViewController.alloc().init();

        // assign title
        this.MSSelect.titleText = options.title;
        this.MSSelect.view.frame = CGRectMake(0, 0, CGRectGetWidth(self.view.frame) * .9, CGRectGetHeight(self.view.frame) * .9);

        // assign confirm text color
        if (options.confirmButtonTextColor) {
            this.MSSelect.confirmButtonTitleColor = new Color(options.confirmButtonTextColor).ios;
        }

        // assign confirm button text
        if (options.confirmButtonText) {
            this.MSSelect.confirmButtonTitleText = options.confirmButtonText;
        }

        // assign cancel button text color
        if (options.cancelButtonTextColor) {
            this.MSSelect.confirmButtonTitleColor = new Color(options.cancelButtonTextColor).ios;
        }

        // assign cancel button text
        if (options.cancelButtonText) {
            this.MSSelect.cancelButtonTitleText = options.cancelButtonText;
        }

        // assign selectedItems
        if (options.selectedItems && options.selectedItems instanceof Array) {
            this._selectedItems = [...options.selectedItems];
        }

        // assign items
        this.MSSelect.dataArray = this.dataArray([...options.items], options.displayLabel, options.bindValue);

        // assign confirm callback
        this.MSSelect.confirmBlock = (selectedItems: NSArray<AAMultiSelectModel>) => {
            const items: Array<any> = new Array();
            for (let i = 0; i < selectedItems.count; i++) {
                let item = selectedItems.objectAtIndex(i);
                items.push(options.bindValue ? options.items[item.multiSelectId][options.bindValue] : options.items[item.multiSelectId]);
            }
            options.onConfirm(items);
        };

        // assign onSelected callback
        if (options.onItemSelected) {
            this.MSSelect.selectedBlock = (p1: any) => {
                options.onItemSelected(p1);
            };
        }

        // assign onCancel callback
        if (options.onCancel) {
            this.MSSelect.cancelBlock = (p1: any) => {
                const mutableArray: NSMutableArray<any> = NSMutableArray.array();

                options.items.forEach((item, index) => {
                    const model: AAMultiSelectModel = AAMultiSelectModel.new();
                    model.title = item;
                    model.isSelected = false;
                    model.multiSelectId = index;
                    mutableArray.addObject(model);
                });

                this.MSSelect.dataArray = mutableArray;
                options.onCancel();
            };
        }

        // assign ios options
        if (options.ios) {
            const _ios = options.ios;

            if (_ios.itemColor) {
                this.MSSelect.itemTitleColor = new Color(_ios.itemColor).ios;
            }

            if (_ios.cancelButtonBgColor) {
                this.MSSelect.cancelButtonBackgroudColor = new Color(_ios.cancelButtonBgColor).ios;
            }

            if (_ios.confirmButtonBgColor) {
                this.MSSelect.confirmButtonBackgroudColor = new Color(_ios.confirmButtonBgColor).ios;
            }

            if (_ios.showType) {
                this.MSSelect.popupShowType = _ios.showType;
            }

            if (_ios.dismissType) {
                this.MSSelect.popupDismissType = _ios.dismissType;
            }
        }

        // Show
        this.MSSelect.show();
    }

    private dataArray(items, displayValue, bindValue): NSArray<any> {
        const mutableArray: NSMutableArray<any> = NSMutableArray.array();

        items.forEach((item, index) => {
            const model: AAMultiSelectModel = AAMultiSelectModel.new();

            if (typeof item === "string") {
                model.title = item;
            } else if (item instanceof Object) {
                model.title = item[displayValue];
            }

            if (this._selectedItems) {
                let index;

                if (bindValue) {
                    index = this._selectedItems.findIndex(sItem => sItem === item[bindValue]);
                } else {
                    index = this._selectedItems.findIndex(sItem => JSON.stringify(sItem) === JSON.stringify(item));
                }

                console.log(index);
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