import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";

const photos = [require("../purpleheart.jpeg"), require("../test1.jpg"), require("../grandpaknife.jpeg")];

const FilesScreen = () => {
    const [count, setCount] = useState(0);
    const [photo, setPhoto] = useState(photos[count]);
    
    useEffect(()=> {
        setPhoto(photos[count]);
    },[count]);
    return (
        <View>
            <Image style={{width: 300, height: 300}} source={photo}></Image>
            <TouchableOpacity onPress></TouchableOpacity>
        </View>
    )
}

export default FilesScreen;