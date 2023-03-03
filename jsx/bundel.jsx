import { StyleSheet,Image, Text, View,Button} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import styled from 'styled-components/native';
import { gstyles } from '../styles/styles';


const Post = styled.View`
    position: absolute;
    max-height: 150px;
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
    left: 100px;
    height:100px;
    width:310px
    fontSize:20px;
    max-width: 100%
    
`;

export const Miansta = ({name,Img}) => {

return (
<View>
<Post>
<Gmage  source={{uri:Img}}/>
<PostText>{name}</PostText>
</Post>
</View>
)
}