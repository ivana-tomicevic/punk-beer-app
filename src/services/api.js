import axios from "axios";

const url = "https://api.punkapi.com/v2";

export const fetchBeerList = async () => {
  try {
    return await axios.get(`${url}/beers`);
  } catch (error) {
    return error;
  }
};

export const searchBeer = async (query) => {
  try {
    return await axios
      .get(`${url}/beers?beer_name=${query}`)
      .then((response) => console.log(response.json()));
  } catch (error) {
    return error;
  }
};
