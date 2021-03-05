
import React, { useEffect, useState, usePermissions } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";
import { vw, vh, vmin, vmax } from "react-native-expo-viewport-units";
import { LinearGradient } from "expo-linear-gradient";
import { Icon } from "react-native-elements";
import { Audio, AVPlaybackStatus } from "expo-av";
import * as FileSystem from "expo-file-system";
import * as Font from "expo-font";
import * as Permissions from "expo-permissions";
import { set } from "react-native-reanimated";

const RecordFormComponent = ({ story, setStory }) => {
  const [audios, setAudios] = useState([1, 2]);
  // const [permission, askPermission, getPermission] = usePermissions(Permissions.AUDIO_RECORDING);
  
  const [isRecording, setIsRecording] = useState();
  const [recording, setRecording] = useState();

  async function getAudioAsync() {
    // permissions returns only for location permissions on iOS and under certain conditions, see Permissions.LOCATION
    const { status, permissions } = await Permissions.askAsync(Permissions.AUDIO_RECORDING);
    if (status === 'granted') {
      console.log("YEEEHAW")
    } else {
      // throw new Error('Location permission not granted');
      console.log("No Permission!!!!!!!")
    }
  }

  useEffect(()=> {
    getAudioAsync();
  },[])



  async function startRecording () {
    //const recording = new Audio.Recording();
    const recording = new Audio.Recording();
    try {
      console.log("Recording: ", recording);
      console.log(Audio.RecordingOptions);
      await recording.prepareToRecordAsync(Audio.RECORDING_OPTIONS_PRESET_LOW_QUALITY);
      await recording.startAsync();
      setIsRecording(true);
      // You are now recording!
      setRecording(recording);
    } catch (error) {
      console.log(error);
      // An error occurred!
    }
  }

  async function stopRecording() {
    console.log('Stopping recording..');
    setRecording(undefined);
    await recording.stopAndUnloadAsync();
    const uri = recording.getURI(); 
    setIsRecording(false);
    console.log('Recording stopped and stored at', uri);
  }
  

/*
 const [isRecording, setIsRecording] = useState(false);
 const [recording, setRecording] = useState();

 async function startRecording() {
   try {
     console.log('Requesting permissions..');
     await Audio.requestPermissionsAsync();
     await Audio.setAudioModeAsync({
       allowsRecordingIOS: true,
       playsInSilentModeIOS: true,
     }); 
     console.log('Starting recording..');
     const recording = new Audio.Recording();
     await recording.prepareToRecordAsync(Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY);
     await recording.startAsync(); 
     setRecording(recording);
     console.log('Recording started');
   } catch (err) {
     console.error('Failed to start recording', err);
   }
 }

 async function stopRecording() {
   console.log('Stopping recording..');
   setRecording(undefined);
   await recording.stopAndUnloadAsync();
   const uri = recording.getURI(); 
   console.log('Recording stopped and stored at', uri);
 }
 */

  //const [recording, setRecording] = React.useState();

  return (
    <View>
      <View style={styles.textDivision}>
      <Text style={{ fontWeight: "bold", fontStyle: "italic" }}>
        Immerse your audience in the story from the storyteller’s point of view.{" "}
      </Text>
      <Text style={{ fontStyle: "italic", marginTop: 10 }}>
        Recorded audio {'&'} uploaded visuals will be combined to create a
        one-of-a-kind glimpse into the story.
      </Text>
      </View>
      <ScrollView>
      {audios.map((index) => (
        <AudioElement
          length="00:00"
          title="yerr"
          count={index + 1}
          title="yerr"
          key={index}
        />
      ))}
      </ScrollView>
     
      <TouchableOpacity
        style={{
          //justifyContent: "center",
          alignSelf: "center",
        }}
        onPress={isRecording ? stopRecording : startRecording}
        //onPress={recording ? stopRecording : startRecording}
        //onPress={() => setIsRecording(!isRecording)}
      >
        <View
          style={{
            width: 50,
            height: 50,
            borderColor: "#AD00FF",
            borderWidth: 1,
            borderRadius: "50%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <PlayPause type={isRecording ? "stop" : "record"} />
        </View>
        <Text style={{ textAlign: "center", marginTop: 15 }}>
         
           {isRecording ? "Stop" : "Record"} 
        </Text>
        
      </TouchableOpacity>
    </View>
  );
};

const AudioElement = ({ title, count, length }) => {
  return (
    <View style={{ marginBottom: 30 }}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text>
          {title} {count}
        </Text>
        <Text>{length}</Text>
      </View>
      <View
        style={{
          marginTop: 10,
          flexDirection: "row",
          justifyContent: "flex-end",
        }}
      >
        <TouchableOpacity>
          <Icon
            type="font-awesome-5"
            name="play"
            color="#FB37FF"
            iconStyle={{ fontSize: 20 }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon
            type="font-awesome-5"
            name="trash"
            color="#FF5C00"
            iconStyle={{ fontSize: 20, marginLeft: 20 }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const PlayPause = ({ type }) => {
  return (
    <LinearGradient
      start={{ x: 1, y: 0 }}
      end={{ x: 0, y: 1 }}
      colors={
        type == "record" ? ["#AD00FF", "#00B1FD"] : ["#FF5C00", "#FB37FF"]
      }
      style={type == "record" ? styles.recordButton : styles.stopButton}
    ></LinearGradient>
  );
};

const styles = StyleSheet.create({
  recordButton: { width: 40, height: 40, borderRadius: "50%" },
  stopButton: { width: 20, height: 20 },
  header: {
    flexDirection: "row",
    marginBottom: 20,
  },
  title: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "24px",
    lineHeight: "20px",
    color: "#AD00FF",
    /* identical to box height, or 83% */

    /* Purple */

    // color: linear-gradient(191.88deg, #AD00FF 29.85%, #00B1FD 100%);
  },
  textDivision: {marginBottom: 30},
  textWrap: {
    borderColor: "black",
    borderWidth: 50,
    height: 20,
  },
  text1: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "bold",
    color: "#666666",
    fontSize: 12,
    lineHeight: 14,
    marginBottom: 15,
  },
  text2: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "normal",
    color: "#666666",
    fontSize: 12,
    lineHeight: 14,
    marginBottom: 15,
  },
  text3: {
    fontFamily: "Roboto",
    fontStyle: "italic",
    fontWeight: "medium",
    color: "#000000",
    fontSize: 12,
    lineHeight: 14,
    marginBottom: 50,
  },
  textFieldTitle: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "normal",
    color: "#666666",
    fontSize: 16,
    lineHeight: 20,
  },
  textFieldContent: {
    fontFamily: "Roboto",
    fontStyle: "italic",
    fontWeight: "Light",
    color: "#666666",
    fontSize: 16,
    lineHeight: 20,
    borderColor: "grey",
    borderWidth: 1,
    height: 100,
  },
  textFieldContentTitle: {
    fontFamily: "Roboto",
    fontStyle: "italic",
    fontWeight: "Light",
    color: "#666666",
    fontSize: 16,
    lineHeight: 20,
    borderColor: "grey",
    borderWidth: 1,
    height: 25,
  },
});
export default RecordFormComponent;
