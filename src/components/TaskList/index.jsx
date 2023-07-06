import { StyleSheet, View, FlatList } from "react-native";
import React from "react";
import RenderItemTask from "./RenderItemTask";

const TaskList = ({
  list,
  onPressTask,
})=> {

  return (
    <View style={styles.view2}>
    <FlatList
      data={list}
      keyExtractor={task => task.id}
      renderItem={({ item }) => RenderItemTask({item, onPressTask})} //item es el objeto que se pasa a la funcion renderItemTask
    />

  </View>
  )

}

const styles = StyleSheet.create({
  view2: {
      height: "88%",
      backgroundColor: "darkcyan",
      width: "100%",
      justifyContent: "flex-start",
      alignItems: "center",
      paddingVertical: 15,
  },
});

export default TaskList;
