import React from 'react'
import { FlatList, ScrollView, StyleSheet, View } from 'react-native'
import Item from './Item'

const List = (props) => {
    const tasks = props.items?? [];
  return (
    <View style={{width:"100%", flex:1,}}>
        <ScrollView>
            <View style={styles.listContainer}>
            {tasks.map((task, index)=>{
                return (
                    <Item key={index} text={task}/>
                )
            })}
            </View>
        </ScrollView>
    </View>
  )
}

export default List


const styles = StyleSheet.create({
    listContainer: {
        flex:1,
        width: "100%",
        /* justifyContent: "center",
        alignItems: "flex-start", */
    }
});