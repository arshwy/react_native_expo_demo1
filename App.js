import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import List from './components/List';
import ModalEntry from './components/ModalEntry';


export default function App() {

  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [tasks, setTasks] = useState([]);

  const handleModalVisibility = () => {
    setModalIsVisible(true);
  }

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button title="Add To Do" onPress={handleModalVisibility} />
      </View>
      <List items={tasks}/>
      <ModalEntry 
        visible={modalIsVisible} 
        setModalIsVisible={setModalIsVisible} 
        setTasks={setTasks}
        tasks={tasks}
      />
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 30,
    paddingHorizontal: 16,
  },
  buttonContainer : {
    margin:10,
    width: "100%",
    paddingBottom: 20,
    borderBottomWidth: 2,
    borderBottomColor: '#cccc',
  },
  
});
