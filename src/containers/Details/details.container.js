import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './details.styles';

export default class DetailsScreen extends Component {
    static navigationOptions = ({ navigation, navigationOptions }) => {
        return {
            title: 'Details',
            headerStyle: navigationOptions.headerStyle,
            headerTintColor: navigationOptions.headerTintColor,
            headerTitleStyle: navigationOptions.headerTitleStyle
        };
    }

    render() {
        return (
            <View style={styles.mainView}>
                <View style={styles.container}>
                    <Text>Details Screen</Text>
                </View>
            </View>
        );
    }
}
