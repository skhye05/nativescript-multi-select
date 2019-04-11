declare namespace com {
 export namespace abdeveloper {
  export namespace library {
   export class BuildConfig {
    public static class: java.lang.Class<com.abdeveloper.library.BuildConfig>;
    public static DEBUG: boolean;
    public static APPLICATION_ID: string;
    public static BUILD_TYPE: string;
    public static FLAVOR: string;
    public static VERSION_CODE: number;
    public static VERSION_NAME: string;
    public constructor();
   }
  }
 }
}

declare namespace com {
 export namespace abdeveloper {
  export namespace library {
   export class MultiSelectDialog {
    public static class: java.lang.Class<com.abdeveloper.library.MultiSelectDialog>;
    public static selectedIdsForCallback: java.util.ArrayList<java.lang.Integer>;
    public mainListOfAdapter: java.util.ArrayList<com.abdeveloper.library.MultiSelectModel>;
    public positiveText(param0: string): com.abdeveloper.library.MultiSelectDialog;
    public positiveTextColor(param0: number): com.abdeveloper.library.MultiSelectDialog;
    public setMaxSelectionLimit(param0: number): com.abdeveloper.library.MultiSelectDialog;
    public setMinSelectionLimit(param0: number): com.abdeveloper.library.MultiSelectDialog;
    public onSubmit(param0: com.abdeveloper.library.MultiSelectDialog.SubmitCallbackListener): com.abdeveloper.library.MultiSelectDialog;
    public onQueryTextChange(param0: string): boolean;
    public negativeTextColor(param0: number): com.abdeveloper.library.MultiSelectDialog;
    public setMaxSelectionMessage(param0: string): com.abdeveloper.library.MultiSelectDialog;
    public onQueryTextSubmit(param0: string): boolean;
    public onCreateDialog(param0: globalAndroid.os.Bundle): globalAndroid.app.Dialog;
    public constructor();
    public onClick(param0: globalAndroid.view.View): void;
    public titleSize(param0: number): com.abdeveloper.library.MultiSelectDialog;
    public preSelectIDsList(param0: java.util.ArrayList<java.lang.Integer>): com.abdeveloper.library.MultiSelectDialog;
    public title(param0: string): com.abdeveloper.library.MultiSelectDialog;
    public multiSelectList(param0: java.util.ArrayList<com.abdeveloper.library.MultiSelectModel>): com.abdeveloper.library.MultiSelectDialog;
    public negativeText(param0: string): com.abdeveloper.library.MultiSelectDialog;
    public setMinSelectionMessage(param0: string): com.abdeveloper.library.MultiSelectDialog;
   }
   export namespace MultiSelectDialog {
    export class SubmitCallbackListener {
     public static class: java.lang.Class<com.abdeveloper.library.MultiSelectDialog.SubmitCallbackListener>;
     /**
      * Constructs a new instance of the com.abdeveloper.library.MultiSelectDialog$SubmitCallbackListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
      */
     public constructor(implementation: {
      onSelected(param0: java.util.ArrayList<java.lang.Integer>, param1: java.util.ArrayList<string>, param2: string): void;
      onCancel(): void;
      onItemSelected(param0: java.lang.Integer, param1: string): void;
     });
     public constructor();
     public onSelected(param0: java.util.ArrayList<java.lang.Integer>, param1: java.util.ArrayList<string>, param2: string): void;
     public onCancel(): void;
     public onItemSelected(param0: java.lang.Integer, param1: string): void;
    }
   }
  }
 }
}

declare namespace com {
 export namespace abdeveloper {
  export namespace library {
   export class MultiSelectModel {
    public static class: java.lang.Class<com.abdeveloper.library.MultiSelectModel>;
    public setName(param0: string): void;
    public setId(param0: java.lang.Integer): void;
    public getId(): number;
    public getName(): string;
    public constructor(param0: java.lang.Integer, param1: string);
   }
  }
 }
}

declare namespace com {
 export namespace abdeveloper {
  export namespace library {
   export class MutliSelectAdapter extends globalAndroid.support.v7.widget.RecyclerView.Adapter<com.abdeveloper.library.MutliSelectAdapter.MultiSelectDialogViewHolder> {
    public static class: java.lang.Class<com.abdeveloper.library.MutliSelectAdapter>;
    public onCreateViewHolder(param0: globalAndroid.view.ViewGroup, param1: number): com.abdeveloper.library.MutliSelectAdapter.MultiSelectDialogViewHolder;
    public onBindViewHolder(param0: com.abdeveloper.library.MutliSelectAdapter.MultiSelectDialogViewHolder, param1: number): void;
    public getItemCount(): number;
   }
   export namespace MutliSelectAdapter {
    export class MultiSelectDialogViewHolder {
     public static class: java.lang.Class<com.abdeveloper.library.MutliSelectAdapter.MultiSelectDialogViewHolder>;
    }
   }
  }
 }
}

declare namespace com {
 export namespace abdeveloper {
  export namespace library {
   export class RecyclerViewEmptySupport {
    public static class: java.lang.Class<com.abdeveloper.library.RecyclerViewEmptySupport>;
    public setEmptyView(param0: globalAndroid.view.View): void;
    public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
    public constructor(param0: globalAndroid.content.Context);
    public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
    public setAdapter(param0: globalAndroid.support.v7.widget.RecyclerView.Adapter<any>): void;
   }
  }
 }
}
