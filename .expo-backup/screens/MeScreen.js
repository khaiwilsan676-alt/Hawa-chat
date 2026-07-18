import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function MeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Me</Text>
      <Text style={{ marginBottom: 16 }}>Profile details go here.</Text>
      <TouchableOpacity style={styles.button} onPress={() => alert('Sign out placeholder')}>
        <Text style={styles.buttonText}>Sign out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, alignItems:'center', justifyContent:'center', padding:20 },
  title: { fontSize:22, fontWeight:'700', marginBottom:8 },
  button: { backgroundColor:'#ff3b30', padding:12, borderRadius:8 },
  buttonText: { color:'#fff', fontWeight:'600' }
});
