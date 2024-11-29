import NavBar from "@/components/companyDashboard/NavBar"
import Sidebar from "@/components/companyDashboard/SideBar"
import UpdateInformationPage from "@/components/UpdateInformationPage"


function UpdateInfoPage() {
  return (
   
    <div className="flex  ">
      <Sidebar/>

      <div className="flex flex-col w-full ">
        <NavBar/>
        <UpdateInformationPage/>
        </div>
    </div>
  )
}

export default UpdateInfoPage