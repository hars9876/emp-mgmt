"use client";
import { useEmpDataStore } from "@/store/employeeStore";
import { useEffect } from "react";

import List from "../component/List";
export default function Page() {
  const { empData, edit: editEmp, delete: deleteEmp ,setstate} = useEmpDataStore();
  console.log(empData);
//   const fetchDataWithCache = useEmpDataStore((state) => state.fetchDataWithCache);
// console.log("fetchDataWithCache",fetchDataWithCache)
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const data = await fetchDataWithCache('https://dummy.restapiexample.com/api/v1/employees');
//         // Use the data as needed
//         setstate(data)
//         console.log("Data",data)
//       } catch (error) {
//         // Handle errors
//       }
//     };

//     fetchData();
//   }, []);

  if (empData?.length == 0) return <h1>Add Employee</h1>;

  return (
    <>
      <div class="p-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-4">
        {/* <div class="flow-root"> */}
        <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
          {empData?.length > 0 &&
            empData.reverse().map((emp, key) => {
              return (
                <List emp={emp} deleteEmp={deleteEmp}/>
              );
            })}
        </ul>
      </div>
      {/* </div> */}
    </>
  );
}
