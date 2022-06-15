import axios from 'axios';

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'

const options = {
  method: 'GET',
  url: URL,
  params: {
    bl_latitude: '11.847676',
    tr_latitude: '12.838442',
    bl_longitude: '109.095887',
    tr_longitude: '109.149359',
  },
  headers: {
    'X-RapidAPI-Key': 'a141ef43d1msh5debbef901cb633p111c8djsn1093d0fb16bd',
    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});

export const getPlacesData = async () => {
  try {
    const {data: { data }} = await axios.get(URL, options);
    return data;
  } catch(e){
    console.log(e);
  }
}