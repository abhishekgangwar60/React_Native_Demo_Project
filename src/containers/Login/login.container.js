import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { NavigationActions } from 'react-navigation';

import { InputBox, Button } from './../../components';
import styles from './login.styles';

export default class LoginScreen extends Component {
    static navigationOptions = ({ navigation, navigationOptions }) => {
        return {
            header: null
        };
    }

    constructor(props) {
        super(props);
        this.state = { userName: '', Password: '' };
    }

    /** 
     * When Login Is Clicked
    */
    onLogin() {
        if (this.state.userName === 'Admin' && this.state.Password === 'Admin') {
            this.setState({ userName: '', Password: '' });
            this.PushToHome();
        }
    }

    /** 
     * For Removing last page from Stack, ResetStack
    */
    PushToHome() {
        return this.props.navigation
            .dispatch(NavigationActions.reset({
                index: 0,
                actions: [NavigationActions.navigate({ routeName: 'Home' })]
            }));
    }

    render() {
        return (
            <View style={styles.mainView}>
                <View style={styles.appNameContainer}>
                    <Text style={styles.AppName}>
                        Demo App
                    </Text>
                </View>
                <View style={styles.formContainer}>
                    <InputBox
                        placeholder={'Username'}
                        value={this.state.userName}
                        onChangeText={(userName) => this.setState({ userName })}
                    />
                    <InputBox
                        placeholder={'Password'}
                        value={this.state.Password}
                        onChangeText={(Password) => this.setState({ Password })}
                        secureTextEntry={true}
                    />
                    <Button onPress={() => this.onLogin()} disabled={false}> Login</Button>
                </View>
            </View >
        );
    }
}