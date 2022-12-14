import React, {useState} from 'react';
import { KeyboardAvoidingView, StyleSheet, View, TextInput, TouchableOpacity, } from "react-native";
import { MaterialIcons } from '@expo/vector-icons'; 


export default TaskInputField = (props) => {
    const [task, setTask] = useState();
    const [summary, setSummary] = useState();
    const [time, setTime] = useState();

    const handleAddTask = (value) => {
        props.addTask(value);
        setTask(null);
    }

    const handleBuildTask = ({summary, time}) => {
        props.buildTask({summary, time})
        setSummary(null);
        setTime(null);
    }

    return (
        <KeyboardAvoidingView 
        behavior={Platform.OS === "android" ? "padding" : "height"}
        style={styles.container}
      >
        <TextInput style={styles.inputField} value={summary} onChangeText={text => setSummary(text)} placeholder={'Write a task'} placeholderTextColor={'#fff'}/>
        <TextInput keyboardType='numeric' style={styles.numericField} value={time} onChangeText={time => setTime(time)} placeholder={'est. time'} placeholderTextColor={'#fff'}/>
        <TouchableOpacity onPress={() => handleBuildTask({summary, time})}>
          <View style={styles.button}>
              <MaterialIcons name="keyboard-arrow-up" size={24} color="black" />
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        borderColor: '#fff',
        backgroundColor: '#3E3364',
        borderWidth: 1,
        marginHorizontal: 20,
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        position: 'absolute',
        bottom: 20,
    },
    inputField: {
        color: '#fff',
        height: 50,
        flex: 1,
    },
    numericField: {
        color: '#fff',
        height: 50,
        flex: 1,
    },
    button: {
        height: 30,
        width: 30,
        borderRadius: 5,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
});