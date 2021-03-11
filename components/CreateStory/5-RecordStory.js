import React, { useEffect, useState, usePermissions } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
  Platform,
} from "react-native";
import { vw, vh, vmin, vmax } from "react-native-expo-viewport-units";
import { LinearGradient } from "expo-linear-gradient";
import { Icon } from "react-native-elements";
import { Audio, AVPlaybackStatus } from "expo-av";
import * as FileSystem from "expo-file-system";
import * as Font from "expo-font";
import * as Permissions from "expo-permissions";
import { set } from "react-native-reanimated";
import * as DocumentPicker from "expo-document-picker";
import GradientButton from '../GradientButton';
import colors from '../../utils/utils';


const RecordFormComponent = ({ story, setFormData }) => {
  const [audios, setAudios] = useState([]);
  const [message, setMessage] = useState(null);

  async function PickAudio() {
    let result = await DocumentPicker.getDocumentAsync({
<<<<<<< HEAD
      type: "audio/mp3", copyToCacheDirectory: true
    })
    if (!result.cancelled) {
      setAudios(audios.concat(result))
      setFormData("audios", [result.uri])
=======
      type: "audio/*",
      copyToCacheDirectory: true,
    });
    if (!result.cancelled) {
      setAudios(audios.concat(result));
      setFormData(audios.concat(result.uri));
>>>>>>> afd03caaf57f2a3b463d35d395f81764d46d22c3
    }
  }

  return (
    <View>
      <View style={styles.textDivision}>
        <Text style={{ fontWeight: "bold", fontStyle: "italic" }}>
          Immerse your audience in the story from the storyteller’s point of
          view.{" "}
        </Text>
        <Text style={{ fontStyle: "italic", marginTop: 10 }}>
          Recorded audio {"&"} uploaded visuals will be combined to create a
          one-of-a-kind glimpse into the story.
        </Text>
      </View>
      <ScrollView>
        {audios.map((value, index) => (
          <AudioElement
            length={value.size}
            title={value.name}
            key={index}
            my_uri={value.uri}
            setAudios={setAudios}
          />
        ))}
      </ScrollView>

      <View>
        <GradientButton
          onPress={
            audios.length == 0
              ? PickAudio
              : () =>
                  alert(
                    "You have already uploaded an audio file. Remove the existing one to re-upload."
                  )
          }
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
          colors={colors.blurple}
          title={"Upload Audio"}
        ></GradientButton>

        <Text style={{ textAlign: "center", marginTop: 15 }}>
          {audios.length == 0 ? "Upload" : "Success!"}
        </Text>
      </View>
    </View>
  );
};

const AudioElement = ({ title, length, my_uri, setAudios }) => {
  const [sound, setSound] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audiouri = my_uri;
  const sound_obj = new Audio.Sound();

  async function playAudio() {
    if (!isPlaying) {
      sound_obj.setOnPlaybackStatusUpdate();
      await sound_obj.loadAsync({ uri: audiouri });
      await sound_obj.playAsync();
      setSound(sound_obj);
      setIsPlaying(true);
    } else {
      await sound.pauseAsync();
      setIsPlaying(false);
    }
  }

  return (
    <View style={{ marginBottom: 30 }}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text>{title}</Text>
        <Text>{length}</Text>
      </View>
      <View
        style={{
          marginTop: 10,
          flexDirection: "row",
          justifyContent: "flex-end",
        }}
      >
        <TouchableOpacity onPress={() => playAudio()}>
          {isPlaying ? (
            <Icon
              type="font-awesome-5"
              name="stop"
              color="#FB37FF"
              iconStyle={{ fontSize: 20 }}
            />
          ) : (
            <Icon
              type="font-awesome-5"
              name="play"
              color="#FB37FF"
              iconStyle={{ fontSize: 20 }}
            />
          )}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
          setAudios([])
          setFormData("audios", [])
        }}>
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

const styles = StyleSheet.create({
  recordButton: { width: 40, height: 40, borderRadius: "50%" },
  stopButton: { width: 20, height: 20 },
  header: {
    flexDirection: "row",
    marginBottom: 20,
  },
  title: {
    fontFamily: "roboto-regular",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "24px",
    lineHeight: "20px",
    color: "#AD00FF",
  },
  textDivision: { marginBottom: 30 },
  textWrap: {
    borderColor: "black",
    borderWidth: 50,
    height: 20,
  },
  text1: {
    fontFamily: "roboto-regular",
    fontStyle: "normal",
    fontWeight: "bold",
    color: "#666666",
    fontSize: 12,
    lineHeight: 14,
    marginBottom: 15,
  },
  text2: {
    fontFamily: "roboto-regular",
    fontStyle: "normal",
    fontWeight: "normal",
    color: "#666666",
    fontSize: 12,
    lineHeight: 14,
    marginBottom: 15,
  },
  text3: {
    fontFamily: "roboto-regular",
    fontStyle: "italic",
    fontWeight: "medium",
    color: "#000000",
    fontSize: 12,
    lineHeight: 14,
    marginBottom: 50,
  },
  textFieldTitle: {
    fontFamily: "roboto-regular",
    fontStyle: "normal",
    fontWeight: "normal",
    color: "#666666",
    fontSize: 16,
    lineHeight: 20,
  },
  textFieldContent: {
    fontFamily: "roboto-regular",
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
    fontFamily: "roboto-regular",
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
