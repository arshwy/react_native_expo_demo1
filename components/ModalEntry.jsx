import React, { useState } from 'react'
import { Button, Modal, StyleSheet, Text, TextInput, View } from 'react-native'

const ModalEntry = (props) => {
    
    const tasks = props.tasks?? [];

    const [newTask, setNewTask] = useState("");

    const handleTextChange = (text) => {
        //console.log("text: ", text);
        setNewTask(text);
    }

    const onModalClose = ()=>{
        if (props.setModalIsVisible) {
            props.setModalIsVisible(false);
        }
    }

    const onAddTask = () => {
        if (props.setTasks) {
            props.setTasks(() => {
                return [...tasks, newTask]
            })
        }
        onModalClose();
    }

  return (
    <View>
        <Modal
            animationType='slide'
            transparent={false}
            visible={props.visible}
        >
            <View style={styles.modalContainer}>
                <View style={styles.input}>
                    <TextInput onChangeText={handleTextChange} placeholder='Enter your task'/>
                </View>
                <View style={styles.buttonsContainer}>
                    <View style={styles.button}>
                        <Button title="Cancel" onPress={onModalClose}/>
                    </View>
                    <View style={styles.button}>
                        <Button title="Add" onPress={onAddTask}/>
                    </View>
                </View>
            </View>
        </Modal>
    </View>
  )
}

export default ModalEntry


const styles = StyleSheet.create({
    modalContainer: {
        flex:1,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 16,
    },
    textContainer: {
        
    },
    buttonsContainer: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
    },
    button: {
        margin: 1,
        width: "50%",
    },
    input: {
        borderBottomColor: "#cccc",
        borderWidth: 2,
        padding: 5,
        marginVertical: 12,
        width: "100%",
        fontSize: 30,
    }
});