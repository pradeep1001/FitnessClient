import { NavLink, useNavigate, useLoaderData } from "react-router-dom";
import React, { useState } from "react"
import axios from 'axios'
import PageHeading from "../components/PageHeading";
import CNavLink from "../components/CNavLink";
import NoRecordFound from "../components/NoRecordFound";
import EDButton from "../components/EDButton";
import useGetAll from "../models/Trainer/useGetAll";
export default function TrainerListing() {
    console.log("TrainerListing Called");
    const { isLoading, records, error } = useGetAll();
    console.log(isLoading, records, error);
    return (
        <>
            <PageHeading heading="Trainer Listing" />
            <div className="text-center mb-8"><CNavLink toLink="/Dashboard/TrainerOperation/Create" anchortext="Create" /></div>
            <table className="border-collapse w-full bg-white dark:bg-slate-800 text-sm shadow-sm">
                <thead>
                    <tr className="border-b-2 border-solid  border-indigo-600 *:text-[#7e8299] ">
                        <th className="w-1/3 text-1xl py-4">Trainer ID</th>
                        <th className="w-1/3 text-1xl">Trainer Name</th>

                        <th className="w-1/3 text-1xl">Action</th>

                    </tr>
                </thead>
                <tbody className="*:text-lg ">
                    {
                        records.length
                            ?
                            records.map((row) => (
                                <tr key={row._id}>
                                    <td className="p-6">{row._id}</td>
                                    <td >{row.trainerName}</td>
                                    <td className="text-center">
                                        <EDButton toLink={"/Dashboard/TrainerOperation/Edit/" + row._id} text="Edit" />
                                        <EDButton toLink={"/Dashboard/TrainerOperation/Delete/" + row._id} text="Delete" />
                                    </td>
                                </tr>
                            ))
                            :
                            (
                                <tr key={1} >
                                    <td colSpan="3">
                                        <div  >
                                            <NoRecordFound info="Trainer" />
                                        </div>
                                    </td>
                                </tr>
                            )
                    }
                </tbody>
            </table>
            <div className="text-center mt-8"><CNavLink toLink="/Dashboard/TrainerOperation/Create" anchortext="Create" /></div>
        </>
    )
}