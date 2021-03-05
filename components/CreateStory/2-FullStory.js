import React, { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, ScrollView } from "react-native";
import { vw, vh, vmin, vmax } from "react-native-expo-viewport-units";
import { Icon } from "react-native-elements";


const TitleFormComponent = ({story, setFormData}) => {
  
  return (
    
      <View>
        {/* status bar here  */}
        <View>
        <Text style={styles.text1}>Channel your inner Hemingway and type out your story.</Text>
        </View>
        <View style={styles.textFieldWrap}>
          <Text style={styles.textFieldTitle1}>Full Story </Text>
          <Text style={styles.textFieldTitle2}> {'('}Optional{')'}</Text>
          
        </View>

        <TextInput 
            placeholder = "If you already have captured this masterpiece, Copy/Paste from a different document."
            multiline = {true}
            numberOfLines = {2}
            style={styles.textFieldContent}
            onChangeText={(text) => setFormData("story", text)} >
          </TextInput>

        <Text>
          If writing isn’t your thing, don’t worry. You can voice record your story in a later step.
        </Text>
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
  textFieldWrap: {
    flex: 1,
    flexDirection: "row"
  },
  text1: {
    maginTop: 77,
    fontFamily: "Roboto",
    fontStyle: "italic",
    fontWeight: "medium",
    fontSize: 16,
    lineHeight: 19,
    marginBottom: 32,
  },
  textFieldTitle1: {
    fontFamily: "Roboto",
    fontStyle:  "normal",
    fontWeight: "normal",
    color: "#666666",
    fontSize:   16,
    lineHeight: 20,
  },
  textFieldTitle2: {
    fontFamily: "Roboto",
    fontStyle:  "italic",
    fontWeight: "normal",
    color: "#AD00FF",
    fontSize:   14,
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
    borderRadius: 5,
    marginBottom: 67,

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
