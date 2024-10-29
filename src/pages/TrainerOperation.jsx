import { NavLink, useNavigate, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react"
import axios from 'axios'
import { API_HOST, LABEL_CLASS_NAME, TEXTBOX_CLASS_NAME } from '../Constants.js';
import PageHeading from "../components/PageHeading";
import SButton from "../components/SButton";
import CNavLink from "../components/CNavLink";

export default function TrainerOperation() {
    console.log("TrainerOperation Called");
    const { id, operation } = useParams();
    const navigate = useNavigate();
    const [record, setRecord] = useState({
        "trainerName": ""
    });

    React.useEffect(() => {
        if (operation == "Edit" || operation == "Delete") {
            console.log("getByID Called");
            axios.get(`${API_HOST}Trainer/GetByID?id=${id}`).then(response => {
                console.log("getByID Create RESPONSE", response.data);
                setRecord(response.data.data);
                console.log("getByID SSSSSS", record);

            })
                .catch(error => {
                    console.log(error);
                    throw error;
                });


        }
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

            axios.post(`${API_HOST}Trainer/Insert`, record).then((response) => {
                navigate("/Dashboard/TrainerListing");
            }).catch(err => {
                console.log(err);
            });
        }
        if (operation == "Edit") {
            axios.patch(`${API_HOST}Trainer/Update`, record).then((response) => {
                navigate("/Dashboard/TrainerListing")
            }).catch(err => {
                console.log(err);
            });
        }
        if (operation == "Delete") {
            axios.delete(`${API_HOST}Trainer/Delete/${id}`).then((response) => {
                navigate("/Dashboard/TrainerListing")
            }).catch(err => {
                console.log(err);
            });
        }
    }
    return (
        <>
            <PageHeading heading="Trainer Operation -&gt;" operation={operation} />

            <form onSubmit={handleSubmit}>
                <div className="mx-auto max-w-[98%] my-auto">

                    <div className="flex flex-row">
                        <label className={LABEL_CLASS_NAME}>Trainer Name</label>
                        <input type="text" name="trainerName" id="trainerName" onChange={handelInput} value={record.trainerName || ""} className={TEXTBOX_CLASS_NAME} disabled={operation == "Delete"} />
                        <label className={LABEL_CLASS_NAME}>Password</label>
                        <input type="password" name="password" id="password" onChange={handelInput} value={record.password || ""} className={TEXTBOX_CLASS_NAME} disabled={operation == "Delete"} />
                    </div>
                    <div className="flex flex-row mt-2">
                        <label className={LABEL_CLASS_NAME}>Address 1</label>
                        <input type="text" name="address1" id="address1" onChange={handelInput} value={record.address1 || ""} className={TEXTBOX_CLASS_NAME} disabled={operation == "Delete"} />
                        <label className={LABEL_CLASS_NAME}>Address 2</label>
                        <input type="text" name="address2" id="address2" onChange={handelInput} value={record.address2 || ""} className={TEXTBOX_CLASS_NAME} disabled={operation == "Delete"} />
                    </div>
                    <div className="flex flex-row mt-2">
                        <label className={LABEL_CLASS_NAME}>City</label>
                        <input type="text" name="city" id="city" onChange={handelInput} value={record.city || ""} className={TEXTBOX_CLASS_NAME} disabled={operation == "Delete"} />
                        <label className={LABEL_CLASS_NAME}>State</label>
                        <input type="text" name="state" id="state" onChange={handelInput} value={record.state || ""} className={TEXTBOX_CLASS_NAME} disabled={operation == "Delete"} />
                    </div>
                    <div className="flex flex-row mt-2">
                        <label className={LABEL_CLASS_NAME}>Pincode</label>
                        <input type="text" name="pincode" id="pincode" onChange={handelInput} value={record.pincode || ""} className={TEXTBOX_CLASS_NAME} disabled={operation == "Delete"} />
                        <label className={LABEL_CLASS_NAME}>Country</label>
                        <input type="text" name="country" id="country" onChange={handelInput} value={record.country || ""} className={TEXTBOX_CLASS_NAME} disabled={operation == "Delete"} />
                    </div>
                    <div className="flex flex-row mt-2">
                        <label className={LABEL_CLASS_NAME}>Email ID</label>
                        <input type="email" name="emailid" id="emailid" onChange={handelInput} value={record.emailid || ""} className={TEXTBOX_CLASS_NAME} disabled={operation == "Delete"} />
                        <label className={LABEL_CLASS_NAME}>Contact Number</label>
                        <input type="text" name="contactNumber" id="contactNumber" onChange={handelInput} value={record.contactNumber || ""} className={TEXTBOX_CLASS_NAME} disabled={operation == "Delete"} />
                    </div>
                    <div className="flex flex-row mt-2">
                        <label className={LABEL_CLASS_NAME}>DoB</label>
                        <input type="date" name="dob" id="dob" onChange={handelInput} value={record.dob || ""} className={TEXTBOX_CLASS_NAME} disabled={operation == "Delete"} />
                        <label className={LABEL_CLASS_NAME}>Aadhar Number</label>
                        <input type="text" name="aadharNumber" id="aadharNumber" onChange={handelInput} value={record.aadharNumber || ""} className={TEXTBOX_CLASS_NAME} disabled={operation == "Delete"} />
                    </div>

                    <div className="flex flex-row mt-2">
                        <label for="introduction" className={LABEL_CLASS_NAME}>Introduction</label>
                        <textarea rows="5" name="introduction" id="introduction" onChange={handelInput} value={record.introduction || ""} className={TEXTBOX_CLASS_NAME + " basis-10/12"}></textarea>
                    </div>
                    <div className="flex flex-row mt-2">
                        <label for="qualification" className={LABEL_CLASS_NAME}>Qualification</label>
                        <textarea rows="5" name="qualification" id="qualification" onChange={handelInput} value={record.qualification || ""} className={TEXTBOX_CLASS_NAME + " basis-10/12"}></textarea>
                    </div>
                    <div className="flex flex-row mt-2">
                        <label for="expertise" className={LABEL_CLASS_NAME}>Expertise</label>
                        <textarea rows="5" name="expertise" id="expertise" onChange={handelInput} value={record.expertise || ""} className={TEXTBOX_CLASS_NAME + " basis-10/12"}></textarea>
                    </div>
                    <div className="flex flex-row mt-2">
                        <label for="areaOfSpecialization" className={LABEL_CLASS_NAME}>Area of Specialization</label>
                        <textarea rows="5" name="areaOfSpecialization" id="areaOfSpecialization" onChange={handelInput}  value={record.areaOfSpecialization || ""} className={TEXTBOX_CLASS_NAME + " basis-10/12"}></textarea>
                    </div>
                </div>
                <div className="mt-6 mx-auto max-w-[40%] my-auto">
                    <div className="grid grid-cols-2 gap-1">
                        <SButton operation={operation} />
                        <CNavLink toLink="/Dashboard/TrainerListing" anchortext="Cancel" />
                    </div>
                </div>
            </form>
        </>
    )
}