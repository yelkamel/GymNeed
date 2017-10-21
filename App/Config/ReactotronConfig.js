import Immutable from 'seamless-immutable';
import Reactotron, { trackGlobalErrors } from 'reactotron-react-native';
import sagaPlugin from 'reactotron-redux-saga';
import Config from '../Config/DebugConfig';


if (Config.useReactotron)
{
  Reactotron
    .configure({
      name: 'GymNeed',
    })
    .useReactNative()
    .use(trackGlobalErrors())
    .use(sagaPlugin())
    .connect();

  // Let's clear Reactotron on every time we load the app
  Reactotron.clear();

  // Totally hacky, but this allows you to not both importing reactotron-react-native
  // on every file.  This is just DEV mode, so no big deal.
  console.tron = Reactotron;
}
