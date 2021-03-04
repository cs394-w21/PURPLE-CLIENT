import React, { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, ScrollView } from "react-native";
import { vw, vh, vmin, vmax } from "react-native-expo-viewport-units";
import { Icon } from "react-native-elements";


const TitleFormComponent = ({story}) => {
  
  return (
    
      <View>
        <Text>Test End</Text>
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
      </View>

      
  );
};


const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    marginBottom: 20
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
  textWrap: {
    borderColor: 'black',
    borderWidth: 50,
    height: 20,
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
});
export default TitleFormComponent;
