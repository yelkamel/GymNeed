import PushNotification from 'react-native-push-notification';
import Toast from 'react-native-root-toast';
import { Colors } from 'Themes';

export default PushNotification.configure({

                    // (optional) Called when Token is generated (iOS and Android)
                onRegister(token)
                {
                   // console.log('TOKEN:', token);
                },

                onNotification: (notification) =>
                {
                    // console.log('NOTIFICATION:', notification);
                    Toast.show(notification.message, {
                    duration   : notification.message.length > 150 ? 4000 : 6000,
                    position   : Toast.positions.BOTTOM,
                    shadow     : true,
                    animation  : true,
                    hideOnPress: true,
                    delay      : 0,
                    });
                },


                // ANDROID ONLY: GCM Sender ID (optional - not required for local notifications, but is need to receive remote push notifications)
                senderID: 'YOUR GCM SENDER ID',

                // IOS ONLY (optional): default: all - Permissions to register.
                permissions: {
                    alert: true,
                    badge: true,
                    sound: true,
                },

                // Should the initial notification be popped automatically
                // default: true
                popInitialNotification: true,

                /**
                     * (optional) default: true
                    * - Specified if permissions (ios) and token (android and ios) will requested or not,
                    * - if not, you must call PushNotificationsHandler.requestPermissions() later
                    */
                requestPermissions: true,
            });