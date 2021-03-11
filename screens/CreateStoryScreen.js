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
import { LinearGradient } from "expo-linear-gradient";
import GradientButton from "../components/GradientButton";

import TitleFormComponent from "../components/CreateStory/1-Title";
import FullStoryFormComponent from "../components/CreateStory/2-FullStory";
import UploadFormComponent from "../components/CreateStory/3-UploadPhotos";
import VisualizeFormComponent from "../components/CreateStory/4-VisualizeSuccess";
import AtGlanceComponent from "../components/CreateStory/6-AtGlance";
import SuccessComponent from "../components/CreateStory/7-Success";
import RecordFormComponent from "../components/CreateStory/5-RecordStory";
import { firebase } from "../utils/firebase";


const data = {
  id: "",
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
  const [submitError, setSubmitError] = useState("");
  const [success, setSuccess] = useState(false);

  const db = firebase.database().ref("/stories");

  const setFormData = (field, text) => {
    let newData = { ...story };
    newData[field] = text;
    setStory(newData);
  };

  const formComponents = [
  
    <TitleFormComponent
      story={story}
      setStory={setStory}
      setFormData={setFormData}
    />,
    <FullStoryFormComponent
      story={story}
      setStory={setStory}
      setFormData={setFormData}
    />,
    <UploadFormComponent
      story={story}
      setStory={setStory}
      setFormData={setFormData}
    />,
    // <VisualizeFormComponent
    //   story={story}
    //   count={story.photos.length}
    //   setStory={setStory}
    //   setFormData={setFormData}
    // />,
    <RecordFormComponent
    story={story}
    setStory={setStory}
    setFormData={setFormData}
  />,
    <AtGlanceComponent
      story={story}
      setStory={setStory}
      setFormData={setFormData}
    />,
    <SuccessComponent
      story={story}
      setStory={setStory}
      setFormData={setFormData}
    />,
  ];

  const generateUUID = () => {
    // Public Domain/MIT
    var d = new Date().getTime(); //Timestamp
    var d2 = (performance && performance.now && performance.now() * 1000) || 0; //Time in microseconds since page-load or 0 if unsupported
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
      /[xy]/g,
      function (c) {
        var r = Math.random() * 16; //random number between 0 and 16
        if (d > 0) {
          //Use timestamp until depleted
          r = (d + r) % 16 | 0;
          d = Math.floor(d / 16);
        } else {
          //Use microseconds since page-load if supported
          r = (d2 + r) % 16 | 0;
          d2 = Math.floor(d2 / 16);
        }
        return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
      }
    );
  };

  const handleSumbit = async () => {
    const id = generateUUID();
    let newData = { ...story };
    newData["id"] = id;
    setStory(newData);

    db.push(newData).catch((error) => {
      setSubmitError(error.message);
    });

    console.log(submitError);

    setSuccess(true);

    let promiseArray = newData.photos.map((image, index) => {
      const path = `story_files/${id}/image-${index}.jpeg`;
      const metadata = {
        contentType: "image/jpeg",
      };

      return new Promise(async (res, rej) => {
        const response = await fetch(image);
        const file = await response.blob();
        const upload = firebase.storage().ref(path).put(file, metadata);
        upload.on(
          "state_changed",
          (snapshot) => {},
          (err) => {
            rej(err);
          },
          async () => {
            const url = await upload.snapshot.ref.getDownloadURL();
            res(url);
          }
        );
      });
    });

    return Promise.allSettled(promiseArray);
  };

  const formContinue = () => {
    if (formState == formComponents.length - 2) {
      handleSumbit().then((result) => console.log(result));
    }
    if (formState == formComponents.length - 1) {
      
      setFormState(0);
      navigation.navigate("Home")
      return
    }
    if (formState < formComponents.length - 1 && !submitError) {
      setFormState(formState + 1);
    }
    
  };

  const formBack = () => {
    if (formState > 0) {
      setFormState(formState - 1);
      console.log(story);
    } else if (formState == 0) {
      navigation.navigate("Home")
    }
  };

  const formTitle = [
    "Create Your Story",
    "Write Your Story",
    "Visualize Your Story",
    "Tell Your Story",
    "At A Glance",
    "",
  ];
  const formStep = [
    "",
    "Step 1 of 3",
    "Step 2 of 3",
    "Step 3 of 3",
    "",
    "",
  ];

  return (
    <View style={styles.container}>
      {formState < formComponents.length - 1 ? (
        <Text style={styles.title}>{formTitle[formState]}</Text>
      ) : null}
      {/* Progress bar */}
      {formState < formComponents.length - 2 ? (
        <View style={styles.progressBar}>
          <View style={styles.barBackground}>
            <View
              style={{
                width:
                  ((formState / (formComponents.length - 2)) * 100).toString() +
                  "%",
                height: "100%",
                backgroundColor: "#AD00FF",
                borderRadius: 25,
              }}
            ></View>
          </View>
          {formTitle[formState].length > 1 ? (
            <Text> {formStep[formState]} </Text>
          ) : null}
        </View>
      ) : null}

      {formComponents[formState]}
      {submitError ? <Text> {submitError}</Text> : null}
      <View style={{ justifySelf: "flex-end", flexDirection: "row", width: "100%" }}>
        { formState < formComponents.length - 1 ?<GradientButton
          style={{ flex: 1, width: "50%" }}
          onPress={() => formBack()}
          title={"Back"}
        /> : null}
        <GradientButton
          style={{ flex: 1, width: formState < formComponents.length - 1 ? "50%" :"100%" }}
          onPress={() => formContinue()}
          title={formState == formComponents.length - 2 ? "Save" : formState == formComponents.length - 1 ? "View Stories" : "Continue"}
        />
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
    width: "100%"
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
    //width: toString(formState / (formComponents.length - 2) * 100)+"%",
    height: "100%",
    backgroundColor: "#AD00FF",
    borderRadius: 25,
  },
});

export default CreateStoryScreen;
