<template>
  <div class="active-pins">
    <template v-for="(pin, index) in pins" :key="index">
      <button class="btn-pin btn-pin--lg" @click="setActiveBtn(pin)" :class="{'btn-pin--active': pin.isActive }">
        <i class="icon-selection" :class="pin.iconClass"></i>
        <span v-html="pin.label"></span>
      </button>
    </template>
  </div>

</template>

<script setup>
import {reactive, ref} from "vue";
import '@/scss/ui-components/_icons.scss'

const pins = reactive([
  {
    label: 'Второй <br> свет',
    iconClass: 'icon-selection--light',
    isActive: false,
    value: ''
  },
  {
    label: 'Мастер-<br>спальня',
    iconClass: 'icon-selection--bedroom',
    isActive: false,
    value: ''
  },
  {
    label: 'Машино-<br> место <br> с навесом',
    iconClass: 'icon-selection--parking',
    isActive: false,
    value: ''
  },
  {
    label: 'Терраса <br> с камином',
    iconClass: 'icon-selection--fireplace',
    isActive: false,
    value: ''
  },
  {
    label: 'Терраса',
    iconClass: 'icon-selection--terrace',
    isActive: false,
    value: ''
  },
  {
    label: 'Гараж',
    iconClass: 'icon-selection--garage',
    isActive: false,
    value: ''
  }
])

const activePin = ref(1)

function setActiveBtn(pin) {
  pin.isActive = !pin.isActive
}

</script>
