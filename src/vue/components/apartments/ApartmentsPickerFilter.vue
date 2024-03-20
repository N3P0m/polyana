<template>
  <div class="dt-house-picker-filters dt-house-picker-filters--apartments">
    <div class="dt-house-picker-filters__select">
      <div class="dt-house-picker-filters__subheading p3">&nbsp;</div>
      <SelectUnion v-model:apartmentInfo="apartmentInfo" />
    </div>
    <div class="dt-house-picker-filters__slider">
      <h3 class="dt-house-picker-filters__subheading p3">Площадь (м2)</h3>
      <RangeSlider
          :max="limitSqMax"
          :min="limitSqMin"
          v-model:min-value="sliderMinSq"
          v-model:max-value="sliderMaxSq"
      />
    </div>
    <div class="dt-house-picker-filters__slider">
      <h3 class="dt-house-picker-filters__subheading p3">Стоимость (млн. ₽)</h3>
      <RangeSlider
          :max="limitCostMax"
          :min="limitCostMin"
          v-model:min-value="sliderMinCost"
          v-model:max-value="sliderMaxCost"
      />
    </div>
    <div class="dt-house-picker-filters__active-pins-numbers">
      <h3 class="dt-house-picker-filters__subheading p3">Этаж</h3>
      <ActivePinsNumbers :max-count="limitFloor" v-model="floorsValue"/>
    </div>
    <div class="dt-house-picker-filters__active-pins-numbers">
      <h3 class="dt-house-picker-filters__subheading p3">Комнат</h3>
      <ActivePinsNumbers :max-count="limitRooms" v-model="roomsValue"/>
    </div>
    <div class="dt-house-picker-filters__building-filter">
      <BuildingFilter v-model:apartmentInfo="apartmentInfo"></BuildingFilter>
    </div>
    <div class="dt-house-picker-filters__active-pins">
      <ActivePinsWithIcon v-model="tagsValue"/>
    </div>
  </div>
</template>
<script setup>

import RangeSlider from "@/vue/components/RangeSlider.vue";
import ActivePinsNumbers from "@/vue/components/ActivePinsNumbers.vue";
import {defineComponent, ref, watch} from "vue";
import BuildingFilter from "@/vue/components/apartments/BuildingFilter.vue";
import ActivePinsWithIcon from "@/vue/components/apartments/ActivePinsWithIcon.vue";
import SelectUnion from "@/vue/components/ui/SelectUnion.vue";

// defineComponent({VueMultiselect})


const emit = defineEmits([
  "update:minSq",
  "update:maxSq",
  "update:minCost",
  "update:maxCost",
  "update:apartmentInfo",
  "update:currentFloorValue",
  "update:tags",
  "update:floorsValue",
  "update:roomsValue"
]);

const {minSq, maxSq, minCost, maxCost, currentFloorValue, tags} = defineProps({
  limitSqMax: {
    type: Number
  },
  limitSqMin: {
    type: Number
  },
  limitCostMax: {
    type: Number
  },
  limitCostMin: {
    type: Number
  },
  limitFloor: {
    type: Number
  },
  limitRooms: {
    type: Number
  },
  minSq: {
    type: Number,
    default: 0
  },
  maxSq: {
    type: Number,
    default: 0
  },
  minCost: {
    type: Number,
    default: 0
  },
  maxCost: {
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

const sliderMinSq = ref(minSq);
const sliderMaxSq = ref(maxSq);
const sliderMinCost = ref(minCost);
const sliderMaxCost = ref(maxCost);
const floorValue = ref(currentFloorValue);
const floorsValue = ref([]);
const roomsValue = ref([]);
const tagsValue = ref(tags)
const apartmentInfo = ref({
  activeHouse: null,
  activeHousePart: null
})



watch(sliderMinSq, (newValue) => {
  emit("update:minSq", newValue)
})
watch(sliderMaxSq, (newValue) => {
  emit("update:maxSq", newValue)
})
watch(sliderMinCost, (newValue) => {
  emit("update:minCost", newValue)
})
watch(sliderMaxCost, (newValue) => {
  emit("update:maxCost", newValue)
})
watch(floorValue, (newValue) => {
  emit("update:currentFloorValue", newValue)
})
watch(tagsValue, (newValue) => {
  emit("update:tags", newValue)
})
watch(apartmentInfo, (newValue) => {
  emit("update:apartmentInfo", newValue)
}, {deep: true})
watch(floorsValue, (newValue) => {
  emit("update:floorsValue", newValue)
}, {deep: true})
watch(roomsValue, (newValue) => {
  emit("update:roomsValue", newValue)
}, {deep: true})



</script>
