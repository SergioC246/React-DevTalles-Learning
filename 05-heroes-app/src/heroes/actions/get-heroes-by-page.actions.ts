import { heroApi } from "../api/hero.api"


export const getHeroesByPage = async() => {

  const response = await heroApi.get(`/`)
}