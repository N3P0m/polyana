<template>
    <transition name="fade" appear>
        <div >
            <div class="common-heading wrapper-inner-sm" style="position:relative; z-index: 100">
                <button class="btn btn--primary-back common-heading__right" @click="goBack"><span>Назад</span></button>
                <h2 class="h5 common-heading__middle">Выберите дом</h2>
                <div class="switcher switcher--position" v-if="width > 768">
                    <div class="switcher-container">
                        <div class="tabs">
                            <input type="radio" id="radio-1" name="tabs" value="plan" v-model="viewSwitcher"/>
                            <label class="tab swiper-preview-control" for="radio-1" data-slide="0">Генплан</label>
                            <input type="radio" id="radio-2" name="tabs" value="filters" v-model="viewSwitcher"/>
                            <label class="tab swiper-preview-control" for="radio-2" data-slide="1">Параметры</label>
                            <span class="glider"></span>
                        </div>
                    </div>
                </div>
            </div>
            <transition name="fade" mode="out-in">
                <div v-if="viewSwitcher === 'filters'" class="wrapper-inner-xl">
                    <div class="dt-house-picker">
                        <DtHousePickerFilter :key="instance" v-if="width > 575" v-model:max-sq="filterMaxSq"
                                             :limit-sq-max="minMaxHousesValues.maxSq"
                                             :limit-sq-min="minMaxHousesValues.minSq"
                                             v-model:min-sq="filterMinSq"
                                             v-model:current-floor-value="filterFloor"
                                             v-model:tags="filterTags"
                        />
                        <div>
                            <button v-if="width <= 575" class="btn btn--primary dt-house-picker__filters-btn"
                                    @click="openFiltersPopup"
                                    ref="filtersFullBtn"
                            >
                                <div class="text-with-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15" viewBox="0 0 18 15"
                                         fill="none">
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
                                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10"
                                         fill="none">
                                        <mask id="mask0_1480_116" style="mask-type:alpha" maskUnits="userSpaceOnUse"
                                              x="0" y="0" width="10" height="10">
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
                        <ul class="dt-house-picker__list" v-auto-animate>
                            <template v-for="house in viewedData" :key="house.id">
                                <DtHouseItem tag="li" :house="house"/>
                            </template>
                        </ul>
                        <transition name="fade">
                            <div class="text-center view-more" @click="viewMore"
                                 v-if="filteredHouseDataBySq.length > elementsPerView">
                                <button class="btn btn--primary">Загрузить еще</button>
                            </div>
                        </transition>
                    </div>
                    <PopupFull v-if="width <= 575" v-model="isFiltersPopupShow">
                        <template #header>
                            <div class="text-with-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15" viewBox="0 0 18 15"
                                     fill="none">
                                    <path d="M7 4H17" stroke="#2E3F4F"/>
                                    <path d="M11 11L1 11" stroke="#2E3F4F"/>
                                    <circle cx="4" cy="4" r="3" stroke="#2E3F4F"/>
                                    <circle cx="14" cy="11" r="3" transform="rotate(-180 14 11)" stroke="#2E3F4F"/>
                                </svg>
                                <span>Фильтры</span>
                            </div>
                        </template>
                        <DtHousePickerFilter :key="instance" v-model:max-sq="filterMaxSq"
                                             :limit-sq-max="minMaxHousesValues.maxSq"
                                             :limit-sq-min="minMaxHousesValues.minSq"
                                             v-model:min-sq="filterMinSq"
                                             v-model:current-floor-value="filterFloor"
                                             v-model:tags="filterTags"
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
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15" viewBox="0 0 18 15"
                                 fill="none">
                                <path d="M7 4H17" stroke="#2E3F4F"/>
                                <path d="M11 11L1 11" stroke="#2E3F4F"/>
                                <circle cx="4" cy="4" r="3" stroke="#2E3F4F"/>
                                <circle cx="14" cy="11" r="3" transform="rotate(-180 14 11)" stroke="#2E3F4F"/>
                            </svg>
                        </button>
                    </transition>
                </div>
                <div v-else class="wrapper-full-width" style=" margin-top: -100px;">
                    <HousesGenplan :houses-data="housesData"/>
                </div>
            </transition>
        </div>
    </transition>
</template>

<script setup>
import {computed, onMounted, ref, watch} from "vue";

import {useSwipe, useWindowSize, useElementVisibility} from '@vueuse/core'
import PopupFull from "@/vue/components/PopupFull.vue";
import DtHousePickerFilter from "@/vue/components/DtHousePickerFilter.vue";
import DtHouseItem from "@/vue/components/DtHouseItem.vue";

// import {crmData} from "@/vue/test-data/houses-data";


import HousesGenplan from "@/vue/components/genplans/HousesGenplan.vue";
// import ApartmentsPickerFilter from "@/vue/components/apartments/ApartmentsPickerFilter.vue";

// window.crmData = crmData

const el = ref(null);
const filtersFullBtn = ref(null)

const viewSwitcher = ref('genplan')

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
const filterFloor = ref(null)
const filterTags = ref([])
const elementsPerView = ref(8);
const instance = ref(1)

function viewMore() {
	elementsPerView.value += 8
}


function pluralizeHouse(num) {
	const lastNum = num % 10
	if (lastNum === 1) {
		return num + ' дом';
	} else if (lastNum > 1 && lastNum < 5) {
		return num + ' дома';
	} else {
		return num + ' домов';
	}
}

function resetFilters() {
	filterMaxSq.value = minMaxHousesValues.value.maxSq
	filterMinSq.value = minMaxHousesValues.value.minSq
	filterFloor.value = null
	filterTags.value = []
	instance.value++
}


const filteredHouseDataBySq = computed(() => {
	return housesData.value.filter(house => {
		return (house.sq <= filterMaxSq.value && house.sq >= filterMinSq.value)
			&& (filterFloor.value === null || house.floors === filterFloor.value)
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

function checkWidth() {
	// console.log(width.value)
	if (width.value <= 768) {
		viewSwitcher.value = 'filters'
	}
}

function goBack() {
	history.back()
}

checkWidth()
watch(width, (newWidth) => {
	checkWidth()
})

function checkQuery() {
	const query = new URL(document.location).searchParams;
	if (query.has('filters')) {
		viewSwitcher.value = 'filters'
	}
}

onMounted(() => {
	checkQuery()
})
</script>
