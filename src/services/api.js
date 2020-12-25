import axios from "axios";

const url = "https://api.punkapi.com/v2/beers?page=2&per_page=80";

export const fetchBeerList = async () => {
  try {
    return await axios.get(`${url}`);
  } catch (error) {
    return error;
  }
};

export const fetchRandomBeer = async () => {
  try {
    return await axios.get("https://api.punkapi.com/v2/beers/random");
  } catch (error) {
    return error;
  }
};
