import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView } from 'react-native';

import api from './src/sevices/api';
import Filmes from './src/Filmes';



export default function App(){

  const [filmes, setFilmes] =useState();

  useEffect(()=>{

    async function LoadFilmes(){
      const response = await api.get('r-api/?api=filmes');
      //console.log(response.data)
      setFilmes(response.data);
    }

    LoadFilmes();

  }, [])
 
  return (
    <View style={styles.container}>
      <StatusBar hidden/>

      <FlatList
      data={filmes}
      keyExtractor={ item => String(item.id)}
      renderItem={({item}) => <Filmes data={item}/> }
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
});
