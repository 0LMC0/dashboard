import React from 'react'
import './top.css'
import {BiSearchAlt} from 'react-icons/bi'
import {TbMessageCircle} from 'react-icons/tb'
import { IoIosNotificationsOutline } from 'react-icons/io'

// ìmport user img
import user from '../../../assets/img/user/user.jpeg'
// import video
import shopping from '../../../assets/videos/intro.mp4'

const Top = () => {
  return (
    <div className="topSection">
      <div className="headerSection flex">
        <div className="title">
          <h1>Diseña, edita y administra - ¡Comencemos!</h1>
          <p>Hola [nombre de usuario], Bienvenido/a!</p>
        </div>

        <div className="searchBar flex">
          <input type="text" placeholder="¿No encontras lo que buscas?" />
          <BiSearchAlt className="icon"/>
        </div>

        <div className="adminDiv flex">
          <TbMessageCircle className="icon"/>
          <IoIosNotificationsOutline className="icon"/>
           <div className="adminImage">
            <img src={user} alt="UserImg" />
           </div>
        </div>
      </div>

      <div className="cardSection flex">
        <div className="rightCard flex">
          <h2>Crea y Vende tus productos</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla, aliquid!</p>

          <div className="buttons flex">
            <button className="btn">Mira el tutorial</button>
            <button className="btn transparent">Necesitas Ayuda?</button>
          </div>

          <div className="videoDiv">
            <video src={shopping} autoPlay loop muted></video>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Top