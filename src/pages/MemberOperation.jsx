import { NavLink, useNavigate, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react"
import axios from 'axios'
import { insert, edit, remove } from "../models/Member";
import { API_HOST , LABEL_CLASS_NAME, TEXTBOX_CLASS_NAME} from '../Constants.js';
import PageHeading from "../components/PageHeading";

import LabelTextBox from "../components/LabelTextBox";
import useGetByID from "../models/Member/useGetByID";
import EmpytyCells from "../components/EmptyCells";
import SButton from "../components/SButton";
import CNavLink from "../components/CNavLink";

export default function MemberOperation() {
    console.log("MemberOperation Called");
    const { id, operation } = useParams();
    const navigate = useNavigate();
    const [record, setRecord] = useState({
        "memberName": ""
    });

    React.useEffect(() => {
        if (operation === "Edit" || operation === "Delete") {
            axios.get(`${API_HOST}Member/GetByID?id=${id}`)
                .then(response => {
                    if (response.data) {
                        setRecord(response.data);
                    } else {
                        setRecord({ memberName: "" }); // Fallback
                    }
                })
                .catch(error => {
                    console.error("Error fetching member:", error);
                    setRecord({ memberName: "" }); // Fallback on error
                });
        }
        // if (operation == "Edit" || operation == "Delete") {
        //     console.log("getByID Called");
        //     axios.get(`http://localhost:5050/api/Member/GetByID?id=` + id).then(response => {
        //         console.log("getByID Create RESPONSE", response.data);
        //         setRecord(response.data.data);
        //         console.log("getByID SSSSSS", record);
                
        //     })
        //         .catch(error => {
        //             console.log(error);
        //             throw error;
        //         });
            

        // }
    }, [])
    
    
    

    const handelInput = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        setRecord({ ...record, [name]: value });
        console.log(handelInput, record);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (operation == "Create") {
            
            axios.post(`${API_HOST}Member/Insert`, record).then((response) => {
                navigate("/Dashboard/MemberListing");
            }).catch(err => {
                console.log(err);
            });
        }
        if (operation == "Edit" ) {
            axios.patch(`${API_HOST}Member/Update/${id}`, record).then((response) => {
                navigate("/Dashboard/MemberListing")
            }).catch(err => {
                console.log(err);
            });
        }
        if (operation == "Delete" ) {
            axios.delete(`${API_HOST}Member/Delete/${id}`).then((response) => {
                navigate("/Dashboard/MemberListing")
            }).catch(err => {
                console.log(err);
            });
        }
    }
    return (
        <>
            <PageHeading heading="Member Operation -&gt;" operation={operation} />

            <form onSubmit={handleSubmit}>
                <div className="mx-auto max-w-[98%] my-auto">

                    <div className="flex flex-row">
                        <label  className={LABEL_CLASS_NAME}>Member Name</label>
                        <input  type="text" name="memberName" id="memberName" onChange={handelInput} value={record.memberName || ""}  className={TEXTBOX_CLASS_NAME} disabled={operation == "Delete"}/>
                        <label  className={LABEL_CLASS_NAME}>Password</label>
                        <input  type="password" name="password" id="password" onChange={handelInput} value={record.password || ""}  className={TEXTBOX_CLASS_NAME} disabled={operation == "Delete"}/>
                    </div>
                    <div className="flex flex-row mt-2">
                        <label  className={LABEL_CLASS_NAME}>Address 1</label>
                        <input  type="text" name="address1" id="address1" onChange={handelInput} value={record.address1 || ""}  className={TEXTBOX_CLASS_NAME} disabled={operation == "Delete"}/>
                        <label  className={LABEL_CLASS_NAME}>Address 2</label>
                        <input  type="text" name="address2" id="address2" onChange={handelInput} value={record.address2 || ""}  className={TEXTBOX_CLASS_NAME} disabled={operation == "Delete"}/>
                    </div>
                    <div className="flex flex-row mt-2">
                        <label  className={LABEL_CLASS_NAME}>City</label>
                        <input  type="text" name="city" id="city" onChange={handelInput} value={record.city || ""}  className={TEXTBOX_CLASS_NAME} disabled={operation == "Delete"}/>
                        <label  className={LABEL_CLASS_NAME}>State</label>
                        <input  type="text" name="state" id="state" onChange={handelInput} value={record.state || ""}  className={TEXTBOX_CLASS_NAME} disabled={operation == "Delete"}/>
                    </div>
                    <div className="flex flex-row mt-2">
                        <label  className={LABEL_CLASS_NAME}>Pincode</label>
                        <input  type="text" name="pincode" id="pincode" onChange={handelInput} value={record.pincode || ""}  className={TEXTBOX_CLASS_NAME} disabled={operation == "Delete"}/>
                        <label  className={LABEL_CLASS_NAME}>Country</label>
                        <input  type="text" name="country" id="country" onChange={handelInput} value={record.country || ""}  className={TEXTBOX_CLASS_NAME} disabled={operation == "Delete"}/>
                    </div>
                    <div className="flex flex-row mt-2">
                        <label  className={LABEL_CLASS_NAME}>Email ID</label>
                        <input  type="email" name="emailid" id="emailid" onChange={handelInput} value={record.emailid || ""}  className={TEXTBOX_CLASS_NAME} disabled={operation == "Delete"}/>
                        <label  className={LABEL_CLASS_NAME}>Contact Number</label>
                        <input  type="text" name="contactNumber" id="contactNumber" onChange={handelInput} value={record.contactNumber || ""}  className={TEXTBOX_CLASS_NAME} disabled={operation == "Delete"}/>
                    </div>
                    <div className="flex flex-row mt-2">
                        <label  className={LABEL_CLASS_NAME}>DoB</label>
                        <input  type="date" name="dob" id="dob" onChange={handelInput} value={record.dob || ""}  className={TEXTBOX_CLASS_NAME} disabled={operation == "Delete"}/>
                        <label  className={LABEL_CLASS_NAME}>Aadhar Number</label>
                        <input  type="text" name="aadharNumber" id="aadharNumber" onChange={handelInput} value={record.aadharNumber || ""}  className={TEXTBOX_CLASS_NAME} disabled={operation == "Delete"}/>
                    </div>
                </div>
                <div className="mt-6 mx-auto max-w-[40%] my-auto">
                        <div className="grid grid-cols-2 gap-1">
                            <SButton operation={operation} />
                            <CNavLink toLink="/Dashboard/MemberListing" anchortext="Cancel" />
                        </div>
                    </div>
            </form>
        </>
    )
}