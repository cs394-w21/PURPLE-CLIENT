import React, { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, ScrollView } from "react-native";
import { vw, vh, vmin, vmax } from "react-native-expo-viewport-units";
import { Icon } from "react-native-elements";
import GradientButton from "../GradientButton";


const VisualizeFormComponent = ({story, setFormData, count}) => {
  
  return (
    
      <ScrollView>
        <Text style={styles.text1}>
          Help me see the story through your eyes with visuals of keepsakes or loved ones...
        </Text>
      <View >
        <View style={styles.textWrap}>
          <Icon
                type="font-awesome-5"
                name="check-circle"
                color ="#666666"
                iconStyle={{ fontSize: 20 }}
          />
          <Text style={styles.text2}>Success</Text>
        </View>
        <View>
          <Text style={styles.text3}>
            {count} files were connected to your story.
          </Text>
        </View>
        </View>

        <Text style={styles.text4}>
          If you don’t have the photos or videos ready now, don’t worry. You can upload these later.
        </Text>
      
      </ScrollView>

      
  );
};


const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    marginBottom: 20
  },
  div: {
    justifyContent: "center",
    alignItems: "center",
    width: "60%",
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
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15,
  },
  text1: {
    marginTop: 40,
    fontFamily: "roboto-regular",
    fontStyle:  "italic",
    fontWeight: "bold",
    color: "#666666",
    fontSize:   16,
    lineHeight: 19,
    marginBottom: 100,
  },
  text2: {
    fontFamily: "Font Awesome 5 Pro",
    fontStyle:  "italic",
    fontWeight: "bold",
    color: "#666666",
    fontSize:   18,
    lineHeight: 18,
  },
  text3: {
    fontFamily: "roboto-regular",
    fontStyle:  "italic",
    fontWeight: "bold",
    color: "#666666",
    fontSize:   14,
    lineHeight: 16,
    marginBottom: 150,
    alignSelf: "center",
    
    
  },
  text4: {
    fontFamily: "roboto-regular",
    fontStyle:  "italic",
    fontWeight: "medium",
    color: "#666666",
    fontSize:   14,
    lineHeight: 16,
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
export default VisualizeFormComponent;
