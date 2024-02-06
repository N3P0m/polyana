<template>
  <div class="dt-house-picker">
    <DtHousePickerFilter v-if="width > 575" v-model:max-sq="filterMaxSq" :limit-sq="minMaxHousesValues.maxSq"
                         v-model:min-sq="filterMinSq"/>
    <div>
      <button v-if="width <= 575" class="btn btn--primary dt-house-picker__filters-btn"
              @click="openFiltersPopup"
              ref="filtersFullBtn"
      >
        <div class="text-with-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15" viewBox="0 0 18 15" fill="none">
            <path d="M7 4H17" stroke="#2E3F4F"/>
            <path d="M11 11L1 11" stroke="#2E3F4F"/>
            <circle cx="4" cy="4" r="3" stroke="#2E3F4F"/>
            <circle cx="14" cy="11" r="3" transform="rotate(-180 14 11)" stroke="#2E3F4F"/>
          </svg>
          <span>Фильтры</span>
        </div>
      </button>
    </div>
  </div>
  <div class="dt-house-picker__result">
    <span class="dt-house-picker__info">Найдено: {{filteredHouseDataBySq.length}} домов</span>
    <div>maxCost {{ minMaxHousesValues }}</div>
    <ul class="dt-house-picker__list" v-auto-animate>
      <template v-for="(house, index) in filteredHouseDataBySq" :key="index">
        <DtHouseItem tag="li" :house="house"/>
      </template>
    </ul>
  </div>
  <PopupFull v-if="width <= 575" v-model="isFiltersPopupShow">
    <template #header>
      <div class="text-with-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15" viewBox="0 0 18 15" fill="none">
          <path d="M7 4H17" stroke="#2E3F4F"/>
          <path d="M11 11L1 11" stroke="#2E3F4F"/>
          <circle cx="4" cy="4" r="3" stroke="#2E3F4F"/>
          <circle cx="14" cy="11" r="3" transform="rotate(-180 14 11)" stroke="#2E3F4F"/>
        </svg>
        <span>Фильтры</span>
      </div>
    </template>
    <DtHousePickerFilter v-model:max-sq="filterMaxSq" :limit-sq="minMaxHousesValues.maxSq"
                         v-model:min-sq="filterMinSq"/>
    <template #footer>
      <button class="btn btn--primary">
        Применить
      </button>
    </template>
  </PopupFull>
  <transition name="slide" appear appear-active-class="transition-delay">
    <button class="btn btn--primary btn--fixed" @click="openFiltersPopup" ref="el" v-if="!filtersFullBtnIsVisible && !isFiltersPopupShow">
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15" viewBox="0 0 18 15" fill="none">
        <path d="M7 4H17" stroke="#2E3F4F"/>
        <path d="M11 11L1 11" stroke="#2E3F4F"/>
        <circle cx="4" cy="4" r="3" stroke="#2E3F4F"/>
        <circle cx="14" cy="11" r="3" transform="rotate(-180 14 11)" stroke="#2E3F4F"/>
      </svg>
    </button>
  </transition>
</template>

<script setup>
import {computed, ref} from "vue";

import {useSwipe, useWindowSize, useElementVisibility} from '@vueuse/core'
import PopupFull from "@/vue/components/PopupFull.vue";
import DtHousePickerFilter from "@/vue/components/DtHousePickerFilter.vue";
import DtHouseItem from "@/vue/components/DtHouseItem.vue";

import {crmData} from "@/vue/test-data/houses-data";

window.crmData = crmData

const el = ref(null);
const filtersFullBtn = ref(null)

const filtersFullBtnIsVisible = useElementVisibility(filtersFullBtn)

const {isSwiping, direction} = useSwipe(el, {
  onSwipe(e) {
    openFiltersPopup()
  },
  onSwipeEnd() {
    openFiltersPopup()
  }
})

const isFiltersPopupShow = ref(false)

function openFiltersPopup() {
  isFiltersPopupShow.value = true
}

const housesData = computed(() => {
  return window.crmData
})

// const maxCost = computed(() => housesData.value.reduce((max, current) => current.cost > max ? current.cost : max, housesData.value[0].cost))
// const minCost = computed(() => housesData.value.reduce((min, current) => current.cost < min ? current.cost : min, housesData.value[0].cost))
const minMaxHousesValues = computed(() => {
  const result = housesData.value.reduce((houseResult, houseSource) => {
    // houseResult.minFloor = Math.min(houseResult.minFloor, houseSource.floor);
    // houseResult.maxFloor = Math.max(houseResult.maxFloor, houseSource.floor);
    houseResult.minSq = Math.min(houseResult.minSq, houseSource.sq);
    houseResult.maxSq = Math.max(houseResult.maxSq, houseSource.sq);
    houseResult.minCost = Math.min(houseResult.minCost, houseSource.cost);
    houseResult.maxCost = Math.max(houseResult.maxCost, houseSource.cost);


    return houseResult
  }, {
    // maxFloor: this.apartmentsList[0].floor,
    // minFloor: this.apartmentsList[0].floor,
    minSq: housesData.value[0].sq,
    maxSq: housesData.value[0].sq,
    minCost: housesData.value[0].cost,
    maxCost: housesData.value[0].cost
  })

  result.minCost = Math.floor(result.minCost / 1000000)
  result.maxCost = Math.ceil(result.maxCost / 1000000)
  result.minSq = Math.floor(result.minSq)
  result.maxSq = Math.ceil(result.maxSq)

  return result
})


const filterMaxSq = ref(minMaxHousesValues.value.maxSq)
const filterMinSq = ref((minMaxHousesValues.value.minSq))

const filteredHouseDataBySq = computed(() => {
  return housesData.value.filter(house => {
    return house.sq <= filterMaxSq.value && house.sq >= filterMinSq.value
  })
})


// var максимальное_значение = массив_объектов.reduce(function (максимум, текущий_элемент) {
// return (текущий_элемент.ключ > максимум) ? текущий_элемент.ключ : максимум;
// }, массив_объектов[0].ключ);


const {width, height} = useWindowSize()
</script>