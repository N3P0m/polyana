<template>
  <div class="dt-house-picker-filters">
    <div class="dt-house-picker-filters__slider">
      <h3 class="dt-house-picker-filters__subheading p3">Площадь дома&nbsp;(м2)</h3>
      <RangeSlider
          :max="limitSq"
          v-model:min-value="sliderMin"
          v-model:max-value="sliderMax"
      />
    </div>
    <div class="dt-house-picker-filters__active-pins-numbers">
      <h3 class="dt-house-picker-filters__subheading p3">Количество этажей</h3>
      <ActivePinsNumbers :max-count="2"/>
    </div>
    <div class="dt-house-picker-filters__active-pins">
      <ActivePins/>
    </div>
  </div>
</template>
<script setup>
import RangeSlider from "@/vue/components/RangeSlider.vue";
import ActivePins from "@/vue/components/ActivePins.vue";
import ActivePinsNumbers from "@/vue/components/ActivePinsNumbers.vue";
import {ref, watch} from "vue";


const emit = defineEmits(["update:minSq", "update:maxSq"]);

const {minSq, maxSq} = defineProps({
  limitSq: {
    type: Number
  },
  minSq: {
    type: Number,
    default: 0
  },
  maxSq:{
    type: Number,
    default: 0
  }
})

const sliderMin = ref(minSq);
const sliderMax = ref(maxSq);

watch(sliderMin, (newValue) => {
  emit("update:minSq", newValue)
})
watch(sliderMax, (newValue) => {
  emit("update:maxSq", newValue)
})


</script>