import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";

const photos = [require("../purpleheart.jpeg"), require("../test1.jpg"), require("../grandpaknife.jpeg")];

const FilesScreen = () => {
    const [count, setCount] = useState(0);
    const [photo, setPhoto] = useState(photos[count]);
    
    useEffect(()=> {
        setPhoto(photos[count]);
    },[count]);
    return (
        <View style={{flexDirection: "row", flex: 1}}>
            {count > 0 ? <TouchableOpacity onPress={() => {setCount(count-1)}}>
                <Icon
                    type="font-awesome-5"
                    name="chevron-left"
                    color="black"
                    iconStyle={{ fontSize: 20 }}
                    
                />
            </TouchableOpacity> : null}
            <Image style={{width: "80%", height: "100%"}} source={photo}></Image>
            {count < photos.length - 1 ? <TouchableOpacity onPress={() => {setCount(count+1)}}>
                <Icon
                    type="font-awesome-5"
                    name="chevron-right"
                    color="black"
                    iconStyle={{ fontSize: 20 }}
                    
                />
            </TouchableOpacity> : null}
        </View>
    )
}

export default FilesScreen;