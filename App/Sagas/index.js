import { takeLatest, all } from 'redux-saga/effects';
import DebugConfig from '../Config/DebugConfig';

/* ------------- Types ------------- */

import { StartupTypes } from 'Redux/StartupRedux';
import { GithubTypes } from 'Redux/GithubRedux';
import { LoginType } from 'Redux/LoginRedux';


/* ------------- Sagas ------------- */

import { startup } from './StartupSagas';
import { getUserAvatar } from './GithubSagas';
import { login, logout } from './LoginSagas';


/* ------------- Connect Types To Sagas ------------- */

export default function* root()
{
  yield all([
    // some sagas only receive an action
    takeLatest(StartupTypes.STARTUP, startup),

  ]);
}
