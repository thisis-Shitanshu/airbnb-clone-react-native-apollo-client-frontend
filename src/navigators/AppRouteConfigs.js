import {
    createStackNavigator
} from 'react-navigation';

// Import custome files here
import LoggedOut from '../screens/LoggedOut';
import LogIn from '../screens/LogIn';
import ForgotPassword from '../screens/ForgotPassword';
import LoggedIn from './LoggedInTabsNavigator';
import TurnOnNotifications from '../screens/TurnOnNotification';

const AppRouteConfigs = createStackNavigator({
    LoggedOut: { screen: LoggedOut },
    LoggedIn: { 
        screen: LoggedIn,
        navigationOptions: {
            header: null,
            gesturesEnabled: false,
        }, 
    },
    LogIn: { screen: LogIn },
    ForgotPassword: { screen: ForgotPassword },
    TurnOnNotifications: { screen: TurnOnNotifications }
}, {
    initialRouteName: 'LoggedIn'
});

export default AppRouteConfigs;