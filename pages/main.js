import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button,TouchableOpacity,Image,Alert} from 'react-native';
import { gstyles}  from "../styles/styles";
import {Miansta} from "../jsx/bundel"
import axios, { Axios } from 'axios';

import styled from 'styled-components/native';
import React from 'react';


export default function Main({navigation}) {
  

  const [isLoading, setisLoading] = React.useState(true);
  const [items,setItems] = React.useState();

  const fetchPosts= () => {
    setisLoading(true)
        axios.get("https://63ff8f4f63e89b09139eef52.mockapi.io/item").then(({data}) => {
   setItems(data) 

   
   
    }).catch(err => {
      console.log(err)
      Alert.alert("Ошибка 404","Ошибка сервер не відповідає")
    }).finally(()=> {
      setisLoading(false);
    })
  }
React.useEffect(fetchPosts,[])

  


  const Post = styled.View`
      position: absolute;
      top: 37px;
      left: 4px;
      width: 408px;
      height:100px;
      border-radius: 9px;
      border:
      2px       /* width */
      solid     /* style */
      rgb(0, 0, 0);  /* color */
      background: rgb(229, 229, 229);
      background-size: 320px 347px;
      
  `;
  
  const Gmage = styled.Image`
      position: absolute;
      top: 10px;
      left: 10px;
      width: 80px;
      height:80px;
      border-radius: 9px;
  
      
  `;
  
  
  
  



  


  
  


  const PostText = styled.Text`
      position: absolute;
      top: 20px;
      left: 120px;
      fontSize:30px;
  
      
  `;
  const loadscene = () => {
    navigation.navigate('Профіль')
  }
  


  return (
    <View> 

      <TouchableOpacity
          style={gstyles.button_home}
          onPress={loadscene} 
          
        >
          <Image style={gstyles.button_home} source={require('../assets/home.png')} />
          
        </TouchableOpacity>
      












{[...items].map(dat => (
<Miansta 
name={dat?.name}
Img={dat?.Img}
/>
))}





 
    </View>

  );
}

