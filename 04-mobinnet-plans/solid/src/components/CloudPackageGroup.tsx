import iconSvg from "../assets/icon.svg";
import ramIcon from "../assets/icons/ram.svg";
import cpuIcon from "../assets/icons/cpu.svg";
import { Data } from "../types";
import { englishToFarsi } from "../utils";
import { Setter, Show } from "solid-js";

interface Props {
    apiData: Data;
    selectedPlanId: string | null;
    setSelectedPlanID: Setter<string | null>;
}

function CloudPackageGroup(props: Props) {
    return (
        <>
            <div
                dir="rtl"
                class="relative m-2 mx-auto flex w-[92%] flex-col rounded-lg p-4 shadow-lg dark:bg-[#272727]"
                classList={{
                    "border-2 border-green-500":
                        props.selectedPlanId === props.apiData.id,
                }}
            >
                <div class="flex items-center justify-center">
                    <Show when={props.selectedPlanId === props.apiData.id}>
                        <div class="absolute left-0 top-0 flex h-[13%] max-h-[70px] w-[17%] max-w-[60px] items-center justify-center rounded-md rounded-bl-none rounded-tr-none bg-green-500">
                            <div class="check"></div>
                        </div>
                    </Show>
                    <img src={iconSvg} />

                    <Show when={props.apiData.discount}>
                        <div class="absolute right-12 top-5 rounded-full border-2 border-green-900 bg-gradient-to-b from-red-600 to-red-400 p-2 text-white">
                            {"%" +
                                englishToFarsi(
                                    props.apiData.discountPercent
                                        ? props.apiData.discountPercent.toString()
                                        : ""
                                )}
                        </div>
                    </Show>
                </div>
                <h1 class="mb-4 text-center text-xl font-bold text-green-600">
                    {props.apiData.packageName}
                </h1>
                <div
                    class={`oldPrice over text-xl text-red-500 line-through ${
                        !props.apiData.discount && "invisible"
                    }`}
                >
                    {englishToFarsi(props.apiData.price.toLocaleString())}
                </div>
                <div class="currentPriceContainer flex w-full items-center justify-between dark:text-white">
                    <h2 class="mb-4 text-3xl">
                        {englishToFarsi(
                            (props.apiData.discount
                                ? props.apiData.price - props.apiData.discount
                                : props.apiData.price
                            ).toLocaleString()
                        )}
                    </h2>
                    <h2 class="w-[30%] text-gray-600 dark:text-white">
                        ریال/ماهیانه
                    </h2>
                </div>
                <div class="infoContainer mb-4 flex flex-col">
                    <div class="row mb-4 flex items-center justify-between">
                        <div class="infoGroup flex">
                            <img class="ml-2 w-5" src={cpuIcon} />
                            <span class="dark:text-white">Traffic:</span>
                            <span class="dark:text-green-400">
                                {props.apiData.trafficCapacity}
                            </span>
                        </div>

                        <div class="infoGroup flex">
                            <img class="ml-2 w-5" src={ramIcon} />
                            <span class="dark:text-white">RAM:</span>
                            <span class="dark:text-green-400">
                                {props.apiData.ramCapcity} گیگ
                            </span>
                        </div>
                    </div>
                    <div class="row flex items-center justify-between">
                        <div class="infoGroup flex">
                            <img class="ml-2 w-5" src={cpuIcon} />
                            <span class="dark:text-white">CPU:</span>
                            <span class="dark:text-green-400">
                                {props.apiData.cpuCapacity} هسته
                            </span>
                        </div>
                        <div class="infoGroup flex">
                            <img class="ml-2 w-5" src={cpuIcon} />
                            <span class="dark:text-white">SSD:</span>
                            <span class="dark:text-green-400">
                                {props.apiData.storageCapacity} گیگ
                            </span>
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
                    onClick={() => props.setSelectedPlanID(props.apiData.id)}
                >
                    انتخاب
                    <span class="check-button absolute right-0 mr-7"></span>
                </button>
            </div>
        </>
    );
}

export default CloudPackageGroup;
