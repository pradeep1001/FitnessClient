import { NavLink, useNavigate, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react"
import axios from 'axios'
import { API_HOST, LABEL_CLASS_NAME, TEXTBOX_CLASS_NAME } from '../Constants.js';
import PageHeading from "../components/PageHeading";

import SButton from "../components/SButton";
import CNavLink from "../components/CNavLink";

export default function BookingOperation() {
   
    console.log("BookingOperation Called");
    const { id, operation } = useParams();
    const navigate = useNavigate();
    const [record, setRecord] = useState({});
    const [fitnessClassList, setFitnessClassList] = useState([]);
    const [memberList, setMemberList] = useState([]);

    React.useEffect(() => {
        console.log("Current memberList:", memberList);

        axios.get(`${API_HOST}FitnessClass/GetAllNameID`).then(response => {
            console.log("GetAllNameID Create RESPONSE", response.data);
           
            setFitnessClassList(response.data);
        }).catch(error => {
            console.log(error);
            throw error;
        });
        axios.get(`${API_HOST}Member/GetAllNameID`).then(response => {
            console.log("GetAllNameID Create RESPONSE", response.data);
            console.log("Raw API response:", response);
            console.log("Member data:", response.data);
            setMemberList(response.data);
            response.data.forEach(member => {
                console.log('Member:', member);
                console.log('_id:', member._id);
                console.log('memberName:', member.memberName);
            });
        }).catch(error => {
            console.log("API Error:", error);
            console.log(error);
            throw error;
        });
        if (operation == "Edit" || operation == "Delete") {
            console.log("getByID Called", `${API_HOST}Booking/GetByID?id=${id}`);
            axios.get(`${API_HOST}Booking/GetByID?id=${id}`).then(response => {
                console.log("Insert Create RESPONSE", response.data);
                setRecord(response.data.data);
            }).catch(error => {
                console.log(error);
                throw error;
            });
        }
    }, [])


    console.log("fitnessClassList", fitnessClassList)

    const handelInput = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        setRecord({ ...record, [name]: value });
        console.log(handelInput, record);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (operation == "Create") {
            console.log("Booking record", record)
            axios.post(`${API_HOST}Booking/Insert`, record).then((response) => {
                navigate("/Dashboard/BookingListing");
            }).catch(err => {
                console.log(err);
            });
        }
        if (operation == "Edit") {
            axios.patch(`${API_HOST}Booking/Update`, record).then((response) => {
                navigate("/Dashboard/BookingListing")
            }).catch(err => {
                console.log(err);
            });
        }
        if (operation == "Delete") {
            axios.delete(`${API_HOST}Booking/Delete/${id}`).then((response) => {
                navigate("/Dashboard/BookingListing")
            }).catch(err => {
                console.log(err);
            });
        }
    }
 
    return (
        <>
            <PageHeading heading="Booking Operation -&gt;" operation={operation} />

            <form onSubmit={handleSubmit}>
                <div className="mx-auto max-w-[98%] my-auto">

                    <div className="flex flex-row">
                        <label htmlFor="effDate" className={LABEL_CLASS_NAME}>Eff Date</label>
                        <input type="date" name="effDate" id="effDate" onChange={handelInput} value={record.effDate || "" } className={TEXTBOX_CLASS_NAME} disabled={operation == "Delete"} required/>
                        <label htmlFor="amount" className={LABEL_CLASS_NAME}>Amount</label>
                        <input type="number" name="amount" id="amount" onChange={handelInput} value={record.amount || ""} className={TEXTBOX_CLASS_NAME} disabled={operation == "Delete"} required/>

                    </div>
                    <div className="flex flex-row mt-2">
                        <label htmlFor="fitnessClassID" className={LABEL_CLASS_NAME}>Fitness Type</label>
                        <select name="fitnessClassID" id="fitnessClassID" onChange={handelInput} value={record.fitnessClassID} className={TEXTBOX_CLASS_NAME} required>
                            <option key="None" value="">Select a Fitness Class</option>
                            {
                                fitnessClassList.map((row) => (
                                    <option key={row._id} value={row._id} >{row.fitnessClassName}</option>
                                ))
                            }

                        </select>
                        <label htmlFor="memberID" className={LABEL_CLASS_NAME}>Member</label>
                        <select name="memberID" id="memberID" onChange={handelInput} value={record.memberID} className={TEXTBOX_CLASS_NAME} required>
                            <option key="None" value="">Select a Member</option>
                            {
                                
                                memberList.map((row) => (
                                    <option key={row._id} value={row._id} >{row.memberName}</option>
                                ))  
                            }

                        </select>
                        

                    </div>
                    
                </div>
                <div className="mt-6 mx-auto max-w-[40%] my-auto">
                    <div className="grid grid-cols-2 gap-1">
                        <SButton operation={operation} />
                        <CNavLink toLink="/Dashboard/BookingListing" anchortext="Cancel" />
                    </div>
                </div>
            </form>
        </>
    )
}