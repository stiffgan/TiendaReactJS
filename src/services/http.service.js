import _axios from "axios";
 
const axios = _axios.create({
  baseURL: "https://fakestoreapi.com/products",
  responseType: "json"
});


const GET = (url) => {
    return axios.get(url)
      .then(response => response.data);
}
	
export { GET};