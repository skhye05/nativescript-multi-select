import { Observable } from 'tns-core-modules/data/observable';
import { MultiSelect, AShowType } from 'nativescript-multi-select';

export class HelloWorldModel extends Observable {
  public message: string;

  private _MSelect: MultiSelect;
  private _selectedItems: any;

  constructor() {
    super();

    this._MSelect = new MultiSelect();
    this._selectedItems = ["moi-a", "moi-b"];
  }

  public show(): void {
    this._MSelect.show({
      title: "PLease Select",
      selectedItems: this._selectedItems,
      cancelButtonTextColor: "Blue",
      confirmButtonTextColor: "Green",
      items: [
        { name: "A", value: "moi-a" },
        { name: "B", value: "moi-b" },
        { name: "C", value: "moi-c" },
        { name: "D", value: "moi-d" },
      ],
      bindValue: 'value',
      displayLabel: 'name',
      onConfirm: (selectedItems => {
        this._selectedItems = selectedItems;
        console.log(selectedItems);
      }),
      onCancel: () => {
        console.log('cancel');
      },
      android: {
        titleSize: 25
      },
      ios: {
        cancelButtonBgColor: "Red",
        confirmButtonBgColor: "#ffff00",
        showType: AShowType.TypeBounceIn
      }
    });
  }
}
