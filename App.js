import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
//import Story from './components/Story';
import Success from "./components/Success";
import "react-native-gesture-handler";
import { Icon } from "react-native-elements";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Provider as PaperProvider } from "react-native-paper";
import PlayScreen from "./screens/PlayScreen";
import ReadStoryScreen from "./screens/ReadStoryScreen";
import SummaryScreen from "./screens/SummaryScreen";
import FilesScreen from "./screens/FilesScreen";
import FilesFolderScreen from "./screens/FilesFolderScreen";
import CreateStoryScreen from "./components/create-story/CreateStoryScreen"


const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

export default function App() {
  const story = {
    title: "testtest",
    image: "../test1.jpg",
  };
  // <Success></Success>
  //       <StatusBar style="auto" />

  //      {/*<Story story={story} />*/}

  return (
    <PaperProvider>
      <NavigationContainer>
        <Tab.Navigator initialRouteName="New Story" tabBarOptions={{
    activeTintColor: '#0091EA',
    inactiveTintColor: 'gray',
    style: {paddingVertical:  5, height: 60 },
    labelStyle: {fontSize: 13, fontWeight: "500",  paddingBottom: 5, zIndex: 0 },
}}>
          
          <Tab.Screen
            
            component={mainApp}
            name="Home"
            options={{
              title: "Home",
              tabBarIcon: () => (
                
                <Icon
                  type="font-awesome-5"
                  name="home"
                  color="#666"
                  iconStyle={{ fontSize: 20}}
                />
              ),
//              tabBarLabel: {focused: true, color: 'pink', position: 'beside-icon'} 
            }}
          />
          <Tab.Screen
            component={mainApp}
            name="Browse"
            options={{
              title: "Browse",
              tabBarIcon: () => (
                <Icon
                  type="font-awesome-5"
                  name="border-all"
                  color="#666"
                  style={{zIndex: 0}}
                  iconStyle={{ fontSize: 20, color: 'rgba(0,0,0,0.1)'}}
                />
              ),
            }}
          />
          {/* <Tab.Screen
            component={Success}
            name="New Story"
            options={{
              title: "New Story",
              tabBarIcon: () => (
                <Icon
                  type="font-awesome-5"
                  name="plus-circle"
                  color="#FC44A9"
                  style={{zIndex: 1, justifyContent:"flex-start", alignItems:"center", paddingTop: 15, borderRadius: 500, width: 75, height: 75, backgroundColor: "white"}}
                  iconStyle={{ fontSize: 20, }}
                />
              ),
            }}
          /> */}
          <Tab.Screen
            component={CreateStoryScreen}
            name="New Story"
            options={{
              title: "New Story",
              tabBarIcon: () => (
                <Icon
                  type="font-awesome-5"
                  name="plus-circle"
                  color="#FC44A9"
                  style={{zIndex: 1, justifyContent:"flex-start", alignItems:"center", paddingTop: 15, borderRadius: 500, width: 75, height: 75, backgroundColor: "white"}}
                  iconStyle={{ fontSize: 20, }}
                />
              ),
            }}
          />
          <Tab.Screen
            component={mainApp}
            name="Account"
            options={{
              title: "Account",
              tabBarIcon: () => (
                <Icon
                  type="font-awesome-5"
                  name="user-cog"
                  color="#666"
                  style={{zIndex: 0}}
                  iconStyle={{ fontSize: 20, color: 'rgba(0,0,0,0.1)'}}
                />
              ),
            }}
          />
          <Tab.Screen
            component={mainApp}
            name="More"

            options={{
              title: "More",

              tabBarIcon: () => (
                <Icon
                  type="font-awesome-5"
                  name="ellipsis-h"
                  color="#666"
                  iconStyle={{ fontSize: 20, color: 'rgba(0,0,0,0.1)'}}
                />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

const mainApp = () => {
  return (<Stack.Navigator>  
   
  <Stack.Screen
    name="SummaryScreen"
    component={SummaryScreen}
    options={{ headerShown: false, title: "" }}
    />
    <Stack.Screen
    name="FilesFolderScreen"
    component={FilesFolderScreen}
    options={{title: "Back" }}
    /> 
  <Stack.Screen
    name="FilesScreen"
    component={FilesScreen}
    options={{title: "Back" }}
  />
  <Stack.Screen
      name="Success"
      component={Success}
      options={{ headerShown: false, title: "" }}
    />
    <Stack.Screen
    name="ReadStoryScreen"
    component={ReadStoryScreen}
    options={{title: "Back" }}
    />
     <Stack.Screen
      name="PlayScreen"
      component={PlayScreen}
      options={{ headerShown: false, title: "" }}
    /> 
    
  </Stack.Navigator>)
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
