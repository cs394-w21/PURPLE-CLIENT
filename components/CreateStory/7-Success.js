import React, { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, ScrollView } from "react-native";
import { vw, vh, vmin, vmax } from "react-native-expo-viewport-units";
import { Icon } from "react-native-elements";



const SuccessComponent = ({story, setFormData}) => {
  
  return (
    
      <View style={{alignItems: 'center', flex: 1}}>
        <View style={styles.topStyle}>
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
        </View>
        <View>
          <Text style={styles.successBodyText}>
            Your story is now saved forever!
          </Text>
        </View>
        <View>
          <Text style={styles.text1}>
            Your story’s unique QR code was generated. 
          </Text>
          <Text style={styles.text2}>
          Affix this to keepsakes. When audience scans this, they will be magically transported into your immersive story experience.
          </Text>
        </View>
        <View style={styles.qrDiv}>
          <Image style={styles.image} source={require("../../assets/img/qr_img.png")}/>
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
  topStyle:{
    marginTop: 130,
  },
  successTitleText: {
    fontFamily: "roboto-regular",
    fontStyle:  "normal",
    fontWeight: "bold",
    color: "#FC44A9",
    fontSize:   36,
    lineHeight: 20,
    marginLeft: 10,
    
  },
  successBodyText: {
    fontFamily: "roboto-regular",
    fontStyle:  "normal",
    fontWeight: "bold",
    color: "#666666",
    fontSize:   18,
    lineHeight: 21,
    marginBottom: 15,
    marginTop: 30
  },
  text1: {
    fontFamily: "roboto-regular",
    fontStyle: "italic",
    fontWeight: "normal",
    fontSize: 14,
    lineHeight: 16,
    marginBottom: 8,
    textAlign: "center",
    color: "#666666",
  },
  text2: {
    fontFamily: "roboto-regular",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 14,
    lineHeight: 16,
    textAlign: "center",
    color: "#666666",
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
  image: {
    width: 148,
    height: 148,
  },
  qrDiv: {
    marginTop: 25,
  }
});
export default SuccessComponent;
