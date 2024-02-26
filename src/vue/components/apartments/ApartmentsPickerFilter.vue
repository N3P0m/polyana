<template>
  <div class="dt-house-picker-filters dt-house-picker-filters--apartments">
    <div>
      <BuildingFilter></BuildingFilter>
    </div>
    <div class="dt-house-picker-filters__slider">
      <h3 class="dt-house-picker-filters__subheading p3">Площадь (м2)</h3>
      <RangeSlider
          :max="limitSqMax"
          :min="limitSqMin"
          v-model:min-value="sliderMin"
          v-model:max-value="sliderMax"
      />
    </div>
    <div class="dt-house-picker-filters__active-pins">
      <ActivePins v-model="tagsValue"/>
    </div>
    <div class="dt-house-picker-filters__slider">
      <h3 class="dt-house-picker-filters__subheading p3">Площадь (м2)</h3>
      <RangeSlider
          :max="limitSqMax"
          :min="limitSqMin"
          v-model:min-value="sliderMin"
          v-model:max-value="sliderMax"
      />
    </div>
    <div class="dt-house-picker-filters__active-pins-numbers">
      <h3 class="dt-house-picker-filters__subheading p3">Количество этажей</h3>
      <ActivePinsNumbers :max-count="4" v-model="floorsValue"/>
    </div>
    <div class="dt-house-picker-filters__active-pins">
      <ActivePins v-model="tagsValue"/>
    </div>
  </div>
</template>
<script setup>
import RangeSlider from "@/vue/components/RangeSlider.vue";
import ActivePins from "@/vue/components/ActivePins.vue";
import ActivePinsNumbers from "@/vue/components/ActivePinsNumbers.vue";
import {ref, watch} from "vue";
import BuildingFilter from "@/vue/components/apartments/BuildingFilter.vue";


const emit = defineEmits(["update:minSq", "update:maxSq", "update:currentFloorValue", "update:tags"]);

const {minSq, maxSq, currentFloorValue, tags} = defineProps({
  limitSqMax: {
    type: Number
  },
  limitSqMin: {
    type: Number
  },
  minSq: {
    type: Number,
    default: 0
  },
  maxSq:{
    type: Number,
    default: 0
  },
  currentFloorValue: {
    type: Number || null,
    default: null
  },
  tags: {
    type: Array,
    default: () => []
  }
})

const sliderMin = ref(minSq);
const sliderMax = ref(maxSq);
const floorValue = ref(currentFloorValue);
const floorsValue = ref([1,2]);
const tagsValue = ref(tags)

watch(sliderMin, (newValue) => {
  emit("update:minSq", newValue)
})
watch(sliderMax, (newValue) => {
  emit("update:maxSq", newValue)
})
watch(floorValue, (newValue) => {
  emit("update:currentFloorValue", newValue)
})
watch(tagsValue, (newValue) => {
  emit("update:tags", newValue)
})


</script>
