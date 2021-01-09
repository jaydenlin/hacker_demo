import React from 'react';
import s from './index.module.css';
import axios from 'axios';
import Cookies from 'js-cookie';
class Homepage extends React.Component { 
    static getInitialProps({query}) {
      return {query}
    }
    componentDidMount(){
      //嘗試從 client 設定 cookie
      Cookies.set("hello_from_client", "hello");
    }
    onSameOriginSend = async ()=>{
        const response = await axios.get('/api/me');
        console.log(response.data);
    }
    onCrossOriginSend = async ()=>{
        const response = await axios.get('/api/me');
        console.log(response.data);
    }
    render(){
      return (
      <div className={s.wrapper}>
        Hello World
        <a className={s.btn} onClick={this.onSameOriginSend}>同源請求 (Same-Origin)</a>
        <a className={s.btn} onClick={this.onCrossOriginSend}>跨源請求 (Cross-Origin)</a>
      </div>);
    }
  }


export default Homepage