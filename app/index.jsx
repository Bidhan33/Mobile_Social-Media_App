import { View, Text, Button } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';

const index = () => {
    const router = useRouter();
    
    return (
        <View>
            <Text>Hello World</Text>
            <Button 
                title="Go to Welcome" 
                onPress={() => router.push('welcome')} 
            />
        </View>
    );
};

export default index;
