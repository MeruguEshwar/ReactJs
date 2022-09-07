import axios from "axios";
const url = "https://fakestoreapi.com/products";

class ProductDataService{
    getAllProducts(){
        return axios.get(url);
    }

    getProduct(id){
        return axios.get(`${url}/${id}`);
    }
}

export default new ProductDataService()