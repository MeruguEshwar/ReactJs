import axios from "axios";
const baseUrl = "http://localhost:3000/Employee";


class RegisterSerivce{
    createuser(user){
        return axios.post(baseUrl,user);
    }

    getUser(id){
        return axios.get(`${baseUrl}/${id}`);
    }

    getuser(){
        return axios.get(baseUrl);
    }

    UpdateUser(id,user){
        return axios.put(`${baseUrl}/${id}`,user);
    }
}

export default new RegisterSerivce()