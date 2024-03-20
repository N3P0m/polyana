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
import {onMounted, reactive, ref} from "vue";
import '@/scss/ui-components/_icons.scss'

const emit = defineEmits(['update:modelValue'])

const {modelValue} = defineProps({
  modelValue: {
    type: Array,
    default: () => []
  }
})

const pins = reactive([
  {
    label: 'Второй <br> свет',
    iconClass: 'icon-selection--light',
    isActive: false,
    value: 'Второй свет'
  },
  {
    label: 'Большая <br>кухня-гостинная',
    iconClass: 'icon-selection--kitchen',
    isActive: false,
    value: 'Большая кухня-гостинная'
  },
  // {
  //   label: 'Вид на<br>"В некотором<br> Царстве',
  //   iconClass: 'icon-selection--church',
  //   isActive: false,
  //   value: '2-х уровневая'
  // },
  {
    label: 'Мансардные <br> окна',
    iconClass: 'icon-selection--mansards',
    isActive: false,
    value: '2-х уровневая'
  },
  {
    label: 'Мастер-<br>спальня',
    iconClass: 'icon-selection--bedroom',
    isActive: false,
    value: 'Мастер-спальня'
  },
  {
    label: 'Два <br> санузла',
    iconClass: 'icon-selection--master',
    isActive: false,
    value: '2 сан.узла'
  },
  {
    label: 'Терраса',
    iconClass: 'icon-selection--terrace',
    isActive: false,
    value: 'Терраса'
  }
])

const activePin = ref(1)

function setActiveBtn(pin) {
  pin.isActive = !pin.isActive
  console.log('arrr', getFilteredTagsByActive())
  emit('update:modelValue', getFilteredTagsByActive())
}

function getFilteredTagsByActive() {
  return JSON.parse(JSON.stringify(pins.filter(pin => pin.isActive)))
}

onMounted(() => {
  if (modelValue.length > 0) {
    pins.forEach(pin => {
      const mdEl = modelValue.find(md => md.value === pin.value)
      if (!mdEl) return
      pin.isActive = mdEl.isActive
    })
  }
})


</script>
