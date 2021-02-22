import { call, put } from 'redux-saga/effects';
import api from '../../services/api';
import { actions as toastrActions } from 'react-redux-toastr';

import AuthActions from '../ducks/auth';

export function* signIn({ email, password }) {

  try {
    const response = yield call(api.get, 'users');

    let login = false
    response.data.map(user => {
      if(user.email === email && user.password ===password){
        login = true
      }
    })
    if(login){
      yield put(AuthActions.signInSuccess(email, password));
      yield put(toastrActions.add({
        type: 'success',
        title: 'Login com sucesso',
        message: 'Sucesso ao efetuar login',
        progressBar: true,
      }));
    } else {
      yield put(toastrActions.add({
        type: 'error',
        title: 'Falha no login',
        message: 'Verique seu email/senha!',
        progressBar: true,
      }));
    }

  } catch (error) {
    console.log("Error Catch")
    console.log(error)
  }
}
