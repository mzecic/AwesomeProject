import { StyleSheet, View, Text, Pressable } from 'react-native';


export default function GoalItem({ itemData, deleteGoalHandler }) {
    return(
        <View style={styles.goalItem}>
            <Pressable style={({ pressed }) => pressed && styles.pressedItem} android_ripple={{color: '#5e0acc'}} onPress={deleteGoalHandler.bind(this, itemData.item.key)}>
                <Text style={styles.goalText}>{itemData.item.text}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
    },
    goalText: {
        color: 'white',
        padding: 8,
    },
    pressedItem: {
        opacity: 0.5,
    }
})
