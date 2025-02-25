import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    // Add your login logic here
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.logo}>Bond</Text>
      </View>
      <Text style={styles.title}>Log In Now</Text>
      <Text style={styles.subtitle}>Please login to continue using our app</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPassword}
        />

      </View>
      <TouchableOpacity style={styles.forgotPassword}>
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Log In</Text>
      </TouchableOpacity>
      <Text style={styles.signUpText}>
        Don't have an account? <Text style={styles.signUpLink}>Sign Up</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#ff6f61',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 20,
    color: '#666',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    borderRadius: 4,
 
  },
  forgotPassword: {
    alignItems: 'center',
    marginBottom: 20,
  },
  forgotPasswordText: {
    color: '#ff6f61',
  },
  loginButton: {
    backgroundColor: '#ff6f61',
    paddingVertical: 10,
    borderRadius: 4,
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  signUpText: {
    textAlign: 'center',
    marginTop: 20,
    color: '#666',
  },
  signUpLink: {
    color: '#ff6f61',
    fontWeight: 'bold',
  },
});

export default LoginScreen;
