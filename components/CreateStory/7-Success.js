import React, { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, ScrollView } from "react-native";
import { vw, vh, vmin, vmax } from "react-native-expo-viewport-units";
import { Icon } from "react-native-elements";


const SuccessComponent = ({story, setFormData}) => {
  
  return (
    
      <View style={{alignItems: 'center', flex: 1}}>
        <View style={{flexDirection:"row", alignItems:"center"}}>
        <Icon
                  type="font-awesome-5"
                  name="check-circle"
                  color="#FC44A9"
                  iconStyle={{ fontSize: 36 }}
                />
        <Text style={styles.successTitleText}>
            Success
        </Text>
        </View>
        <Text style={styles.successBodyText}>
          Your story is now saved forever!
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
  textWrap: {
    borderColor: 'black',
    borderWidth: 50,
    height: 20,
  },
  successTitleText: {
    fontFamily: "Roboto",
    fontStyle:  "normal",
    fontWeight: "bold",
    color: "#FC44A9",
    fontSize:   36,
    lineHeight: 20,
    marginLeft: 10
  },
  successBodyText: {
    fontFamily: "Roboto",
    fontStyle:  "normal",
    fontWeight: "bold",
    color: "#666666",
    fontSize:   18,
    lineHeight: 21,
    marginBottom: 15,
    marginTop: 30
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
export default SuccessComponent;
