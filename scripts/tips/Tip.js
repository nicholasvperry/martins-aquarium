/**
 *  Tips which renders individual tip objects as HTML 
 */
 export const Tips = (tip) => {
    return `
        <section class="tip card">
           
            <div class="tip_tank">${tip.tanks}</div>
            <div class="tip_cleaning">${tip.cleaning}</div>
            <div class="tip_salinity">${tip.salinity}</div>
            <div class="tip_location">${tip.temperature}</div>
            <div class="tip_thoughts">${tip.thoughts}</div>
        </section>
    `
}
