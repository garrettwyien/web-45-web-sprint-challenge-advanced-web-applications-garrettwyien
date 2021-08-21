import React, { useEffect } from 'react';
import axiosWithAuth from '../helpers/axiosWithAuth';
import { Redirect } from 'react-router-dom';

const Logout = ()=>{
    useEffect(()=>{
        axiosWithAuth()
            .post('/logout')
            .then(res=>{
                localStorage.removeItem("token");
                console.log(res);
        });
    },[]);
    return(
        <Redirect to="/"/>
    );
};

export default Logout;