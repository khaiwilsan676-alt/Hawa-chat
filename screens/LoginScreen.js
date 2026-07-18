import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleLogin() {
    // Replace this with real auth logic
    if (username.trim()) {
      navigation.replace('Main');
    } else {
      alert('Please enter username');
    }
  }

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.select({ ios: 'padding', android: undefined })}>
      <View style={styles.card}>
        <Text style={styles.title}>Hawa Chat</Text>
        <TextInput style={styles.input} placeholder="Username" value={username} onChangeText={setUsername} />
        <TextInput style={styles.input} placeholder="Password" value={password} secureTextEntry onChangeText={setPassword} />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Log in</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f2f4f8' },
  card: { width: '90%', padding: 20, borderRadius: 12, backgroundColor: '#fff', elevation: 4 },
  title: { fontSize: 28, fontWeight: '700', marginBottom: 20, textAlign: 'center' },
  input: { borderWidth: 1, borderColor: '#ddd', padding: 12, borderRadius: 8, marginBottom: 12 },
  button: { backgroundColor: '#007AFF', padding: 14, borderRadius: 8, alignItems: 'center', marginTop: 6 },
  buttonText: { color: '#fff', fontWeight: '600' },
});
