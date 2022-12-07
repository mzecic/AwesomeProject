import { StyleSheet, View, TextInput, Button } from 'react-native';

export default function GoalInput({ enteredGoalText, goalInputHandler, addGoalHandler }) {
    return (
        <View style={styles.inputContainer}>
            <TextInput value={enteredGoalText} style={styles.textInput} placeholder='Your course goal!' onChangeText={goalInputHandler} />
            <Button title='Add Goal' onPress={addGoalHandler} />
        </View>
      );
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc'
      },
      textInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '70%',
        marginRight: 8,
        padding: 8,
      }
})
