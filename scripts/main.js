//importing function that uses data from each array
import { useFish } from './fish/FishDataProvider.js'
import { useTips } from './tips/TipDataProvider.js'
import { useLocation } from './locations/LocationDataProvider.js'


//import function that lists all data from array
import { FishList } from './fish/FishList.js'
import { TipList } from './tips/TipList.js'
import { LocationList } from './locations/LocationList.js'


//create a copy of useFish naming it allTheFish
const allTheFish = useFish()
const allTheTips = useTips()
const allTheLocations = useLocation()


//loop through array and console.log
for (const fish of allTheFish) {
    console.log(fish)
}
for (const tip of allTheTips) {
    console.log(tip)
}

for (const location of allTheLocations) {
    console.log(location)
}

FishList()
TipList()
LocationList()
