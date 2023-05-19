import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function App() {
  return (
    <View className='flex-1 bg-white' style={{backgroundColor: '#77685F' }}>
      <SafeAreaView className='flex-1'>
        <View>
          <Text>Bon Apetit!</Text>
        </View>
      </SafeAreaView>


      <View className='flex-row bg-white px-8 pt-8' 
      style={{borderTopLeftRadius: 50, borderTopRightRadius: 50}}>

      </View>
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#77685F',
//     alignItems: 'center',
//     justifyContent: 'center',
//   }, 
  
//   flexContainer: {
//     flex: 1,
//     width: 200,
//     height: 200
//   },

// });
