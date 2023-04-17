<template>
	<div
		dir="rtl"
		class="m-2 mx-auto flex w-[90%] flex-col rounded-sm p-4 shadow-lg"
	>
		<div class="relative flex items-center justify-center">
			<img src="../assets/icon.svg" />
			<div
				v-if="isDiscount"
				class="absolute right-12 top-0 rounded-full border-2 border-green-900 bg-gradient-to-b from-red-600 to-red-400 p-2 text-white"
			>
				{{ discountPercent }}
			</div>
		</div>
		<h1 class="mb-4 text-center text-xl font-bold text-green-600">
			{{ apiData.packageName }}
		</h1>
		<div
			v-if="isDiscount"
			class="oldPrice over text-xl text-red-500 line-through"
		>
			{{ oldPrice }}
		</div>
		<div
			class="currentPriceContainer flex w-full items-center justify-between"
		>
			<h2 class="mb-4 text-3xl">{{ currentPrice }}</h2>
			<h2 class="text-gray-600">ریال/ماهیانه</h2>
		</div>
		<div class="infoContainer grid grid-cols-2 gap-y-3">
			<div class="infoGroup flex">
				<img class="ml-2 w-5" src="../assets/icons/cpu.svg" />
				<span>Traffic:</span>
				<span>{{ apiData.trafficCapacity }}</span>
			</div>
			<div class="infoGroup flex">
				<img class="ml-2 w-5" src="../assets/icons/ram.svg" />
				<span>Ram:</span>
				<span>{{ apiData.ramCapcity }} گیگ</span>
			</div>
			<div class="infoGroup flex">
				<img class="ml-2 w-5" src="../assets/icons/cpu.svg" />
				<span>Cpu:</span>
				<span>{{ apiData.cpuCapacity }} هسته</span>
			</div>
			<div class="infoGroup flex">
				<img class="ml-2 w-5" src="../assets/icons/cpu.svg" />
				<span>SSD:</span>
				<span>{{ apiData.storageCapacity }} گیگ</span>
			</div>
		</div>
	</div>
</template>

<script>
import { englishToFarsi } from "../utils.js";
export default {
	name: "CloudPackageGroup",
	props: {
		apiData: Object
	},

	data: function () {
		return {
			oldPriceVal: this.apiData.price
		};
	},
	mounted: function () {
		this.packageName = this.apiData.packageName;
	},
	computed: {
		isDiscount: function () {
			return this.apiData.discount;
		},
		oldPrice: function () {
			return englishToFarsi(this.oldPriceVal.toLocaleString());
		},
		currentPrice: function () {
			return englishToFarsi(
				(this.apiData.discount
					? this.apiData.price - this.apiData.discount
					: this.apiData.price
				).toLocaleString()
			);
		},
		discountPercent: function () {
			return (
				"%" + englishToFarsi(this.apiData.discountPercent.toString())
			);
		}
	}
};
</script>

<style scoped></style>
