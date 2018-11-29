import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';

// Import custome file(s) here.
import ExploreContainer from '../containers/ExploreContainer';
import InboxContainer from '../containers/InboxContainer';
import ProfileContainer from '../containers/ProfileContainer';
import SavedContainer from '../containers/SavedContainer';
import TripsContainer from '../containers/TripsContainer';
import colors from '../styles/colors';

// Custome Function
const CustomTabBarIcon = (name, size) => {
    const icon = ({ tintColor }) => (
        <Icon
          name={name}
          size={size}
          color={tintColor}
        />
    );

    icon.propTypes = {
        tintColor: PropTypes.string.isRequired,
    };
    
    return icon;
}

const LoggedInTabNavigator = createBottomTabNavigator({
    ExploreContainer: { 
        screen: ExploreContainer,
        navigationOptions: {
            tabBarLabel: 'EXPLORE',
            tabBarIcon: CustomTabBarIcon('ios-search', 22),
        }, 
    },
    SavedContainer: { 
        screen: SavedContainer,
        navigationOptions: {
            tabBarLabel: 'SAVED',
            tabBarIcon: CustomTabBarIcon('ios-heart-empty', 22),
        }, 
    },
    TripsContainer: { 
        screen: TripsContainer,
        navigationOptions: {
            tabBarLabel: 'TRIPS',
            tabBarIcon: CustomTabBarIcon('logo-ionic', 21),
        }, 
    },
    InboxContainer: { 
        screen: InboxContainer,
        navigationOptions: {
            tabBarLabel: 'INBOX',
            tabBarIcon: CustomTabBarIcon('ios-archive', 25),
        }, 
    },
    ProfileContainer: { 
        screen: ProfileContainer,
        navigationOptions: {
            tabBarLabel: 'PROFILE',
            tabBarIcon: CustomTabBarIcon('ios-contact', 22),
        }, 
    }
}, {
    tabBarOptions: {
        labelStyle: {
            fontWeight: '600',
            marginBottom: 5
        },
        activeTintColor: colors.pink
    },
    tabBarPosition: 'bottom'  
});

export default LoggedInTabNavigator;