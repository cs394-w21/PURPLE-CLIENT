import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, TouchableHighlight } from "react-native";
import { Icon } from "react-native-elements";
import * as purpleHeart from "../assets/img/purpleheart.jpeg";
import { LinearGradient } from "expo-linear-gradient";
import { Button } from "react-native-paper";
import { vw, vh, vmin, vmax } from "react-native-expo-viewport-units";

const Modal = ({showBack, setShowBack}) => {
  return (
    <>{showBack ? 
    <View style={{flex: 1,
      justifyContent: 'center', alignItems: 'center',
      position: 'absolute', width: '100%', height: '100%', 
      backgroundColor: 'rgba(0,0,0,0.5)', transparent: showBack, zIndex: 9000}}>
        <View style={{backgroundColor: 'white', alignItems: 'center', height: 300, width: 300}}>
          <View style={{marginTop: 50, justifyContent: 'space-evenly', marginBottom: 50}}>
            <Text>Last Modified: {'Some variable'}</Text>
            <Text>Date Created: {'Some variable'}</Text>
            <Text>Shared With: {'Some variable'}</Text>
          </View>
          <TouchableOpacity onPress={()=> setShowBack(false)}>
            <Text>Close</Text>
          </TouchableOpacity>
        </View>
    </View>
      : null}
    </>

    
  )
}

const Success = ({ navigation }) => {
  const [showBack, setShowBack] = useState(0);
  return (
    <LinearGradient
      // TouchableOpacity Linear Gradient
      // Diagonal :0
      style={{flex: 1, width: "100%", height: "100%"}}
      start={{ x: 1, y: 0 }}
      end={{ x: 0, y: 1 }}
      colors={["#841787", "#F6CC60"]}
    >
      <Modal showBack={showBack} setShowBack={setShowBack}></Modal>

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
                type="font-awesome-5"
                name={"check"}
                color="#517fa4"
              />
              <Text style={{ fontSize: 50, color: "white" }}> Success </Text>
            </View>
            <Text style={{ color: "white", paddingLeft: 25 }}>
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
                World War II Medals
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
              source={require("../assets/img/purpleheart.jpeg")} /* need to fix import */
            />
            <Text style={{ marginBottom: 20 }}>
              Your grandfather earned two medals of honor when he was in WWII,
              this is the story of what he did...
            </Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
            
                    
              <TouchableOpacity onPress={()=> setShowBack(true)}>

                <Icon type="font-awesome-5" name="info-circle" color="#517fa4" />

              </TouchableOpacity>
              <Text style={{ fontWeight: "bold" }}>
                {'  '} This story has a 7 minute audio file, 4 images and 2 documents
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
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    height: '100%',
    paddingBottom: 40,
  },
  storycaption: {
    color: "white",
    padding: 20,
  },
  container: {
    fontSize: 50,
    color: "white",
  },
  banner: {
    flexDirection: "column",
    flexWrap: "nowrap",
    justifyContent: "center",
    //alignItems: "center",
    color: "white",
    padding: 20,
  },
});

export default Success;
