<template>
  <div>
    <h2>Inputs - 輸入框</h2>
    <div style="margin-top: 10%">
      <div style="margin-bottom: 5%">
        <p>選擇顏色</p>
        <kendo-colorpicker v-model="color"></kendo-colorpicker>
        {{ color }}
      </div>
      <div style="margin-bottom: 5%">
        <p>電話輸入</p>
        <kendo-maskedtextbox
          v-model="phoneNumber"
          mask="(999) 000-0000"
        ></kendo-maskedtextbox>
      </div>
      <div style="margin-bottom: 5%">
        <p>開關</p>
        <kendo-switch :checked="checked"></kendo-switch>
      </div>

      <div style="margin-bottom: 5%">
        <p>數字調整</p>
        <kendo-numerictextbox
          v-model.number="numeric"
          :min="10"
          :max="40"
        ></kendo-numerictextbox>
      </div>
      <div style="margin-bottom: 5%">
        <p>滑動調整</p>
        <kendo-slider v-model.number="numeric" :min="10" :max="40">
        </kendo-slider>
      </div>
      <div style="margin-bottom: 5%">
        <p>間距滑動調整</p>
        <kendo-rangeslider
          :selection-start="start"
          :selection-end="end"
          :min="0"
          :max="100"
        >
        </kendo-rangeslider>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "vueapp",
  data() {
    return {
      color: "#5ce501",
      name: "",
      phoneNumber: "",
      numeric: 17,
      start: 25,
      end: 75,
      checked: false,
    };
  },
};
</script>
