import React, { Component } from 'react';
import { View, Text } from 'react-native';

import styles from './home.styles';
import { Button } from './../../components';

export default class HomeScreen extends Component {
    static navigationOptions = ({ navigation, navigationOptions }) => {
        return {
            title: 'Home',
            headerStyle: navigationOptions.headerStyle,
            headerTintColor: navigationOptions.headerTintColor,
            headerTitleStyle: navigationOptions.headerTitleStyle
        };
    }

    render() {
        const { navigate } = this.props.navigation;
        const { navParams } = this.props.navigation.state;
        const { UserName } = navParams && navParams.UserName ? navParams.UserName : '';
        return (
            <View style={styles.mainView}>
                <View style={styles.container}>
                    <Text> {UserName}</Text>
                    <Text>Home Screen</Text>
                    <Text>Click This Button to Use Navigation</Text>
                    <Button onPress={() => navigate('Details')}>
                        Navigate To Details
                    </Button>
                </View>
            </View>
        );
    }
}
