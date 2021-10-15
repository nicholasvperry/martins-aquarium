//Locations is where fish were harvested
const locationCollection = [ 
    {
        river: "Ohio River"
    }, 
    {
        river: "New River"
    },
    {
        river: "Mississippi River"
    },
    {
        river: "Nile River"
    },
    {
        river: "Kanawha River"
    },
    {
        river: "Mud River"
    },
    {
        river: "Amazon River"
    }
    
]

//Make function to export data in the array
export const useLocation = () => {
    return locationCollection.slice()
}


