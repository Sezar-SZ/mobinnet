<template>
	<div dir="rtl" class="flex w-[80%] flex-col">
		<img src="../assets/icon.png" />
		<h1>{{ apiData.packageName }}</h1>
		<div v-if="isDiscount" class="oldPrice">{{ oldPrice }}</div>
		<div class="currentPriceContainer flex">
			<h2>{{ currentPrice }}</h2>
			<h2>ریال/ماهیانه</h2>
		</div>
		<div class="infoContainer grid grid-cols-2">
			<div class="infoGroup flex">
				<img src="" />
				<span>Traffic:</span>
				<span>{{ apiData.trafficCapacity }}</span>
			</div>
			<div class="infoGroup flex">
				<img src="" />
				<span>Ram:</span>
				<span>{{ apiData.ramCapcity }} </span>
			</div>
			<div class="infoGroup flex">
				<img src="" />
				<span>Cpu:</span>
				<span>{{ apiData.cpuCapacity }}</span>
			</div>
			<div class="infoGroup flex">
				<img src="" />
				<span>SSD:</span>
				<span>{{ apiData.storageCapacity }}</span>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "CloudPackageGroup",
	props: {
		apiData: Object
	},

	data: function () {
		return {
			oldPrice: this.apiData.price
		};
	},
	mounted: function () {
		this.packageName = this.apiData.packageName;
	},
	computed: {
		isDiscount: function () {
			return this.apiData.discount;
		},
		currentPrice: function () {
			return this.apiData.discount
				? this.apiData.price - this.apiData.discount
				: this.apiData.price;
		}
	}
};
</script>

<style scoped></style>
