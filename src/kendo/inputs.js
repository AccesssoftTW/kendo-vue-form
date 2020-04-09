import Vue from 'vue'
import { MaskedTextBox,
    NumericTextBox,
    ColorPicker,
    Slider,
    RangeSlider,
    Switch,
    InputsInstaller } from '@progress/kendo-inputs-vue-wrapper'

Vue.use(InputsInstaller);

new Vue({
    MaskedTextBox,
    NumericTextBox,
    ColorPicker,
    Slider,
    RangeSlider,
    Switch
})