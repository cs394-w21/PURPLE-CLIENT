import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';


import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';

const PlayScreen = () => {
    return (
        

         <View> 
             <Image style={styles.image} source={require('../purpleheart.jpeg')}/> 
             <View style={styles.player}> 
                 <View style={styles.scrub}></View> 
                <Text style={styles.caption}> War Medals </Text>
                 <TouchableOpacity color="primary" variant="contained" onClick={() => {}} >
                    <Icon
                        type='font-awesome'
                        name='pause'
                        color='#517fa4'
                    />
                </TouchableOpacity> 
                
             </View> 
         </View> 
        
    )
}



const styles= StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    image: {
        width: vw(100),
        height: vh(50),
    },
    player: {
        height: vh(100),
        borderWidth: 1,
        width: vw(100),
        alignItems: 'center',
    },
    scrub: {
        height: vh(5),
        width: '80%',
        borderWidth: 1,
        borderRadius: 10,
        marginTop: vh(5),
    },
    caption: {
        marginTop: vh(2),
        fontSize: 10,
    },
    pause: {
        width: vw(50),
        height: vh(50),
        fontSize: 30,
    }
})

export default PlayScreen;