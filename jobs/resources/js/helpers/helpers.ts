export function formatDate(dateString: string): string {
    const months = [
        "იანვარი",
        "თებერვალი",
        "მარტი",
        "აპრილი",
        "მაისი",
        "ივნისი",
        "ივლისი",
        "აგვისტო",
        "სექტემბერი",
        "ოქტომბერი",
        "ნოემბერი",
        "დეკემბერი",
    ];

    const date = new Date(dateString);

    // დღე და თვე
    const day = date.getDate();
    const month = months[date.getMonth()];

    return `${day.toString().padStart(2, "0")} ${month}`;
}

export const showImage = (imagePath: string) => {
    if (imagePath.includes("logos")) {
        return `/storage//${imagePath}`;
    } else {
        return imagePath;
    }
};
