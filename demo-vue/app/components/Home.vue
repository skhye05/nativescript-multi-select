<template>
  <Page class="page">
    <ActionBar class="action-bar">
      <Label class="action-bar-title" text="Home"></Label>
    </ActionBar>
  
    <GridLayout rows="* auto">
      <StackLayout row="0" class="p-20">
        <GridLayout v-for="(item, index) in selectedItems" :key="index" rows="auto">
          <Label :text="item" class="text-center p-10" textWrap="true" />
        </GridLayout>
      </StackLayout>
  
      <StackLayout row="1" class="p-10">
        <Button class="btn btn-primary" text="select" @tap="onSelectTapped"></Button>
      </StackLayout>
    </GridLayout>
  </Page>
</template>

<script>
  import {
    MultiSelect,
    AShowType
  } from "nativescript-multi-select";
  const MSelect = new MultiSelect();
  let predefinedItems = ["moi-a", "moi-b"];
  
  export default {
    data() {
      return {
        selectedItems: []
      }
    },
    methods: {
      onSelectTapped() {
        const that = this;
        const options = {
          title: "Please Select",
          selectedItems: predefinedItems,
          items: [{
              name: "A",
              value: "moi-a"
            },
            {
              name: "B",
              value: "moi-b"
            },
            {
              name: "C",
              value: "moi-c"
            },
            {
              name: "D",
              value: "moi-d"
            }
          ],
          bindValue: "value",
          displayLabel: "name",
          onConfirm: _selectedItems => {
            that.selectedItems = _selectedItems;
            predefinedItems = _selectedItems;
            console.log("SELECTED ITEMS => ", _selectedItems);
          },
          onItemSelected: selectedItem => {
            console.log("SELECTED ITEM => ", selectedItem);
          },
          onCancel: () => {
            console.log("CANCEL");
          },
          android: {
            titleSize: 25,
            cancelButtonTextColor: "#252323",
            confirmButtonTextColor: "#70798C"
          },
          ios: {
            cancelButtonBgColor: "#252323",
            confirmButtonBgColor: "#70798C",
            cancelButtonTextColor: "#ffffff",
            confirmButtonTextColor: "#ffffff",
            showType: AShowType.TypeBounceIn
          }
        };
  
        MSelect.show(options);
      }
    }
  };
</script>

<style scoped lang="scss">
  // Start custom common variables
  @import "../app-variables";
  // End custom common variables
  // Custom styles
  .fa {
    color: $accent-dark;
  }
  
  .info {
    font-size: 20;
  }
</style>
