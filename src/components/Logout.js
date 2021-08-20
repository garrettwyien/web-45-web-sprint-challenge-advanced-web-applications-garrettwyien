import React, { useEffect } from 'react';
import axiosWithAuth from '../helpers/axiosWithAuth';

const Logout = (props)=>{
    useEffect(()=>{
        axiosWithAuth()
        .post('/logout')
        .then(res=>{
            localStorage.removeItem("token");
            props.history.push('/login');
        });
    }, []);
    return(
        <div>You are logged out.</div>
    );
};

export default Logout;