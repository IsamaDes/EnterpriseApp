import Kyc from '../../components/KYC/Kyc.tsx'

import Sidebar from '../../components/companyDashboard/SideBar.tsx'
import NavBar from '../../components/companyDashboard/NavBar.tsx'

function CompanyKycPage() {
  return (
    <div className="flex  ">
      <Sidebar/>
      <div className="flex flex-col w-full ">
        <NavBar/>
        <Kyc/>
        </div>
    </div>
  )
}

export default CompanyKycPage