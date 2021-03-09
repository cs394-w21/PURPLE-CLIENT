import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ImageBackground,
  TextInput,
} from "react-native";
import { Icon } from "react-native-elements";
import GradientButton from "./GradientButton";
import { firebase } from "../utils/firebase";
import Header from "./Header"

const RecentStory = ({ data }) => {
  const [name, setName] = useState("");
  const [summary, setSummary] = useState("");
  const [formState, setFormState] = useState(0);
  const [data, setData] = useState([])


  return (
    <View style={styles.container}>
  

      <View> <Text style={styles.text3}>{data.title}</Text> </View>
      <View style={styles.wrap1}>
        <Image style={styles.image} source={require(`${data.photos[0]}`)} />
        <Text style={styles.text5}>
          {data.summary.slice(0, 50)}
        </Text>
      </View>
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
    fontFamily: "Roboto",
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
  text1:{
    fontFamily: "Roboto",
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
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 22,
    lineHeight: 20,
    marginBottom: 15,
  },
  text3: {
    fontFamily: "Roboto",
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
    fontFamily: "Roboto",
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
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 14,
    lineHeight: 19,
    marginTop: 10,
  },
  image:{
    width: 75, 
    height: 71,
    borderRadius: 5,
  }
});

export default RecentStory;
