import React, { Component } from "react";
import { connect } from 'react-redux';
import * as actions from '../../action/adminauth/index';

class ActivityBtn extends Component {
  render() {
    return (
      <div className="row">
<div className="col-6">
          <button
            className="btn btn-block btn-lg btn-myapp3 txt-white"
            type="button"
            onClick={()=>this.props.isAddNewActivity(true)}
            data-toggle="modal"
          data-target="#ActivityModel"
          >
            Tạo Hoạt Động
          </button>
          </div>
          <div className="col-6"><button
            className="btn btn-block btn-lg btn-myapp3 txt-white"
            type="button"
            data-toggle="modal"
            data-target="#NotiModel"
          >
            Tạo Thông Báo
          </button>
          </div>
          <div className="col-6 mt-2"><button
            className="btn btn-block btn-lg btn-myapp3 txt-white"
            type="button"
            data-toggle="modal"
            data-target="#NotiModel"
            disabled
          >
            Đổi mật khẩu(Đang Xây Dựng)
          </button>
          </div>
          <div className="col-6 mt-2"><button
            className="btn btn-block btn-lg btn-myapp3 txt-white"
            type="button"
            data-toggle="modal"
            data-target="#NotiModel"
            disabled
          >
            Tạo Tài Khoản Admin Mới(Đang Xây Dựng)
          </button>
          </div>
          
        </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
          isAddNewActivity: (value) => {
          dispatch(actions.isAddNewActivity(value))
      }
  }
}

export default connect(null,mapDispatchToProps)(ActivityBtn);
