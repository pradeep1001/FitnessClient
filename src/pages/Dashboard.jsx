import { NavLink, useNavigate, Outlet } from "react-router-dom";
import React, { useState } from "react"
import axios from 'axios'
import logo from "../assets/logo.svg"
export default function Dashboard() {
    return (
        <>
            <div id="app" className="h-dvh ">
                <div id="" className="container mx-auto w-[80%]">
                    <ul className="flex flex-row items-center *:flex-auto menu mb-6">
                        <li >
                            <img src={logo} className="w-[30%] h-[30%] mx-auto" />
                        </li>

                        <li >
                            <NavLink to="FitnessTypeListing">Fitness Type </NavLink>
                        </li>
                        <li >
                            <NavLink to="MemberListing">Member </NavLink>
                        </li>
                        <li >
                            <NavLink to="TrainerListing">Trainer </NavLink>
                        </li>
                        <li >
                            <NavLink to="FitnessClassListing">Fitness Class </NavLink>
                        </li>
                        <li >
                            <NavLink to="BookingListing">Booking </NavLink>
                        </li>
                        <li >
                            <NavLink to="ClassScheduleListing">Class Schedule </NavLink>
                        </li>
                        <li >
                            <NavLink to="/">Logout </NavLink>
                        </li>
                    </ul>
                    <div id="content" className="">

                        <Outlet />
                    </div>
                </div>
            </div>


        </>
    )
}

