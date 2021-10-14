import { useLocation } from "./LocationDataProvider.js";
import { Location } from "./Location.js";

export const LocationList = () => {
    const locationContainer = document.querySelector("#LocationList")
    const allLocations = useLocation()

    let locationHTMLRepresentations = ""
    for (const singleLocationObject of allLocations) {
        locationHTMLRepresentations += Location(singleLocationObject)
    }

    locationContainer.innerHTML += `<div>${locationHTMLRepresentations}</div>`
}
