import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ImageBackground,
  TextInput,
  ScrollView
} from "react-native";
import { Icon } from "react-native-elements";
import GradientButton from "../components/GradientButton";
import { firebase } from "../utils/firebase";
import Header from "../components/Header";
import RecentStory from "../components/RecentStory";

const HomeScreen = ({ route, navigation }) => {
  const [name, setName] = useState("");
  const [summary, setSummary] = useState("");
  const [formState, setFormState] = useState(0);
  const [data, setData] = useState(null);

  const db = firebase.database().ref("/stories");

  useEffect(() => {
    const handleData = (snap) => {
      if (snap.val()) {
        setData(snap.val());

        //setCart(snap.val().data)
      }
    };

    db.on("value", handleData, (error) => alert(error));

    return () => {
      db.off("value", handleData);
    };
  }, []);


  useEffect(() => {
    if (data) console.log("Data: " , Object.values(data)[0])
  }, [data]);


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello Storyteller</Text>
      <View style={{}}>
        <Text style={styles.text1}>
          Sharing your stories now ensures they are captured for future
          generations.
        </Text>
      </View>
      <View style={styles.buttonStyle}>
        <GradientButton style={{flex: 1, width: "100%"}} title={"Create a Story"} onPress={() => navigation.navigate("New Story")}/>
      </View>
      <View style={styles.title2}>
        <Text style={styles.text2}>Recent Stories</Text>
      </View>
      <ScrollView>
      {data != null
        ? Object.values(data).map((story, index) => <RecentStory data={story} key={index} />)
        : <Text> Loading Stories </Text>}  
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    height: "100%",
  },
  progressBar: {
    marginBottom: 20,
  },
  title: {
    fontFamily: "roboto-regular",
    fontStyle: "normal",
    fontWeight: "bold",
    color: "#FF5C00",
    fontSize: 24,
    lineHeight: 20,
    marginTop: 55,
    marginBottom: 20,
  },
  barBackground: {
    backgroundColor: "#AD00FF44",
    height: 10,
    borderRadius: 25,
    width: "100%",
  },
  bar: {
    width: "20%",
    height: "100%",
    backgroundColor: "#AD00FF",
    borderRadius: 25,
  },
  buttonStyle: {
    marginTop: 35,
  },
  title2: {
    marginTop: 45,
  },
  text1: {
    fontFamily: "roboto-regular",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 14,
    lineHeight: 16,
    display: "flex",
    alignItems: "center",
    color: "#666666",
  },
  text2: {
    color: "#9900CC",
    fontFamily: "roboto-regular",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 22,
    lineHeight: 20,
    marginBottom: 15,
  },
  text3: {
    fontFamily: "roboto-regular",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 15,
    lineHeight: 20,
    color: "#666666",
  },
  wrap1: {
    flex: 1,
    flexDirection: "row",
  },
  text4: {
    fontFamily: "roboto-regular",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 18,
    lineHeight: 20,
    backgroundColor: "#C4C4C4",
    width: 75,
    height: 71,
    marginTop: 10,
    marginRight: 20,
    borderRadius: 5,
  },
  text5: {
    fontFamily: "roboto-regular",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 14,
    lineHeight: 19,
    marginTop: 10,
  },
  image: {
    width: 75,
    height: 71,
    borderRadius: 5,
  },
});

export default HomeScreen;
