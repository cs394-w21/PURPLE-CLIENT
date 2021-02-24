import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { vw, vh, vmin, vmax } from "react-native-expo-viewport-units";
import { Icon } from "react-native-elements";
import { LinearGradient } from "expo-linear-gradient";


const ReadStoryScreen = (route) => {
    const [favorite, setFavorite] = useState(false);
    return (
            <View>
                <LinearGradient
                style={{
                borderColor: "transparent",
                borderWidth: 1,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                borderStyle: "solid",
                }}
                colors={["#F1A9ED", "#D59484"]}
            >
            <Text>War Medals</Text>
            </LinearGradient>
            <TouchableOpacity onPress={() => setFavorite(!favorite)} style={{ width: 100, justifyContent: "center", alignItems: "center"  }}>
              <Icon
                type="font-awesome-5"
                name="star"
                color="white"
                iconStyle={{ fontSize: 20 }}
                solid = {favorite}
              />
              </TouchableOpacity>
        </View>

    )
}
const styles = StyleSheet.create({
    title: {
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "24px",
        lineHeight: "20px"
/* identical to box height, or 83% */


/* Purple */

        // color: linear-gradient(191.88deg, #AD00FF 29.85%, #00B1FD 100%);

    }
})
export default ReadStoryScreen;