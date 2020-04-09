import Vue from 'vue'
import {
    AutoComplete,
    ComboBox,
    DropDownList,
    MultiSelect,
    MultiColumnComboBox,
    MultiColumnComboBoxColumn,
    DropdownsInstaller } from '@progress/kendo-dropdowns-vue-wrapper'

Vue.use(DropdownsInstaller)

new Vue({
    AutoComplete,
    ComboBox,
    DropDownList,
    MultiSelect,
    MultiColumnComboBox,
    MultiColumnComboBoxColumn
})