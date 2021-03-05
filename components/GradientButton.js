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

const GradientButton = ({ onPress, start, end, colors, title }) => {
  return (
    <TouchableOpacity onPress={onPress}>
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
      start={start ? start : { x: 1, y: 0 }}
      end={end ? end : { x: 0, y: 1 }}
      colors={colors ? colors : ["#FF5C00", "#FB37FF"]}

    >
      <Button
        style={{
          backgroundColor: "transparent",
          fontWeight: "bold",
          height: 40,
          justifyContent: "center",
          alignItems: "center",
        }}
        mode="contained"
        onPress={onPress}
      >
        <Text
          style={{
            fontSize: 16,
            fontWeight: "bold",
          }}
        >
          {title}
        </Text>
      </Button>
    </LinearGradient>
    </TouchableOpacity>
  
  );
};

export default GradientButton;
