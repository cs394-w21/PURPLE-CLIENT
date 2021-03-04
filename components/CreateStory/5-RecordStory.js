import React, { useEffect, useState } from "react";
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

const RecordFormComponent = ({ story }) => {
  const [audios, setAudios] = useState([1, 2]);
  const [isRecording, setIsRecording] = useState(false);

  return (
    <View>
      <View style={styles.textDivision}></View>
      <Text style={{ fontWeight: "bold", fontStyle: "italic" }}>
        Immerse your audience in the story from the storyteller’s point of view.{" "}
      </Text>
      <Text style={{ fontStyle: "italic", marginTop: 10 }}>
        Recorded audio & uploaded visuals will be combined to create a
        one-of-a-kind glimpse into the story.
      </Text>
      {audios.map((index) => (
        <AudioElement
          length="00:00"
          title="yerr"
          count={index + 1}
          title="yerr"
          key={index}
        />
      ))}
      <TouchableOpacity  style={{
            //justifyContent: "center",
            alignSelf: "center",
  
          }}
          
          onPress={() => setIsRecording(!isRecording)}>
        <View
          style={{
            width: 50,
            height: 50,
            borderColor: "#AD00FF",
            borderWidth: 2,
            borderRadius: "50%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
            <PlayPause type={isRecording ? "stop" : "record"}/>
          
        </View>
        <Text style={{textAlign: "center"}}>{isRecording ? "Stop" : "Record"}</Text>
      </TouchableOpacity>
    </View>
  );
};

const AudioElement = ({ title, count, length }) => {
  return (
    <View>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text>
          {title} {count}
        </Text>
        <Text>{length}</Text>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
        <Icon
          type="font-awesome-5"
          name="play"
          color="#666"
          style={{ zIndex: 0 }}
          iconStyle={{ fontSize: 20, color: "rgba(0,0,0,0.1)" }}
        />
        <Icon
          type="font-awesome-5"
          name="trash"
          color="#666"
          style={{ zIndex: 0 }}
          iconStyle={{ fontSize: 20, color: "rgba(0,0,0,0.1)" }}
        />
      </View>
    </View>
  );
};

const PlayPause = ({type}) =>{
  return (<LinearGradient
    start={{ x: 1, y: 0 }}
    end={{ x: 0, y: 1 }}
    colors={type == "record" ? ["#AD00FF", "#00B1FD"]: ["#FF5C00", "#FB37FF"]}
    style={type == "record" ? styles.recordButton : styles.stopButton}
  >

  </LinearGradient>)
}

const styles = StyleSheet.create({
  recordButton: {width: 40,
    height: 40,
    borderRadius: "50%"},
  stopButton: {width: 20,
    height: 20,
    },
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
  textDivision: {},
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
