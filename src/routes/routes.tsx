import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

export default function Routes () {
  const Stack = createStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name='Home' component={}></Stack.Screen> */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}