<script lang="ts">
    import { createEventDispatcher } from "svelte";

    import { type Data } from "../types";
    import { englishToFarsi } from "../utils";

    export let apiData: Data;
    export let selectedPlanId: string | null;

    $: isDiscount = apiData.discount;
    $: isSelected = selectedPlanId === apiData.id;
    $: oldPrice = apiData.price.toLocaleString();
    $: currentPrice = englishToFarsi(
        (apiData.discount
            ? apiData.price - apiData.discount
            : apiData.price
        ).toLocaleString()
    );
    $: discountPercent =
        "%" +
        englishToFarsi(
            apiData.discountPercent ? apiData.discountPercent.toString() : ""
        );

    const dispatch = createEventDispatcher();

    const planSelected = () => {
        dispatch("planSelected", {
            id: apiData.id,
        });
    };
</script>

<div
    dir="rtl"
    class="relative m-2 mx-auto flex w-[92%] flex-col rounded-lg p-4 shadow-lg dark:bg-[#272727]"
    class:isSelected
>
    <div class="flex items-center justify-center">
        {#if isSelected}
            <div
                class="absolute left-0 top-0 flex h-[13%] max-h-[70px] w-[17%] max-w-[60px] items-center justify-center rounded-md rounded-bl-none rounded-tr-none bg-green-500"
            >
                <div class="check" />
            </div>
        {/if}
        <img src="icon.svg" alt="" />
        {#if isDiscount}
            <div
                class="absolute right-12 top-5 rounded-full border-2 border-green-900 bg-gradient-to-b from-red-600 to-red-400 p-2 text-white"
            >
                {discountPercent}
            </div>
        {/if}
    </div>
    <h1 class="mb-4 text-center text-xl font-bold text-green-600">
        {apiData.packageName}
    </h1>
    <div
        class="oldPrice over text-xl text-red-500 line-through"
        class:invisible={!isDiscount}
    >
        {oldPrice}
    </div>
    <div
        class="currentPriceContainer flex w-full items-center justify-between dark:text-white"
    >
        <h2 class="mb-4 text-3xl">{currentPrice}</h2>
        <h2 class="w-[30%] text-gray-600 dark:text-white">ریال/ماهیانه</h2>
    </div>
    <div class="infoContainer mb-4 flex flex-col">
        <div class="row mb-4 flex items-center justify-between">
            <div class="infoGroup flex">
                <img class="ml-2 w-5" src="icons/cpu.svg" alt="" />
                <span class="dark:text-white">Traffic:</span>
                <span class="dark:text-green-400"
                    >{apiData.trafficCapacity}</span
                >
            </div>

            <div class="infoGroup flex">
                <img class="ml-2 w-5" src="icons/ram.svg" alt="" />
                <span class="dark:text-white">RAM:</span>
                <span class="dark:text-green-400">{apiData.ramCapcity} گیگ</span
                >
            </div>
        </div>
        <div class="row flex items-center justify-between">
            <div class="infoGroup flex">
                <img class="ml-2 w-5" src="icons/cpu.svg" alt="" />
                <span class="dark:text-white">CPU:</span>
                <span class="dark:text-green-400"
                    >{apiData.cpuCapacity} هسته</span
                >
            </div>
            <div class="infoGroup flex">
                <img class="ml-2 w-5" src="icons/cpu.svg" alt="" />
                <span class="dark:text-white">SSD:</span>
                <span class="dark:text-green-400"
                    >{apiData.storageCapacity} گیگ</span
                >
            </div>
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
        class="relative my-4 rounded-3xl bg-gradient-to-l from-green-600 to-green-500 py-3 font-bold text-white"
        on:click={() => planSelected()}
    >
        انتخاب
        <span class="check-button absolute right-0 mr-7" />
    </button>
</div>

<style>
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

    .isSelected {
        @apply border-2 border-green-500;
    }
</style>
