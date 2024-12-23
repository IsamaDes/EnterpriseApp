import UpdateInformation from '../components/UpdateInformationPage'
import Sidebar from '../components/companyDashboard/SideBar'
import NavBar from '../components/companyDashboard/NavBar'

function UpdateInfoPage() {
  return (
    <div className="flex  ">
      <Sidebar/>
      <div className="flex flex-col w-full ">
        <NavBar/>
        <UpdateInformation/>
        </div>
    </div>
  )
}

export default UpdateInfoPage