import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import WFMHome from '../../WFM/Home';

export default connect(
    (state:any)=>{
        //alert("test wfm")
        console.log("trial")
        console.log(state)
        console.log(state.wfmData)
        console.log(state.wfmData.wfmData)
        console.log("final try check")
        return {
           userData:{username:state.loginData.username,token:state.loginData.token},
           wfmData:state.wfmData.wfmData
        }
    },
    (dispatch)=>{
        return bindActionCreators({
            getWfmData:(userData)=>{
                console.log('called')
                return {type:"WFM_ACTION",data:userData}
            }
        },dispatch)
    }
)(WFMHome)