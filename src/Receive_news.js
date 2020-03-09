import React, { Component } from 'react';
import './styles/home.css';
import ReceiveNewsImg from './images/receivenews_img.png';

const RcvNewsImg = () => {
 return (
  <div className="rcvnews_img">
   <img class="" src={ReceiveNewsImg} alt="News"></img>
  </div>
 )
}

const RcvNewsText = () => {
 return (
  <div class="rcvnews_text">
   <h1>Receive News</h1>
   <hr class="hr2"></hr>
   <p>If you are interested on receive news
   about the seeds world, ongs work
   and the preservation, 
  just put you mail below.
  </p>

  <div class="send_mail">
   <input type="mail" class="sendmail_box" placeholder="Your mail here ..."></input>
   <button type="submit" class="sendbtn">Send</button>
  </div>

  </div>
 )
}

class ReceiveNews extends Component {
 render() {
  return (
   <section className="rcvnews_container">
    <RcvNewsImg />
    <RcvNewsText />
   </section>
  )
 }
}

export default ReceiveNews;



