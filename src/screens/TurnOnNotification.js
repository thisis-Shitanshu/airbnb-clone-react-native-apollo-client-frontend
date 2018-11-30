import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import { NavigationActions } from 'react-navigation';
import {
    View,
    Text,
    TouchableHighlight,
    StyleSheet
} from 'react-native';

// Import custome file(s) here.
import { transparentHeaderStyle } from '../styles/navigation';
import colors from '../styles/colors';

const navigateToTabsAction = NavigationActions.navigate({
    routeName: 'LoggedIn'
});

export default class TurnOnNotifications extends Component {
    
    static navigationOptions = () => ({
        headerLeft: null,
        headerStyle: transparentHeaderStyle,
        headerTransparent: true,
        headerTintColor: colors.white,
        gesturesEnabled: false
    });

    state = {
        pressNotifyBtn: false,
        pressSkipBtn: false
    };

    handleNotifyBtnHideUnderlay = () => {
        this.setState({ pressNotifyBtn: false });
    }

    handleNotifyBtnShowUnderlay = () => {
        this.setState({ pressNotifyBtn: true });
    }

    handleSkipBtnHideUnderlay = () => {
        this.setState({ pressSkipBtn: false });
    }

    handleSkipBtnShowUnderlay = () => {
        this.setState({ pressSkipBtn: true });
    }

    render() {
        const { pressNotifyBtn, pressSkipBtn } = this.props;
        const { navigation } = this.props;
        return (
            <View style={styles.wrapper}>
                <View style={styles.content}>
                    <Icon 
                        name="comments-o"
                        size={46}
                        style={styles.icon}
                    />
                    <Text style={styles.title}>
                        Turn on notifications?
                    </Text>
                    <Text style={styles.description}>
                        We can let you know when someone message you, or notify you about other important account activity.
                    </Text>
                    <TouchableHighlight
                        style={[{ backgroundColor: pressNotifyBtn ? colors.green02 : colors.green01 }, styles.notifyButton]}
                        onPress={() => navigation.dispatch(navigateToTabsAction)}
                        onShowUnderlay={this.handleNotifyBtnShowUnderlay}
                        onHideUnderlay={this.handleNotifyBtnHideUnderlay}
                        underlayColor={colors.green02}
                    >
                        <Text
                            style={[{ color: colors.white }, styles.buttonText]}
                        >Yes, notify me</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={[{ backgroundColor: pressSkipBtn ? colors.gray01 : 'transparent' }, styles.skipButton]}
                        onPress={() => navigation.dispatch(navigateToTabsAction)}
                        onShowUnderlay={this.handleSkipBtnShowUnderlay}
                        onHideUnderlay={this.handleSkipBtnHideUnderlay}
                        underlayColor={colors.gray01}
                    >
                        <Text
                            style={[{ color: colors.green01 }, styles.buttonText]}
                        >Skip</Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: colors.white
    },
    content: {
        marginTop: 80,
        paddingLeft: 20,
        paddingRight: 20
    },
    icon: {
        color: colors.green01,
        marginBottom: 15
    },
    title: {
        fontSize: 28,
        color: colors.black,
        fontWeight: '600'
    },
    description: {
        fontSize: 16,
        paddingRight: 30,
        marginTop: 15,
        lineHeight: 22
    },
    notifyButton: {
        width: 160,
        paddingTop: 12,
        paddingBottom: 12,
        borderRadius: 3,
        marginTop: 40
    },
    buttonText: {
        fontSize: 18,
        fontWeight: '600',
        alignSelf: 'center'
    },
    skipButton: {
        borderColor: colors.green01,
        width: 100,
        borderWidth: 2,
        paddingTop: 12,
        paddingBottom: 12,
        borderRadius: 3,
        marginTop: 15
    }
});

TurnOnNotifications.propTypes = {
    navigation: PropTypes.shape({
        dispatch: PropTypes.func
    })
};