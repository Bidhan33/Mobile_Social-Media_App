import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  SafeAreaView, 
  TextInput,
  Pressable,
  StatusBar,
  Alert
} from 'react-native';
import { useRouter } from 'expo-router';
import Button from '../components/Button';
import { hp, wp } from '../Helper/common';

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    
    if (!email || !password) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }
   
    console.log('Login attempt:', { email, password });
  };

  const handleForgotPassword = () => {
    
    Alert.alert('Reset Password', 'Password reset functionality coming soon');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
      <View style={styles.container}>
        <Text style={styles.title}>Welcome Back!</Text>
        <Text style={styles.subtitle}>Login to continue your journey</Text>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <Pressable onPress={handleForgotPassword}>
            <Text style={styles.forgotPassword}>Forgot Password?</Text>
          </Pressable>
        </View>

        <Button
          title="Login"
          buttonstyle={styles.loginButton}
          titleStyles={styles.loginButtonText}
          onPress={handleLogin}
        />

        <View style={styles.footer}>
          <Text style={styles.footerText}>Don't have an account?</Text>
          <Pressable onPress={() => router.push('signUp')}>
            <Text style={styles.signupButton}>Sign Up</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    paddingHorizontal: wp(6),
    paddingTop: hp(10),
  },
  title: {
    fontSize: wp(8),
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: hp(2),
  },
  subtitle: {
    fontSize: wp(4),
    color: '#666',
    textAlign: 'center',
    marginBottom: hp(6),
  },
  inputContainer: {
    gap: hp(2),
    marginBottom: hp(4),
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: wp(2),
    padding: wp(4),
    fontSize: wp(4),
    backgroundColor: '#f8f8f8',
  },
  forgotPassword: {
    color: '#007AFF',
    textAlign: 'right',
    fontSize: wp(3.5),
    marginTop: hp(1),
  },
  loginButton: {
    backgroundColor: '#FFD700', 
    marginHorizontal: wp(4),
    marginTop: hp(2),
  },
  loginButtonText: {
    color: '#333',
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp(4),
    gap: wp(2),
  },
  footerText: {
    color: '#666',
    fontSize: wp(4),
  },
  signupButton: {
    color: '#007AFF',
    fontWeight: 'bold',
    fontSize: wp(4),
  },
});

export default Login;