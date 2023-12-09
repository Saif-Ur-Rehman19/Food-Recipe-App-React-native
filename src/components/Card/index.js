import React from 'react';
import { Text } from 'react-native';
import styles from "./style";
import { View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {  HeartIcon} from 'react-native-heroicons/solid';
import colors from '../../constants/colors';


const Card = ({ RecipeTitle, image, style, favourite }) => {
        return (
            <View style={[styles.container, style]}>
                <Image style={styles.image} source={{ uri: 'https://images.immediate.co.uk/production/volatile/sites/30/2013/05/Puttanesca-fd5810c.jpg'}} />
                <Text  numberOfLines={3} ellipsizeMode="tail" style={styles.title}>{RecipeTitle}</Text>
                {/* <TouchableOpacity>{favourite}</TouchableOpacity> */}
                <Image style={styles.SavedIcon} source={require('../../../assets/love.png')} />
            </View>
        );
    };

export default React.memo(Card);
