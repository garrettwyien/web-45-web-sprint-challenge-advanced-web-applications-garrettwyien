import React, { useEffect, useState } from "react";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
// import fetchColorService from '../services/fetchColorService';
import axios from "axios";


const BubblePage = () => {
  const [colors, setColors] = useState([]);
  const [editing, setEditing] = useState(false);

  useEffect(()=>{
      const token=localStorage.getItem("token");
      axios.get('http://localhost:5000/api/colors', {
          headers: {
              authorization: token
          }})
          .then(res=>{
            setColors(res.data);
          })
          .catch(err=>{console.log(err)})
  }, []);

  const toggleEdit = (value) => {
    setEditing(value);
  };

  const saveEdit = (editColor) => {
    const token=localStorage.getItem("token");
      axios.put('http://localhost:5000/api/colors/:id', editColor, {
          headers: {
              authorization: token
          }})
          .then(res=>{
            console.log(res.data)
          })
          .catch(err=>{console.log(err)})
  };

  const deleteColor = (colorToDelete) => {
    const token=localStorage.getItem("token");
      axios.delete('http://localhost:5000/api/colors/:id', colorToDelete, {
          headers: {
              authorization: token
          }})
          .then(res=>{
            console.log(res)
          })
          .catch(err=>{console.log(err)})
  };
//I do not understand why the deleteColor function returns a 403 error, but the saveEdit function does not. 
  return (
    <div className="container">
      <ColorList colors={colors} editing={editing} toggleEdit={toggleEdit} saveEdit={saveEdit} deleteColor={deleteColor}/>
      <Bubbles colors={colors}/>
    </div>
  );
};

export default BubblePage;

//Task List:
//1. When the component mounts, make an axios call to retrieve all color data and push to state.
//2. Complete toggleEdit, saveEdit, deleteColor and functions
