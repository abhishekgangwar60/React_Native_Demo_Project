import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './button.style';

export default class Button extends Component {
    render() {
        return (
            <View>
                <TouchableOpacity
                    onPress={this.props.onPress}
                    disabled={this.props.disabled}
                    style={styles.buttonStyle}
                >
                    <Text style={styles.textStyle}>
                        {this.props.children}
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}
