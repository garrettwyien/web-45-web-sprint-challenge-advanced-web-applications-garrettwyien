import axios from 'axios';
import axiosWithAuth from '../helpers/axiosWithAuth';

const fetchColorService =()=>{
    // const token=localStorage.getItem("token");
    // axios.get('http://localhost:5000/api/colors', {
    //     headers: {
    //         authorization: token
    //     }})
    //     .then(res=>{
    //         const array = [];
    //         res.data.map(elem=>{
    //             array.push(elem);
    //         });
    //         return array;
    //     })
    //     .catch(err=>{console.log(err)})
    // };
        axiosWithAuth()
            .get('/colors')
            .then(res=>res.data)
            .catch(err=>{
            console.log(err);
        });
    };
export default fetchColorService;

//I can't get this to return a usable object. 