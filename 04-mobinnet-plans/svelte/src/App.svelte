<script lang="ts">
    import { onMount } from "svelte";
    import jsonData from "./assets/data.json";

    import CloudPackageGroup from "./components/CloudPackageGroup.svelte";
    import type { Data } from "./types";

    let apiData: null | Data[] = null;
    let selectedPlanId = null;

    onMount(() => {
        apiData = jsonData.data as Data[];
    });

    const onGettingId = (id: string) => {
        selectedPlanId.value = id;
    };
</script>

<div
    id="app"
    class="h-screen w-screen overflow-x-hidden p-2 dark:bg-[#141414] sm:p-16"
>
    here
    {#if apiData}
        <div
            class="cardsContainer m-2 grid grid-cols-1 gap-y-14 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
            {#each apiData as cardData (cardData.id)}
                <CloudPackageGroup
                    apiData={cardData}
                    {selectedPlanId}
                    on:planSelected={(event) =>
                        (selectedPlanId = event.detail.id)}
                />
            {/each}
        </div>
    {/if}
</div>
