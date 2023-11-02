import React from 'react'
import Link from "next/link";

function List({emp,deleteEmp}) {
  return (
    <li class="py-3 sm:py-4">
    <div class="flex items-center space-x-4">
      <div class="flex-shrink-0">
        <img class="w-20 h-20 rounded-xl" src={emp.profile_image} />
      </div>
      <div class="flex-1 min-w-0">
        <p class="text-sm font-mediumtruncate dark:text-white">
          <span className="text-gray-900 ">Name :</span>{" "}
          <span className="text-gray-500 ">{emp.employee_name}</span>
        </p>
        <p class="text-sm text-gray-500 truncate dark:text-gray-400">
          <span className="text-gray-900 ">Age :</span>{" "}
          <span className="text-gray-500 ">{emp.employee_age}</span>
        </p>
        <p class="text-sm text-gray-500 truncate dark:text-gray-400">
          <span className="text-gray-900 ">Salary :</span>{" "}
          <span className="text-gray-500 ">{emp.employee_salary}</span>
        </p>
      </div>
      <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
        {/* <button onClick={()=>editEmp(emp.id)}>Edit</button> */}
        <Link href={"/edit?id=" + emp.id}>Edit</Link>
      </div>
      <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
        <button onClick={() => deleteEmp(emp.id)}>Delete</button>
      </div>
    </div>
  </li>
  )
}

export default List