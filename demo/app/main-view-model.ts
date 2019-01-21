import { Observable } from 'tns-core-modules/data/observable';
import { Page } from 'tns-core-modules/ui/page/page';
import { Repeater } from 'tns-core-modules/ui/repeater';
import { StackLayout } from 'tns-core-modules/ui/layouts/stack-layout';
import { MultiSelect, AShowType } from 'nativescript-multi-select';
import { MSOption } from 'nativescript-multi-select';

export class HelloWorldModel extends Observable {
  private _MSelect: MultiSelect;
  private predefineItems: Array<any>;
  private repeater: Repeater;
  public selectedItems: Array<any>;

  constructor(page: Page) {
    super();

    this.repeater = new Repeater();
    this._MSelect = new MultiSelect();
    this.predefineItems = ["moi-a", "moi-b"];

    const stackLayoutContainer = page.getViewById<StackLayout>("stackLayoutId");
    const stackLayout = new StackLayout();

    this.repeater.itemsLayout = stackLayout;
    this.repeater.itemTemplate = `<Label text="{{ $value }}" class="text-center p-10" />`;
    this.repeater.items = this.selectedItems;

    stackLayoutContainer.addChild(this.repeater);
  }

  public onSelectTapped(): void {
    const options: MSOption = {
      title: "Please Select",
      selectedItems: this.predefineItems,
      items: [
        { name: "A", value: "moi-a" },
        { name: "B", value: "moi-b" },
        { name: "C", value: "moi-c" },
        { name: "D", value: "moi-d" },
      ],
      bindValue: 'value',
      displayLabel: 'name',
      onConfirm: selectedItems => {
        this.selectedItems = selectedItems;
        this.repeater.items = this.selectedItems;
        this.repeater.refresh();
        this.predefineItems = selectedItems;
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

    this._MSelect.show(options);
  }
}
