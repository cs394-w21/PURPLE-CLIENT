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
import AtGlanceComponent from "../components/CreateStory/6-AtGlance"
import SuccessComponent from "../components/CreateStory/7-Success"
import RecordFormComponent from "../components/CreateStory/5-RecordStory"



const data = {
  title: "",
  summary: "",
  story: "",
  photos: [],
  audios: [],
};

const CreateStoryScreen = ({ route, navigation }) => {
  const [name, setName] = useState("");
  const [summary, setSummary] = useState("");
  const [formState, setFormState] = useState(0);
  const [story, setStory] = useState(data);

  const setFormData = (field, text) => {
    let newData = {...story}
    newData[field] = text
    setStory(newData)
  }
  
  const formComponents = [
    <TitleFormComponent story={story} setStory={setStory} setFormData={setFormData}/>,
    <FullStoryFormComponent story={story}  setStory={setStory} setFormData={setFormData}/>,
    <UploadFormComponent story={story}  setStory={setStory} setFormData={setFormData}/>,
    <VisualizeFormComponent story={story} count={data.photos.length} setStory={setStory} setFormData={setFormData}/>,
    <RecordFormComponent story={story}  setStory={setStory} setFormData={setFormData}/>,
    <AtGlanceComponent story={story}  setStory={setStory} setFormData={setFormData}/>,
    <SuccessComponent story={story}  setStory={setStory} setFormData={setFormData}/>,
  ];

  const formContinue = () => {
    if (formState < formComponents.length - 1) {
      setFormState(formState + 1);
    }
    console.log(story)
console.log(  ((formState/ (formComponents.length - 2))* 100).toString()+"%")  }; //toString((formState / (formComponents.length - 2)) * 100) + "%")

  const formTitle = ["Create Your Story", "Write Your Story", "Visualize Your Story", "Visualize Your Story", "Tell Your Story", "At A Glance", ""  ]
  const formStep = ["", "Step 1 of 3", "Step 2 of 3", "Step 2 of 3", "Step 3 of 3", "", ""  ]


  return (
    <View style={styles.container}>
      {formState < formComponents.length - 1 ? <Text style={styles.title}>{formTitle[formState]}</Text> : null}
      {/* Progress bar */}
      {formState < formComponents.length - 2 ? <View style={styles.progressBar}>
        <View style={styles.barBackground}>
          <View style={{
    width: ((formState/ (formComponents.length - 2))* 100).toString()+"%",
    height: "100%",
    backgroundColor: "#AD00FF",
    borderRadius: 25,
  }}></View>
        </View>
        { formTitle[formState].length > 1 ? <Text> {formStep[formState]} </Text>: null}
      </View> : null}

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
    //width: toString(formState / (formComponents.length - 2) * 100)+"%",
    height: "100%",
    backgroundColor: "#AD00FF",
    borderRadius: 25,
  },
});

export default CreateStoryScreen;
