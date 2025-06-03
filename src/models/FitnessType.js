import axios from 'axios'
import React, { useEffect, useState } from "react";

export default function getAll() {
  const [records, setRecords] = useState("");
  console.log("AA");
  const getRecords = async () => {
    const { data } = await axios.get(`http://localhost:5050/api/FitnessType/GetAll`);
    setRecords(data);
  }
  useEffect(() => {
    getRecords();
  }, []);
  console.log("Model", records);
  return records;
}

export async function getByID(id) {
  let row = {}
  await axios.get(`http://localhost:5050/api/FitnessType/GetByID?id=` + id).then(response => {
    console.log("getByID Create RESPONSE", response);
    row = response;
    console.log("getByID SSSSSS", row);
  })
    .catch(error => {
      console.log(error);
      throw error;
    });
  return row;
}

export async function insert(record) {

  let row = {}
  await axios.post('http://localhost:5050/api/FitnessType/Insert', record)
    .then(response => {
      console.log("Create RESPONSE", response);
      row = response;
      console.log("SSSSSS", row);
    })
    .catch(error => {
      console.log(error);
      throw error;
    });
  return row;
}

export async function edit(record) {
  let row = {}
  await axios.patch('http://localhost:5050/api/FitnessType/Update', record)
    .then(response => {
      console.log("Edit RESPONSE", response);
      row = response;
      console.log("Edit SSSSSS", row);
    })
    .catch(error => {
      console.log(error);
      throw error;
    });
  return row;
}

export async function remove(id) {
  let row = {}
  await axios.delete('http://localhost:5050/api/FitnessType/Delete/' + id)
    .then(response => {
      console.log("Delete RESPONSE", response);
    })
    .catch(error => {
      console.log(error);
      throw error;
    });
  return row;
}
