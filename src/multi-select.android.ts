import { MSOption } from "./multi-select.common";
import { Color } from "tns-core-modules/color/color";
import * as application from "tns-core-modules/application";

export class MultiSelect {
    private MSSelect: com.abdeveloper.library.MultiSelectDialog;
    private _selectedItems: Array<any>;
    private _selectedIds: java.util.ArrayList<any>;
    private _items: Array<any>;

    constructor() {
        this._selectedItems = new Array<any>();
        this._items = new Array<any>();
        this._selectedIds = new java.util.ArrayList<any>();
    }

    public init(): void {

    }

    public show(options: MSOption): void {

        const lists = this.lists([...options.items], options.displayLabel, options.bindValue);
        console.log("SIZE =>>>", lists.size());
        const MSSelect = new com.abdeveloper.library.MultiSelectDialog()

            .title(options.title) // setting title for dialog

            .titleSize(options.android.titleSize ? options.android.titleSize : 25)

            .positiveText(options.confirmButtonText ? options.confirmButtonText : "Done")

            .positiveTextColor(options.confirmButtonTextColor ? new Color(options.confirmButtonTextColor).android : new Color("red").android)

            .negativeText(options.cancelButtonText ? options.cancelButtonText : "Cancel")

            .positiveTextColor(options.cancelButtonTextColor ? new Color(options.cancelButtonTextColor).android : new Color("red").android)

            .setMinSelectionLimit(0)

            .setMaxSelectionLimit(lists.size())

            .preSelectIDsList(this._selectedIds) // List of ids that you need to be selected

            .multiSelectList(lists) // the multi select model list with ids and name

            .onSubmit(new com.abdeveloper.library.MultiSelectDialog.SubmitCallbackListener({
                onSelected: (selectedIds: java.util.ArrayList<java.lang.Integer>, selectedNames: java.util.ArrayList<string>, dataString: string) => {

                },
                onCancel: () => {

                }
            }));

        (MSSelect as any)
            .show(
                application.android.foregroundActivity.getSupportFragmentManager(),
                'multiSelectDialog'
            );
    }

    private lists(items, displayValue, bindValue): java.util.ArrayList<com.abdeveloper.library.MultiSelectModel> {
        console.log("SIZE =>>>");
        const lists: java.util.ArrayList<com.abdeveloper.library.MultiSelectModel> = new java.util.ArrayList<any>();
        console.log("SIZE$$ =>>>");
        items.forEach((item, index) => {

            let title;

            if (typeof item === "string") {
                title = item;
            } else if (item instanceof Object) {
                title = item[displayValue];
            }

           // const model: com.abdeveloper.library.MultiSelectModel = new com.abdeveloper.library.MultiSelectModel(index, title);

            lists.add(item);
           

            if (this._selectedItems) {
                let index;
               
                if (bindValue) {
                    index = this._selectedItems.findIndex(sItem => sItem === item[bindValue]);
                } else {
                    index = this._selectedItems.findIndex(sItem => JSON.stringify(sItem) === JSON.stringify(item));
                }
             

                if (index >= 0) {
                    this._selectedIds.add(index);
                }
            }
            console.log("SIZE$$ =>>>", lists.size());


        });


        return lists;
    }

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