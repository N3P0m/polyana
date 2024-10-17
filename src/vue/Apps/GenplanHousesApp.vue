<template>
    <div class="wrapper-full-width" style=" margin-top: -100px;">
        <HousesGenplan :houses-data="housesData"/>
    </div>
</template>

<script setup>
// import {crmData} from "@/vue/test-data/houses-data";
import HousesGenplan from "@/vue/components/genplans/HousesGenplan.vue";
import {computed} from "vue";

// window.crmData = crmData

/**
 *=========
 * computed
 *=========
 */

const housesData = computed(() => {
	return window.crmData
})

</script>
