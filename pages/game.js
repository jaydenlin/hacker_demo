import React from 'react';
import s from './index.module.css';
import axios from 'axios';
class GamePage extends React.Component { 
    static getInitialProps({query}) {
      return {query}
    }
    onSameDomainSend = async ()=>{
        const response = await axios.get('/api/me');
        console.log(response.data);
    }
    onCrossSameDomainSend = async ()=>{
        const response = await axios.get('http://photo.com/api/me');
        console.log(response.data);
    }
    render(){
      return (
      <div className={s.wrapper}>
        遊戲網 Game.com 
        <a className={s.btn} onClick={this.onSameDomainSend}> 同源請求 (Same-Origin)</a>
        <a className={s.btn} onClick={this.onCrossSameDomainSend}> 跨源請求 (Cross-Origin)</a>
      </div>);
    }
  }


export default GamePage