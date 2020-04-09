<template>
  <div class="row" style="width: 95%; margin: 2%">
    <div class="col-md-4">
      <Inputs></Inputs>
      <Upload></Upload>
    </div>
    <div class="col-md-4">
      <Dropdowns></Dropdowns>
    </div>
    <div class="col-md-4">
      <DateInputs></DateInputs>
    </div>
  </div>
</template>

<script>
import Inputs from "../components/Inputs";
import DateInputs from "../components/DateInputs";
import Dropdowns from "../components/Dropdowns";
import Upload from "../components/Upload";

export default {
  name: "vueapp",
  data() {
    return {};
  },
  components: {
    Inputs,
    DateInputs,
    Dropdowns,
    Upload,
  },
};
</script>
