import React, { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, ScrollView, Platform } from "react-native";
import { vw, vh, vmin, vmax } from "react-native-expo-viewport-units";
import { Icon } from "react-native-elements";
import GradientButton from '../GradientButton';
import * as ImagePicker from 'expo-image-picker';
import colors from '../../utils/utils';


const UploadFormComponent = ({story, setFormData}) => {

  const [images, setImage] = useState([]);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(images.concat(result.uri));
      setFormData("photos", images.concat(result.uri));
    }
    console.log(colors)
  };
  
  return (
    
      <View>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text>
            Help me see the story through your eyes with visuals of keepsakes or loved ones...
          </Text>
          <Text>{'\n'}</Text>
          <Text>{'\n'}</Text>
          <View style={{flexDirection: 'column', justifyContent: 'space-evenly', textAlign: 'center'}}>
            <Text>Select photos from your photo library.</Text>
            <Text>{'\n'}</Text>
            <Text>Please save existing files to your photo library or use your camera to capture new photos.</Text>
            <GradientButton onPress={pickImage} start={{ x: 0.5, y: 0}} end={{ x: 0.5, y: 1}} colors={colors.blurple} title={"Upload Photos"}></GradientButton>

            {images.length == 0 ? 
            null : 
            <View>
              <Text>Congratulations! {images.length} image file{images.length == 1 ? ' was' : 's were'} uploaded.</Text>
            </View>
            }
            
            <Text>{"\n"}</Text>
            <Text>{"\n"}</Text>
            <Text>{"\n"}</Text>
            <Text>If you don’t have the photos or videos ready now, don’t worry. You can upload these later.</Text>
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
export default UploadFormComponent;
