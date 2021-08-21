import React, { useEffect, useState } from "react";
import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import fetchColorService from '../services/fetchColorService';
import axiosWithAuth from "../helpers/axiosWithAuth";


const BubblePage = () => {
  const [colors, setColors] = useState([]);
  const [editing, setEditing] = useState(false);


  useEffect(()=>{
    fetchColorService(setColors)
  }, []);

  const toggleEdit = (value) => {
    setEditing(value);
  };

  const saveEdit = (editColor) => {
    axiosWithAuth()
      .put('/colors/:id', editColor)
      .then(res=>{
        console.log(res);
        console.log(colors);
      })
  };

  const deleteColor = (colorToDelete) => {
    axiosWithAuth()
      .delete('/colors/:id', colorToDelete)
      .then(res=>{
        console.log(res);
      })
  };
//I got stuck here trying to update the state after a color was edited or deleted. In the guided project and module project, res.data returned the entire array of state. In this sprint, res.data only returns the single color. I spent something like 6 hours looking at this unable to figure it out. 
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
