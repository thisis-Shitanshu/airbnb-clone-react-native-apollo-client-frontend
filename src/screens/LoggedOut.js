import React, {Component} from 'react';
import {
    StyleSheet, 
    Text, 
    View,
    Image,
    TouchableHighlight,
    ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

// Import custome files here
import colors from '../styles/colors';
import { transparentHeaderStyle } from '../styles/navigation';
import RoundedButton from '../components/buttons/RoundedButton';
import NavBarButton from '../components/buttons/NavBarButton';
import iPhoneSize from '../helpers/utils';

const size = iPhoneSize();
let termsTextSize = 13;
let headingTextSize = 30;

if (size === 'small') {
    termsTextSize = 12;
    headingTextSize = 26;
}

export default class LoggedOut extends Component {
    static navigationOptions = ({ navigation }) => ({
        headerRight: <NavBarButton handleButtonPress={() => navigation.navigate('LogIn')} location="right" color={colors.white} text="Log In" />,
        headerStyle: transparentHeaderStyle,
        headerTransparent: true,
        headerTintColor: colors.white,
    });

    onFacebookPress() {
        alert('Facebook button pressed');
    }

    onCreateAccountPress() {
        alert('Create Account button pressed');
    }

    MoreOptionsPress() {
        alert('More options button pressed');
    }

    render() {
        return (
            <ScrollView style={styles.wrapper}>
                <View style={styles.welcomeWrapper}>
                    <Image 
                        source={require('../img/airbnb-logo.png')}
                        style={styles.logo}
                    />
                    <Text style={styles.welcomeText}>
                        Welcome to Airbnb.
                    </Text>
                    <RoundedButton 
                        text="Continue with Facebook"
                        textColor={colors.green01}
                        background={colors.white}
                        icon={<Icon 
                                name="facebook" 
                                size={20}
                                style={styles.facebookButtonIcon}
                            />}
                        handleOnPress={this.onFacebookPress}
                    />
                    <RoundedButton 
                        text="Create Account"
                        textColor={colors.white}
                        handleOnPress={this.onCreateAccountPress}
                    />

                    <TouchableHighlight 
                        style={styles.moreOptionsButton}
                        onPress={this.MoreOptionsPress}
                    >
                        <Text
                            style={styles.moreOptionsButtonText}
                        >
                            More options
                        </Text>
                    </TouchableHighlight>

                    <View 
                        style={styles.termsAndConditions}
                    >
                        <Text style={styles.termsText}>By tapping Continue, Create Account ot More </Text>
                        <Text style={styles.termsText}>options, </Text>
                        <Text style={styles.termsText}>I agree to Airbnb's </Text>
                        <TouchableHighlight style={styles.linkButton}>
                            <Text style={styles.termsText}>Terms of Service</Text>
                        </TouchableHighlight>
                        <Text style={styles.termsText}>, </Text>
                        <TouchableHighlight style={styles.linkButton}>
                            <Text style={styles.termsText}>Payments Terms of Service</Text>
                        </TouchableHighlight>
                        <Text style={styles.termsText}>, </Text>
                        <TouchableHighlight style={styles.linkButton}>
                            <Text style={styles.termsText}>Privacy Policy</Text>
                        </TouchableHighlight>
                        <Text style={styles.termsText}>, and </Text>
                        <TouchableHighlight style={styles.linkButton}>
                            <Text style={styles.termsText}>Nondiscrimination Policy</Text>
                        </TouchableHighlight>
                        <Text style={styles.termsText}>.</Text>
                    </View>
                </View>
            </ScrollView>
        );
  }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        display: 'flex',
        backgroundColor: colors.green01
    },
    welcomeWrapper: {
        flex: 1,
        display: 'flex',
        marginTop: 30,
        padding: 20
    },
    logo: {
        width: 50,
        height: 50,
        marginTop: 50,
        marginBottom: 40
    },
    welcomeText: {
        fontSize: headingTextSize,
        color: colors.white,
        fontWeight: '300',
        marginBottom: 40
    },
    facebookButtonIcon: {
        color: colors.green01,
        position: 'relative',
        left: 20,
        zIndex: 8
    },
    moreOptionsButton: {
        marginTop: 15
    },
    moreOptionsButtonText: {
        color: colors.white,
        fontSize: 16
    },
    termsAndConditions: {
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        flexDirection: 'row',
        marginTop: 30
    },
    termsText: {
        color: colors.white,
        fontSize: termsTextSize,
        fontWeight: '600'
    },
    linkButton: {
        borderBottomWidth: 1,
        borderBottomColor: colors.white
    }
})