import React, { Component } from 'react';
import {
    View,
    Text,
    KeyboardAvoidingView,
    StyleSheet,
    ScrollView 
} from 'react-native';

// Import custome file(s) here.
import { transparentHeaderStyle } from '../styles/navigation';
import colors from '../styles/colors';
import InputFiels from '../components/form/InputField';
import Notification from '../components/Notification';
import NextArrowButton from '../components/buttons/NextArrowButton';
import Loader from '../components/Loader';

export default class ForgotPassword extends Component {
    
    static navigationOptions = ({ navigation }) => ({
        headerStyle: transparentHeaderStyle,
        headerTintColor: colors.white
    });
    
    state = {
        formValid: true,
        loadingVisible: false,
        validEmail: false,
        emailAddress: ''
    };

    handleEmailChange = (email) => {
        const emailCheckRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const { validEmail } = this.state;

        this.setState({ emailAddress: email });

        if (!validEmail) {
            if (emailCheckRegex.test(email)) {
                this.setState({ validEmail: true });
            }
        } else {
            if (!emailCheckRegex.test(email)) {
                this.setState({ validEmail: false });
            }
        }

    }

    goToNextStep = () => {
        const { emailAddress } = this.state;
        this.setState({ loadingVisible: true });
        setTimeout(() => {
            if (emailAddress === 'wrong@email.com') {
                this.setState({
                    loadingVisible: false,
                    formValid: false
                });
            } else {
                this.setState({
                    loadingVisible: false,
                    formValid: true
                });
            }
        }, 2000);
    }

    handleCloseNotification = () => {
        this.setState({ 
            formValid: true
         })
    }

    render() {
        const { 
            loadingVisible,
            formValid,
            validEmail
        } = this.state;
        const background = formValid ? colors.green01 : colors.darkOrange;
        const showNotification = !formValid;
        
        return (
            <KeyboardAvoidingView
                style={[{ backgroundColor: background }, styles.wrapper]}
                behavior="padding"
            >
                <View style={styles.scrollViewWrapper}>
                    <ScrollView
                        style={styles.scrollView}
                    >
                        <Text 
                            style={styles.forgotPasswordHeading}
                        >Forgot your password?</Text>
                        <Text
                            style={styles.forgotPasswordSubheading}
                        >Enter your email to find your account</Text>
                        <InputFiels 
                            customStyle={{ marginBottom: 30 }}
                            textColor={colors.white}
                            labelText="EMAIL ADDRESS"
                            labelTextSize={14}
                            labelColor={colors.white}
                            borderBottomColor={colors.white}
                            inputType="email"
                            onChangeText={this.handleEmailChange}
                            showCheckmark={validEmail}
                        />
                    </ScrollView>
                    <NextArrowButton 
                        handleNextButton={this.goToNextStep}
                        disabled={!validEmail}
                    />
                </View>
                <Loader 
                    modalVisible={loadingVisible}
                    animationType="fade"
                />
                <View style={styles.notificationWrapper}>
                    <Notification 
                        showNotification={showNotification}
                        handleCloseNotification={this.handleCloseNotification}
                        type="Error"
                        firstLine="No account exists for the requested"
                        secondLine="email address."
                    />
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        display: 'flex',
        flex: 1
    },
    scrollViewWrapper: {
        marginTop: 70,
        flex: 1,
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
    },
    scrollView: {
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 20,
        flex: 1,
    },
    forgotPasswordHeading: {
        fontSize: 28,
        color: colors.white,
        fontWeight: '300'
    },
    forgotPasswordSubheading: {
        color: colors.white,
        fontWeight: '600',
        fontSize: 15,
        marginTop: 10,
        marginBottom: 60
    },
    notificationWrapper: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
    },
});