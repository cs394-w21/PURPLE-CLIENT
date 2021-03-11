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

const pictures = [
  require("../assets/img/purpleheart.jpeg"),
  require("../assets/img/cross.jpeg"),
  require("../assets/img/grandpaknife.jpeg"),
  require("../assets/img/stone-coin.jpeg"),
  require("../assets/img/people.jpeg"),
  require("../assets/img/person.jpeg"),
  require("../assets/img/chart.jpeg"),
];


const SummaryScreen = ({ navigation, route }) => {
  let story = route.params.story;
  const [favorite, setFavorite] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [audios, setAudios] = useState([]);


  useEffect(()=>{
    console.log(photos)
    if (!story.title) story.title = "";
    if (!story.summary) story.summary = "";
    if (!story.story) story.story = "";

    if (!story.photos) {
      setPhotos([]);
    } else {
      setPhotos(story.photos);
    }
    if (!story.audios) {
      setAudios([]);
    } else {
      setAudios(story.audios);
    }
  },[])
    

  return (
    <ScrollView style={styles.container}>
      <Header title={story.title}/>
      <View style={styles.pictureGrid}>
        {photos ? photos.slice(0, 5).map((photo, index) => (
          <TouchableOpacity key={index} style={styles.imgButton} onPress={() => navigation.navigate("FilesScreen", {photos, index, story})}>
            <Image
              style={styles.imgSquare}
              source={photo} /* need to fix import */
            />
          </TouchableOpacity>
        )) : null}
        <TouchableOpacity
          onPress={() => navigation.navigate("FilesFolderScreen", {photos, story})}
          style={styles.imgButton}
        >
          <Text style={{ fontWeight: "bold", color: "grey" }}>View All</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.caption}>
        <Text style={styles.captionHeader}>Summary</Text>
        <Text style={styles.captionBody}>
          {story.summary.slice(0,100) + "..."}
        </Text>
      </View>
      <View style={styles.contentDiv}>
        <Text style={styles.text}>Started: 02/28/2021</Text>
        <Text style={styles.text}>Last edited: 03/03/2021</Text>
      </View>
      <View style={styles.contentDiv}>
        <Text style={styles.contentsDivHeader}>This story contains</Text>
        <Text style={styles.text}>Audio: 7 minutes</Text>
        <Text style={styles.text}>Photos: {photos.length}</Text>
        <Text style={styles.text}>Documents: {photos.length + audios.length}</Text>
        <Text style={styles.text}>Writen portion: 1 minute read</Text>
      </View>
      <View style={styles.contentDiv}>
        <Text style={styles.contentsDivHeader}>Story Access</Text>
        <Text style={styles.text}>Family, John Cousin, Angie Aunt</Text>
      </View>

      <LinearGradient
        // TouchableOpacity Linear Gradient
        // Diagonal :0
        style={{
          margin: 20,
          marginTop: 40,
          borderRadius: 5,
          shadowOffset: { width: 2.5, height: 2.5 },
          shadowColor: "black",
          shadowOpacity: 0.2,
          shadowRadius: 5,
        }}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 1 }}
        colors={["#FF5C00", "#FB37FF"]}
      >
        <Button
          style={{
            backgroundColor: "transparent",
            fontWeight: "bold",
            height: 40,
            justifyContent: "center",
    alignItems: "center"
          }}
          mode="contained"
          onPress={() => navigation.navigate("PlayScreen", {story, photos})}
        >
          <Text style={{
            fontSize: 16,
            fontWeight: "bold",
          }}
          >Play Story</Text>
        </Button>
      </LinearGradient>
    </ScrollView>
  );
};

const textBase = {
  fontSize: 13,
};
const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  imgButton: {
    width: "31%",
    height: 100,
    margin: "1%",
    borderWidth: 2,
    borderColor: "grey",
    justifyContent: "center",
    alignItems: "center"
  },
  imgSquare: {
    width: "100%",
    height: "100%",
  },
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
  captionHeader: {
    fontSize: 18,
    color: "#FF5C00",
    fontWeight: "bold",
    marginTop: 5,
  },
  captionBody: {
    fontSize: 16,
    marginTop: 7,
  },
  contentDiv: {
    marginTop: 20,
  },
  text: {
    ...textBase,
  },
  contentsDivHeader: {
    ...textBase,
    fontWeight: "bold",
  },
});
export default SummaryScreen;
