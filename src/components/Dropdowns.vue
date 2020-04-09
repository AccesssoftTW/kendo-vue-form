<template>
  <div>
    <h2>Dropdowns - 下拉選單</h2>
    <div style="margin-top: 10%">
      <div style="margin-bottom: 5%">
        <p>自動搜尋選單</p>
        <kendo-autocomplete
          :data-source="dataSourceArray"
          :placeholder="'Your favorite sport'"
          :separator="', '"
          :filter="'contains'"
        >
        </kendo-autocomplete>
      </div>
      <div style="margin-bottom: 5%">
        <p>單一項目選單</p>
        <kendo-combobox
          :data-source="dataSourceArray"
          :filter="'contains'"
          :index="0"
        >
        </kendo-combobox>
      </div>
      <div style="margin-bottom: 5%">
        <p>下拉列表</p>
        <kendo-dropdownlist :data-source="dataSourceArray" :index="0">
        </kendo-dropdownlist>
      </div>
      <div style="margin-bottom: 5%">
        <p>多列組合框</p>
        <kendo-multicolumncombobox
          :data-source="multiColumnArray"
          :filter="'contains'"
          :filter-fields="['name']"
          :data-text-field="'name'"
          :data-value-field="'name'"
          :columns="columnsDefinitions"
        >
        </kendo-multicolumncombobox>
      </div>
      <div style="margin-bottom: 5%">
        <p>多選擇單</p>
        <kendo-multiselect
          style="width: 80%"
          :data-source="dataSourceArray"
          :filter="'contains'"
        >
        </kendo-multiselect>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      dataSourceArray: [
        "Football",
        "Tennis",
        "Basketball",
        "Baseball",
        "Cricket",
        "Field Hockey",
        "Volleyball",
      ],
      multiColumnArray: [
        {
          name: "Andrew Fuller",
          company: "Progress",
        },
        {
          name: "Nancy Davolio",
          company: "Progress",
        },
        {
          name: "Sirma Franks",
          company: "Progress",
        },
        {
          name: "John Waltham",
          company: "Telerik",
        },
        {
          name: "Fritz Dong",
          company: "Progress",
        },
      ],
      columnsDefinitions: [
        {
          field: "name",
        },
        {
          field: "company",
        },
      ],
    };
  },
};
</script>
