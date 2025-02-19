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
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';
import Button from '../components/Button';
import { hp, wp } from '../Helper/common';

const SignUp = () => {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = () => {
    if (!username || !email || !password || !confirmPassword) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }
    console.log('Signup attempt:', { username, email, password });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
      <View style={styles.container}>
        <Text style={styles.title}>Create Account</Text>
        <Text style={styles.subtitle}>Join ChalkTalk and start sharing!</Text>

        <View style={styles.inputContainer}>
          <View style={styles.inputWrapper}>
            <FontAwesome name="user" size={20} color="#888" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Username"
              value={username}
              onChangeText={setUsername}
              autoCapitalize="none"
            />
          </View>
          <View style={styles.inputWrapper}>
            <MaterialIcons name="email" size={20} color="#888" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>
          <View style={styles.inputWrapper}>
            <MaterialIcons name="lock" size={20} color="#888" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
          </View>
          <View style={styles.inputWrapper}>
            <MaterialIcons name="lock-outline" size={20} color="#888" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Confirm Password"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry
            />
          </View>
        </View>

        <Button
          title="Sign Up"
          buttonstyle={styles.signupButton}
          titleStyles={styles.signupButtonText}
          onPress={handleSignUp}
        />

        <View style={styles.footer}>
          <Text style={styles.footerText}>Already have an account?</Text>
          <Pressable onPress={() => router.push('login')}>
            <Text style={styles.loginButton}>Login</Text>
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
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: wp(2),
    backgroundColor: '#f8f8f8',
    paddingHorizontal: wp(3),
  },
  icon: {
    marginRight: wp(2),
  },
  input: {
    flex: 1,
    padding: wp(3),
    fontSize: wp(4),
  },
  signupButton: {
    backgroundColor: '#FFD700', 
    marginHorizontal: wp(4),
    marginTop: hp(2),
  },
  signupButtonText: {
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
  loginButton: {
    color: '#007AFF',
    fontWeight: 'bold',
    fontSize: wp(4),
  },
});

export default SignUp;
