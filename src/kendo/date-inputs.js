import Vue from 'vue'
import { Calendar,
    DateInput,
    DatePicker,
    DateRangePicker,
    DateTimePicker,
    MultiViewCalendar,
    TimePicker,
    DateinputsInstaller } from '@progress/kendo-dateinputs-vue-wrapper'

Vue.use(DateinputsInstaller)

new Vue({
    Calendar,
    DateInput,
    DatePicker,
    DateRangePicker,
    DateTimePicker,
    MultiViewCalendar,
    TimePicker
})