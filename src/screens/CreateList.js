import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../styles/colors';

export default class CreateList extends Component {
    static navigationOptions = ({ navigation }) => ({
        headerStyle: styles.headerStyle,
    });

    render() {
        return (
            <View style={styles.wrapper}>
                <ScrollView style={styles.scrollView}>
                    <Text style={styles.heading}>Create a list</Text>
                </ScrollView>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: colors.white,
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        top: 0
    },
    headerStyle: {
        backgroundColor: colors.white,
        elevation: 0
    },
    heading: {
        fontSize: 28,
        fontWeight: '800',
        color: colors.lightBlack,
        paddingLeft: 20,
        paddingRight: 20,
        marginTop: 15
    }
});