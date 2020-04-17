import React, { Component } from 'react';
import { StyleSheet, TextInput, Text, View, TouchableOpacity } from 'react-native';

export default class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            name: '',
            age: '',
            email: ''
        }
    }
    render(){
        return(      
            <View style={styles.container}>
                <Text style={styles.titleText}>Register Account Form</Text>
                <View style={styles.line}></View>
                <TextInput
                    value={this.state.username}
                    onChangeText={(username) => this.setState({ username })}
                    placeholder={'Username'}
                    style={styles.input}
                />
                <TextInput
                    value={this.state.password}
                    onChangeText={(password) => this.setState({ password })}
                    placeholder={'Password'}
                    secureTextEntry={true}
                    style={styles.input}
                />
                <TextInput
                    value={this.state.name}
                    onChangeText={(name) => this.setState({ name })}
                    placeholder={'Name'}
                    style={styles.input}
                />
                <TextInput
                    value={this.state.age}
                    onChangeText={(age) => this.setState({ age })}
                    placeholder={'Age'}
                    style={styles.input}
                />
                <TextInput
                    value={this.state.email}
                    onChangeText={(email) => this.setState({ email })}
                    placeholder={'Email'}
                    style={styles.input}
                />
                <TouchableOpacity
                style={styles.button}
                onPress = {() => this.props.navigation.navigate('Login')}
                ><Text>Register</Text></TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
        marginBottom: 100
      },
    button: {
        borderRadius: 5,
        padding: 5,
        marginBottom: 10,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: 'black',
      },
    input: {
        width: 200,
        height: 39,
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 10,
      },
    titleText: {
        fontSize: 20,
        fontWeight: '700',
    },
    line: {
        marginTop: 10,
        width: 240,
        height: 5,
        backgroundColor: 'gray',
        marginBottom: 10
    }
})