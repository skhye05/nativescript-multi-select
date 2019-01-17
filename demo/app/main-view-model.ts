import { Observable } from 'tns-core-modules/data/observable';
import { MultiSelect } from 'nativescript-multi-select';

export class HelloWorldModel extends Observable {
  public message: string;
  private multiSelect: MultiSelect;

  constructor() {
    super();

    this.multiSelect = new MultiSelect();
    this.message = this.multiSelect.message;
  }
}
