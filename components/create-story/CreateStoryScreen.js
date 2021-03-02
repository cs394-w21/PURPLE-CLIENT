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
import GradientButton from "../GradientButton";

const CreateStoryScreen = ({ route, navigation }) => {
  return (
    <View>
      <Text></Text>
      <View>
        <View></View>
      </View>
      <View>
        <Text>Tell me your special story in 3 easy steps...</Text>

        <Text>
          TTell your story through text, upload any photos or videos, and record
          your story through audio.
        </Text>

        <Text>
          TDon’t Worry. Each step is optional and can be edited later so you can
          tell your story your way.
        </Text>
      </View>
      <View>
        <Text>Story Name</Text>
        <TextInput></TextInput>
      </View>

      <View>
        <Text>Short Summary</Text>
        <TextInput></TextInput>
      </View>
      <GradientButton onPress={() => console.log("yerr")} title={"Continue"} />
    </View>
  );
};

export default CreateStoryScreen;
