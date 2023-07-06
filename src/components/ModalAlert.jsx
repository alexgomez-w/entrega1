
import { StyleSheet, Text, View, Pressable, Modal } from "react-native";
import React from "react";

const ModalAlert = ({
  modalAlertVisible,
  setModalAlertVisible
}) => {
  //convertir en un elemento presionable para los elemntos de la lista
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalAlertVisible}
      onRequestClose={() => {
        setModalAlertVisible(!modalAlertVisible);
      }}>
      <View style={styles.centeredView}>
      
        <View style={styles.modalView}>
         
          <Pressable
              style={[styles.cornerButton]}
              onPress={() =>{ setModalAlertVisible(!modalAlertVisible)}}>
              <Text >X</Text>
            </Pressable>


          <Text style={styles.modalText}>NO ESTÁ PERMITIDO AÑADIR UNA TAREA VACÍA. POR FAVOR INTENTE NUEVAMENTE</Text>

          <View style={styles.buttonContainer}>

           

          <Pressable
              style={[styles.cornerButton]}
              onPress={() =>{ setModalAlertVisible(!modalAlertVisible)}}>
              <Text style={styles.textStyle}>close</Text>
            </Pressable>
          </View>

        </View>
      </View>
    </Modal>
  )
};


const styles = StyleSheet.create({
  centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22,
  },
  modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
          width: 0,
          height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
  },
  buttonContainer: {
      flexDirection: "row",
      alignItems: "center",
  },
  button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
  },
  buttonOpen: {
      backgroundColor: "#F194FF",
  },
  buttonDone: {
      backgroundColor: "green",
  },
  buttonNotyet: {
      backgroundColor: "seashell"
  },
  buttonClose: {
    backgroundColor: "red",
  },
  textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center",
  },
  modalText: {
      marginBottom: 15,
      textAlign: "center",
  },
  cornerButton: {
    position: 'absolute',
    top: 0,
    right: 0,
    borderRadius: 50,
    width: 30,
    height: 30
  }
});


export default ModalAlert;