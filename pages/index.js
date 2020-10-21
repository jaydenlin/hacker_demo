import React from 'react';
import s from './index.module.css';
import axios from 'axios';
class Homepage extends React.Component { 
    static getInitialProps({query}) {
      return {query}
    }
    onSameDomainSend = async ()=>{
        const response = await axios.get('/api/me');
        console.log(response.data);
    }
    onCrossSameDomainSend = async ()=>{
        const response = await axios.get('/api/me');
        console.log(response.data);
    }
    render(){
      return (
      <div className={s.wrapper}>
        Hello World
        <a className={s.btn} onClick={this.onSameDomainSend}>同源請求 (Same-Domain)</a>
        <a className={s.btn} onClick={this.onCrossSameDomainSend}>跨源請求 (Cross-Domain)</a>
      </div>);
    }
  }


export default Homepage