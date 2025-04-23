import { Sidebar } from "flowbite-react";
import { BiBuoy } from "react-icons/bi";
import { HiArrowSmRight, HiChartPie, HiInbox, HiOutlineCloudUpload, HiShoppingBag, HiTable, HiUser, HiViewBoards } from "react-icons/hi";import favicon from "../assets/favicon.png";
import { useContext } from "react";
import { AuthContext } from "../contexts/Authprovidor";
import { Link } from "react-router-dom";



const SideBar = () => {
  const {user} = useContext(AuthContext)
  // console.log(user);
  
  return (
    <Sidebar aria-label="Sidebar with content separator example">
        <Sidebar.Logo href="/" img={user?.photoURL} imgAlt="" className="w-12 h-12 rounded">
        {
          user?.displayName || "demo user"

        }
      </Sidebar.Logo>
    <Sidebar.Items>
      <Sidebar.ItemGroup>
        <Sidebar.Item href="/admin/dashboard" icon={HiChartPie}>
          Dashboard
        </Sidebar.Item>
        <Sidebar.Item as={Link} to="/admin/dashboard/upload" icon={HiOutlineCloudUpload}>
          Upload
         </Sidebar.Item>
         <Sidebar.Item as={Link} to="/admin/dashboard/manage" icon={HiOutlineCloudUpload}>
         Manage Books
         </Sidebar.Item>
        <Sidebar.Item href="#" icon={HiUser}>
          Users
        </Sidebar.Item>
        <Sidebar.Item href="#" icon={HiShoppingBag}>
          Products
        </Sidebar.Item>
        <Sidebar.Item href="/login" icon={HiArrowSmRight}>
          Sign In
        </Sidebar.Item>
        <Sidebar.Item href="/logout" icon={HiTable}>
          Log Out
        </Sidebar.Item>
      </Sidebar.ItemGroup>
      <Sidebar.ItemGroup>
        <Sidebar.Item href="#" icon={HiChartPie}>
          Upgrade to Pro
        </Sidebar.Item>
        <Sidebar.Item href="#" icon={HiViewBoards}>
          Documentation
        </Sidebar.Item>
        <Sidebar.Item href="#" icon={BiBuoy}>
          Help
        </Sidebar.Item>
      </Sidebar.ItemGroup>
    </Sidebar.Items>
  </Sidebar>
  )
}

export default SideBar
