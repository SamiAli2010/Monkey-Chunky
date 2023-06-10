import React from 'react';
import {
  Alert,
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Header } from '@rneui/themed';
import PhonicSoundButton from './components/phonicSoundButton'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import db from './localdb'
console.log(db["the"].chunks)
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      text: '',
      chunks:[],
      PhonicSounds:[],
    };
  }
  render() {
    return (
      <SafeAreaProvider>

      <View style={styles.container}>
        <Header
          backgroundColor={'#9c8210'}
          centerComponent={{
            text: 'Monkey Chunky',
            style: { color: '#fff', fontSize: 20 },
          }}
        />
        <Image
        style={styles.imageIcon}
        source={{
          uri:"https://www.shareicon.net/data/128x128/2016/02/18/299227_face_128x128.png"
        }}/>
        <TextInput
          style={styles.inputBox}
          onChangeText={text => {
            this.setState({ text: text });
          }}
          value={this.state.text}
        />
        <TouchableOpacity
          style={styles.goButton}
          
          onPress={() => {
            var word=this.state.text.toLowerCase().trim()
           db[word]?(
              this.setState({chunks:db[word].chunks}),
              this.setState({phonicSounds:db[word].phones})
            ):
            Alert.alert("This word doesn't exist in our database")
          
          }}>
          <Text style={styles.buttonText}>GO</Text>
        </TouchableOpacity>
        <View>
        {this.state.chunks.map((item,index)=>{
        return(
          <PhonicSoundButton
          wordChunk={this.state.chunks[index]}
          soundChunk={this.state.phonicSounds[index]}

          />
          
        ) 
        })}
        </View>
      </View>
      </SafeAreaProvider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b8b8b8',
  },
  inputBox: {
    marginTop: 70,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    outline: 'none',
  },
  goButton: {
    width: '50%',
    height: 55,
    alignSelf: 'center',
    padding: 10,
    margin: 10,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  displayText: {
    textAlign: 'center',
    fontSize: 30,
  },
  imageIcon: {
    width:100,
    height:100,
    marginLeft:105,
  },
  chunkButton: {
    width:"60%",
    height:50,
  }
  
});
