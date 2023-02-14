import React from 'react';
import Articles from './src/components/articles';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

function App() {
  return (
<Articles/>

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

export default App;
