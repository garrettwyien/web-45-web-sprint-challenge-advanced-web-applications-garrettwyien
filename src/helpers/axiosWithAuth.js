import axios from "axios";

//Task List:
//Build and export a function used to send in our authorization token

const axiosWithAuth=()=>{
    const token=localStorage.getItem("token");
    return axios.create({
        headers: {
            authorization: token,
            baseURL: "http://localhost:5000/api"
        }
    });
};

export default axiosWithAuth;
//for some reason, no matter how much i change things, this function always sends the get request to localhost:3000 instead of localhost:5000 and the subsequent axios request 404s. I'm not sure why, but I just worked around it manually. 