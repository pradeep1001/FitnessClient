import { NavLink, useNavigate, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react"
import axios from 'axios'
import { API_HOST , LABEL_CLASS_NAME, TEXTBOX_CLASS_NAME} from '../Constants.js';
import PageHeading from "../components/PageHeading";

import SButton from "../components/SButton";
import CNavLink from "../components/CNavLink";

export default function FitnessClassOperation() {
    console.log("FitnessClassOperation Called");
    const { id, operation } = useParams();
    const navigate = useNavigate();
    const [record, setRecord] = useState({
        "fitnessClassName": ""
    });
    const [fitnessTypeList, setFitnessTypeList] = useState([]);
    const [trainerList, setTrainerList] = useState([]);

    React.useEffect(() => {
        axios.get(`${API_HOST}FitnessType/GetAllNameID`).then(response => {
            console.log("GetAllNameID Create RESPONSE", response.data);
            setFitnessTypeList(response.data);
        }).catch(error => {
                console.log(error);
                throw error;
        });
        axios.get(`${API_HOST}Trainer/GetAllNameID`).then(response => {
            console.log("GetAllNameID Create RESPONSE", response.data);
            setTrainerList(response.data);
        }).catch(error => {
                console.log(error);
                throw error;
        });
        if (operation == "Edit" || operation == "Delete") {
            console.log("getByID Called");
            axios.get(`${API_HOST}FitnessClass/GetByID?id=${id}`).then(response => {
                console.log("Insert Create RESPONSE", response.data);
                setRecord(response.data);
            }).catch(error => {
                    console.log(error);
                    throw error;
            });
        }
    }, [])
    
    
    console.log("fitnessTypeList", fitnessTypeList)

    const handelInput = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        setRecord({ ...record, [name]: value });
        console.log(handelInput, record);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (operation == "Create") {
            
            axios.post(`${API_HOST}FitnessClass/Insert`, record).then((response) => {
                navigate("/Dashboard/FitnessClassListing");
            }).catch(err => {
                console.log(err);
            });
        }
        if (operation == "Edit" ) {
            axios.patch(`${API_HOST}FitnessClass/Update`, record).then((response) => {
                navigate("/Dashboard/FitnessClassListing")
            }).catch(err => {
                console.log(err);
            });
        }
        if (operation == "Delete" ) {
            axios.delete(`${API_HOST}FitnessClass/Delete/${id}`).then((response) => {
                navigate("/Dashboard/FitnessClassListing")
            }).catch(err => {
                console.log(err);
            });
        }
    }
    return (
        <>
            <PageHeading heading="Fitness Class Operation -&gt;" operation={operation} />

            <form onSubmit={handleSubmit}>
                <div className="mx-auto max-w-[98%] my-auto">

                    <div className="flex flex-row">
                        <label  htmlFor="fitnessClassName" className={LABEL_CLASS_NAME}>Fitness Class Name</label>
                        <input  type="text" name="fitnessClassName" id="fitnessClassName" onChange={handelInput} value={record.fitnessClassName || ""}  className={TEXTBOX_CLASS_NAME} disabled={operation == "Delete"} required maxLength="50"/>
                        <label  htmlFor="fitnessTypeID" className={LABEL_CLASS_NAME}>Fitness Type</label>
                        <select name="fitnessTypeID" id="fitnessTypeID" onChange={handelInput} className={TEXTBOX_CLASS_NAME} required>
                        <option key="None" value="">Select a Fitness Type</option>
                            {
                                fitnessTypeList.map((row) => (
                                    <option key={row._id} value={row._id} selected={row._id == record.fitnessTypeID}>{row.fitnessTypeName}</option>
                                ))
                            }
                            
                        </select>
                        
                    </div>
                    <div className="flex flex-row mt-2">
                    <label  htmlFor="trainerID" className={LABEL_CLASS_NAME}>Trainer</label>
                        <select name="trainerID" id="trainerID" onChange={handelInput} className={TEXTBOX_CLASS_NAME} required>
                        <option key="None" value="">Select a Trainer</option>
                            {
                                trainerList.map((row) => (
                                    <option key={row._id} value={row._id} selected={row._id == record.trainerID}>{row.trainerName}</option>
                                ))
                            }
                            
                        </select>
                        <label  htmlFor="amount" className={LABEL_CLASS_NAME}>Amount</label>
                        <input  type="number" name="amount" id="amount" onChange={handelInput} value={record.amount || 0}  className={TEXTBOX_CLASS_NAME} disabled={operation == "Delete"}/>
                        
                    </div>
                    <div className="flex flex-row mt-2">
                        <label  htmlFor="fromDate" className={LABEL_CLASS_NAME}>From Date</label>
                        <input  type="date" name="fromDate" id="fromDate" onChange={handelInput} value={record.fromDate || ""}  className={TEXTBOX_CLASS_NAME} disabled={operation == "Delete"}/>
                        <label  htmlFor="toDate" className={LABEL_CLASS_NAME}>To Date</label>
                        <input  type="date" name="toDate" id="toDate" onChange={handelInput} value={record.toDate || ""}  className={TEXTBOX_CLASS_NAME} disabled={operation == "Delete"}/>
                    </div>
                    <div className="flex flex-row mt-2">
                        <label  htmlFor="noOfClasses" className={LABEL_CLASS_NAME}>No Of Classes</label>
                        <input  type="number" name="noOfClasses" id="noOfClasses" onChange={handelInput} value={record.noOfClasses || 0}  className={TEXTBOX_CLASS_NAME} disabled={operation == "Delete"}/>
                        <label  htmlFor="duration" className={LABEL_CLASS_NAME}>Duration</label>
                        <input  type="number" name="duration" id="duration" onChange={handelInput} value={record.duration || 0}  className={TEXTBOX_CLASS_NAME} disabled={operation == "Delete"}/>
                    </div>
                    
                    
                </div>
                <div className="mt-6 mx-auto max-w-[40%] my-auto">
                        <div className="grid grid-cols-2 gap-1">
                            <SButton operation={operation} />
                            <CNavLink toLink="/Dashboard/FitnessClassListing" anchortext="Cancel" />
                        </div>
                    </div>
            </form>
        </>
    )
}