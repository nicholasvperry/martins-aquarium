const tipCollection = [

    {
        tanks: "Saltwater",
        cleaning: "Once a week",
        salinity: "VERY SALTY",
        temperature: 100,
        thoughts: "Saltwater tanks have cooler fish"
    },
    {
        tanks: "Feshwater",
        cleaning: "Bi-Weekly",
        salinity: "Chlorine",
        temperature: 78,
        thoughts: "Freshwater tanks are easier than fresh water"
    },
    {
        tanks: "Saltwater",
        cleaning: "Once a week",
        salinity: "VERY SALTY",
        temperature: 100,
        thoughts: "Saltwater tanks are easier than fresh water"
    },


]

export const useTips = () => {
    return tipCollection.slice()
}