import React, { useState } from 'react';
import "../Css/adminhome.css";
import { MdViewHeadline, MdPowerSettingsNew } from "react-icons/md";
import { BsCart4, BsFillBellFill } from "react-icons/bs";
import Dashboard from './Dashboard';
import Bookings from './Bookings';
import Categories from './Categories';
import Delivery from './Delivery';
import Orders from './Orders';
import Review from './Review';
import { useNavigate } from "react-router-dom";
import Report from './Report';
import Promocodes from './Promocodes';
import Notifications from './Notifications';

const Adminhome = () => {
  const [dashboard_body, setdashboard_body] = useState(<Dashboard />);
  const [sideBarOpen, setSideBarOpen] = useState(false)
  const navigate = useNavigate();
  const Logout = () => {
    navigate("/");
  }
  return (
    <div className='Adminhome'>
      <div className="homesidebar">
        <div className="admintextpanel">Admin</div>
        <div className="sidebartabs" onClick={() => { setdashboard_body(<Dashboard />) }}>Dashboard</div>
        <div className="sidebartabs" onClick={() => { setdashboard_body(<Bookings />) }}>Bookings</div>
        <div className="sidebartabs" onClick={() => { setdashboard_body(<Categories />) }}>Categories</div>
        <div className="sidebartabs" onClick={() => { setdashboard_body(<Delivery />) }}>Delivery Zone</div>
        <div className="sidebartabs" onClick={() => { setdashboard_body(<Orders />) }}>Orders</div>

        <div className="sidebartabs" onClick={() => { setdashboard_body(<Promocodes />) }}>Promocodes</div>
        <div className="sidebartabs" onClick={() => { setdashboard_body(<Report />) }}>Report</div>
        <div className="sidebartabs" onClick={() => { setdashboard_body(<Review />) }}>Review</div>
      </div>

      {/* this sidebar will be displayed in mobile version */}

      <div className={sideBarOpen ? "homesidebarTwo":"sidebardefault"}>
        <div className="admintextpanelTwo">Admin</div>
        <div className="sidebartabsTwo" onClick={() => { setdashboard_body(<Dashboard />) }}>Dashboard</div>
        <div className="sidebartabsTwo" onClick={() => { setdashboard_body(<Bookings />) }}>Bookings</div>
        <div className="sidebartabsTwo" onClick={() => { setdashboard_body(<Categories />) }}>Categories</div>
        <div className="sidebartabsTwo" onClick={() => { setdashboard_body(<Delivery />) }}>Delivery Zone</div>
        <div className="sidebartabsTwo" onClick={() => { setdashboard_body(<Orders />) }}>Orders</div>
        <div className="sidebartabsTwo" onClick={() => { setdashboard_body(<Notifications />) }}>Notifications</div>
        <div className="sidebartabsTwo" onClick={() => { setdashboard_body(<Promocodes />) }}>Promocodes</div>
        <div className="sidebartabsTwo" onClick={() => { setdashboard_body(<Report />) }}>Report</div>
        <div className="sidebartabsTwo" onClick={() => { setdashboard_body(<Review />) }}>Review</div>
      </div>
      <div className="dashboardbody">
        <div className="navbar">
          <MdViewHeadline onClick={()=>setSideBarOpen(!sideBarOpen)} className='menubar' />
          <div className='navitems'>
            <BsFillBellFill className='navitem1' />
            <MdPowerSettingsNew className='navitem1' onClick={() => { Logout() }} />
            <BsCart4 className='navitem1' />
          </div>
        </div>
        <div className='adminhome_body'>
          {dashboard_body}
        </div>
      </div>
    </div>
  )
}

export default Adminhome