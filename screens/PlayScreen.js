import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import Slider from "@react-native-community/slider";
import { LinearGradient } from "expo-linear-gradient";
import { Icon } from "react-native-elements";
import { Audio } from "expo-av";

import { vw, vh, vmin, vmax } from "react-native-expo-viewport-units";

const PlayScreen = ({navigation}) => {
  const [sound, setSound] = useState(null);
  const [time, setTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [length, setLength] = useState(0);
  const [favorite, setFavorite] = useState(false);


  useEffect(() => {
    playPauseSound();
  }, []);

  async function playPauseSound() {
    //initial play
    if (!sound) {
      console.log("Loading Sound");
      const { sound } = await Audio.Sound.createAsync(
        require("../assets/sound/example.mp3"),
        {
          volume: 0.5,
        }
      );
      setSound(sound);
      //setLength(sound._key.duration)
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
    if (sound) {
      console.log(seconds);
      console.log(sound._key.duration);
      console.log("Current Time:", sound._key.currentTime);
      console.log(sound)
      let curTime = seconds * sound._key.duration * 1000
      setLength(sound._key.duration)
      //await sound.playAsync();
      await sound.setPositionAsync(curTime)
      if (isPlaying) {
        await sound.playAsync();
      }
    }
  }

  async function scrubVolume(value) {
    //initial play
    console.log(value);
    if (sound) {
      await sound.setVolumeAsync(value)
    }
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
         
        if (sound._key) {
        if (time != sound._key.currentTime) {
          
          setTime(sound._key.currentTime);
        }
      }
       }
    }, 1000); 
  },[sound, isPlaying, time, length])

  
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/img/purpleheart.jpeg")} />
      <LinearGradient
        // TouchableOpacity Linear Gradient
        // Diagonal :0
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 1 }}
        colors={["#AD31FF", "#2E75E9"]}
        style={styles.playerWrapper}
      >
        <View style={styles.player}>
          <View style={styles.playerTop}>
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
            <Text style={{ color: "white", fontSize: vh(2) }}> {sound ? ( !isNaN(sound._key.duration) ? secondsToMs(sound._key.duration) : '00:00' ) : '00:00'} </Text>
          </View>
            <Text style={styles.caption}> War Medals </Text>
            <TouchableOpacity
              color="primary"
              variant="contained"
              onPress={async () => await playPauseSound()}
            >
              <Icon
                type="font-awesome-5"
                name={isPlaying ? "pause" : "play"}
                color="white"
                iconStyle={{ fontSize: 35 }}
              />
            </TouchableOpacity>
          </View>
        
          <View style={styles.playerBottom}>
          <View style={styles.scrub}>
            <Icon
              type="font-awesome-5"
              name='volume-off'
              color="white"
              iconStyle={{ fontSize: 20 }}
            />
            <Slider
              style={{ width: "80%", height: 5, marginHorizontal: 15 }}
              value ={0.5}
              minimumValue={0}
              maximumValue={1}
              minimumTrackTintColor="#AAAAAA"
              maximumTrackTintColor="#FFFFFF"
              onValueChange={async (value) => await scrubVolume(value)}
            />
            <Icon
              type="font-awesome-5"
              name='volume-up'
              color="white"
              iconStyle={{ fontSize: 20 }}
            />
          </View>
          <View
            style={styles.actionRow}
          >
            <TouchableOpacity onPress={() => navigation.navigate("ReadStoryScreen")} style={{ width: 100, justifyContent: "center", alignItems: "center" }}>
              <Icon
                type="font-awesome-5"
                name="book"
                color="white"
                iconStyle={{ fontSize: 20 }}
              />
              <Text style={{ marginTop: 5, color: "white", fontSize: 12 }}>
                Read Story
              </Text>
            </TouchableOpacity>
            {/* <TouchableOpacity style={{ width: 100, justifyContent: "center", alignItems: "center"  }}>
              <Icon
                type="font-awesome-5"
                name="share-square"
                color="white"
                iconStyle={{ fontSize: 20 }}
              />
              <Text style={{ marginTop: 5, color: "white", fontSize: 12 }}>Share</Text>
            </TouchableOpacity> */}
            {/* <TouchableOpacity style={{ width: 100, justifyContent: "center", alignItems: "center"  }}>
              <Icon
                type="font-awesome-5"
                name="list"
                color="white"
                iconStyle={{ fontSize: 20 }}
              />
              <Text style={{ marginTop: 5, color: "white", fontSize: 12 }}>History</Text>
            </TouchableOpacity> */}
            <TouchableOpacity onPress={() => setFavorite(!favorite)} style={{ width: 100, justifyContent: "center", alignItems: "center"  }}>
              <Icon
                type="font-awesome-5"
                name="star"
                color="white"
                iconStyle={{ fontSize: 20 }}
                solid = {favorite}
              />
              <Text style={{ marginTop: 5, color: "white", fontSize: 12 }}>Favorite</Text>
            </TouchableOpacity>
          </View>
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
    height: '60%', //vh(60),
  },
  playerWrapper: 
    {
      width: "100%",
      height: "40%",
      justifyContent: "center",
      alignItems: "center",
    },
  player: {
    width: "100%", //vw(100),
    height: "100%", //vh(40),
    alignItems: "center",
    paddingHorizontal: vh(3),
  },
  playerTop: {
    width: "100%",
    height: "45%", 
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: vh(3),
  },
  playerBottom: {
    width: "100%", 
    height: "55%", 
    justifyContent: "space-evenly",
    alignItems: "center",
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
  actionRow: 
    {
      flexDirection: "row",
      width: "100%",
      justifyContent: "space-between",
    }
  
});

export default PlayScreen;
