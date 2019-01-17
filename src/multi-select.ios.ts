import { MSOption } from "./multi-select.common";
import { Color } from "tns-core-modules/color/color";


export class MultiSelect {
    private MSSelect: AAMultiSelectViewController;

    constructor() {
        this.MSSelect = AAMultiSelectViewController.alloc().init();
    }

    public init(options: MSOption): void {

    }

    public show(options: MSOption): void {
        const self = rootVC();

        // assign title
        this.MSSelect.titleText = options.title;
        this.MSSelect.view.frame = CGRectMake(0, 0, CGRectGetWidth(self.view.frame) * .9, CGRectGetHeight(self.view.frame) * .2);


        // assign item text color
        if (options.itemColor) {
            this.MSSelect.itemTitleColor = new Color(options.itemColor).ios;
        }

        // assign 
        if (options.confirmButtonTextColor) {
            this.MSSelect.confirmButtonTitleColor = new Color(options.confirmButtonTextColor).ios;
        }

        // assign 
        if (options.confirmButtonText) {
            this.MSSelect.confirmButtonTitleText = options.confirmButtonText;
        }

        // assign 
        if (options.cancelButtonTextColor) {
            this.MSSelect.confirmButtonTitleColor = new Color(options.cancelButtonTextColor).ios;
        }

        // assign 
        if (options.cancelButtonText) {
            this.MSSelect.cancelButtonTitleText = options.cancelButtonText;
        }

        // assign items
        this.MSSelect.dataArray = this.dataArray(options.items, options.bindValue);

        // assign confirm callback
        this.MSSelect.confirmBlock = (p1: any) => {
            options.onConfirm(p1);
        };

        // assign onSelected callback
        if (options.onItemSelected) {
            this.MSSelect.selectedBlock = (p1: any) => {
                options.onItemSelected(p1);
            }
        }

        // assign onCancel callback
        if (options.onCancel) {
            this.MSSelect.cancelBlock = (p1: any) => {
                options.onCancel();
            }
        }

        // assign ios options
        if (options.ios) {
            const _ios = options.ios;

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

    private dataArray(items, bindValue): NSArray<any> {
        const mutableArray: NSMutableArray<any> = NSMutableArray.array();

        items.forEach((item, index) => {
            const model: AAMultiSelectModel = AAMultiSelectModel.new();

            if (typeof item === "string") {
                model.title = item;
            } else {
                model.title = item[bindValue];
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
