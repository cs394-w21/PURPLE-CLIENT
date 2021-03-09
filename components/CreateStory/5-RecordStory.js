
import React, { useEffect, useState, usePermissions } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
  Platform
} from "react-native";
import { vw, vh, vmin, vmax } from "react-native-expo-viewport-units";
import { LinearGradient } from "expo-linear-gradient";
import { Icon } from "react-native-elements";
import { Audio, AVPlaybackStatus } from "expo-av";
import * as FileSystem from "expo-file-system";
import * as Font from "expo-font";
import * as Permissions from "expo-permissions";
import { set } from "react-native-reanimated";
import * as DocumentPicker from 'expo-document-picker';


  const RecordFormComponent = ({ story, setStory }) => {
  const [audios, setAudios] = useState([]);
  
  async function PickAudio () {
    let result = await DocumentPicker.getDocumentAsync({
      type: "audio/*"
    })
    if (!result.cancelled) {
      setAudios(audios.concat(result.uri))
      setFormData(audios.concat(result.uri))
    }
  }

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

          count={index + 1}
          title="Story"
          key={index}
        />
      ))}
      </ScrollView>
     
      <TouchableOpacity
        style={{
          //justifyContent: "center",
          alignSelf: "center",
        }}
        onPress={PickAudio}
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

        </View>
        <Text style={{ textAlign: "center", marginTop: 15 }}>
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
