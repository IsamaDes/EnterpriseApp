import Sidebar from '../../components/companyDashboard/SideBar'
import CompanyDashboard from '../../components/companyDashboard/CompanyDashboard'
import NavBar from '../../components/companyDashboard/NavBar'

function CompanyDashboardPage() {
  return (
    <div className="flex  ">
      <Sidebar/>

      <div className="flex flex-col w-full ">
        <NavBar/>
        <CompanyDashboard/>
        </div>
    </div>
  )
}

export default CompanyDashboardPage