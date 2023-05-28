import { useEffect, useState } from "react";
import CloudPackageGroup from "./components/CloudPackageGroup";
import jsonData from "./assets/data.json";
import { Data } from "./types";
import "./App.css";

function App() {
    const [apiData, setApiData] = useState<null | Data[]>(null);
    const [selectedPlanId, setSelectedPlanId] = useState<null | string>(null);

    useEffect(() => {
        setApiData(jsonData.data as Data[]);
    }, []);

    return (
        <>
            <div
                id="app"
                className="h-screen w-screen overflow-x-hidden p-2 dark:bg-[#141414] sm:p-16"
            >
                {apiData && (
                    <div
                        v-if="apiData"
                        className="cardsContainer m-2 grid grid-cols-1 gap-y-14 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                    >
                        {apiData.map((data) => (
                            <CloudPackageGroup
                                key={data.id}
                                apiData={data}
                                selectedPlanId={selectedPlanId}
                                setSelectedPlanID={setSelectedPlanId}
                            />
                        ))}
                    </div>
                )}
            </div>
        </>
    );
}

export default App;
