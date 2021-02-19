import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import Slider from "@react-native-community/slider";
import { LinearGradient } from "expo-linear-gradient";
import { Icon } from "react-native-elements";
import { Audio } from "expo-av";

import { vw, vh, vmin, vmax } from "react-native-expo-viewport-units";

const PlayScreen = () => {
  const [sound, setSound] = useState(null);
  const [time, setTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [length, setLength] = useState(0);
  

  async function playPauseSound() {
    //initial play
    if (!sound) {
      console.log("Loading Sound");
      const { sound } = await Audio.Sound.createAsync(
        require("../assets/sound/example.mp3")
      );
      setSound(sound);
      setIsPlaying(true);
      console.log("Playing Sound");
      await sound.playAsync();
    }
    //else if playing, pause
    else if (isPlaying) {
      setIsPlaying(false);
      console.log("Stopping Sound");
      await sound.pauseAsync();
    }
    //else its paused, play
    else {
      setIsPlaying(true);
      console.log("Playing Sound");
      await sound.playAsync();
    }
  }

  async function scrubSound(seconds) {
    //initial play
      console.log(seconds);
      console.log(sound._key.duration);
      console.log("Current Time:", sound._key.currentTime);
      console.log(sound)
      let curTime = seconds * sound._key.duration * 1000
      setLength(sound._key.duration)
      //await sound.playAsync();
      await sound.setPositionAsync(curTime)
      await sound.playAsync();
  }

  function secondsToMs(d) {
    d = Number(d);
  
    var min = Math.floor(d / 60);
    var sec = Math.floor(d % 60);
  
    return `0${min}`.slice(-1) + ":" + `00${sec}`.slice(-2);
  }

  useEffect(() => {
    return sound
      ? () => {
          console.log("Unloading Sound");
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  useEffect(()=> {
     setTimeout(() => {
       if (sound) {
        if (time != sound._key.currentTime) {
          setTime(sound._key.currentTime);
        }
       }
    }, 1000); 
  },[sound, isPlaying, time])

  
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../purpleheart.jpeg")} />
      <LinearGradient
        // TouchableOpacity Linear Gradient
        // Diagonal :0
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 1 }}
        colors={["#AD31FF", "#2E75E9"]}
        style={{
          width: "100%",
          height: "40%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={styles.player}>
          <View style={styles.scrub}>
            <Text style={{ color: "white", fontSize: vh(2) }}>{secondsToMs(time)}</Text>
            <Slider
              style={{width: '80%', height: 5, marginHorizontal: 10 }}
              minimumValue={0}
              maximumValue={1}
              minimumTrackTintColor="#AAAAAA"
              maximumTrackTintColor="#FFFFFF"
              onValueChange={async (value) => await scrubSound(value)}
            />
            <Text style={{ color: "white", fontSize: vh(2) }}> {length ? secondsToMs(length) : '00:27'} </Text>
          </View>
          <Text style={styles.caption}> War Medals </Text>
          <TouchableOpacity
            color="primary"
            variant="contained"
            onPress={async () => await playPauseSound()}
          >
            <Icon
              type="font-awesome"
              name={isPlaying ? "pause" : "play"}
              color="white"
              iconStyle={{ fontSize: vh(3.5) }}
            />
          </TouchableOpacity>
          <View style={styles.scrub}>
            <Icon
              type="font-awesome"
              name='volume-off'
              color="white"
              iconStyle={{ fontSize: vh(3.5) }}
            />
            <Slider
              style={{ width: "80%", height: 5, marginHorizontal: 15 }}
              minimumValue={0}
              maximumValue={1}
              minimumTrackTintColor="#AAAAAA"
              maximumTrackTintColor="#FFFFFF"
            />
            <Icon
              type="font-awesome"
              name='volume-up'
              color="white"
              iconStyle={{ fontSize: vh(3.5) }}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <TouchableOpacity>
              <Icon
                type="font-awesome"
                name="book"
                color="white"
                iconStyle={{ fontSize: vh(3.5) }}
              />
              <Text style={{ color: "white", fontSize: vh(2) }}>
                Read Story
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon
                type="font-awesome"
                name="share-square"
                color="white"
                iconStyle={{ fontSize: vh(3.5) }}
              />
              <Text style={{ color: "white", fontSize: vh(2) }}>Share</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon
                type="font-awesome"
                name="list"
                color="white"
                iconStyle={{ fontSize: vh(3.5) }}
              />
              <Text style={{ color: "white", fontSize: vh(2) }}>History</Text>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    width: vw(100),
    height: vh(100),
  },
  image: {
    width: vw(100), //vw(100),
    height: vh(60), //vh(60),
  },
  player: {
    width: "100%", //vw(100),
    height: "100%", //vh(40),
    justifyContent: "space-between",
    alignItems: "center",
    padding: vh(3),
  },
  scrub: {
    flexDirection: "row",
    width: "100%",
    color: "white",
    justifyContent: 'center',
    alignItems: 'center',
  },
  caption: {
    marginVertical: vh(0.25),
    fontSize: vh(3),
    color: "white",
    fontWeight: "bold",
  },
  pause: {
    width: vw(50),
    height: vh(50),
    fontSize: 30,
  },
});

export default PlayScreen;
