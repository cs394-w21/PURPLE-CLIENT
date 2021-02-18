import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

import { Icon } from "react-native-elements";
import * as purpleHeart from "../purpleheart.jpeg";
import { LinearGradient } from "expo-linear-gradient";
import { Button } from "react-native-paper";

const Success = ({ navigation }) => {
  return (
    <LinearGradient
      // TouchableOpacity Linear Gradient
      // Diagonal :0
      start={{ x: 1, y: 0 }}
      end={{ x: 0, y: 1 }}
      colors={["#841787", "#F6CC60"]}
    >
      <View style={styles.bigContainer}>
        <View style={styles.container}>
          <View style={styles.banner}>
            <View
              style={{
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              {/*Wrong Icon - we need the white thing in the background*/}
              <Icon
                containerStyle={{
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "white",
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                }}
                iconStyle={{ color: "#F1A9ED" }}
                type="font-awesome"
                name={"check"}
                color="#517fa4"
              />
              <Text style={{ fontSize: 50, color: "white" }}> Success </Text>
            </View>
            <Text style={{ color: "white", paddingLeft: 25 }}>
              {" "}
              Your story has been captured and is now safe forever.
            </Text>
          </View>
        </View>
        <View style={styles.storycaption}>
          <LinearGradient
            style={{
              borderColor: "transparent",
              borderWidth: 1,
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              borderStyle: "solid",
            }}
            colors={["#F1A9ED", "#D59484"]}
          >
            <View
              style={{
                height: 30,
                textAlign: "center",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={{ textAlign: "center", color: "white" }}>
                {" "}
                World War II Medals{" "}
              </Text>
            </View>
          </LinearGradient>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "white",
              padding: 20,
            }}
          >
            <Image
              style={{ width: 200, height: 200, marginVertical: 10 }}
              source={purpleHeart}
            />
            <Text style={{ marginBottom: 20 }}>
              {" "}
              Your grandfather earned two medals of honor when he was in WWII,
              this is the story of what he did...{" "}
            </Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Icon type="font-awesome" name="info-circle" color="#517fa4" />
              <Text style={{ fontWeight: "bold" }}>
                {" "}
                This story has a 7 minute audio file, 4 images and 2 documents
                attached to it.
              </Text>
            </View>
          </View>
          <Button
            style={{
              marginTop: 20,
              backgroundColor: "white",
              fontWeight: "bold",
            }}
            mode="contained"
            onPress={() => navigation.navigate("PlayScreen")}
          >
            <Text style={{ color: "#841787" }}>Play this story</Text>
          </Button>
          <View
            style={{
              marginTop: 10,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Button
              style={{
                width: "45%",
                backgroundColor: "#841787",
                color: "white",
                fontWeight: "bold",
              }}
              color="#841787"
              mode="contained"
              onPress={() => console.log("Pressed")}
            >
              <Text>Edit</Text>
            </Button>
            <Button
              style={{
                width: "45%",
                backgroundColor: "#F6CC60",
                color: "#841787",
                fontWeight: "bold",
              }}
              mode="contained"
              onPress={() => console.log("Pressed")}
            >
              <Text>Share</Text>
            </Button>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  bigContainer: {
    alignItems: "center",
    justifyContent: "center",
    color: "white",
  },
  storycaption: {
    color: "white",
    padding: 20,
  },
  container: {
    fontSize: 50,
    color: "white",
    marginBottom: 40,
  },
  banner: {
    flexDirection: "column",
    flexWrap: "nowrap",
    justifyContent: "center",
    //alignItems: "center",
    color: "white",
  },
});

export default Success;
