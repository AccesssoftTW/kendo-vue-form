<template>
  <div>
    <h2>Date Inputs - 日期輸入</h2>
    <div style="margin-top: 10%">
      <div style="margin-bottom: 5%">
        <p>日期選擇</p>
        <kendo-datepicker v-model="date"></kendo-datepicker>
      </div>
      <div style="margin-bottom: 5%">
        <p>時間選擇</p>
        <kendo-timepicker v-model="date"></kendo-timepicker>
      </div>
      <div style="margin-bottom: 5%">
        <p>日期時間選擇</p>
        <kendo-datetimepicker v-model="date"></kendo-datetimepicker>
      </div>
      <div style="margin-bottom: 5%">
        <p>日期輸入</p>
        <kendo-dateinput v-model="date"></kendo-dateinput>
      </div>
      <div style="margin-bottom: 5%">
        <p>起訖日期選擇</p>
        <kendo-daterangepicker
          style="display: inline;"
          v-model="date"
        ></kendo-daterangepicker>
      </div>
      <div style="margin-bottom: 5%">
        <p>日曆選擇</p>
        <kendo-calendar
          style="margin-right:10%;"
          :value="new Date()"
        ></kendo-calendar>
      </div>
      <div style="margin-bottom: 5%">
        <p>多視圖日曆選擇</p>
        <kendo-multiviewcalendar :value="new Date()"></kendo-multiviewcalendar>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "vueapp",
  data() {
    return {
      date: null,
    };
  },
};
</script>
