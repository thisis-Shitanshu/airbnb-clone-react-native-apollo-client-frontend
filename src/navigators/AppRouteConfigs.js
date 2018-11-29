import {
    createStackNavigator
} from 'react-navigation';

// Import custome files here
import LoggeOut from '../screens/LoggedOut';
import LogIn from '../screens/LogIn';
import ForgotPassword from '../screens/ForgotPassword';

const AppRouteConfigs = createStackNavigator({
    LoggeOut: { screen: LoggeOut },
    LogIn: { screen: LogIn },
    ForgotPassword: { screen: ForgotPassword }
});

export default AppRouteConfigs;