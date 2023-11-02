// `app/dashboard/page.js` is the UI for the `/dashboard` URL
"use client";

import { useSearchParams } from "next/navigation";
import { useEmpDataStore } from "@/store/employeeStore";
import { useState } from "react";
import Form from "../component/form";
export default function Page() {
  const searchParams = useSearchParams();

  const search = searchParams.get("id") ;
  const { empData, edit: editEmp } = useEmpDataStore();
  const [searchName,setSearch] = useState("")
  const [empid,setEmpid] = useState(search)




  let search_name = () => {
    console.log("empData",empData)
    if(empData.length > 0 ){
      empData.filter((val)=>{
        if(val["employee_name"].toLowerCase().includes(searchName.toLowerCase())){
          setEmpid(val.id)
        }

      })
    }
  }
  

  return (
    <>

    <div className="p-4 m-4">
    <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="search by name" onChange={(e)=>setSearch(e.target.value)}/>
        <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={()=>search_name()}>Search</button>
    </div>
   
    {empid && empData.length > 0 &&
    <div className="m-10">
    <h1 className="text-3xl">Update Details</h1>
    { empData.map((val)=>{
      if(val.id == empid){
      return (<Form initialState={val} type="edit"/>)
      }else{
        return null;
      }
    })
     
    }
    </div>
    }

    </div>
    </>
 
  );
}
