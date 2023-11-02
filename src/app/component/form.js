"use client";
import Link from "next/link";
import { useEmpDataStore } from "@/store/employeeStore";
import { useState } from "react";

export default function Form({initialState,type:actionType}) {
  const { empData, add: AddEmp ,edit:editEmp} = useEmpDataStore();

  console.log(initialState, actionType);

  const [inputs, setInputs] = useState(initialState);
  const [createObjectURL, setCreateObjectURL] = useState(initialState.profile_image);

  const handleOnchange = (text, input) => {
    setInputs((prevState) => ({ ...prevState, [input]: text }));
  };

  const submitHandler = () => {
    console.log(inputs,actionType);
    if(actionType == "add"){
      AddEmp(inputs)
    } else{
      editEmp(inputs) 
    }
    setInputs({employee_name: "",employee_age: "",employee_salary: "",profile_image:null})
    setCreateObjectURL(null)
    alert("Updated Successfully")

  };

  const uploadToClient = (event) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];
      let imgUrl = URL.createObjectURL(i);
      setCreateObjectURL(imgUrl);
      handleOnchange(imgUrl, "profile_image");
    }
  };
  return (
    <>
      
      <div className="">
        <div className="relative z-0 w-full mb-6 group">
          <input
            className=" py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            onChange={(e) => handleOnchange(e.target.value, "employee_name")}
            placeholder="Enter name"
            value={inputs["employee_name"]}
          />
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            className=" py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            onChange={(e) => handleOnchange(e.target.value, "employee_age")}
            placeholder="Enter age"
            value={inputs["employee_age"]}
          />
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            className=" py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            onChange={(e) => handleOnchange(e.target.value, "employee_salary")}
            placeholder="Enter Salary"
            secureTextEntry={true}
            value={inputs["employee_salary"]}
          />
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input type="file" name="myImage" onChange={uploadToClient} />
        </div>
        {createObjectURL && 
        <img src={createObjectURL} className=" w-40 h-40"/>
        }

        <button
          className=" m-10 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          placeholder="name"
          onClick={() => submitHandler()}
        >
          {actionType == "add" ? "Add Employee" : "Edit Employee"}
        </button>
      </div>
    </>
  );
}
