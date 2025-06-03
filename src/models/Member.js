import axios from 'axios'
import React, { useEffect, useState } from "react";
import { API_HOST } from '../Constants.js';




export function insert(row) {
  
  
  
    insertRecord();
  
  
}

export function edit(row) {
  const [record, setRecord] = useState("");
  const editRecord = async () => {
    const { data } = await axios.patch(`${API_HOST}Member/Update`, row);
    setRecord(data);
  }
  useEffect(() => {
    editRecord();
  }, []);
  return record;
}
export async function remove(id) {
  let row = {}
  await axios.delete('${API_HOST}Member/Delete/' + id)
    .then(response => {
      console.log("Delete RESPONSE", response);
    })
    .catch(error => {
      console.log(error);
      throw error;
    });
  return row;
}