import { NavLink, useNavigate, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react"
import axios from 'axios'
import { API_HOST, LABEL_CLASS_NAME, TEXTBOX_CLASS_NAME } from '../Constants.js';
import PageHeading from "../components/PageHeading";

import SButton from "../components/SButton";
import CNavLink from "../components/CNavLink";

export default function ClassScheduleOperation() {
    console.log("ClassScheduleOperation Called");
    const { id, operation } = useParams();
    const navigate = useNavigate();
    const [record, setRecord] = useState({});
    const [bookingList, setBookingList] = useState([]);

    React.useEffect(() => {
        
        axios.get(`${API_HOST}Booking/GetAll`).then(response => {
            console.log("GetAll Create RESPONSE", response.data);
            setBookingList(response.data);
        }).catch(error => {
            console.log(error);
            throw error;
        });
        if (operation == "Edit" || operation == "Delete") {
            console.log("getByID Called");
            axios.get(`${API_HOST}ClassSchedule/GetByID?id=${id}`).then(response => {
                console.log("Insert Create RESPONSE", response.data);
                //response.data.data.effDate = new Date(response.data.data.effDate).toISOString().split('T')[0];
                setRecord(response.data.data);
            }).catch(error => {
                console.log(error);
                throw error;
            });
        }
    }, [])


    console.log("bookingList", bookingList)

    const handelInput = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        setRecord({ ...record, [name]: value });
        console.log(handelInput, record);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (operation == "Create") {

            axios.post(`${API_HOST}ClassSchedule/Insert`, record).then((response) => {
                navigate("/Dashboard/ClassScheduleListing");
            }).catch(err => {
                console.log(err);
            });
        }
        if (operation == "Edit") {
            axios.patch(`${API_HOST}ClassSchedule/Update`, record).then((response) => {
                navigate("/Dashboard/ClassScheduleListing")
            }).catch(err => {
                console.log(err);
            });
        }
        if (operation == "Delete") {
            axios.delete(`${API_HOST}ClassSchedule/Delete/${id}`).then((response) => {
                navigate("/Dashboard/ClassScheduleListing")
            }).catch(err => {
                console.log(err);
            });
        }
    }
    return (
        <>
            <PageHeading heading="Class Schedule Operation -&gt;" operation={operation} />

            <form onSubmit={handleSubmit}>
                <div className="mx-auto max-w-[98%] my-auto">
                <div className="flex flex-row mt-2">
                        
                        <label htmlFor="bookingID" className={LABEL_CLASS_NAME}>Booking</label>
                        <select 
                           name="bookingID" 
                           id="bookingID" 
                           onChange={handelInput} 
                           className={TEXTBOX_CLASS_NAME} 
                           required 
                           value={record.bookingID}
>                       
                           <option key="None" value="">Select a Booking</option>
                           {
                               // First remove duplicates based on member._id
                               bookingList
                                   .filter((booking, index, self) => 
                                       index === self.findIndex((b) => 
                                           b.member[0]._id === booking.member[0]._id
                                       )
                                   )
                                   .map((row) => (
                                       <option 
                                           key={row._id} 
                                           value={row._id}
                                       >
                                           {row.member[0].memberName}
                                       </option>
                                   ))
                           }
                  </select>
                        

                    </div>
                    <div className="flex flex-row mt-2">
                        <label htmlFor="effDate" className={LABEL_CLASS_NAME}>Eff Date</label>
                        <input type="date" name="effDate" id="effDate" onChange={handelInput} value={record.effDate || ""} className={TEXTBOX_CLASS_NAME} disabled={operation == "Delete"} required/>
                        <label htmlFor="classNbr" className={LABEL_CLASS_NAME}>Class Number</label>
                        <input type="number" name="classNbr" id="classNbr" onChange={handelInput} value={record.classNbr || ""} className={TEXTBOX_CLASS_NAME} disabled={operation == "Delete"} required/>

                    </div>
                    
                    
                </div>
                <div className="mt-6 mx-auto max-w-[40%] my-auto">
                    <div className="grid grid-cols-2 gap-1">
                        <SButton operation={operation} />
                        <CNavLink toLink="/Dashboard/ClassScheduleListing" anchortext="Cancel" />
                    </div>
                </div>
            </form>
        </>
    )
}