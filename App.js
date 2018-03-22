import React, { Component } from 'react';
import { Alert, Text, View, TextInput, Button, StyleSheet } from 'react-native';


export default class PizzaTranslator extends Component {
    constructor(props) {
        super(props);
        this.state = {text: ''};
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>TERMS AND CONDITIONS</Text>
                </View>
                <View style={styles.body}>

                    <View style={styles.section}>
                        <Text style={[styles.title]}>H1</Text>
                        <Text style={[styles.bodyContent]}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                            ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                            in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                            sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                            mollit anim id est laborum.
                        </Text>
                    </View>

                    <View style={styles.section}>
                        <Text style={[styles.title]}>H1</Text>
                        <Text style={[styles.bodyContent]}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                            ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                            in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                            sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                            mollit anim id est laborum.
                        </Text>
                    </View>

                    <View style={styles.footer}>
                        <Button
                            style={styles.buttonLeft}
                            onPress={() => {
                                Alert.alert('Cancel was tapped');
                            }}
                            title="Cancel"
                        />
                        <Button
                            style={styles.buttonRight}
                            onPress={() => {
                                Alert.alert('Accept was tapped');
                            }}
                            title="Accept"
                        />
                    </View>
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        height: 100,
        backgroundColor: '#003B64',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerText: {
        fontSize: 20,
        color: '#fff',
        justifyContent: 'center',
        fontWeight: 'bold'

    },
    body: {
        flex: 6,
    },
    section: {
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5,

    },
    bodyContent: {
        color: '#000',
    },
    footer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 230,
        backgroundColor: '#F8F8FF'
    },
    buttonLeft: {
    },
    buttonRight: {
    }
});