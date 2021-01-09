import React from 'react';
import s from './index.module.css';
import axios from 'axios';
import Cookies from 'js-cookie';
class SignIn extends React.Component {
    static getInitialProps({query}) {
        return {query}
    }
    componentDidMount(){
      const {redirect_uri} = this.props.query;
      if (redirect_uri){
          window.location.href = redirect_uri;
      }
    }
    render(){
        return (
            <div className={s.wrapper}>
                example.com <br/> 登入頁面
            </div>);
    }
}

export default SignIn