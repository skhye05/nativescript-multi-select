import { Observable } from 'tns-core-modules/data/observable';
import { MultiSelect } from 'nativescript-multi-select';

export class HelloWorldModel extends Observable {
  public message: string;

  private _MSelect: MultiSelect;

  constructor() {
    super();

    this._MSelect = new MultiSelect();

    this._MSelect.show({
      title: "PLease Select",
      items: ['A', 'B', 'C', 'D'],
      bindValue: null,
      onConfirm: (selectedItems => {

      }),
      onCancel: () => {
        console.log('cancel');
      },
      ios: {
        cancelButtonBgColor: "Red",
        confirmButtonBgColor: "#ffff000"
      }
    })
  }
}
