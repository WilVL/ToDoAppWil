import React from "react";
import { TouchableOpacity } from "react-native";
import { View, Text, StyleSheet } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

const Tarea = (props) => {

    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <View style={styles.circular}></View>
                <Text style={styles.itemText}>{props.text}</Text>
            </View>
            <View >
                <AntDesign name="delete" size={22} color="#492a60" />
            </View>

        </View>
    )
}

const styles = StyleSheet.create(
    {
        item: {
            backgroundColor: '#FFF',
            padding: 15,
            borderRadius: 10,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 20,
            borderWidth: 1,
            borderColor: '#b876ea',
        },
        itemLeft: {
            flexDirection: 'row',
            alignItems: 'center',
            flexWrap: 'wrap',

        },
        square: {
            width:20,
            height:20,
            backgroundColor: '#bf2cff',
            opacity: 0.4,
            borderRadius: 5,
    

        },
        itemText: {
            maxWidth: '80%'
        },
        circular: {
            width: 24,
            height: 24,
            borderColor: '#d168ff',
            borderWidth: 2,
            borderRadius: 5,
            marginRight: 15,
        },

        addWrapper: {
            width: 60,
            height: 60,
            backgroundColor: '#db9fff',
            borderRadius: 60,
            justifyContent: 'center',
            alignItems: 'center',
            borderColor: '#e9dfef',
            borderWidth: 1,
        
        
        },
        addText: {
            fontSize: 20,
            fontWeight: 'bold',
            alignItems: 'center',
            opacity:0.4,
          
        },

    }
)


export default Tarea;
