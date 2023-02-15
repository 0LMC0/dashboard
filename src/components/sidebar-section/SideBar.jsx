import React from 'react'
import './sidebar.css'

// logo import
import practiendaLogo from '../../assets/img/practiendalogo.webp'
import {IoMdSpeedometer } from 'react-icons/io'
import {MdDeliveryDining, MdOutlineExplore, MdOutlinePermContactCalendar} from 'react-icons/md'
import {BsCreditCard2Front, BsQuestionCircle, BsTrophy} from 'react-icons/bs'
import {AiOutlinePieChart} from 'react-icons/ai'
import {BiTrendingUp} from'react-icons/bi'
import {FaStore} from'react-icons/fa'


const SideBar = () => {
  return (
    <div className='sideBar grid'>

      <div className="logoDiv flex">
        <img src={practiendaLogo} alt="Practienda" />
        <h2>Tu Practienda </h2>
      </div>

      

      <div className="menuDiv">
          <ul className="menuList grid mb-5">

          <li className="listItem">
            <a href="#" className='menuLink flex'>
              <IoMdSpeedometer className='icon'/>
              <span className="smallText">
                Inicio
              </span>
            </a>
          </li>

          <li className="listItem">
            <a href="#" className='menuLink flex'>
              <MdDeliveryDining className='icon'/>
              <span className="smallText">
                Estadisticas
              </span>
            </a>
          </li>

        </ul>

        <h3 className="divTitle">
           Administra tu Practienda  
        </h3>
        <ul className="menuList grid">

          <li className="listItem">
            <a href="#" className='menuLink flex'>
              <IoMdSpeedometer className='icon'/>
              <span className="smallText">
                Ventas
              </span>
            </a>
          </li>

          <li className="listItem">
            <a href="#" className='menuLink flex'>
              <MdDeliveryDining className='icon'/>
              <span className="smallText">
                Productos
              </span>
            </a>
          </li>

          <li className="listItem">
            <a href="#" className='menuLink flex'>
              <MdOutlineExplore className='icon'/>
              <span className="smallText">
                Clientes
              </span>
            </a>
          </li>

          <li className="listItem">
            <a href="#" className='menuLink flex'>
              <BsTrophy className='icon'/>
              <span className="smallText">
               Categorias
              </span>
            </a>
          </li>

        </ul>
      </div>

      <div className="settingDiv">
        <h3 className="divTitle">
          Dale Vida a tu pagina!
        </h3>
        <ul className="menuList grid">

          <li className="listItem">
            <a href="#" className='menuLink flex'>
              <BsCreditCard2Front className='icon'/>
              <span className="smallText">
                Mi Practienda
              </span>
            </a>
          </li>

          <li className="listItem">
            <a href="#" className='menuLink flex'>
              <BsCreditCard2Front className='icon'/>
              <span className="smallText">
                Mi Practienda
              </span>
            </a>
          </li>

        </ul>
      </div>

      <div className="sideBarCard">
        <BsQuestionCircle className="icon"/>
        <div className="cardContent">
          <div className="circle1"></div>
          <div className="circle2"></div>

          <h3>Centro de Ayuda</h3>
          <p>Tenes problemas? Necesitas ayuda? Contactanos.</p>
          <button className="btn">Ir al Centro De Ayuda</button>
        </div>
      </div>
    </div>
  ) 
}

export default SideBar