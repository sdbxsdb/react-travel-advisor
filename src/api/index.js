import axios from "axios";

const URL =
  "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";

export const getPlacesData = async (sw, ne) => {
  try {
    const {
      data: { data },
    } = await axios.get(URL, {
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
      },
      headers: {
        "X-RapidAPI-Key": "a141ef43d1msh5debbef901cb633p111c8djsn1093d0fb16bd",
        "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
      },
    });
    console.log(data);
    return data;
  } catch (e) {
    console.log(e);
  }
};
