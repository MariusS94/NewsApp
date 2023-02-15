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
  const datas =  
    {
        "source": {
            "id": null,
            "name": "heise online"
        },
        "author": "Ben Schwan",
        "title": "Mehr Smart-Home-Geräte von Apple: iPad-artiger Controller, neues Apple TV",
        "description": "Apple will sein Angebot an HomeKit-fähigen Produkten offenbar erweitern. Dazu gehört offenbar eine ganz neue Gerätekategorie.",
        "url": "https://www.heise.de/news/Mehr-Smart-Home-Geraete-von-Apple-iPad-artiger-Controller-neues-Apple-TV-7463699.html",
        "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/3/6/8/1/9/4/7/homekit-9e68380798906c74.png",
        "publishedAt": "2023-01-19T11:08:00Z",
        "content": "Apple plant offenbar die Erweiterung seines Angebots an Smart-Home-Steuerzentralen. Neben HomePod und Apple TV soll demnächst ein \"Smart Display\" stehen. Außerdem ist für 2024 eine neue Multimediabox… [+2168 chars]"
    }
  return (
  <ScrollView>
<Articles title={datas.title} description={datas.description}
urlToImage={datas.urlToImage} source={datas.source.name}/>

</ScrollView>

  );
}





export default App;
