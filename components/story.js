import React, { useState, useEffect } from 'react';
import { Image, Text, View, TouchableOpacity } from "react-native"
import { Icon } from 'react-native-elements'
import { Audio } from 'expo-av';
import { Button } from '@material-ui/core';
import * as testImage from '../test1.jpg';
import { setStatusBarHidden } from 'expo-status-bar';

const Story = ({story}) => {
    const [sound, setSound] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false)

    async function playPauseSound() {
        //initial play
        if (!sound) {
            console.log('Loading Sound');
            const { sound } = await Audio.Sound.createAsync(
                require('../assets/sound/example.mp3')
            );
            setSound(sound);
            setIsPlaying(true)
            console.log('Playing Sound');
            await sound.playAsync(); 
        }
        //else if playing, pause
        else if (isPlaying) {
            setIsPlaying(false)
            console.log('Stopping Sound');
            await sound.pauseAsync(); 
        }
        //else its paused, play
        else {
            setIsPlaying(true)
            console.log('Playing Sound');
            await sound.playAsync(); 
        }
    }
    
      useEffect(() => {
        return sound
          ? () => {
              console.log('Unloading Sound');
              sound.unloadAsync(); }
          : undefined;
      }, [sound]);
    

    return (
        <View>
            {/* <Image source={require(story.image)}/> */}
            <Image style={{width: 200, height:200}} source={testImage}/>

            <Text>{story.title}</Text> 
            <Button color="primary" variant="contained" onClick={async () => await playPauseSound()}>
                <Icon
                type='font-awesome'
                name={ isPlaying ? 'pause' : 'play'}
                color='#517fa4'
                />
            </Button>
        </View>
    )
}

export default Story