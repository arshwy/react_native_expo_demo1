import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Item = (props) => {
  return (
    <View style={styles.textContainer}>
        <Text style={styles.text}>{props.text}</Text>
    </View>
  )
}

export default Item


const styles = StyleSheet.create({
    textContainer: {
        flex:1,
        margin:5,
        padding: 10,
        width: "100%",
        backgroundColor: "#0033cc",
        color: "#fff",
    },
    text: {
        color: "#fff",
        fontSize: 20,
        textTransform: "capitalize",
    }
});