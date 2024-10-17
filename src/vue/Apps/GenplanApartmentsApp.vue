<template>
    <div class="wrapper-full-width">
        <ApartmentsGenplan :houses-data="housesData" @update:genplan-filter="genplanSetFilters" />
    </div>
</template>

<script setup>
// import {crmData} from "@/vue/test-data/apartments-data";
import {computed} from "vue";
import ApartmentsGenplan from "@/vue/components/genplans/ApartmentsGenplan.vue";
// window.crmData = crmData

/**
 *=========
 * computed
 *=========
 */

const housesData = computed(() => {
	return window.crmData
})
/**
 *=========
 * methods
 *=========
 */

function genplanSetFilters(number) {
    window.location = `/apartment?house=${number}`
}

</script>
