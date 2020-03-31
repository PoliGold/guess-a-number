import React from 'react'
import { View, StyleSheet } from 'react-native'


const Card = props => {
    return <View style={{...styles.card, ...props.style}}>{props.children}</View>
};
 
const styles = StyleSheet.create({
    card: {
        /* iOS dropshadow ONLY */
        shadowColor: 'black',
        shadowOffset: { height: 0, width: 2 },
        shadowOpacity: 0.26,
        shadowRadius: 6,
        /* END DROP SHADOW */

        /*Android Drop shadow ONLY */
        elevation: 8, 
        /* END DROP SHADOW */

        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10
    }
});

export default Card;