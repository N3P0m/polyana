<template>
  <component :is="tag" class="dt-house-item">
    <img class="dt-house-item__img" :src="houseProp.img" alt="" width="250" height="250">
    <div class="dt-house-item__header">
      <h4 class="dt-house-item__heading">Дом {{ houseProp.label }}</h4>
      <span class="dt-house-item__subheading">
      Участок № {{house.number}}
    </span>
    </div>
    <ul class="dt-house-item__main">
      <ul class="dt-house-item__props">
        <li class="dt-house-item__prop">
          <span class="dt-house-item__value">{{ house.sq }}</span>
          <span class="dt-house-item__caption">Площадь дома&nbsp;(м2)</span>
        </li>
        <li class="dt-house-item__prop">
          <span class="dt-house-item__value">13,0</span>
          <span class="dt-house-item__caption">Площадь участка&nbsp;(сот.)</span>
        </li>
      </ul>
      <div class="dt-house-item__value dt-house-item__value--price">
        {{ amount }}
      </div>
    </ul>
    <div class="dt-house-item__footer">
      <a href="#" class="btn btn--primary dt-house-item__btn">
        Подробнее
      </a>
    </div>

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

const houseNames = {
  modern: [16, 18, 20, 22, 24, 26],
  shale: [1, 2, 3, 4, 5, 7, 9, 11, 13, 15],
  scandi: [6, 10, 14],
  classic: [8, 12]
}

const houseProps = {
  modern: {
    label: "Модерн",
    img: houseModern
  },
  shale: {
    label: 'Шале',
    img: houseShale
  },
  scandi: {
    label: 'Сканди',
    img: houseScandi
  },
  classic: {
    label: 'Классик',
    img: houseClassic
  }
}



// 16, 18, 20, 22, 24, 26 Модерн
//
// 1, 2, 3, 4, 5, 7, 9, 11, 13, 15 Шале
//
// 6, 10, 14 Сканди
//
// 8, 12 Классик

const houseValue = computed(() => {
  const numberHouse = +props.house.number
  for (const [key, value] of Object.entries(houseNames)) {
    console.log(key, value, key.includes(numberHouse), numberHouse)
    if (value.includes(numberHouse)) {
      return key;
    }
  }
})

const houseProp = houseProps[houseValue.value]

</script>