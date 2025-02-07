import React from 'react';
import { View, Image, Dimensions, StyleSheet, StatusBar, SafeAreaView, Platform, Text, Pressable } from 'react-native';
import ScreenWrapper from '../components/ScreenWrapper';
import Button from '../components/Button';

import { hp, wp } from './../Helper/common';

const { width, height } = Dimensions.get("window");

const Welcome = () => {
    return (
        <ScreenWrapper bg="white">
            <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.container}>
                    <Image 
                        style={styles.image} 
                        resizeMode="cover" 
                        source={require('../assets/images/Welcome.jpg')} 
                    />
                 <View style={{gap: 15}}>
                    <Text style={styles.title}>LinkUp</Text>
                    <Text style={styles.desc}>
                    Confess, troll, and stay anonymous Dare to speak?
                    </Text>
                 </View>

                <View style={styles.footer}>
                    <Button
                        title="Sign Up"
                        buttonstyle={{ marginHorizontal: wp(4) }}
                        titleStyles={{ color: 'black' }}
                        onPress = {()=>{}}
                    />
                    <View style={styles.bottomTextConatainer}/>
                    <Text style={styles.loginText}>Already have an account?</Text>
                    <Pressable>
                        <Text style={styles.loginButton}>Login</Text>
                    </Pressable>
                    </View>



                </View>
            </SafeAreaView>
        </ScreenWrapper>
    );
};

export default Welcome;

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: 'white',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: wp(6),
    },
    image: {
        width: width,
        height: height + (Platform.OS === "android" ? StatusBar.currentHeight || 0 : 0), 
        position: "absolute",
    },
    title: {
        fontSize: wp(8),
        marginTop: 180,
        marginLeft: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#333',
    },
    desc: {
        fontSize: wp(4.44),
        textAlign: 'center',
        color: '#444',
        paddingHorizontal: wp(5),
        fontWeight: '500',
    },
    footer: {
        position: 'absolute',
        bottom: hp(5),
        width: '100%',
        alignItems: 'center',
    },
    loginText: {
        fontSize: wp(4),
        textAlign: 'center',
        color: '#666',
        marginTop: hp(2),
    },
    loginButton: {
        fontSize: wp(4.5),
        color: '#007AFF',
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: hp(1),
    },
});