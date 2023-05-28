import iconSvg from "../assets/icon.svg";
import ramIcon from "../assets/icons/ram.svg";
import cpuIcon from "../assets/icons/cpu.svg";
import { Data } from "../types";
import { englishToFarsi } from "../utils";

interface Props {
    apiData: Data;
    selectedPlanId: string | null;
    setSelectedPlanID: React.Dispatch<React.SetStateAction<string | null>>;
}

function CloudPackageGroup({
    apiData,
    selectedPlanId,
    setSelectedPlanID,
}: Props) {
    return (
        <>
            <div
                dir="rtl"
                className={`relative m-2 mx-auto flex w-[92%] flex-col rounded-lg p-4 shadow-lg dark:bg-[#272727] ${
                    selectedPlanId === apiData.id && "border-2 border-green-500"
                }`}
            >
                <div className="flex items-center justify-center">
                    {selectedPlanId === apiData.id && (
                        <div className="absolute left-0 top-0 flex h-[13%] max-h-[70px] w-[17%] max-w-[60px] items-center justify-center rounded-md rounded-bl-none rounded-tr-none bg-green-500">
                            <div className="check"></div>
                        </div>
                    )}
                    <img src={iconSvg} />
                    {apiData.discount && (
                        <div className="absolute right-12 top-5 rounded-full border-2 border-green-900 bg-gradient-to-b from-red-600 to-red-400 p-2 text-white">
                            {"%" +
                                englishToFarsi(
                                    apiData.discountPercent
                                        ? apiData.discountPercent.toString()
                                        : ""
                                )}
                        </div>
                    )}
                </div>
                <h1 className="mb-4 text-center text-xl font-bold text-green-600">
                    {apiData.packageName}
                </h1>
                <div
                    className={`oldPrice over text-xl text-red-500 line-through ${
                        !apiData.discount && "invisible"
                    }`}
                >
                    {englishToFarsi(apiData.price.toLocaleString())}
                </div>
                <div className="currentPriceContainer flex w-full items-center justify-between dark:text-white">
                    <h2 className="mb-4 text-3xl">
                        {englishToFarsi(
                            (apiData.discount
                                ? apiData.price - apiData.discount
                                : apiData.price
                            ).toLocaleString()
                        )}
                    </h2>
                    <h2 className="w-[30%] text-gray-600 dark:text-white">
                        ریال/ماهیانه
                    </h2>
                </div>
                <div className="infoContainer mb-4 flex flex-col">
                    <div className="row mb-4 flex items-center justify-between">
                        <div className="infoGroup flex">
                            <img className="ml-2 w-5" src={cpuIcon} />
                            <span className="dark:text-white">Traffic:</span>
                            <span className="dark:text-green-400">
                                {apiData.trafficCapacity}
                            </span>
                        </div>

                        <div className="infoGroup flex">
                            <img className="ml-2 w-5" src={ramIcon} />
                            <span className="dark:text-white">RAM:</span>
                            <span className="dark:text-green-400">
                                {apiData.ramCapcity} گیگ
                            </span>
                        </div>
                    </div>
                    <div className="row flex items-center justify-between">
                        <div className="infoGroup flex">
                            <img className="ml-2 w-5" src={cpuIcon} />
                            <span className="dark:text-white">CPU:</span>
                            <span className="dark:text-green-400">
                                {apiData.cpuCapacity} هسته
                            </span>
                        </div>
                        <div className="infoGroup flex">
                            <img className="ml-2 w-5" src={cpuIcon} />
                            <span className="dark:text-white">SSD:</span>
                            <span className="dark:text-green-400">
                                {apiData.storageCapacity} گیگ
                            </span>
                        </div>
                    </div>
                </div>
                <select
                    name="duration"
                    id="duration"
                    className="mt-8 rounded-md p-3 dark:bg-black dark:text-white"
                >
                    <option value="1month">۱ ماهه</option>
                    <option value="1month">۳ ماهه</option>
                    <option value="1month">۶ ماهه</option>
                </select>
                <button
                    className="relative my-4 rounded-3xl bg-gradient-to-l from-green-600 to-green-500 py-3 font-bold text-white"
                    onClick={() => setSelectedPlanID(apiData.id)}
                >
                    انتخاب
                    <span className="check-button absolute right-0 mr-7"></span>
                </button>
            </div>
        </>
    );
}

export default CloudPackageGroup;
