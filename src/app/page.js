// `app/page.js` is the UI for the `/` URL
"use client";
import Link from "next/link";
import { useEmpDataStore } from "@/store/employeeStore";
import { useState ,useEffect} from "react";
import Form from "./component/form";

export default function Page() {
  const {setstate} = useEmpDataStore();

  const fetchDataWithCache = useEmpDataStore((state) => state.fetchDataWithCache);
  console.log("fetchDataWithCache",fetchDataWithCache)
    useEffect(() => {
      const fetchData = async () => {
        try {
          const data = await fetchDataWithCache('https://dummy.restapiexample.com/api/v1/employees');
          // Use the data as needed
          setstate(data)
          console.log("Data",data)
        } catch (error) {
          // Handle errors
        }
      };
  
      fetchData();
    }, []);
return(
  <>
  <div className="m-10">
  <h1 className="text-3xl">Enter Details</h1>
  <Form  initialState = {{employee_name: "",employee_age: "",employee_salary: "",profile_image:null}} type = "add"/>
  </div>
  </>
  );
}
