import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Modal,
  Image,
  TouchableWithoutFeedback,
} from "react-native";

export default function GoalInput({
  endGoalHandler,
  visible,
  enteredGoalText,
  goalInputHandler,
  addGoalHandler,
}) {
  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/goal.png")}
        />
        <TextInput
          value={enteredGoalText}
          style={styles.textInput}
          placeholder="Your course goal!"
          placeholderTextColor="grey"
          onChangeText={goalInputHandler}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              color="#b180f0"
              title="Add Goal"
              onPress={() => {
                addGoalHandler();
                endGoalHandler();
              }}
            />
          </View>
          <View style={styles.button}>
            <Button color="#f31282" onPress={endGoalHandler} title="Cancel" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#311b6b",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    borderRadius: 6,
    backgroundColor: "white",
    width: "100%",
    padding: 16,
  },
  buttonContainer: {
    flexDirection: "row",
  },
  button: {
    width: 100,
    marginHorizontal: 8,
    marginTop: 16,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});
