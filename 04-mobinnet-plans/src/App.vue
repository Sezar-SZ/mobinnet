<template>
	<div id="app">
		<div class="cardsContainer"></div>
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
			apiData: null
		};
	},
	mounted: function () {
		this.apiData = JSON.parse(jsonData);
	}
};
</script>

<style></style>
