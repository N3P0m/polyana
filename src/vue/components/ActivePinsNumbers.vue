<template>
  <div class="active-pins">
    <template v-for="(count, index) in maxCount" :key="index">
      <button class="btn-pin" @click="setActiveBtn(count)" :class="{ 'btn-pin--active': activePin === count || (Array.isArray(activePin) && activePin.includes(count)) }">
        {{count}}
      </button>
    </template>
  </div>

</template>

<script setup>


import {computed, ref} from "vue";

const emit = defineEmits(['update:modelValue']);

const {modelValue} = defineProps({
  maxCount: {
    type: Number,
    default: 10
  },
  modelValue: {
    type: [Number, Array, null],
    default: null
  }
})


const activePin = ref(modelValue)

function getActiveClass (count) {
  if (typeof modelValue === "number") {
    return activePin === count ? 'btn-pin--active' : ''
  }
  if (Array.isArray(modelValue)) {
    return  activePin.value.includes(count) ? 'btn-pin--active' : ''
  }
}

function setActiveBtn(count) {
  if (typeof modelValue === "number") {
    activePin.value = activePin.value === count ? null : count
  }
  if (Array.isArray(modelValue)) {
    activePin.value.includes(count) ? activePin.value.filter(count) : activePin.value.push(count)
  }
    emit('update:modelValue', activePin.value)
}

</script>
