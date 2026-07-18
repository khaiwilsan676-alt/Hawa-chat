import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const MOCK = [
  { id: '1', name: 'Alice', last: 'Hey, how are you?' },
  { id: '2', name: 'Bob', last: "Let's meet tomorrow." },
  { id: '3', name: 'Charlie', last: 'Cool!' },
];

export default function MessagesScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Messages</Text>
      <FlatList
        data={MOCK}
        keyExtractor={(i) => i.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.row} onPress={() => alert('Open chat with ' + item.name)}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.last}>{item.last}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, padding:16, backgroundColor:'#fff' },
  title: { fontSize:22, fontWeight:'700', marginBottom:12 },
  row: { paddingVertical:12, borderBottomWidth:1, borderBottomColor:'#eee' },
  name: { fontSize:16, fontWeight:'600' },
  last: { color:'#666' }
});
