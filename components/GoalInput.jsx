import { StyleSheet, View, TextInput, Button, Modal } from 'react-native';

export default function GoalInput({ endGoalHandler , visible, enteredGoalText, goalInputHandler, addGoalHandler }) {
    return (
        <Modal visible={visible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput value={enteredGoalText} style={styles.textInput} placeholder='Your course goal!' onChangeText={goalInputHandler} />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title='Add Goal' onPress={() => {
                            addGoalHandler()
                            endGoalHandler();
                            }} />
                    </View>
                    <View style={styles.button}>
                        <Button onPress={endGoalHandler} title='Cancel' />
                    </View>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 24,
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc'
      },
      textInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '100%',
        padding: 8,
      },
      buttonContainer: {
        flexDirection: 'row',
      },
      button: {
        width: 100,
        marginHorizontal: 8,
        marginTop: 16,
      }
})
