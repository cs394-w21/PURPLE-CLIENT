import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";
import { vw, vh, vmin, vmax } from "react-native-expo-viewport-units";
import { Icon } from "react-native-elements";
import Header from "../components/Header";
import { LinearGradient } from "expo-linear-gradient";
import { Button } from "react-native-paper";
import * as purpleHeart from "../assets/img/purpleheart.jpeg";

const FilesFolderScreen = ({navigation, route}) => {
  const [photos, setPhotos] = useState(route.params.photos);
  const [favorite, setFavorite] = useState(false);

  // useEffect(() => {
  //   setCurrentComp(FilesFolderScreen);
  // }, []); 
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.pictureGrid}>
        {photos.map((photo, index) => (
          <TouchableOpacity style={styles.imgSquare} onPress={() => navigation.navigate('FilesScreen', {photos, index})}>
            <Image
          style={{width: '100%', height: '100%'}}
          source={photo} /* need to fix import */

        />
          </TouchableOpacity>
          
        ))}
       
      </View>
      
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  imgSquare:
    { width: "31%", height: 100, margin: "1%", borderWidth: 2, borderColor: "grey" }
  ,
  title: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 24,
    lineHeight: "20px",
  },
  header: {
    flexDirection: "row",
  },
  pictureGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
export default FilesFolderScreen;
