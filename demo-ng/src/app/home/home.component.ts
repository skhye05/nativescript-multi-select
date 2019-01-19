import { Component, OnInit, NgZone } from "@angular/core";
import { MultiSelect, AShowType } from 'nativescript-multi-select';
import { MSOption } from 'nativescript-multi-select';

@Component({
  selector: "Home",
  moduleId: module.id,
  templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {

  private _MSelect: MultiSelect;
  private predefinedItems: Array<any>;
  public selectedItems: Array<any>;

  constructor(private zone: NgZone) {
    // Use the component constructor to inject providers.
    this._MSelect = new MultiSelect();
    this.predefinedItems = ["moi-a", "moi-b"];
  }

  ngOnInit(): void {
    // Init your component properties here.
  }


  public onSelectTapped(): void {
    const options: MSOption = {
      title: "Please Select",
      selectedItems: this.predefinedItems,
      items: [
        { name: "A", value: "moi-a" },
        { name: "B", value: "moi-b" },
        { name: "C", value: "moi-c" },
        { name: "D", value: "moi-d" },
      ],
      bindValue: 'value',
      displayLabel: 'name',
      onConfirm: selectedItems => {
        this.zone.run(() => {
          this.selectedItems = selectedItems;
          this.predefinedItems = selectedItems;
          console.log("SELECTED ITEMS => ", selectedItems);
        })
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
