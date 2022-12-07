import { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  };

  function addGoalHandler() {
    setCourseGoals(currentCourseGoals => [...currentCourseGoals, { text: enteredGoalText, key: Math.random().toString()}]);
    setEnteredGoalText('');
  };

  function deleteGoalHandler(key) {
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter((goal) => goal.key !== key)

    });
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput enteredGoalText={enteredGoalText} goalInputHandler={goalInputHandler} addGoalHandler={addGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList data={courseGoals} renderItem={itemData => {
          return <GoalItem deleteGoalHandler={deleteGoalHandler} itemData={itemData} />
        }} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5,
  }
});
