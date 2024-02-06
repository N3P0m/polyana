<template>
  <div class="active-pins">
    <template v-for="(count, index) in maxCount" :key="index">
      <button class="btn-pin" @click="setActiveBtn(count)" :class="{'btn-pin--active': activePin === count}">
        {{count}}
      </button>
    </template>
  </div>

</template>

<script setup>


import {ref} from "vue";

defineProps({
  maxCount: {
    type: Number,
    default: 10
  }
})


const activePin = ref(1)

function setActiveBtn(count) {
    activePin.value = count
}

</script>
