<script setup lang="ts">
import { onMounted, ref } from "vue";
import CloudPackageGroup from "./components/CloudPackageGroup.vue";
import jsonData from "./assets/data.json";
import { Data } from "./types";

const apiData = ref<null | Data[]>(null);
const selectedPlanId = ref<null | string>(null);

onMounted(() => {
    apiData.value = jsonData.data as Data[];
});

const onGettingId = (id: string) => {
    selectedPlanId.value = id;
    console.log(id, typeof id);
};
</script>

<template>
    <div
        id="app"
        class="h-screen w-screen overflow-x-hidden p-2 dark:bg-[#141414] sm:p-16"
    >
        <div
            v-if="apiData"
            class="cardsContainer m-2 grid grid-cols-1 gap-y-14 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
            <CloudPackageGroup
                v-for="cardData in apiData"
                :key="cardData!.id"
                :api-data="cardData"
                :selected-plan-id="selectedPlanId"
                @select="onGettingId"
            ></CloudPackageGroup>
        </div>
    </div>
</template>

<style scoped></style>
