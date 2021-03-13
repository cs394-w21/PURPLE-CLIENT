import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";
import Header from "../components/Header";

const FilesFolderScreen = ({navigation, route}) => {
  const [photos, setPhotos] = useState(route.params.photos);
  
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.pictureGrid}>
        {photos.map((photo, index) => (
          <TouchableOpacity style={styles.imgSquare} onPress={() => navigation.navigate('FilesScreen', {photos, index})}>
            <Image
          style={{width: '100%', height: '100%'}}
          source={photo}

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
    fontFamily: "roboto-regular",
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
