import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    Text,
    View,
    TouchableOpacity,
    StyleSheet,
    Image
} from 'react-native';

// Import custome files here
import colors from '../../styles/colors';

export default class RoundedButton extends Component {
    render() {
        const { 
            text,
            loading,
            disabled,
            textColor,
            textSize,
            textWeight,
            iconPosition,
            textAlign,
            borderColor,
            background,
            icon,
            handleOnPress 
        } = this.props;
        const backgroundColor = background || 'transparent';
        const color = textColor || colors.black;
        const fontSize = textSize || 16;
        const fontWeight = textWeight || '600';
        const alignPosition = textAlign || 'center';
        const iconLocation = iconPosition || 'left';
        const border = borderColor || colors.white;
        const opacityStyle = disabled || loading ? 0.5 : 1;
        const textOpacity = loading ? 0 : 1;

        return (
            <TouchableOpacity 
                style={[{ opacity: opacityStyle, backgroundColor, borderColor: border}, styles.wrapper]}
                onPress={handleOnPress}
                activeOpacity={0.7}
                disabled={disabled || loading}
            >
                <View style={styles.buttonTextWrapper}>
                    {iconLocation === 'left' && !loading ? icon : null}
                    {loading ? 
                    <View style={styles.loaderContainer}>
                        <Image 
                            style={styles.loaderImage}
                            source={require('../../img/whiteLoader.gif')}
                        />
                    </View>
                    : null}
                    <Text 
                        style={[{
                            opacity: textOpacity, 
                            color, 
                            fontSize, 
                            fontWeight, 
                            textAlign,
                            alignPosition
                        }, styles.buttonText]}
                    >
                        {text}
                    </Text>
                    {iconLocation === 'right' && !loading ? icon : null}
                </View>
            </TouchableOpacity>
        );
    }
}

RoundedButton.propTypes = {
    text: PropTypes.string.isRequired,
    textColor: PropTypes.string,
    textSize: PropTypes.string,
    textWeight: PropTypes.string,
    textAlign: PropTypes.string,
    background: PropTypes.string,
    backgroundColor: PropTypes.string,
    icon: PropTypes.object,
    iconPosition: PropTypes.string,
    handleOnPress: PropTypes.func.isRequired,
    disabled: PropTypes.bool.isRequired,
    loading: PropTypes.bool.isRequired
};

const styles = StyleSheet.create({
    wrapper: {
        display: 'flex',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 12,
        paddingBottom: 12,
        borderRadius: 40,
        borderWidth: 1,
        marginBottom: 15,
        alignItems: 'center'
    },
    buttonTextWrapper: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    buttonText: {
        width: '100%',
    },
    loaderContainer: {
        width: 90,
        height: 90,
        borderRadius: 15,
        position: 'absolute',
        left: '50%',
        marginLeft: -45,
        top: '50%',
        marginTop: -45
    },
    loaderImage: {
        position: 'absolute',
        width: 40,
        height: 40,
        borderRadius: 15,
        left: '50%',
        top: '50%',
        marginLeft: -20,
        marginTop: -20
    }
});