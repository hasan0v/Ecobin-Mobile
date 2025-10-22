import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

let RootNavigator: any = null;

try {
  RootNavigator = require('@navigation/RootNavigator').default;
} catch (e) {
  console.error('Failed to load RootNavigator:', e);
}

export default function App() {
  if (!RootNavigator) {
    return (
      <GestureHandlerRootView style={{ flex: 1 }}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#4CAF50' }}>
          <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold', textAlign: 'center' }}>
            🌱 EcoBin
          </Text>
          <Text style={{ fontSize: 14, color: 'white', marginTop: 20, textAlign: 'center', paddingHorizontal: 20 }}>
            Initializing app...
          </Text>
        </View>
      </GestureHandlerRootView>
    );
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <RootNavigator />
    </GestureHandlerRootView>
  );
}
