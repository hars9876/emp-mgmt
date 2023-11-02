'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
function Header({children}) {
    const pathname = usePathname();
    console.log("pathname",pathname)
  return (
    <>
    <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
    <ul className="flex flex-wrap -mb-px text-sm font-medium text-center" id="default-tab" data-tabs-toggle="#default-tab-content" role="tablist">
        <li className="mr-2 " role="presentation">
            <Link href={"/"}>
            <button className={`inline-block p-4 border-b-2 rounded-t-lg  hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 ${pathname == "/" ? "text-orange-700" : ""}`} id="profile-tab" data-tabs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Home</button>
            </Link>
        </li>
        <li className="mr-2" role="presentation">
            <Link href={"/edit"}>
            <button className={`inline-block p-4 border-b-2 rounded-t-lg  hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 ${pathname == "/edit" ? "text-orange-700" : ""}`} id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false">Edit Details</button>
            </Link>
        </li>
        <li className="mr-2" role="presentation">
            <Link href={"/list"}>
            <button className={`inline-block p-4 border-b-2 rounded-t-lg  hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 ${pathname == "/list" ? "text-orange-700" : ""}`} id="settings-tab" data-tabs-target="#settings" type="button" role="tab" aria-controls="settings" aria-selected="false">View All Employee</button>
            </Link>
        </li>
       
    </ul>
</div>
{children}

</>
  )
}

export default Header