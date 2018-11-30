import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView
} from 'react-native';

// Import custome file(s) here.
import SearchBar from '../components/SearchBar';
import Categories from '../components/explore/Categories';
import colors from '../styles/colors';
import categoriesList from '../data/categories';

export default class ExploreContainer extends Component {

    render() {
        return (
            <View style={styles.wrapper}>
                <SearchBar />
                <ScrollView
                    style={styles.scrollView}
                    contentContainerStyle={styles.scrollViewContent}
                >
                    <Text 
                        style={styles.heading}
                    >Explore Airbnb</Text>
                    <View 
                        style={styles.categories}
                    >
                        <Categories 
                            categories={categoriesList}
                        />
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: colors.white
    },
    scrollView: {
        paddingTop: 80
    },
    scrollViewContent: {
        paddingBottom: 80
    },
    categories: {
    },
    heading: {
        fontSize: 22,
        fontWeight: '600',
        paddingLeft: 20,
        paddingBottom: 20,
        color: colors.gray04
    }
});