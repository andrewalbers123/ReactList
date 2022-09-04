import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Keyboard, StyleSheet, Text, View, ScrollView, Animated } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler/Swipeable'; 
import TaskInputField from './components/TaskInputField';
import TaskItem from './components/TaskItem';

export default function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    if (task == null) return;
    setTasks([...tasks, task]);
    Keyboard.dismiss();
  }

  const deleteTask = (deleteIndex) => {
    setTasks(tasks.filter((value, index) => index != deleteIndex));
  }

  // const renderRightActions = (
  //   progress: Animated.AnimatedInterpolation,
  //   dragAnimatedValue: Animated.AnimatedInterpolation,
  // ) => {
  //   const opacity = dragAnimatedValue.interpolate({
  //     inputRange: [-150,  0],
  //     outputRange: [1, 0],
  //     extrapolate: 'clamp',
  //   });
  //   return (
  //     <View style={styles.swipedRow}>
  //       <View style={styles.swipedConfirmationContaienr}>
  //         <Text style={styles.deleteConfirmationText}>Are you sure?</Text>
  //       </View>
  //     </View>
  //   )
  // } 

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>To-Do List</Text>
      <ScrollView style={styles.scrollView}>
        {
          tasks.map((task, index) => {
          return (
            <Swipeable renderRightActions={renderRightActions}>
              <View key={index} style={styles.taskContainer}>
                <TaskItem index={index + 1} task={task} deleteTask={() => deleteTask(index)}/>
              </View>
            </Swipeable>

          );
          })
        }
      </ScrollView>
      <TaskInputField addTask={addTask}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1A3C',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  heading: {
    color: "#fff",
    fontSize: 20,
    fontWeight: '600',
    marginTop: 30,
    marginBottom: 10,
    marginLeft: 20,
  },
  taskContainer: {
    marginTop: 20,
  }
});
