import axios from 'axios'
import React, { useEffect, useState } from "react";

export default function getAll() {
  const [records, setRecords] = useState("");
  console.log("AA");
  const getRecords = async () => {
    const { data } = await axios.get(`http://localhost:5050/api/Booking/GetAll`);
    setRecords(data);
  }
  useEffect(() => {
    getRecords();
  }, []);
  console.log("Model", records);
  return records;
}

export function getByID(id) {
  const [record, setRecord] = useState("");
  console.log("Fitness Type: getByID", id, `http://localhost:5050/api/Booking/GetByID?id=`+id);
  const getRecord = async () => {
    const { data } = await axios.get(`http://localhost:5050/api/Booking/GetByID?id=`+id);
    setRecord(data);
  }
  useEffect(() => {
    getRecord();
  }, []);
  console.log("Model", record);
  return record;
}

export function insert(row) {
  const [record, setRecord] = useState("");
  console.log("Fitness Type: insert", row);
  const insertRecord = async () => {
    const { data } = await axios.post(`http://localhost:5050/api/Booking/Insert`, row);
    setRecord(data);
  }
  useEffect(() => {
    insertRecord();
  }, []);
  console.log("Insert", record);
  return record;
}

export function edit(row) {
  const [record, setRecord] = useState("");
  console.log("Fitness Type: edit", row);
  const editRecord = async () => {
    const { data } = await axios.patch(`http://localhost:5050/api/Booking/Insert`, row);
    setRecord(data);
  }
  useEffect(() => {
    editRecord();
  }, []);
  console.log("edit", record);
  return record;
}
