import { StyleSheet, View, Text, Pressable } from 'react-native';


export default function GoalItem({ itemData, deleteGoalHandler }) {
    return(
        <Pressable onPress={deleteGoalHandler.bind(this, itemData.item.key)}>
            <View style={styles.goalItem}>
                <Text style={styles.goalText}>{itemData.item.text}</Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        padding: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
    },
    goalText: {
    color: 'white',
    }
})
