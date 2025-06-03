import { NavLink, useNavigate, useLoaderData } from "react-router-dom";
import React, { useState } from "react"
import axios from 'axios'
import PageHeading from "../components/PageHeading";
import getAll from "../models/FitnessType";
import CNavLink from "../components/CNavLink";
import NoRecordFound from "../components/NoRecordFound";
import EDButton from "../components/EDButton";
export default function FitnessTypeListing() {
    const records = getAll();
    console.log(records);
    return (
        <>
            <PageHeading heading="Fitness Type Listing" />
            <div className="text-center mb-8"><CNavLink toLink="/Dashboard/FitnessTypeOperation/Create" anchortext="Create" /></div>
            <table className="border-collapse w-full bg-white ">
                <thead>
                    <tr className="border-b-2 border-solid  border-indigo-600 *:text-[#7e8299] ">
                        <th className="w-1/3 text-1xl py-4">Fitness Type ID</th>
                        <th className="w-1/3 text-1xl">Fitness Type Name</th>

                        <th className="w-1/3 text-1xl">Action</th>

                    </tr>
                </thead>
                <tbody className="*:text-sm ">
                    {
                        records.length
                            ?
                            records.map((row) => (
                                <tr key={row._id}>
                                    <td className="p-4">{row._id}</td>
                                    <td >{row.fitnessTypeName}</td>
                                    <td className="text-center">
                                        <EDButton toLink={"/Dashboard/FitnessTypeOperation/Edit/" + row._id} text="Edit" />
                                        <EDButton toLink={"/Dashboard/FitnessTypeOperation/Delete/" + row._id} text="Delete" />
                                        
                                    </td>
                                </tr>
                            ))
                            :
                            (
                                <tr key={1} >
                                    <td colSpan="3">
                                        <NoRecordFound  info="Fitness Type" />
                                    </td>
                                </tr>
                            )
                    }
                </tbody>
            </table>
            <div className="text-center mt-8"><CNavLink toLink="/Dashboard/FitnessTypeOperation/Create" anchortext="Create"/></div>
        </>
    )
}