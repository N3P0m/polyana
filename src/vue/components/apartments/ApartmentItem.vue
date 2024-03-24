<template>
  <component :is="tag" class="apartment-item" v-bind="$attrs">
<!--    <a :href="'/apartment?apartmentid=' + house.id">-->
      <img class="apartment-item__img" :src="house.images[0].images[0].file_url" alt="" >
      <div class="apartment-item__header">
        <span class="apartment-item__value">Дом {{ house.home_number }}</span>
        <span class="apartment-item__value">Секция {{ house.section }}</span>
        <span class="apartment-item__value">Этаж {{house.floor}}</span>
      </div>
      <ul class="apartment-item__main">
        <div class="apartment-item__value">
            {{ house.sq }} м²
        </div>
        <div class="apartment-item__value apartment-item__value--price">
          {{ amount }}
        </div>
      </ul>
      <div class="apartment-item__footer">
        <button class="btn btn--primary apartment-item__btn">
          Подробнее
        </button>
      </div>
<!--    </a>-->
  </component>
</template>

<script setup>

import houseModern from '@/assets/img/components/houses/house-modern.webp'
import houseClassic from '@/assets/img/components/houses/house-classic.webp'
import houseScandi from '@/assets/img/components/houses/house-scandi.webp'
import houseShale from '@/assets/img/components/houses/house-shale.webp'
import {computed} from "vue";

const props = defineProps({
  tag: {
    type: String,
    default: 'div'
  },
  house: {
    type: Object,
    default: () => {
      return {
        floor: 0,
        cost: 0,
        cost_str: 0,
        id: 0,
        images: [],
        number: "1",
        sq: 1,
        state: 1,
        tags: []
      }
    },
    required: true
  }
})

const amount = computed(() => {
  return Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB',
    minimumFractionDigits: 0
  }).format(props.house.cost);
})

</script>
