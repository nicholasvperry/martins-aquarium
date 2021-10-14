//fishcollection is the array
const fishCollection = [
    
    //each object has a position (not a name) in curly brackets and comma seperating objects
    {
        //each property has a value with comma seperating properties
        name: "Bart",
        food: "Crustaceans",
        species: "Clown Fish",
        length: "Miniscule",
        location: "Amazon"
    },
    {
        //each property has a value with comma
        name: "George",
        food: "Toxic Waiste",
        species: "Gold Fish",
        length: "Hefty",
        location: "Ohio River"
    },
    {
        //each property has a value with comma
        name: "Rudolph",
        food: "Oatmeal",
        species: "Deer Fish",
        length: "Long",
        location: "North Atlantic"
    },
    {
        //each property has a value with comma
        name: "Bob",
        food: "garbage",
        species: "Blob Fish",
        length: "",
        location: ""
    },
    {
        //each property has a value with comma
        name: "",
        food: "",
        species: "",
        length: "",
        location: ""
    } 
]

// This is new code. This is the new way to declare a function
//exporting data naming it useFish
export const useFish = () => {
    return fishCollection.slice()
}

//fishCollection.slice() makes a copy of the fishCollection array