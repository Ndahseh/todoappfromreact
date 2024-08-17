import { StyleSheet, View, Text, Pressable,} from "react-native";

function goalItem(props) {
    return (
          <View style={styles.goalItem }> 
            <Pressable 
            android_ripple={{color: '#dddddd', }}
            onPress={props.onDeleteItem.bind(this, props.id)}
            style={({pressed}) => pressed && styles.pressedItem}
            >

              <Text Style={styles.goalText}>{props.text} </Text>
            </Pressable>
          </View>
      );
}

export default goalItem;

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        padding: 8,
        borderRadius: 6,
        color: 'white',
        backgroundColor: 'steelblue',
      },

      pressedItem: {
        opacity: 0.5,
      },

      goalText: {
        color: '#fff',
        padding: 8,
      }
})