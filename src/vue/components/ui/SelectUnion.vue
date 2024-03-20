<template>
  <div class="dt-house-picker-filters__selects select-union">
    <VueMultiselect class="select-union--left" v-model="selectedValues.val1"
                    :options="options1"
                    :show-labels="false"
                    label="label"
                    placeholder="Дом"
    ></VueMultiselect>
    <VueMultiselect class="select-union--right" v-model="selectedValues.val2"
                    :options="currentOptions"
                    :show-labels="false"
                    placeholder="Секция"
                    label="label"
                    :disabled="!currentOptions.length"
    ></VueMultiselect>
  </div>
</template>

<script setup>

import VueMultiselect from "vue-multiselect";
import 'vue-multiselect/dist/vue-multiselect.css';
import {ref, computed, watch, onMounted, nextTick, reactive} from "vue";

const emit = defineEmits(['update:apartmentInfo'])
const props = defineProps({
  apartmentInfo: {
    type: Object,
    default: () => {
      return {
        activeHouse: null,
        activeHousePart: null
      }
    }
  }
})

const selectedValues = ref({
  val1: {label: "Дом", value: null},
  val2: {label: "Секция", value: null},
})
const selectValue = ref({label: "Дом", value: null})
const selectValue2 = ref({label: "Секция", value: null})
const options1 = [{label: "Все", value: null}, {label: 'Корпус 1', value: 1}, {label: 'Корпус 2', value: 2}, {label: 'Корпус 3', value: 3}]
const options2 = [
  [{label: "Все", value: null}, {label: 'Секция 1', value: 1}, {label: 'Секция 2', value: 2}, {label: 'Секция 3', value: 3},],
  [{label: "Все", value: null}, {label: 'Секция 1', value: 1}, {label: 'Секция 2', value: 2}, {label: 'Секция 3', value: 3}],
  [{label: "Все", value: null}, {label: 'Секция 1', value: 1}, {label: 'Секция 2', value: 2}, {label: 'Секция 3', value: 3}, {label: 'Секция 4', value: 4}, {label: 'Секция 5', value: 5}, {label: 'Секция 6', value: 6}, {label: 'Секция 7', value: 7}]
]

// const apartmentInfoUnion = ref(props.apartmentInfo)
const currentOptions = computed(() => {
  return typeof selectedValues.value.val1.value === 'number' ? options2[selectedValues.value.val1.value - 1] : [{label: "Все", value: null}]
})


watch(() => props.apartmentInfo.activeHouse, (newValue) => {
  selectedValues.value.val1 = options1.find((option) => option.value === props.apartmentInfo.activeHouse)
})


watch(() => props.apartmentInfo.activeHousePart, (newValue) => {
  selectedValues.value.val2 = currentOptions.value.find((option) => option.value === props.apartmentInfo.activeHousePart)

})

watch(() => selectedValues.value, () => {
  emit('update:apartmentInfo', apartmentInfoUnion())
}, {deep: true})


watch(() => selectedValues.value.val1.value, (newVal1) => {
  if (!newVal1) {
    selectedValues.value.val2 = currentOptions.value[0]
  }
})

function apartmentInfoUnion() {
  return {
    activeHouse: selectedValues.value.val1.value,
    activeHousePart:  selectedValues.value.val2.value,
  }
}






// onMounted(async () => {
//   await nextTick()
//   console.log(apartmentInfo)
// })
//   console.log(apartmentInfo)


</script>
