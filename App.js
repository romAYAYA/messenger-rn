import 'react-native-gesture-handler'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'

import { StyleSheet, Text, View } from 'react-native'

const Stack = createStackNavigator()

const globalScreenOptions = {
  headerStyle: { backgroundColor: '#67437F' },
  headerTitleStyle: { color: 'white' },
  headerTintColor: 'white',
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={globalScreenOptions}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})