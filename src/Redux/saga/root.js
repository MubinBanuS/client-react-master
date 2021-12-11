import {takeEvery} from 'redux-saga/effects'
import { loginHandler,managerHandler,wfmHandler } from './handlers'


export function* rootSaga(){
    yield takeEvery("LOGIN_ACTION",loginHandler)
    yield takeEvery("Action",managerHandler)
    yield takeEvery("WFM_ACTION",wfmHandler)

}