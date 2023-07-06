import {
  StyleSheet,
  View,
} from "react-native";
import React, { useState } from "react";
import TopBar from "../components/TopBar";
import TaskList from "../components/TaskList";
import ModalTask from "../components/ModalTask";

import ModalAlert from "../components/ModalAlert";


const MainScreen = ({ taskList }) => {

  const [list, setList] = useState(taskList)
  const [input, setInput] = useState("")
  const [modalVisible, setModalVisible] = useState(false);
  const [activeTask, setActiveTask] = useState({});

  const [modalAlertVisible, setModalAlertVisible] = useState(false);

  const onAddTask = () => {

      console.log('inputinput',input)
    //validar que el input no este vacio
    if (input == '' || input == null || input == undefined) {
    
      setModalAlertVisible(!modalAlertVisible);
      return;
    }


    console.log('se agrego una task')
    setList([
      ...list,
      {
        id: new Date().getTime().toString(),
        task: input,
        completed: false
      }
    ])
  }


  const onPressTask = (task) => {

    //almaceno la task para mostrarla en el modal
    setActiveTask(task);
    //activo el modal
    setModalVisible(!modalVisible);
   

  }


  const onPressDone = (taskId) => {
    console.log('se presiono done')
    console.log(taskId)
    
        //actualizo el estado de la task, recorrer la lista actual, buscar la task y actualizarla
        const newList = list.map((item) => {
          if (item.id === taskId) {
            return {
              ...item,
              completed: true
            }
          }
          return item;
        }
        )
        
        //actualizo la lista
        setList(newList);

        console.log(list);


  }


  const onPressNotYet = (taskId) => {
    console.log('se presiono not yet')
    console.log(taskId)

        //actualizo el estado de la task, recorrer la lista actual, buscar la task y actualizarla
        const newList = list.map((item) => {
          if (item.id === taskId) {
            return {
              ...item,
              completed: false
            }
          }
          return item;
        }
        )
        
        //actualizo la lista
        setList(newList);

        console.log(list);

  }

  const onPressDelete = (taskId) => {
    console.log('se presiono delete')
    console.log(taskId)

    const newList = list.filter((item) => item.id !== taskId);

        //actualizo la lista
        setList(newList);

        console.log(list);

  }

  return (
    <View style={styles.container}>


      <TopBar input={input}
        onAddTask={onAddTask}
        setInput={setInput}
 
         />

      <TaskList 
        list={list}
        onPressTask={onPressTask}
      />

      <ModalTask modalVisible={modalVisible} 
                setModalVisible={setModalVisible}
                activeTask={activeTask}
                onPressDone={onPressDone}
                onPressNotYet={onPressNotYet}
                onPressDelete={onPressDelete}
      />

    <ModalAlert modalAlertVisible = {modalAlertVisible}
                setModalAlertVisible = {setModalAlertVisible}
                />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 200,
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  }/* ,
  view1: {
    height: "12%",
    flexDirection: "row",
    gap: 20,
    paddingHorizontal: 10,
    paddingBottom: 10,
    justifyContent: "center",
    alignItems: "flex-end",
    backgroundColor: "azure",
    width: "100%",
  },
  view2: {
    height: "88%",
    backgroundColor: "black",
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingVertical: 15,
  },
  input: {
    width: 250,
    height: 35,
    borderBottomColor: "deepskyblue",
    borderBottomWidth: 3,
    color: "gray",
    fontSize: 20,
  },
  button: {
    height: 35,
    width: 90,
    paddingVertical: 7,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: "deepskyblue",
  },
  buttonText: {
    fontSize: 16,
    textAlign: "center",
  },
  task: {
    width: 200,
    backgroundColor: "azure",
    padding: 10,
    backgroundColor: "mediumpurple",
    borderRadius: 6,
    borderColor: "#000",
    borderBottomWidth: 3,
    borderRightWidth: 3,
    marginBottom: 15,
  },
  taskText: {
    fontSize: 20,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonDone: {
    backgroundColor: 'green',
    marginRight: 10,
  },
  buttonNotYet: {
    backgroundColor: 'red',
    marginRight: 10,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  }, */
});

export default MainScreen;
