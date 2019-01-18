import { Observable } from 'tns-core-modules/data/observable';
import { MultiSelect, AShowType } from 'nativescript-multi-select';
import { MSOption } from 'nativescript-multi-select';

export class HelloWorldModel extends Observable {
  public message: string;

  private _MSelect: MultiSelect;
  private _selectedItems: Array<any>;

  constructor() {
    super();
    this._MSelect = new MultiSelect();
    this._selectedItems = ["moi-a", "moi-b"];
  }

  public show(): void {
    const options: MSOption = {
      title: "Please Select",
      selectedItems: this._selectedItems,
      items: [
        { name: "A", value: "moi-a" },
        { name: "B", value: "moi-b" },
        { name: "C", value: "moi-c" },
        { name: "D", value: "moi-d" },
      ],
      bindValue: 'value',
      displayLabel: 'name',
      onConfirm: selectedItems => {
        this._selectedItems = selectedItems;
        console.log("SELECTED ITEMS => ", selectedItems);
      },
      onItemSelected: selectedItem => {
        console.log("SELECTED ITEM => ", selectedItem);
      },
      onCancel: () => {
        console.log('CANCEL');
      },
      android: {
        titleSize: 25,
        cancelButtonTextColor: "#252323",
        confirmButtonTextColor: "#70798C",
      },
      ios: {
        cancelButtonBgColor: "#252323",
        confirmButtonBgColor: "#70798C",
        cancelButtonTextColor: "#ffffff",
        confirmButtonTextColor: "#ffffff",
        showType: AShowType.TypeBounceIn
      }
    };

    this._MSelect.show();
  }
}
