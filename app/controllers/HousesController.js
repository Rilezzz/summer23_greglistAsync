import { AppState } from "../AppState.js";
import { housesService } from "../services/HousesService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";





function _drawHouses() {
  const houses = AppState.houses
  let template = ''
  houses.forEach(house => template += house.housesTemplate)
  setHTML('houses', template)
}






export class HousesController {
  constructor() {
    console.log('House Controller Loaded')

    this.getHouses()
    _drawHouses()
    AppState.on('houses', _drawHouses)
  }

  async getHouses() {
    try {
      await housesService.getHouses()
    } catch (error) {
      console.error(error);
      Pop.error(error.message)
    }
  }
}

