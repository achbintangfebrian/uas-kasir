import React, { Component } from 'react';
import {View, StatusBar, Text, TextInput} from 'react-native'



class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
    }

    render() {
        return (
            <View style={{flex: 1}}>
              <StatusBar backgroundColor="#0288d1" barStyle="light-content" />
              
              <View style={{padding: 20, backgroundColor: '#03a9f4', elevation: 1}}>
                <Text style={{textAlign: 'center', color: '#FFFFFF', fontWeight: 'bold', fontSize: 20}}>My Kamus</Text>
              </View>
              <TextInput
              style={{ height: 40, borderColor: 'gray', borderWidth: 1, paddingLeft: 10, marginVertical: 20, marginHorizontal: 10, borderRadius: 10}}
              onChangeText={text => this.setState({text: text})}
              value={this.state.text}
              placeholder='Masukkan Kata Kunci'
              />
             
            </View>
        );
    }
}

export default App;