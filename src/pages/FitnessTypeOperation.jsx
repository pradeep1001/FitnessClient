import { NavLink, useNavigate, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react"
import axios from 'axios'
import { getByID, insert, edit, remove } from "../models/FitnessType";
import PageHeading from "../components/PageHeading";
import SButton from "../components/SButton";
import CNavLink from "../components/CNavLink";
export default function FitnessTypeOperation() {
    const navigate = useNavigate();
    const [record, setRecord] = useState({
        "fitnessTypeName": ""
    });
    const { id, operation } = useParams();

    React.useEffect(() => {
        if (operation == "Edit" || operation == "Delete") {
            console.log("getByID Called");
            axios.get(`http://localhost:5050/api/FitnessType/GetByID?id=` + id).then(response => {
                console.log("getByID Create RESPONSE", response);
                setRecord(response.data);
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
    }
    const handleSubmit = async (event) => {
        
        event.preventDefault();

        try {
            if (operation == "Create") {
                insert(record).then((response) => {
                    console.log(response, "Fitness Type Edit");
                    navigate("/Dashboard/FitnessTypeListing");
                }).catch(error => {
                    console.log(error);
                });
            }
            if (operation == "Edit" ) {
                edit(record).then((response) => {
                    console.log(response, "12345567788");
                    navigate("/Dashboard/FitnessTypeListing")
                }).catch(error => {
                    console.log(error);
                });
            }
            if (operation == "Delete" ) {
                remove(id).then((response) => {
                    console.log(response, "12345567788");
                    navigate("/Dashboard/FitnessTypeListing")
                }).catch(error => {
                    console.log(error);
                });
            }
        } catch (error) {
            console.error(error.message);
        } finally {

        }
    }


    return (
        <>
            <PageHeading heading="Fitness Type Operation -&gt;" operation={operation} />

            <form onSubmit={handleSubmit}>
                <div className="mx-auto max-w-[40%] my-auto">

                    <div className="flex flex-row">
                        <label htmlFor="fitnessTypeName" className="block text-base font-medium text-white-700 basis-1/3">Fitness Type Name</label>
                        <input type="text" name="fitnessTypeName" id="fitnessTypeName" required onChange={handelInput} value={record.fitnessTypeName} maxLength={50} className="px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 valid:text-emerald-500 valid:border-emerald-400 focus:valid:text-emerald-500 focus:valid:border-emerald-400 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 basis-1/4 grow " disabled={operation == "Delete"}/>
                    </div>


                    <div className="mt-6 ">
                        <div className="grid grid-cols-2 gap-1">
                            <SButton operation={operation} />
                            
                            <CNavLink toLink="/Dashboard/FitnessTypeListing" anchortext="Cancel"/>
                        </div>

                    </div>
                </div>
            </form>
        </>
    )
}