import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Text, View, KeyboardAvoidingView, TextInput, Button } from 'react-native';
import Task from './components/Tarea'
//import { KeyboardAvoidingView,  } from 'react-native-web';
import { TouchableOpacity } from 'react-native';

export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  
  const handleAddTask = () => {
   // Keyboard.dimiss();
    //console.log(task)
    setTaskItems([...taskItems, task])
    setTask(null);
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  }

  return (
    <View style={styles.container}>
  

        {/* tareas de hoy */}
        
        <View style={styles.taskWrapper}>
          <Text style={styles.seccionTitulo}>Lista de Tareas</Text>

          <View style={styles.item}>
          {/* Tareas seccion*/}
            {
              taskItems.map((item, index) => {
                return (
                  <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                      <Task  text={item}/>
                  </TouchableOpacity>
                )
              })
            }
          </View>
        </View>

          
          {/* Area de agregar tarea*/}

          <KeyboardAvoidingView 
          behavior={Platform.OS === 'ios' ? "padding" : "height"} 
          style = {styles.writeTaskWrapper}> 


            <TextInput style={styles.input} placeholder={'Agregar una tarea'} value={task}  onChangeText={text => setTask(text)}/>


            <TouchableOpacity onPress={() => handleAddTask()}>
             <View style={styles.addWrapper}> 
                <Text style={styles.addText}>+</Text>
              </View> 
            </TouchableOpacity>

          </KeyboardAvoidingView>


       
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fcf8ff',

    //Seccion de tareas
  },
  taskWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,


  },

  seccionTitulo: {
    fontSize: 36,
    fontWeight: 'bold',
    
  },

  item: {
    marginTop: 30,
  },
//Seccion Agregar Tarea

writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'

},
input: {
 paddingVertical: 15,
 paddingHorizontal: 15,
 backgroundColor: "#FFF",
 borderRadius: 60,
 borderColor: '#f6e2ff',
 borderWidth: 1,
 width: 450,
 height: 60,


},
addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#d298ff',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#8d71ff',
    borderWidth: 1,


},
addText: {
  fontSize: 30,
  fontWeight: 'bold',
  alignItems: 'center',

},


});
