import { FINDING_ITEMS } from "../utils/FindingItems"

const findingItems = FINDING_ITEMS

const DeckBuilder = () => {
  return [...findingItems, ...findingItems].map((item,i)=>({id:i, item, flipped:false, matched:false})).sort(()=>Math.random() - 0.5);
}

export default DeckBuilder