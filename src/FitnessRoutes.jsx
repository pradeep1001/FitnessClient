import {
  createBrowserRouter
} from "react-router-dom";
import Login from "./pages/Login"
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import FitnessTypeListing from "./pages/FitnessTypeListing";
import FitnessTypeOperation from "./pages/FitnessTypeOperation";
import MemberListing from "./pages/MemberListing";
import MemberOperation from "./pages/MemberOperation";
import TrainerListing from "./pages/TrainerListing";
import TrainerOperation from "./pages/TrainerOperation";
import FitnessClassListing from "./pages/FitnessClassListing";
import FitnessClassOperation from "./pages/FitnessClassOperation";
import BookingListing from "./pages/BookingListing";
import BookingOperation from "./pages/BookingOperation";
import ClassScheduleListing from "./pages/ClassScheduleListing";
import ClassScheduleOperation from "./pages/ClassScheduleOperation";
const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />, 
    },
    {
      path: "/Signup",
      element: <Signup />, 
    },
    {
      path: "/Dashboard",
      element: <Dashboard />, 
      children: [
        {
          path: "FitnessTypeListing",
          element: <FitnessTypeListing /> , 
          
        },
        {
          path: "FitnessTypeOperation/:operation/:id?",
          element: <FitnessTypeOperation /> ,
          
        },
        {
          path: "MemberListing",
          element: <MemberListing  />, 
        },
        {
          path: "MemberOperation/:operation/:id?",
          element: <MemberOperation /> ,
          
        },
        {
          path: "TrainerListing",
          element: <TrainerListing />, 
        },
        {
          path: "TrainerOperation/:operation/:id?",
          element: <TrainerOperation /> ,
          
        },
        {
          path: "FitnessClassListing",
          element: <FitnessClassListing />, 
        },
        {
          path: "FitnessClassOperation/:operation/:id?",
          element: <FitnessClassOperation /> ,
          
        },
        {
          path: "BookingListing",
          element: <BookingListing   />, 
        },
        {
          path: "BookingOperation/:operation/:id?",
          element: <BookingOperation /> ,
          
        },
        {
          path: "ClassScheduleListing",
          element: <ClassScheduleListing  />, 
        },
        {
          path: "ClassScheduleOperation/:operation/:id?",
          element: <ClassScheduleOperation /> ,
          
        },
      ]
    },
    
    
  ]);
export default router;