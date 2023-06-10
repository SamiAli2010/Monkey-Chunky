import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from 'react-native';
import {Audio} from 'expo-av'
export default class PhonicSoundButton extends React.Component {
 constructor() {
    super();
    this.state = {
     pressedButtonIndex:"",
    };
  }
 playSound=async (soundChunk)=>{
   console.log(soundChunk)
   var soundLink='https://curriculum.whitehatjr.com/Visual+Project+Asset/PRO_VD/Phones/phones/'
+ soundChunk + '.mp3'

await Audio.Sound.createAsync({
  uri:soundLink,
},
{shouldPlay:true}
)

 }
    
  
  render(){
    return(
      <TouchableOpacity 
      style={
        this.props.buttonIndex=== this.state.pressedButtonIndex
        ?[styles.chunkButton,{backgroundColor:"white"}]
        :[styles.chunkButton,{backgroundColor:"red"}]
       
      }
      onPress={()=>{
        this.setState({pressedButtonIndex:this.props.buttonIndex})
        this.playSound(this.props.soundChunk)
      }}>
      <Text style={
        this.props.buttonIndex=== this.state.pressedButtonIndex
        ?[styles.displayText,{color:"red"}]
        :[styles.displayText,{color:"white"}]
      }>
      
      {this.props.wordChunk}
      </Text>
      </TouchableOpacity>
    )

  }
}

const styles=StyleSheet.create({
  displayText:{
    textAlign:"center",
    fontSize:33,
    color:"white",

  },
  chunkButton:{
    width:"60%",
    height:50,
    justifyContent:"center",
    alignItems:"center",
    alignSelf:"center",
    borderRadius:10,
    margin:5,
    backgroundColor:"red",
  }
})