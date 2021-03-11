import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView } from "react-native";
import { vw, vh, vmin, vmax } from "react-native-expo-viewport-units";
import { Icon } from "react-native-elements";


const Header = ({title}) => {
  const [favorite, setFavorite] = useState(false);
  return (
    
      <View style={styles.header}>
        
          <Text style={styles.title}>{title}</Text>
        
        
          <TouchableOpacity
            onPress={() => setFavorite(!favorite)}
            style={{marginLeft: 10}}
          >
            
            {/* <Icon
              type="font-awesome-5"
              name="star"
              color="#AD00FF"
              iconStyle={{ fontSize: 20 }}
              solid={favorite}
            /> */}
          </TouchableOpacity>
      </View>

      
  );
};
const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    marginBottom: 20
  },
  title: {
    fontFamily: "roboto-regular",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "24px",
    lineHeight: "20px",
    color: "#FF5C00"
    /* identical to box height, or 83% */

    /* Purple */

    // color: linear-gradient(191.88deg, #AD00FF 29.85%, #00B1FD 100%);
  }
});
export default Header;
