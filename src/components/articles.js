import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

function Articles() {
  return (
<ScrollView> 
    <View style={stily.container}>
    <Text style={stily.header}>HELLO WORLD</Text>
    </View>
  </ScrollView>

  );
}

const stily = StyleSheet.create ({
  header: {
    fontSize: 30,
    color: "blue",
    marginTop: 30
  },
  container: {
    alignSelf: 'center',
    paddingTop: 70
  }

})

export default Articles;
