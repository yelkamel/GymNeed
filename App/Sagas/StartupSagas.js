import { put, select } from 'redux-saga/effects';
import GithubActions from 'Redux/GithubRedux';
import { is } from 'ramda';

// exported to make available for tests
export const selectAvatar = (state) => state.github.avatar;

// process STARTUP actions
export function* startup(action)
{
  if (__DEV__ && console.tron)
{
    // fully customized!
    const subObject = { a: 1, b: [1, 2, 3], c: true };
    subObject.circularDependency = subObject; // osnap!
  }
  const avatar = yield select(selectAvatar);
  // only get if we don't have it yet
  if (!is(String, avatar))
{
    yield put(GithubActions.userRequest('GantMan'));
  }
}
