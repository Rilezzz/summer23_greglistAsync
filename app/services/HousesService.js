import { AppState } from "../AppState.js";
import { House } from "../models/House.js";
import { api } from "./AxiosService.js"

class HousesService {

  async getHouses() {
    const res = await api.get('api/houses');
    console.log('Houses Showed Up', res.data)
    const createdHouses = res.data.map(housePojo => new House(housePojo))
    AppState.houses = createdHouses
  }
}

export const housesService = new HousesService()