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
import GradientButton from "../components/GradientButton";

import TitleFormComponent from "../components/CreateStory/1-Title"
import FullStoryFormComponent from "../components/CreateStory/2-FullStory"
import UploadFormComponent from "../components/CreateStory/3-UploadPhotos"
import VisualizeFormComponent from "../components/CreateStory/4-VisualizeSuccess"
import RecordFormComponent from "../components/CreateStory/5-RecordStory"




const data = {
  title: "",
  summar: "",
  story: "",
  photos: [],
  audios: []
}

const CreateStoryScreen = ({ route, navigation }) => {
  const [name, setName] = useState("")
  const [summary, setSummary] = useState("")
  const [formState, setFormState] = useState(0)
  const [story, setStory] = useState(data) 

  const formComponents = [<RecordFormComponent story={story} />, <TitleFormComponent story={story} />, <FullStoryFormComponent story={story} />, <UploadFormComponent story={story} />, <VisualizeFormComponent story={story} /> ]
  
  const formContinue = () => {
    if (formState < formComponents.length - 1){
      setFormState(formState+1)
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Your Story</Text>
      {/* Progress bar */}
      <View style={styles.progressBar}>
      <View style={styles.barBackground}>
        <View style={styles.bar}></View>
      </View>
      <Text> Step </Text>
      </View>
      
      {formComponents[formState]}


      <GradientButton onPress={() => formContinue()} title={"Continue"} />
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    height: '100%'
  },
  progressBar:{
    marginBottom: 20
  },
  title: {
    fontFamily: "Roboto",
    fontStyle:  "normal",
    fontWeight: "bold",
    color: "#FF5C00",
    fontSize:   24,
    lineHeight: 20,
    marginTop: 55,
    marginBottom: 20,
  },
  barBackground: {
    backgroundColor: "#AD00FF44", 
    height: 10,
    borderRadius: 25,
    width: '100%',

  },
  bar: {width: '20%', height: '100%', backgroundColor: "#AD00FF", borderRadius: 25}
  
});

export default CreateStoryScreen;
