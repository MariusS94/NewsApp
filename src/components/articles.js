import React from 'react';
import breakfast from "../assets/breakfast.png";
import { Card, Divider, Image } from "react-native-elements";

import {
    ImageBackground,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import moment from 'moment';


    
function Articles({title,urlToImage,description,source,publishedAT}) {
    
    const defaultImg = breakfast;
    
    const time = moment(publishedAT || moment.now()).fromNow();

    const {noteStyle, featuredTitleStyle} = stily;

  return (
 
    <View style={stily.container}>
        <Card>
            <Text>{title}</Text>
        <Image style={stily.image} resizeMode="cover" source={{uri : urlToImage}}/>
            <Text>
                {description || "Read More.."}
                

            </Text>
            <Divider style={{ backgroundColor: '#dfe6e9' }} />
            <View style={stily.cardFooter}>
                <Text style={noteStyle}>{source}</Text>
                <Text style={noteStyle}>{time}</Text>
            </View>

        </Card>
    </View>
    


  );
}

const stily = StyleSheet.create ({
  
container: {
    flex: 1,
 },
  image: {
    flex: 1,
    justifyContent: "center",
},
cardFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
},
noteStyle: {
    margin: 5,
    fontStyle: 'italic',
    color: '#b2bec3',
    fontSize: 10
  },
  featuredTitleStyle: {
    marginHorizontal: 5,
    textShadowColor: '#00000f',
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 3
  },
  image: {
    width: 400,
    height: 200,
    marginRight: 100,
  },


})

export default Articles;
