//FishList which renderes individual objects as HTML
import { useFish } from "./FishDataProvider.js"
import { Fish } from "./Fish.js"

//Imports Fish function from fish.js

export const FishList = () => {
    // Get a reference to the `<article class="content">` element
    const fishContainer = document.querySelector("#FishList")
    //Create varianle for loop below
    const allFish = useFish()

    // Generate all of the HTML for all of the fish
    let fishHTMLRepresentations = ""
    for (const singleFishObject of allFish) {
        /*
            Invoke the Fish component function
            and pass the current fish object as an argument.
            Each time, add the return value to the
            fishHTMLRepresentations variable with `+=`
        */

        fishHTMLRepresentations += Fish(singleFishObject)
    }



    // Add to the existing HTML in the content element
    fishContainer.innerHTML += `
        <article class="fishList">${fishHTMLRepresentations}</article>`
    
}
