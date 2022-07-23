import React from 'react'
import { useRoute, useNavigation } from '@react-navigation/native'
import { Text, View, Button } from 'react-native'

type ParamsProps = {
  name: string;
}

export function ScreenB() {
    const route = useRoute();
    const { name } = route.params as ParamsProps;
    const navigation = useNavigation();
    return (
        <View style={{flex: 1, backgroundColor: 'blue', alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{fontSize: 24}}>{name}</Text>
          <Button title='Voltar' onPress={()=>navigation.goBack()}></Button>
      </View>
    )
}