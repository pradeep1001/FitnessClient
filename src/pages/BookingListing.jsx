import { NavLink, useNavigate, useLoaderData } from "react-router-dom";
import React, { useState } from "react"
import axios from 'axios'
import getAll from "../models/Booking";
export default function BookingListing() {
    const records = getAll();
    console.log(records);
    return (
        <>
            <h3 className="pl-5 py-3 mb-8 text-4xl border-y-2 border-dotted  border-indigo-600 text-indigo-600 font-semibold"><span className="text-3xl inline-block text-indigo-600">::</span> Booking Listing <span className="text-4xl inline-block text-indigo-600">::</span></h3>
            <div className="text-center mb-8"><NavLink to={"/Dashboard/BookingOperation/Create"} className="bg-sky-500 hover:bg-sky-700 px-5 py-2.5 text-md leading-5 rounded-md font-semibold text-white text-center">Create</NavLink></div>
            <table className="border-collapse w-full bg-white dark:bg-slate-800 text-sm shadow-sm">
                <thead>
                    <tr className="border-b-2 border-solid  border-indigo-600 *:text-[#7e8299]">
                        <th className="w-1/3 text-2xl py-4">Booking Name</th>
                        <th className="w-1/3 text-2xl">Member Name</th>

                        <th className="w-1/3 text-2xl">Action</th>

                    </tr>
                </thead>
                <tbody className="*:text-lg ">
                    {
                        records.length
                        ?
                        records.map((row) => (
                            <tr key={row._id}>
                                <td className="p-6">{row.fitnessClass[0].fitnessClassName}</td>
                                <td >{row.member[0].memberName}</td>
                                <td className="text-center">
                                    <NavLink to={"/Dashboard/BookingOperation/Edit/"+row._id} className="mr-4 rounded-md font-semibold edbtn edit">Edit</NavLink>
                                    <NavLink to={"/Dashboard/BookingOperation/Delete/"+row._id} className="rounded-md font-semibold edbtn delete">Delete</NavLink>
                                </td>
                            </tr>
                        ))
                        :
                        (
                            <tr key={1} >
                                <td colSpan="3">
                                    <div  >
                                        <div className="py-4 text-center info"> <b>No&nbsp;</b><span>Booking Found</span>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
            <div className="text-center mt-8"><NavLink to={"/Dashboard/BookingOperation/Create"} className="bg-sky-500 hover:bg-sky-700 px-5 py-2.5 text-md leading-5 rounded-md font-semibold text-white text-center">Create</NavLink></div>
        </>
    )
}