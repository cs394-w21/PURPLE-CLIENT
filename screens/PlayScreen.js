import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import { Button } from '@material-ui/core';

const PlayScreen = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require('../purpleheart.jpeg')}>
            </Image>
            <View style={styles.player}>
                <View style={styles.scrub}></View>
                <Text style={styles.caption}> War Medals </Text>
                <Button color="primary" variant="contained" >
                    <Icon
                        type='font-awesome'
                        name='pause'
                        color='#517fa4'
                    />
                </Button>
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
        width: '50vw',
        height: '50vh'
    },
    player: {
        height: '50vh',
        borderWidth: 1,
        width: '50vw',
        alignItems: 'center'
    },
    scrub: {
        height: '5vh',
        width: '80%',
        borderWidth: 1,
        borderRadius: 10,
        marginTop: '5vh'
    },
    caption: {
        marginTop: '2vh',
        fontSize: '3vh'
    },
    pause: {
        width: '50vw',
        height: '50vh',
        fontSize: 30
    }
})

export default PlayScreen;