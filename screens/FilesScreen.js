import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet, ImageBackground } from "react-native";
import { Icon } from "react-native-elements";


const FilesScreen = ({route, navigation}) => {
    const [count, setCount] = useState(route.params.index);
    const [photos, setPhotos] = useState(route.params.photos);
    const [photo, setPhoto] = useState(photos[count]);
    
    useEffect(()=> {
        setPhoto(photos[count]);
    },[count]);
    return (
        <ImageBackground source={photo} style={{flexDirection: 'row', flex: 1, justifyContent: 'space-between' }}>

                {count > 0 ? 
                    <TouchableOpacity style={{justifyContent: 'center',  zIndex: 100, marginLeft: 14}} onPress={() => {setCount(count-1)}}>
                        <Icon
                            type="font-awesome-5"
                            name="chevron-left"
                            color="white"
                            iconStyle={{ fontSize: 80 }}  
                        />
                    </TouchableOpacity> 
                : <View></View>}
            
                {count < photos.length - 1 ? 
                <TouchableOpacity style={{justifyContent: 'center', zIndex: 100, marginRight: 14 }} onPress={() => {setCount(count+1)}}>
                    <Icon
                        type="font-awesome-5"
                        name="chevron-right"
                        color="white"
                        iconStyle={{ fontSize: 80 }}
                        
                    />
                </TouchableOpacity> : <View></View>}
        </ImageBackground>
    )
}

export default FilesScreen;