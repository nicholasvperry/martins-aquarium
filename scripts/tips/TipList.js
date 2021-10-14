//Import Tips 
import { Tips } from "./Tip.js";
//Import useTips function which is the array of information.
import { useTips } from "./TipDataProvider.js";

export const TipList = () => {
    //Get a reference to the '<article class="content"
    //When refrencing classes have periods ids have #
    const tipContainer = document.querySelector(".tips")
    const allTips = useTips()

    //Generate all of the HTML for all of the fish
    let tipsHTMLRepresentations = ""
    for (const singleTipObject of allTips) {

        tipsHTMLRepresentations += Tips(singleTipObject)
    }

    // Add to the existing HTML in the content element
    tipContainer.innerHTML += `<article class="tips">${tipsHTMLRepresentations}</article>`

}
