import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import styles from './input-box.style';

export default class InputBox extends Component {

    render() {
        return (
            <View style={styles.inputBoxContainer}>
                <TextInput
                    style={styles.TextBox}
                    onChangeText={this.props.onChangeText}
                    value={this.props.value}
                    placeholder={this.props.placeholder}
                    secureTextEntry={this.props.secureTextEntry}
                />
            </View>
        );
    }
}
