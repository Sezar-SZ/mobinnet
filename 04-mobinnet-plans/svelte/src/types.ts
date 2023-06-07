export interface Response {
    statusCode: number;
    succeed: boolean;
    data: Data[];
}

export interface Data {
    id: string;
    name: string;
    discount?: number;
    price: number;
    cpuCapacity: number;
    ramCapcity: number;
    storageCapacity: number;
    trafficCapacity: number;
    duration: Duration;
    packageName: string;
    packageType: number;
    durationDays: number;
    discountPercent: number | null;
}

export type Duration = "1 ماهه" | "3 ماهه" | "6 ماهه" | "1 ساله";
