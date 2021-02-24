import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet, TextInput, ScrollView } from "react-native";
import { vw, vh, vmin, vmax } from "react-native-expo-viewport-units";
import { Icon } from "react-native-elements";
// import { LinearTextGradient } from "react-native-text-gradient";

const ReadStoryScreen = (route) => {
  const [favorite, setFavorite] = useState(false);
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        
          <Text style={styles.title}>War medals</Text>
        
        
          <TouchableOpacity
            onPress={() => setFavorite(!favorite)}
            style={{marginLeft: 10}}
          >
            <Icon
              type="font-awesome-5"
              name="star"
              color="#AD00FF"
              iconStyle={{ fontSize: 20 }}
              solid={favorite}
            />
          </TouchableOpacity>
      </View>

      <Text>
        On April 8th, 1944, 1st Lieutenant Frank W. Hammett (ID # 0717786)
        graduated from Childress Army Base (Graduating Class #44-5) as a
        Bombardier Officer for World War II (WWII). He cross-trained as a gunner
        allowing him to replace the flight engineer in the top turret after
        targeting the aerial bombs. Frank served from June 1944 to May 1945 as
        part of the 485th Bomb Group stationed in Venosa, Italy. {"\n\n"} At the
        time, bomber crews had a 22% survival rate per mission and 78% of the
        crews were killed or shot down. Frank flew a total of 35 missions on the
        LIFE B-24 Liberator, even though he was required to serve 25. When asked
        why, Frank stated “It was my job and I would never let my crew down.”
        After every mission he and his crew survived, Frank would notch the
        sheath of a knife he received from his family prior to deploying. He was
        wounded on August 24th, 1944 and was hospitalized for only 6 days; he
        flew again on September 1st, 1944. In the latter missions, he and the
        tail gunner were credited with one kill of a German FW190, plus a
        probable kill of another. When confronted by his granddaughter regarding
        this event, Frank responded, “He was going to kill us.” {"\n\n"}After completing
        35 missions, he returned home to the United States for B-29 training;
        fortunately, WWII ended before he was deployed to the Pacific. For his
        service, Frank was awarded the Purple Heart as he was wounded in battle
        (shrapnel to the head), Distinguished Flying Cross, and the Army Air
        Corp medal for Valor. Years later as a practicing attorney, he could
        identify his LIFE B-24 Liberator in print archives by the tail markings
        and the Swastika emblem on the side of the plane from the German FW190.
        1st Lieutenant Frank W. Hammett never returned to Europe, as “He never
        wanted to see first-hand what he and his crew were responsible for.”
      </Text>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  title: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "24px",
    lineHeight: "20px",
    color: "#AD00FF"
    /* identical to box height, or 83% */

    /* Purple */

    // color: linear-gradient(191.88deg, #AD00FF 29.85%, #00B1FD 100%);
  },
  body: {
    fontFamily: "Roboto",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "19px",
    letterSpacing: "0em",
    textAlign: "left"

  },
  header: {
    flexDirection: "row",
    marginBottom: 20
  },
  container: {
    padding: 20,

  }
});
export default ReadStoryScreen;
