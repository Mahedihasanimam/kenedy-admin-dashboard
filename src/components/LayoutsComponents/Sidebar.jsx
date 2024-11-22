import { Dropdown, Image, Layout, Menu } from "antd";
import { Link, NavLink } from "react-router-dom";
const { Sider } = Layout;
import logo from "../../../public/logo.png";
import avater from "/public/avater.png";
import Swal from "sweetalert2";
import { EditOutlined, SecurityScanOutlined, UserOutlined } from '@ant-design/icons';
import { MdOutlinePersonalInjury } from "react-icons/md";
import { BiUserPlus } from "react-icons/bi";
import { IoAddOutline } from "react-icons/io5";

// eslint-disable-next-line react/prop-types
const Sidebar = ({ collapsed }) => {

  const handleLogout = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, log out!'
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.clear();
        window.location.href = "/login";
      }
    })
  }

  const menus = (
    <Menu>
      <Menu.Item key="0"> <Link to={"/personalinfo"}><UserOutlined className="pr-2" />Personal information</Link> </Menu.Item>
      <Menu.Item key="1"> <Link to={"/security"}	> <SecurityScanOutlined className="pr-2" /> Security </Link> </Menu.Item>

    </Menu>

  );
  return (
    <div className="fixed top-0 left-0 bottom-0 font-popins">
      <Sider
        className="  h-[100vh] w-[300px] bg-white text-secondary"
        width={250}
        collapsedWidth={80}
        trigger={null}
        collapsible
        collapsed={collapsed}
      >
        <div
          className={` ${collapsed ? "text-lg" : "text-3xl"
            } font-bold my-10 text-white text-center`}
        >
          <Image src={logo} preview={false} className="w-20 h-20 mx-auto" />
        </div>
        <div className="flex-col items-center justify-between">
          <div className="min-h-[calc(100vh-410px)] overflow-y-auto">
            <Menu
              theme=""
              mode="inline"
              className="px-2 font-popins text-secondary font-semibold text-[16px] space-y-4"
              defaultSelectedKeys={["1"]}
              items={[
                {
                  key: "1",
                  icon: (
                    <svg
                      width="15"
                      height="16"
                      viewBox="0 0 15 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 0.588623C3.09098 0.845916 0 4.0981 0 8.07222C0 12.2144 3.35786 15.5722 7.5 15.5722C9.39113 15.5722 11.1188 14.8723 12.438 13.7173L7.15045 8.42975C7.05532 8.33674 7 8.20829 7 8.07222V0.588623Z"
                        // fill="#EBCA7E"
                        fill="#262626"
                      />
                      <path
                        d="M13.1451 13.0102C14.3001 11.691 15 9.96334 15 8.07222C15 7.04401 14.7931 6.06412 14.4186 5.17192L8.3441 8.20919L13.1451 13.0102Z"
                        // fill="#EBCA7E"
                        fill="#262626"
                      />
                      <path
                        d="M13.9708 4.27783C12.7472 2.19566 10.5473 0.756284 8 0.588623V7.2632L13.9708 4.27783Z"
                        // fill="#EBCA7E"
                        fill="#262626"
                      />
                    </svg>
                  ),
                  label: (
                    <NavLink className={({ isActive }) => isActive ? "text-[#FF0048] opacity-70" : " text-secondary opacity-70"
                    } to={`/`}>
                      {" "}
                      Dashboard
                    </NavLink>
                  ),
                },

                {
                  key: "7",
                  icon: (
                    <UserOutlined style={{fontSize: '20px'}}/>
                  ),
                  label: <Dropdown overlayStyle={{ width: 'fit-content', backgroundColor: '#2B2B2B', borderRadius: '10px' }} overlay={menus} trigger={['click']}>
                    <p>Profile</p>
                  </Dropdown>,
                },
                {
                  key: "8",
                  icon: (
                    <EditOutlined style={{ color: '#262626' ,fontSize: '20px'}} className="text-[#FF0048]" />
                  ),
                  label: <NavLink className={({ isActive }) => isActive ? "text-[#FF0048] opacity-70" : " text-secondary opacity-70"} to={`/editcontent`}>Banner Update</NavLink>,
                },
                {
                  key: "1",
                  icon: (
                    <BiUserPlus size={30}/>
                  ),
                  label: (
                    <NavLink className={({ isActive }) => isActive ? "text-[#FF0048] opacity-70" : " text-secondary opacity-70"
                    } to={`/makeadmin`}>
                      {" "}
                      MakeAdmin
                    </NavLink>
                  ),
                },
                {
                  key: "5",
                  icon: (
                    <IoAddOutline size={30}/>
                  ),
                  label: (
                    <NavLink className={({ isActive }) => isActive ? "text-[#FF0048] opacity-70" : " text-secondary opacity-70"
                    } to={`/addbooks`}>
                      {" "}
                      AddBooks
                    </NavLink>
                  ),
                },
              ]}
            />
          </div>

          <div className="flex flex-row items-center justify-around mt-44    ">
            <div
              className="flex flex-row items-center gap-2 text-white  "
              role="menuitem"
            >
              <img
                src={avater}
                alt="avatar"
                className="w-10 h-10 rounded-2xl"
              />
              <div>
                <h1 className={`text-secondary text-sm font-work font-bold ${collapsed ? "hidden" : ""}`}>
                  Jenny
                </h1>
                <span className={`text-secondary text-xs font-nunito font-semibold ${collapsed ? "hidden" : ""}`}>
                  jenny@gmail.com
                </span>
              </div>
            </div>
            <button onClick={handleLogout}> <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.5 7L9.5 10.25M12.5 7L9.5 4M12.5 7L3 7M7 13L0.5 13L0.500001 1L7 1"
                stroke="#D34635"
              />
            </svg></button>
          </div>

        </div>
      </Sider>
    </div>
  );
};

export default Sidebar;
