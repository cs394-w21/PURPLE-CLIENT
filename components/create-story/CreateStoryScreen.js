import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ImageBackground,
  TextInput,
} from "react-native";
import { Icon } from "react-native-elements";
import GradientButton from "../GradientButton";

const CreateStoryScreen = ({ route, navigation }) => {
  const [name, setName] = useState("")
  const [summary, setSummary] = useState("")

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Your Story</Text>
      {/* Progress bar */}
      <View style={styles.barBackground}>
        <View style={styles.bar}></View>
      </View>
      <View>
        <Text style={styles.text1}>Tell me your special story in 3 easy steps... </Text>

        <Text style={styles.text2}>
          Tell your story through text, upload any photos or videos, and record
          your story through audio.
        </Text>

        <Text style={styles.text3}>
          Don't Worry. Each step is optional and can be edited later so you can
          tell your story your way.
        </Text>
      </View>
      <View >
        <Text style={styles.textFieldTitle}>Story Name</Text>
        <TextInput 
          placeholder = "Give your story a cool name..."
          style={styles.textFieldContentTitle}>

        </TextInput>
      </View>

      <View>
        <Text style={styles.textFieldTitle}>Short Summary</Text>
        <View styles={styles.textWrap}>

        <TextInput 
          placeholder = "In a few words, please tell me why this story is special to you..."
          multiline = {true}
          numberOfLines = {2}
          style={styles.textFieldContent}>
          
        </TextInput>
        </View>
        
      </View>
      <GradientButton onPress={() => console.log("yerr")} title={"Continue"} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,

  },
  text1: {
    fontFamily: "Roboto",
    fontStyle:  "normal",
    fontWeight: "bold",
    color: "#666666",
    fontSize:   12,
    lineHeight: 14,
    marginBottom: 15,
  },
  text2: {
    fontFamily: "Roboto",
    fontStyle:  "normal",
    fontWeight: "normal",
    color: "#666666",
    fontSize:   12,
    lineHeight: 14,
    marginBottom: 15,
  },
  text3: {
    fontFamily: "Roboto",
    fontStyle:  "italic",
    fontWeight: "medium",
    color: "#000000",
    fontSize:   12,
    lineHeight: 14,
    marginBottom: 50,
  },
  textFieldTitle: {
    fontFamily: "Roboto",
    fontStyle:  "normal",
    fontWeight: "normal",
    color: "#666666",
    fontSize:   16,
    lineHeight: 20,
  },
  textFieldContent: {
    fontFamily: "Roboto",
    fontStyle:  "italic",
    fontWeight: "Light",
    color: "#666666",
    fontSize:   16,
    lineHeight: 20,
    borderColor: 'grey',
    borderWidth: 1,
    height: 100,

  },
  textFieldContentTitle: {
    fontFamily: "Roboto",
    fontStyle:  "italic",
    fontWeight: "Light",
    color: "#666666",
    fontSize:   16,
    lineHeight: 20,
    borderColor: 'grey',
    borderWidth: 1,
    height: 25,

  },
  title: {
    fontFamily: "Roboto",
    fontStyle:  "normal",
    fontWeight: "bold",
    color: "#FB37FF",
    fontSize:   24,
    lineHeight: 20,
    marginTop: 55,
    marginBottom: 50,
  },
  textWrap: {
    borderColor: 'black',
    borderWidth: 50,
    height: 20,
  },
});

export default CreateStoryScreen;
