import React from 'react';
import { Image, Text, View } from "react-native"
import * as testImage from '../test1.jpg';

const Story = ({story}) => {
    return (
        <View>
            {/* <Image source={require(story.image)}/> */}
            <Image style={{width: 200, height:200}} source={testImage}/>

            <Text>{story.title}</Text> 
        </View>
    )
}

export default Story