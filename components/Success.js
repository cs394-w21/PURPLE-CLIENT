import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Button } from '@material-ui/core';
import { Icon } from 'react-native-elements';
import * as purpleHeart from '../purpleheart.jpeg';
import { LinearGradient } from 'expo-linear-gradient';


const Success = () => {
    return (
        <LinearGradient
        // Button Linear Gradient
        // Diagonal :0
        colors={['#841787', '#F6CC60']}>
            <View style={styles.bigContainer}>
                <View style={styles.container}>
                    <View style={styles.banner}>
                        <View style={{flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center'}}>
                        {/*Wrong Icon - we need the white thing in the background*/}
                        <Icon
                            type='font-awesome'
                            name={ 'check' }
                            color='#517fa4'
                        />
                        <Text style={{fontSize: 50, color: 'white'}}> Success </Text>
                        </View>
                        <Text style={{color: 'white'}}> Your story has been captured and is now safe forever.</Text>
                    </View>
                </View>
                <View style={styles.storycaption}>
                    <View style={{height: 30, borderColor: 'black', borderWidth: 1, borderTopLeftRadius: 10, borderTopRightRadius: 10,
                    borderStyle: 'solid', textAlign: 'center', alignItems: 'center', justifyContent: 'center'}}>
                        <Text style={{textAlign: 'center', color: 'white'}}> World War II Medals </Text>
                    </View>
                    <View style={{justifyContent: 'center', alignItems: 'center', 
                    borderWidth: 1,
                    borderColor: 'black',
                    borderStyle: 'solid',
                    backgroundColor: 'white'}}>
                        
                        <Image style={{width: 200, height:200, marginVertical: 10}} source={purpleHeart}/>
                    <Text> Your grandfather earned two medals of honor when he was in WWII, this is the story of what he did... </Text>
                    <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                        <Icon
                            type='font-awesome'
                            name='info-circle'
                            color='#517fa4'
                        />
                        <Text style={{fontWeight: 'bold'}}> This story has a 7 minute audio file, 4 images and 2 documents attached to it.</Text>
                    </View>
                    </View>
                    <Button> Play this story </Button>
                    <View>
                    <Button> Edit </Button>
                    <Button> Share </Button>
                    </View>
                </View>
            </View>
        </LinearGradient>

    )
}

const styles = StyleSheet.create({
    bigContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white'
    },
    storycaption: {
        color: 'white'

    },
    container: {
        borderWidth: 1, 
        borderStyle: 'solid', 
        borderColor: 'black',
        fontSize: 50,
        color: 'white'

    },
    banner: {
        flexDirection: 'column',
        flexWrap: 'no-wrap',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white'
    },
  });


export default Success;
