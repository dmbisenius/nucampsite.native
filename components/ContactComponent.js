import React, { Component } from 'react';
import * as Animatable from 'react-native-animatable';
import { Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';

class Contact extends Component {

    static navigationOptions = {
        title: 'Contact'
    }
    render() {
        return (
            <ScrollView>
                <Animatable.View animation='fadeInDown' duration={2000} delay={1000}>
                    <Card
                        title="Contact Information"
                        wrapperStyle={{ margin: 10 }}
                    >
                        <Text>1 Nucamp Way</Text>
                        <Text>Seattle, WA 98001</Text>
                        <Text style={{ marginBottom: 10 }}>U.S.A.</Text>
                        <Text>Phone: 1-206-555-1234</Text>
                        <Text>Email: campsites@nucamp.co</Text>
                    </Card>
                </Animatable.View>
            </ScrollView >
        );
    };
}
export default Contact;