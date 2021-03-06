import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import Slider from "@react-native-community/slider";
import { LinearGradient } from "expo-linear-gradient";
import { Icon } from "react-native-elements";
import { Audio } from "expo-av";

const PlayScreen = ({route, navigation}) => {
  const [sound, setSound] = useState(null);
  const [time, setTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [length, setLength] = useState(0);
  const [favorite, setFavorite] = useState(false);
  const [source, setSource] = useState(true);
  const story = route.params.story
  const photos = route.params.photos

  useEffect(() => {
    playPauseSound();
  }, []);

  async function playPauseSound() {
    if (story.audios.length == 0) {
      setSource(false);
      return;
    }
    if (!sound) {
      console.log("Loading Sound");
      const { sound } = await Audio.Sound.createAsync(
        story.audios[0],
        {
          volume: 0.5,
        }
      );
      setSound(sound);
      setIsPlaying(true);
      console.log("Playing Sound");
      
      await sound.playAsync();
    }
    else if (isPlaying) {
      setIsPlaying(false);
      console.log("Stopping Sound");
      await sound.pauseAsync();
    }
    else {
      setIsPlaying(true);
      console.log("Playing Sound");
      await sound.playAsync();
    }
  }

  async function scrubSound(seconds) {
    if (sound) {
      console.log(seconds);
      console.log(sound._key.duration);
      console.log("Current Time:", sound._key.currentTime);
      console.log(sound)
      let curTime = seconds * sound._key.duration * 1000
      setLength(sound._key.duration)
      await sound.setPositionAsync(curTime)
    }
  }

  async function scrubVolume(value) {
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
    return sound && source
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
      <Image style={styles.image} source={photos[0]} />
      <LinearGradient
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 1 }}
        colors={["#FFFFFF", "#FFFFFF"]}
        style={styles.playerWrapper}
      >
        <View style={styles.player}>
          <View style={styles.playerTop}>
          <View style={styles.scrub}>
            <Text style={{ color: "9900CC", fontSize: 12 }}>{secondsToMs(time)}</Text>
            <Slider
              style={{width: '80%', height: 5, marginHorizontal: 10 }}
              minimumValue={0}
              value={time / length}
              maximumValue={1}
              minimumTrackTintColor="#DF80FF"
              maximumTrackTintColor="#9900CC"
              onValueChange={async (value) => await scrubSound(value)}
            />
            <Text style={{ color: "9900CC", fontSize: 12 }}> {sound ? ( !isNaN(sound._key.duration) ? secondsToMs(sound._key.duration) : '00:00' ) : '00:00'} </Text>
          </View>
            <Text style={styles.caption}> {story.title} </Text>
            <TouchableOpacity
              color="primary"
              variant="contained"
              onPress={async () => await playPauseSound()}
            >
              <Icon
                type="font-awesome-5"
                name={isPlaying ? "pause" : "play"}
                color="#9900CC"
                iconStyle={{ fontSize: 35 }}
              />
            </TouchableOpacity>
          </View>
        
          <View style={styles.playerBottom}>
          <View style={styles.scrub}>
            <Icon
              type="font-awesome-5"
              name='volume-off'
              color="#9900CC"
              iconStyle={{ fontSize: 20 }}
            />
            <Slider
              style={{ width: "80%", height: 5, marginHorizontal: 15 }}
              value ={0.5}
              minimumValue={0}
              maximumValue={1}
              minimumTrackTintColor="#9900CC"
              maximumTrackTintColor="#DF80FF"
              onValueChange={async (value) => await scrubVolume(value)}
            />
            <Icon
              type="font-awesome-5"
              name='volume-up'
              color="#9900CC"
              iconStyle={{ fontSize: 20 }}
            />
          </View>
          <View
            style={styles.actionRow}
          >

            <TouchableOpacity onPress={() => navigation.navigate("ReadStoryScreen", {story})} style={{ width: 100, justifyContent: "center", alignItems: "center" }}>
              <Icon
                type="font-awesome-5"
                name="book"
                color="#9900CC"
                iconStyle={{ fontSize: 20 }}
              />
              <Text style={{ marginTop: 5, color: "9900CC", fontSize: 12 }}>
                Read Story
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setFavorite(!favorite)} style={{ width: 100, justifyContent: "center", alignItems: "center"  }}>
              <Icon
                type="font-awesome-5"
                name="star"
                color="#9900CC"
                iconStyle={{ fontSize: 20 }}
                solid = {favorite}
              />
              <Text style={{ marginTop: 5, color: "9900CC", fontSize: 12 }}>Favorite</Text>
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
  },
  image: {
    width: '100%', 
    height: '60%', 
  },
  playerWrapper: 
    {
      width: "100%",
      height: "40%",
      justifyContent: "center",
      alignItems: "center",
    },
  player: {
    width: "100%", 
    height: "100%", 
    alignItems: "center",
    paddingHorizontal: 20,
  },
  playerTop: {
    width: "100%",
    height: "45%", 
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 20,
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
    color: "9900CC",
    justifyContent: 'center',
    alignItems: 'center',
  },
  caption: {
    marginVertical: 5,
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
  actionRow: 
    {
      flexDirection: "row",
      width: "100%",
      justifyContent: "space-between",
    }
  
});

export default PlayScreen;
