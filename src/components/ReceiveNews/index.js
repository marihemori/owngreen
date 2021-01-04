import React, { Component } from 'react';
import '../../style/home.css'
import ReceiveNewsImg from '../../assets/img/receivenews_img.png';

const RcvNewsImg = () => {
 return (
  <div>
   <img className="rcvnews-img" src={ReceiveNewsImg} alt="News"></img>
  </div>
 )
}

const RcvNewsText = () => {
 return (
  <div className="rcvnews-text">
   <h1>Receive News</h1>
   <hr className="hr2"></hr>
   <p>If you are interested on receive news about the seeds world, ongs work
   and the preservation, just put you mail below.
   </p>

   <div className="send-mail">
    <input className="sendmail-box" type="mail" placeholder="Your mail here ..."></input>
    <button className="sendbtn" type="submit">Send</button>
   </div>
  </div>
 )
}

class ReceiveNews extends Component {
 render() {
  return (
   <section className="receive-news">
    <div className="container">
     <RcvNewsImg />
     <RcvNewsText />
    </div>
   </section>
  )
 }
}

export default ReceiveNews;



