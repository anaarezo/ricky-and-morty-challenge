import axios from "axios";

const rickyAndMortyAPI = axios.create({
  baseURL: "https://rickandmortyapi.com/api",
});


export default rickyAndMortyAPI;