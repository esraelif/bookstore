import { Sidebar } from "flowbite-react";
import { HiArrowSmRight, HiChartPie, HiInbox, HiOutlineCloudUpload, HiShoppingBag, HiTable, HiUser, HiViewBoards } from "react-icons/hi";
import { BiBuoy } from "react-icons/bi";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import { useNavigate } from 'react-router-dom';

const SideBar = () => {
    const { user, logout } = useContext(AuthContext)
    const navigate = useNavigate();
    const handleLogout = () => {
        logout().then(() => {
            alert("Sign-out successfully!");
            navigate('/login');
        }).catch((error) => {
            console.error("Logout failed", error);
        });
    };
    return (
        <Sidebar aria-label="Sidebar with content separator example" className="w-80">
            <Sidebar.Logo href="/" img={user?.photoURL} imgAlt="logo" className="w-16 h-16 rounded">
                <p className="m-5">{user?.displayName || "Demo"}</p>
            </Sidebar.Logo>
            <Sidebar.Items>
                <Sidebar.ItemGroup>
                    <Sidebar.Item href="/admin/dashboard" icon={HiChartPie}>
                        Dashboard
                    </Sidebar.Item>
                    <Sidebar.Item href="/admin/dashboard/upload" icon={HiOutlineCloudUpload}>
                        Upload Book
                    </Sidebar.Item>
                    <Sidebar.Item href="/admin/dashboard/manage" icon={HiInbox}>
                        Manage Books
                    </Sidebar.Item>
                    <Sidebar.Item href="#" icon={HiUser}>
                        Users
                    </Sidebar.Item>
                    <Sidebar.Item href="#" icon={HiShoppingBag}>
                        Products
                    </Sidebar.Item>
                    <Sidebar.Item href="/sell-your-book" icon={HiViewBoards}>
                        Sell Your Book
                    </Sidebar.Item>
                    <Sidebar.Item href="/login" icon={HiArrowSmRight}>
                        Sign In
                    </Sidebar.Item>
                    <Sidebar.Item onClick={handleLogout} icon={HiTable}>
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
    );
}



export default SideBar;
