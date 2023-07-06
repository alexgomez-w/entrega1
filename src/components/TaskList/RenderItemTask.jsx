

import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";

const RenderItemTask = ({ item, onPressTask }) => {
  //convertir en un elemento presionable para los elemntos de la lista
  return (
  <Pressable onPress={() => onPressTask(item) }>  
    <View style={[styles.task, item.completed ? styles.taskDone : null]} key={item.id}>
      <Text style={styles.taskText}>{item.task}</Text>
    </View>
  </Pressable>
  )
};


const styles = StyleSheet.create({
  task: {
      width: 200,
      padding: 10,
      backgroundColor: "seashell",
      borderRadius: 6,
      borderColor: "#000",
      borderBottomWidth: 3,
      borderRightWidth: 3,
      marginBottom: 15,
  },
  taskDone: {
      width: 200,
      padding: 10,
      backgroundColor: "green",
      borderRadius: 6,
      borderColor: "#000",
      borderBottomWidth: 3,
      borderRightWidth: 3,
      marginBottom: 15
    },
  taskText: {
      fontSize: 20,
  },
})

export default RenderItemTask;