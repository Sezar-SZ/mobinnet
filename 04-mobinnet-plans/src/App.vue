<template>
	<div id="app" class="h-screen w-screen overflow-x-hidden p-2 sm:p-16">
		<div
			v-if="apiData"
			class="cardsContainer m-2 grid grid-cols-1 gap-y-14 md:grid-cols-2 lg:grid-cols-4"
		>
			<CloudPackageGroup
				v-for="cardData in apiData"
				:key="cardData.id"
				:api-data="cardData"
				:selected-plan-id="selectedPlanId"
				@select="selectedPlanId = $event"
			></CloudPackageGroup>
			<!-- <CloudPackageGroup :api-data="apiData"></CloudPackageGroup> -->
		</div>
	</div>
</template>

<script>
import CloudPackageGroup from "./components/CloudPackageGroup.vue";
import jsonData from "./assets/data.json";

export default {
	name: "App",
	components: {
		CloudPackageGroup
	},
	data: function () {
		return {
			apiData: null,
			selectedPlanId: null
		};
	},
	mounted: function () {
		this.apiData = jsonData["data"];
	}
};
</script>

<style></style>
