import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Keyboard, StyleSheet, Text, View, SafeAreaView, TouchableOpacity, ScrollView, FlatList, Animated } from 'react-native';
import TaskInputField from './components/TaskInputField';
import TaskItem from './components/TaskItem';
import { MaterialIcons } from '@expo/vector-icons';

// const DATA = [
//   {
//     id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
//     title: 'First Item',
//   },
//   {
//     id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
//     title: 'Second Item',
//   },
//   {
//     id: '58694a0f-3da1-471f-bd96-145571e29d72',
//     title: 'Third Item',
//   },
// ];

const DATA = [
 {
  id: 0,
  tag: "recurring",
  summary: "Go for a run",
  detail: "Go for a run you fat fuck",
  time_estimated: 45*60, // in seconds
  priority: 0,
  },
   {
  id: 1,
  tag: "",
  summary: "Fix ongoing alerts",
  detail: "Stupid alerts going off, fix it bro",
  time_estimated: 60*60, // in seconds
  priority: 1,
  },
   {
  id: 2,
  tag: "",
  summary: "Take a shit",
  detail: "Empty your bowl booboo",
  time_estimated: 120*60, // in seconds
  priority: 1,
  },
]

const Item = ({ id, tag, summary, detail, time_estimated, priority, deleteTask }) => (
  // console.log(id),
  <View style={styles.container_2}>
    <View style={styles.indexContainer}>
      <Text style={styles.index}>{id+1}</Text>
    </View>
    <View style={styles.taskContainer}>
      <Text style={styles.task}>{summary}</Text>
      <Text style={styles.time_estimated}>{time_estimated}</Text>
      <TouchableOpacity onPress={() => deleteTask()}>
        <MaterialIcons style={styles.delete} name="delete" size={18} color='#fff'/>
      </TouchableOpacity>
    </View>
  </View>
)

export default function App() {
  const [tasks, setTasks] = useState(DATA);
  
  const addTask = (task) => {
    if (task == null) return;
    setTasks([...tasks, task]);
    Keyboard.dismiss();
  }

  const renderDummy = ({ item }) => (
    console.log(item.id),
    <Item id={item.id} 
    tag={item.tag} 
    summary={item.summary} 
    detail={item.detail} 
    time_estimated={item.time_estimated} 
    priority={item.priority} 
    deleteTask={() => deleteTask(item.id)}
    />
  );

  const renderItem = ({ task, index }) => (
    <TaskItem index={index + 1} task={task} deleteTask={() => deleteTask(index)}/>
  );

  const deleteTask = (deleteIndex) => {
    setTasks(tasks.filter((value, id) => id != deleteIndex));
  }

    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.heading}>To-Do List</Text>
                <View style={styles.taskContainer}>
                  <FlatList
                  {...console.log(tasks)}
                  data={tasks}
                  renderItem={renderDummy}
                  keyExtractor={item => item.id}
                  />
                </View>
        <TaskInputField addTask={addTask}/>
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1A3C',
  },
  container_2: {
    flexDirection: 'row',
    marginHorizontal: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    marginHorizontal: 20,
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
    backgroundColor: '#3E3364',
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,
    minHeight: 50,
},
  indexContainer: {
    backgroundColor: '#3E3364',
    borderRadius: 12,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center', 
    width: 50,
    height: 50,
  },
  timeContainer: {
    marginTop: 20,
    alignItems: 'flex-end',
  },
  index: {
    color: '#fff',
    fontSize: 20,
  },
  task: {
    color: '#fff',
    width: '90%',
    fontSize: 16,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8, 
    marginHorizontal: 16,
  },
  time_estimated: {
    color: '#fff'
  },
  title: {
    fontSize: 32,
  },
  delete: {
    marginLeft: 10,
  },
});
