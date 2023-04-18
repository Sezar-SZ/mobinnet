<template>
	<div
		dir="rtl"
		class="relative m-2 mx-auto flex w-[92%] flex-col rounded-lg p-4 shadow-lg dark:bg-[#272727]"
		:class="{
			'border-2 border-green-500': isSelected
		}"
	>
		<div class="flex items-center justify-center">
			<div
				v-if="isSelected"
				class="absolute left-0 top-0 flex h-[15%] w-[17%] items-center justify-center rounded-md rounded-bl-none rounded-tr-none bg-green-500"
			>
				<div class="check"></div>
			</div>
			<img src="../assets/icon.svg" />
			<div
				v-if="isDiscount"
				class="absolute right-12 top-5 rounded-full border-2 border-green-900 bg-gradient-to-b from-red-600 to-red-400 p-2 text-white"
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
			class="currentPriceContainer flex w-full items-center justify-between dark:text-white"
		>
			<h2 class="mb-4 text-3xl">{{ currentPrice }}</h2>
			<h2 class="text-gray-600 dark:text-white">ریال/ماهیانه</h2>
		</div>
		<div class="infoContainer grid grid-cols-2 gap-y-3">
			<div class="infoGroup flex">
				<img class="ml-2 w-5" src="../assets/icons/cpu.svg" />
				<span class="dark:text-white">Traffic:</span>
				<span class="dark:text-green-400">{{
					apiData.trafficCapacity
				}}</span>
			</div>
			<div class="infoGroup flex">
				<img class="ml-2 w-5" src="../assets/icons/ram.svg" />
				<span class="dark:text-white">RAM:</span>
				<span class="dark:text-green-400"
					>{{ apiData.ramCapcity }} گیگ</span
				>
			</div>
			<div class="infoGroup flex">
				<img class="ml-2 w-5" src="../assets/icons/cpu.svg" />
				<span class="dark:text-white">CPU:</span>
				<span class="dark:text-green-400"
					>{{ apiData.cpuCapacity }} هسته</span
				>
			</div>
			<div class="infoGroup flex">
				<img class="ml-2 w-5" src="../assets/icons/cpu.svg" />
				<span class="dark:text-white">SSD:</span>
				<span class="dark:text-green-400"
					>{{ apiData.storageCapacity }} گیگ</span
				>
			</div>
		</div>
		<select
			name="duration"
			id="duration"
			class="mt-8 rounded-md p-3 dark:bg-black dark:text-white"
		>
			<option value="1month">۱ ماهه</option>
			<option value="1month">۳ ماهه</option>
			<option value="1month">۶ ماهه</option>
		</select>
		<button
			class="relative my-4 rounded-3xl bg-gradient-to-l from-green-600 to-green-500 py-3"
			@click="$emit('select', id)"
		>
			انتخاب
			<span class="check-button absolute right-0 mr-7"></span>
		</button>
	</div>
</template>

<script>
import { englishToFarsi } from "../utils.js";
export default {
	name: "CloudPackageGroup",
	props: {
		apiData: Object,
		selectedPlanId: Number
	},

	data: function () {
		return {
			oldPriceVal: this.apiData.price,
			id: parseInt(this.apiData.id, 10)
		};
	},
	computed: {
		isDiscount: function () {
			return this.apiData.discount;
		},
		isSelected: function () {
			return this.selectedPlanId === this.id;
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

<style scoped>
.check {
	display: inline-block;
	transform: rotate(45deg);
	height: 30px;
	width: 16px;
	border-bottom: 7px solid white;
	border-right: 7px solid white;
}
.check-button {
	display: inline-block;
	transform: rotate(45deg);
	height: 17px;
	width: 10px;
	border-bottom: 3px solid white;
	border-right: 3px solid white;
}
</style>
