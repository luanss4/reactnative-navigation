import { View, Button } from 'react-native'
import React, { Component } from 'react'
import { useNavigation } from '@react-navigation/native'

export function ScreenA(){
    const navigation = useNavigation();

    function openScreen() {
        navigation.navigate('screenB', { name: 'Luan Santana' });
    }

    return (
        <View style={{flex: 1, backgroundColor: 'red', justifyContent: 'center'}}>
          <Button
              title='Ir para tela B' 
              onPress={openScreen}
          />
      
        </View>
      )
}
