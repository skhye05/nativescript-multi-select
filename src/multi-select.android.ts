import { MSOption } from "./multi-select.common";
import { Color } from "tns-core-modules/color/color";
import * as application from "tns-core-modules/application";

declare var com;

export class MultiSelect {
    private _selectedItems: Array<any>; // selected items list
    private _selectedIds: java.util.ArrayList<any>; // predefined list

    constructor() {
        this._selectedItems = new Array<any>();
    }

    public show(options: MSOption): void {

        this._selectedIds = new java.util.ArrayList<any>();

        // assign selectedItems
        if (options.selectedItems && options.selectedItems instanceof Array) {
            this._selectedItems = options.selectedItems.filter(() => true);
        }

        // assign list
        const lists = this.lists(options.items.filter(() => true), options.displayLabel, options.bindValue);

        const MSSelect = new com.abdeveloper.library.MultiSelectDialog()

            // assign title
            .title(options.title)

            // assign title size
            .titleSize(options.android ? options.android.titleSize ? options.android.titleSize : 25 : 25)

            // assign confirm button text
            .positiveText(options.confirmButtonText ? options.confirmButtonText : "confirm")

            // assign confirm button text color
            .positiveTextColor(options.android ? options.android.confirmButtonTextColor ? new Color(options.android.confirmButtonTextColor).android : null : null)

            // assign cancel button text
            .negativeText(options.cancelButtonText ? options.cancelButtonText : "cancel")

            // assign cancel button text color
            .negativeTextColor(options.android ? options.android.cancelButtonTextColor ? new Color(options.android.cancelButtonTextColor).android : null : null)

            .setMinSelectionLimit(0)

            .setMaxSelectionLimit(lists.size())

            // assign predefined selected items
            .preSelectIDsList(this._selectedIds)

            // assign items
            .multiSelectList(lists)

            .onSubmit(new com.abdeveloper.library.MultiSelectDialog.SubmitCallbackListener({
                // on confirm button tapped
                onSelected: (selectedIds: java.util.ArrayList<java.lang.Integer>, selectedNames: java.util.ArrayList<string>, dataString: string) => {
                    const items: Array<any> = new Array();
                    for (let i = 0; i < selectedIds.size(); i++) {
                        let id = selectedIds.get(i);
                        items.push(options.bindValue ? options.items[id][options.bindValue] : options.items[id]);
                    }
                    options.onConfirm(items);
                },

                // on cancel button tapped
                onCancel: () => {
                    options.onCancel();
                },

                // on item selected
                onItemSelected: (selectedId: any, name: any) => {
                    const item = options.bindValue ? options.items[selectedId][options.bindValue] : options.items[selectedId];
                    options.onItemSelected(item);
                }
            }));

        // Show
        (MSSelect as any)
            .show(
                application.android.foregroundActivity.getSupportFragmentManager(),
                'multiSelectDialog'
            );
    }

    private lists(items, displayValue, bindValue): java.util.ArrayList<com.abdeveloper.library.MultiSelectModel> {
        const lists: java.util.ArrayList<com.abdeveloper.library.MultiSelectModel> = new java.util.ArrayList<any>();

        // populate list to be display
        items.forEach((item, index) => {
            let title;

            // if items is an array of string
            if (typeof item === "string") {
                title = item;
            } else if (item instanceof Object) {
                title = item[displayValue];
            }

            const id: java.lang.Integer = new java.lang.Integer(index);
            const model: any = new com.abdeveloper.library.MultiSelectModel(id, title);

            lists.add(model);

            // auto select items based on the predefined lists
            if (this._selectedItems) {
                let _index;

                if (bindValue) {
                    _index = this._selectedItems.findIndex(sItem => sItem === item[bindValue]);
                } else {
                    _index = this._selectedItems.findIndex(sItem => JSON.stringify(sItem) === JSON.stringify(item));
                }

                if (_index >= 0) {
                    this._selectedIds.add(new java.lang.Integer(index));
                }
            }
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
