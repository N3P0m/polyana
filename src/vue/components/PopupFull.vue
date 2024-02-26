<template>
  <transition name="slide">

  <div class="popup-full" id="popup-full" v-if="modelValue" tabindex="0">
    <div class="popup-full__header">
      <div class="popup-full__heading">
        <slot name="header">
        </slot>
      </div>
      <button class="btn btn-close" @click="closePopup">
        <svg class="ham hamRotate active ham1" viewBox="0 0 100 100" width="80">
          <path class="line top" d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40" stroke="#2c2b38"></path>
          <path class="line middle" d="m 30,50 h 40" stroke="#2c2b38" ></path>
          <path class="line bottom" d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40" stroke="#2c2b38"></path>
        </svg>
      </button>
    </div>
    <div class="popup-full__main">
    <slot></slot>
    </div>
    <div class="popup-full__footer">
      <slot name="footer" :methods="closePopup">
      </slot>
    </div>
  </div>
  </transition>
</template>
<script setup>

import {ref, watch} from "vue";
import {useLockScroll} from "@/vue/composables/useLockScroll";

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  }
})

watch(() => props.modelValue, newValue => {
  useLockScroll(newValue)
})

const emit = defineEmits(['update:modelValue'])

function closePopup() {
  emit('update:modelValue', false)
}
</script>