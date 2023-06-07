export function englishToFarsi(inp: string) {
    let values = {
        "0": "۰",
        "1": "۱",
        "2": "۲",
        "3": "۳",
        "4": "۴",
        "5": "۵",
        "6": "۶",
        "7": "۷",
        "8": "۸",
        "9": "۹",
    };

    return [...inp]
        .map((el) =>
            Object.hasOwn(values, el) ? values[el as keyof typeof values] : el
        )
        .join("");
}
