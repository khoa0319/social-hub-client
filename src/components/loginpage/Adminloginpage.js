import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';

import { Redirect } from 'react-router'
class Adminloginpage extends Component {
  constructor(props){
    super(props)  
    this.state={
        isLoginyet:false,
    }
    
}
onChange=(e)=>
    {
        this.setState({
            [e.target.name]:e.target.value
        })
    }
onSubmit=(e)=>
{
  e.preventDefault();
  axios
.post('http://localhost:5000/api/admins/login',this.state)
  .then(res=>{
    if(res.data.msg==='Login Success'){
      localStorage.setItem("admintoken",res.data.token)
      this.setState(
        {
          isLoginyet:true
        }
      )
    }
  })
  .catch(console.log)
}
    render() {
      const {isLoginyet,username}=this.state
      if(isLoginyet)
      return <Redirect to = {{ pathname: `admin/${username}` }} />;
        return (
            <div className="row">
            <div className="col-md-12">
                <div className="card mb-4 f-elm text-center w-50 ml-auto mr-auto">
                     <div className="card-header bg-main text-light align-middle">
                       <h4>Đăng Nhập vào trang Admin</h4>
                     </div>
                     <div className="card-body">
                     <form onSubmit={this.onSubmit}>
                       <div className="form-group">
                      <h6><label>Tên Đăng Nhập</label></h6>
                         <input type="text" className="form-control" name="username" id="username" placeholder="Username" onChange={this.onChange}/>
                         <h6><label>Mật Khẩu</label> </h6>
                         <input type="text" className="form-control" name="password" id="password" placeholder="Password" onChange={this.onChange}/>
                         <div className="mt-2">
                         <button type="submit"  className="btn btn-myapp  col-12 col-md-12 col-lg-12" >Đăng Nhập</button>
                         </div>
                        
                       
                     </div>
                     </form>
                   </div>
                  </div>
                  </div>
                  </div>
        );
    }
}

export default connect(null,null)(Adminloginpage);