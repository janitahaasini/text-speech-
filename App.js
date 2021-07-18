import * as React from 'react';
import * as Speech from 'expo-speech';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { Header } from 'react-native-elements';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      text: '',
    };
  }
  speak = () => {
    var talk = this.state.text;
    Speech.speak(talk);
  };
  render() {
    return (
      <View style={styles.container}>
        <Header
          backgroundColor="#129EEC"
          centerComponent={{
            text: 'Text To Speech ',
            style: {
              marginVertical: 20,
              color: '#fff',
              fontSize: 25,
              fontWeight: 250,
            },
          }}
        />
        <Image
          style={styles.speechImg}
          source={require('./assets/speech-to-text.png')}
        />
        <Text style={styles.displayText}>Enter Word Here</Text>
        <TextInput
          style={styles.inputBox}
          onChangeText={(text) => {
            this.setState({
              text: text,
            });
          }}
          value={this.state.text}
        />
        <TouchableOpacity style={styles.goButton} onPress={this.speak}>
          <Text style={{ fontWeight: 300, fontSize: 18, color: '#ffffff' }}>
            Click Here to Listen
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  speechImg: {
    width: 150,
    height: 150,
    margin: 20,
    alignSelf: 'center',
  },
  inputBox: {
    marginTop: 10,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 2,
  },
  displayText: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 250,
    marginTop: 40,
  },
  goButton: {
    width: '60%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    marginTop: 60,
    backgroundColor: '#129EEC',
  },
});
