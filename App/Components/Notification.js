import PushNotification from 'react-native-push-notification';
import { Colors } from 'Themes';

export default {

    setGlobalNotification()
    {
        PushNotification.cancelAllLocalNotifications();

        const randomTime = 5000;
        PushNotification.localNotificationSchedule({
            /* ANDROID */
            ticker   : 'GymNeed',
            color    : Colors.notif,
            /* IOS */
            category : null,
            message  : 'GymNeed, être bien dans son corps', // (required)
            playSound: true, // (optional) default: true
            soundName: 'default', // (optional) Sound to play when the notification is shown. Value of 'default' plays the default sound. It can be set to a custom sound such as 'android.resource://com.xyz/raw/my_sound'. It will look for the 'my_sound' audio file in 'res/raw' directory and play it. default: 'default' (default sound is played)
            date     : new Date(Date.now() + (randomTime)), // in 60 secs
        });
    },
};