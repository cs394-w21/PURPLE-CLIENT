import React, { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, ScrollView } from "react-native";
import { vw, vh, vmin, vmax } from "react-native-expo-viewport-units";
import { Icon } from "react-native-elements";
import { Audio } from "expo-av";


const AtGlanceComponent = ({story, setFormData}) => {
  function msToHMS( ms ) {
    // 1- Convert to seconds:
    var seconds = ms / 1000;
    // 2- Extract hours:
    var hours = parseInt( seconds / 3600 ); // 3,600 seconds in 1 hour
    seconds = seconds % 3600; // seconds remaining after extracting hours
    // 3- Extract minutes:
    var minutes = parseInt( seconds / 60 ); // 60 seconds in 1 minute
    // 4- Keep only seconds not extracted to minutes:
    seconds = seconds % 60;
    return( hours+":"+minutes+":"+seconds);
}

  return (
      <View style={{flex:1}}>
        <View>
        <Text style={styles.text1}>
          
        Yay, great job! You have created an awesome story! Below is a quick summary of what you have completed so far. 
        {"\n\n"}
        Review and save it forever.
        {"\n\n"}
        Story Title: {story.title}
        {"\n"}
        Summary:{story.summary != "" ? "\n" + story.summary : " None"}
        {"\n"}
        Photos: {story.photos.length}
        {"\n"}
        Text: {story.story != "" ? "Yes" : "None" }
        {"\n"}
        {/* This line is the only one that will theoretically need testing once there are actual audio files */}
        Audio: {story.audios.length > 0 ? msToHMS(story.audios.map(audio => {return audio.durationMillis})) : "None"}
        
        </Text>

          </View>
      </View>
  );
};
const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    marginBottom: 20
  },
  title: {
    fontFamily: "roboto-regular",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "24px",
    lineHeight: "20px",
    color: "#AD00FF",
    /* identical to box height, or 83% */

    /* Purple */

    // color: linear-gradient(191.88deg, #AD00FF 29.85%, #00B1FD 100%);
  },
  textWrap: {
    borderColor: 'black',
    borderWidth: 50,
    height: 20,
  },
  text1: {
    fontFamily: "roboto-regular",
    fontStyle:  "normal",
    fontWeight: "bold",
    color: "#666666",
    fontSize:   16,
    lineHeight: 19,
    marginBottom: 15,
  },
  text2: {
    fontFamily: "roboto-regular",
    fontStyle:  "normal",
    fontWeight: "normal",
    color: "#666666",
    fontSize:   12,
    lineHeight: 14,
    marginBottom: 15,
  },
  text3: {
    fontFamily: "roboto-regular",
    fontStyle:  "italic",
    fontWeight: "medium",
    color: "#000000",
    fontSize:   12,
    lineHeight: 14,
    marginBottom: 50,
  },
  textFieldTitle: {
    fontFamily: "roboto-regular",
    fontStyle:  "normal",
    fontWeight: "normal",
    color: "#666666",
    fontSize:   16,
    lineHeight: 20,
  },
  textFieldContent: {
    fontFamily: "roboto-regular",
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
    fontFamily: "roboto-regular",
    fontStyle:  "italic",
    fontWeight: "Light",
    color: "#666666",
    fontSize:   16,
    lineHeight: 20,
    borderColor: 'grey',
    borderWidth: 1,
    height: 25,

  },
});
export default AtGlanceComponent;
