import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

// Import custome file(s) here.
import NoResult from '../components/saved/NoResults';
import colors from '../styles/colors';

export default class SavedContainer extends Component {

    render() {
        return (
            <View style={styles.wrapper}>
                <NoResult />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        display: 'flex',
        backgroundColor: colors.white
    }
});