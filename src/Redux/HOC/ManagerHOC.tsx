import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import ManagerHome from '../../Managers/Home';

export default connect(
    (state:any)=>{

        console.log(state.loginData)
        console.log(state.employeeData.employeeData)
        //alert("check data")
        return {
           //username:state.loginData.username,
           //token:state.loginData.token,
           userData:{username:state.loginData.username,token:state.loginData.token},
           employeeData:state.employeeData.employeeData
        }
    },
    (dispatch)=>{
        return bindActionCreators({
            getEmployee:(userData)=>{
                console.log('called')
                return {type:"Action",data:userData}
            }
        },dispatch)
    }
)(ManagerHome)