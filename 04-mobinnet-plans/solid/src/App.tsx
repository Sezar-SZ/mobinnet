import { For, Show, createSignal, onMount } from "solid-js";
import CloudPackageGroup from "./components/CloudPackageGroup";
import jsonData from "./assets/data.json";
import { Data } from "./types";
import "./App.css";

function App() {
    const [apiData, setApiData] = createSignal<null | Data[]>(null);
    const [selectedPlanId, setSelectedPlanId] = createSignal<null | string>(
        null
    );

    onMount(() => {
        setApiData(jsonData.data as Data[]);
    });

    return (
        <>
            <div
                id="app"
                class="h-screen w-screen overflow-x-hidden p-2 dark:bg-[#141414] sm:p-16"
            >
                <Show when={apiData()}>
                    <div
                        v-if="apiData"
                        class="cardsContainer m-2 grid grid-cols-1 gap-y-14 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                    >
                        <For each={apiData()}>
                            {(data) => (
                                <CloudPackageGroup
                                    apiData={data}
                                    selectedPlanId={selectedPlanId()}
                                    setSelectedPlanID={setSelectedPlanId}
                                />
                            )}
                        </For>
                    </div>
                </Show>
            </div>
        </>
    );
}

export default App;
