// Imports go first
import { firePottery } from './Kiln.js';
import { toSellOrNotToSell } from './PotteryCatalog.js';
import { makePottery } from './PotteryWheel.js';


// Make 5 pieces of pottery at the wheel
let mug = makePottery("Mug", 2, 4)
let bowl = makePottery("Bowl", 3, 5)
let platter = makePottery("Platter", 5, 9)
let vase = makePottery("Vase", 4, 10)
let glass = makePottery("Glass", 1, 5)


// Fire each piece of pottery in the kiln
let firedMug = firePottery(mug, 2201)
let firedBowl = firePottery(bowl, 2200)
let firedPlatter = firePottery(platter, 2199)
let firedVase = firePottery(vase, 1200)
let firedGlass = firePottery(glass, 3000)

// Determine which ones should be sold, and their price
let finalMug = toSellOrNotToSell(firedMug)
let finalBowl = toSellOrNotToSell(firedBowl)
let finalPlatter = toSellOrNotToSell(firedPlatter)
let finalVase = toSellOrNotToSell(firedVase)
let finalGlass = toSellOrNotToSell(firedGlass)

// Invoke the component function that renders the HTML list

