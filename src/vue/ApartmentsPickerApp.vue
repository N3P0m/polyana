<template>
  <div class="dt-house-picker" >
    <ApartmentsPickerFilter :key="instance" v-if="width > 575"
                            :limit-sq-max="minMaxHousesValues.maxSq"
                            :limit-sq-min="minMaxHousesValues.minSq"
                            :limit-cost-max="minMaxHousesValues.maxCost"
                            :limit-cost-min="minMaxHousesValues.minCost"
                            :limit-floor="minMaxHousesValues.maxFloor"
                            :limit-rooms="minMaxHousesValues.maxRooms"
                            v-model:max-sq="filterMaxSq"
                            v-model:min-sq="filterMinSq"
                            v-model:max-cost="filterMaxCost"
                            v-model:min-cost="filterMinCost"
                            v-model:floors-value="filterFloor"
                            v-model:rooms-value="filterRooms"
                            v-model:tags="filterTags"
                            v-model:apartmentInfo="apartmentInfo"
    />
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
    <div class="dt-house-picker__result-header">
        <span class="dt-house-picker__info">Найдено: {{ pluralizeHouse(filteredHouseDataBySq.length) }}</span>
        <button class="btn btn--tertiary" @click="resetFilters">
          <span>Сбросить фильтр</span>
          <div style="margin-left: 1rem;">
          <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
            <mask id="mask0_1480_116" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="10" height="10">
              <rect width="10" height="10" fill="#D9D9D9"/>
            </mask>
            <g mask="url(#mask0_1480_116)">
              <path d="M0.00012207 0L10 10" stroke="black"/>
              <path d="M10 0L8.12008e-05 10" stroke="black"/>
            </g>
          </svg>
          </div>
        </button>
    </div>
    <div class="dt-house-picker__list dt-house-picker__list--apartments" v-auto-animate>
      <template v-for="house in viewedData" :key="house.id">
        <ApartmentItem tag="a" :house="house" :href="'/apartment?apartmentid=' + house.id"/>
      </template>
    </div>
    <transition name="fade">
      <div class="text-center view-more" @click="viewMore" v-if="filteredHouseDataBySq.length > elementsPerView">
        <button class="btn btn--primary">Загрузить еще</button>
      </div>
    </transition>
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
    <ApartmentsPickerFilter :key="instance"
                            :limit-sq-max="minMaxHousesValues.maxSq"
                            :limit-sq-min="minMaxHousesValues.minSq"
                            :limit-cost-max="minMaxHousesValues.maxCost"
                            :limit-cost-min="minMaxHousesValues.minCost"
                            :limit-floor="minMaxHousesValues.maxFloor"
                            :limit-rooms="minMaxHousesValues.maxRooms"
                            v-model:max-sq="filterMaxSq"
                            v-model:min-sq="filterMinSq"
                            v-model:max-cost="filterMaxCost"
                            v-model:min-cost="filterMinCost"
                            v-model:floors-value="filterFloor"
                            v-model:rooms-value="filterRooms"
                            v-model:tags="filterTags"
                            v-model:apartmentInfo="apartmentInfo"
    />
    <template #footer="{ methods }">
      <button class="btn btn--primary" @click="methods">
        Применить
      </button>
    </template>
  </PopupFull>
  <transition name="slide" appear>
    <button class="btn btn--primary btn--fixed" @click="openFiltersPopup" ref="el"
            v-if="!filtersFullBtnIsVisible && !isFiltersPopupShow">
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
import {computed, ref, watch, getCurrentInstance} from "vue";

import {useSwipe, useWindowSize, useElementVisibility} from '@vueuse/core'
import PopupFull from "@/vue/components/PopupFull.vue";

// import {crmData} from "@/vue/test-data/apartments-data";
import ApartmentsPickerFilter from "@/vue/components/apartments/ApartmentsPickerFilter.vue";
import ApartmentItem from "@/vue/components/apartments/ApartmentItem.vue";

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
    houseResult.maxFloor = Math.max(houseResult.maxFloor, houseSource.floor)
    houseResult.maxRooms = Math.max(houseResult.maxRooms, houseSource.rooms)



    return houseResult
  }, {
    // maxFloor: this.apartmentsList[0].floor,
    // minFloor: this.apartmentsList[0].floor,
    minSq: housesData.value[0].sq,
    maxSq: housesData.value[0].sq,
    minCost: housesData.value[0].cost,
    maxCost: housesData.value[0].cost,
    maxFloor: housesData.value[0].floor,
    maxRooms: housesData.value[0].rooms
  })

  result.minCost = Math.floor(result.minCost / 1000000)
  result.maxCost = Math.ceil(result.maxCost / 1000000)
  result.minSq = Math.floor(result.minSq)
  result.maxSq = Math.ceil(result.maxSq)

  return result
})

const instance = ref(1);
const filterMaxSq = ref(minMaxHousesValues.value.maxSq)
const filterMinSq = ref((minMaxHousesValues.value.minSq))
const filterMaxCost = ref(minMaxHousesValues.value.maxCost)
const filterMinCost = ref((minMaxHousesValues.value.minCost))
const filterFloor = ref([])
const filterRooms = ref([])
const filterTags = ref([])
const elementsPerView = ref(8);
const apartmentInfo = ref({
  activeHouse: null,
  activeHousePart: null
})

function viewMore() {
  elementsPerView.value += 8
}


function pluralizeHouse(num) {
  const lastNum = num % 10
  if (lastNum === 1) {
    return num + ' квартира';
  } else if (lastNum > 1 && lastNum < 5) {
    return num + ' квартиры';
  } else {
    return num + ' квартир';
  }
}

function resetFilters() {
  filterMaxSq.value = minMaxHousesValues.value.maxSq
  filterMinSq.value = minMaxHousesValues.value.minSq
  filterMaxCost.value = minMaxHousesValues.value.maxCost
  filterMinCost.value = minMaxHousesValues.value.minCost
  filterFloor.value = []
  filterRooms.value = []
  filterTags.value = []
  apartmentInfo.value = {
    activeHouse: null,
    activeHousePart: null
  }
  instance.value++
}


const filteredHouseDataBySq = computed(() => {
  return housesData.value.filter(house => {
    return (house.sq <= filterMaxSq.value && house.sq >= filterMinSq.value)
        && (house.cost / 1000000 <= filterMaxCost.value && house.cost / 1000000 >= filterMinCost.value)
        && (filterFloor.value.length === 0 || filterFloor.value.includes(house.floor))
        && (filterRooms.value.length === 0 || filterRooms.value.includes(house.rooms))
        && (!apartmentInfo.value.activeHouse || (house.home_number === apartmentInfo.value.activeHouse))
        && (!apartmentInfo.value.activeHousePart || (house.section === apartmentInfo.value.activeHousePart))
        && (filterTags.value.length === 0 || filterTags.value.every(filterTag => {
          return house.tags.includes(filterTag.value);
        }));
  })
})
watch(() => filteredHouseDataBySq.value.length, (newData) => {
  elementsPerView.value = 8
}, {deep: true})

const viewedData = computed(() => {
  return filteredHouseDataBySq.value.slice(0, elementsPerView.value)
})


// var максимальное_значение = массив_объектов.reduce(function (максимум, текущий_элемент) {
// return (текущий_элемент.ключ > максимум) ? текущий_элемент.ключ : максимум;
// }, массив_объектов[0].ключ);


const {width, height} = useWindowSize()
</script>
