import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {
    TouchableHighlight,
    StyleSheet,
    Text
} from 'react-native';

// Import custome file(s) here.
import colors from '../../styles/colors';

export default class NextArrowButton extends Component {
    render() {
        const { disabled, handleNextButton } = this.props;
        const opacityStyle = disabled ? { backgroundColor: 'rgba(255, 255, 255, 0.2)' } : { backgroundColor: 'rgba(255, 255, 255, 0.6)' };

        return (
            <TouchableHighlight
                style={[opacityStyle, styles.button]}
                onPress={handleNextButton}
            >
                <Icon 
                    name="angle-right"
                    color={colors.green01}
                    size={32}
                    style={styles.icon}
                />
            </TouchableHighlight>
        );
    }
}

NextArrowButton.protoTypes = {
    disabled: PropTypes.bool,
    handleNextButton: PropTypes.func
};

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        width: 60,
        height: 60
    },
    icon: {
        marginRight: -2,
        marginTop: -2
    }
});