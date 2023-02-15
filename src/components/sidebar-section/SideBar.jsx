import React from 'react'
import './sidebar.css'

// logo import
import practiendaLogo from '../../assets/img/practiendalogo.webp'
import {IoMdSpeedometer } from 'react-icons/io'
import {MdDeliveryDining, MdOutlineExplore, MdOutlinePermContactCalendar} from 'react-icons/md'
import {BsCreditCard2Front, BsTrophy} from 'react-icons/bs'
import {AiOutlinePieChart} from 'react-icons/ai'
import {BiTrendingUp} from'react-icons/bi'


const SideBar = () => {
  return (
    <div className='sideBar grid'>

      <div className="logoDiv flex">
        <img src={practiendaLogo} alt="Practienda" />
        <h2>Practienda</h2>
      </div>

      <div className="menuDiv">
        <h3 className="divTitle">
          QUICK MENU
        </h3>
        <ul className="menuList grid">

          <li className="listItem">
            <a href="#" className='menuLink flex'>
              <IoMdSpeedometer className='icon'/>
              <span className="smallText">
                DashBoard
              </span>
            </a>
          </li>

          <li className="listItem">
            <a href="#" className='menuLink flex'>
              <MdDeliveryDining className='icon'/>
              <span className="smallText">
                My orders
              </span>
            </a>
          </li>

          <li className="listItem">
            <a href="#" className='menuLink flex'>
              <MdOutlineExplore className='icon'/>
              <span className="smallText">
                Explore
              </span>
            </a>
          </li>

          <li className="listItem">
            <a href="#" className='menuLink flex'>
              <BsTrophy className='icon'/>
              <span className="smallText">
                Productos
              </span>
            </a>
          </li>

        </ul>
      </div>

      <div className="settingDiv">
        <h3 className="divTitle">
          CONFIGURACION
        </h3>
        <ul className="menuList grid">

          <li className="listItem">
            <a href="#" className='menuLink flex'>
              <AiOutlinePieChart className='icon'/>
              <span className="smallText">
                Charts
              </span>
            </a>
          </li>

          <li className="listItem">
            <a href="#" className='menuLink flex'>
              <BiTrendingUp className='icon'/>
              <span className="smallText">
                Trends
              </span>
            </a>
          </li>

          <li className="listItem">
            <a href="#" className='menuLink flex'>
              <MdOutlinePermContactCalendar className='icon'/>
              <span className="smallText">
                Contact
              </span>
            </a>
          </li>

          <li className="listItem">
            <a href="#" className='menuLink flex'>
              <BsCreditCard2Front className='icon'/>
              <span className="smallText">
                Payment
              </span>
            </a>
          </li>

        </ul>
      </div>
    </div>
  ) 
}

export default SideBar