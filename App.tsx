import {
  useFonts,
  NunitoSans_400Regular,
  NunitoSans_600SemiBold,
  NunitoSans_700Bold,
  NunitoSans_800ExtraBold,
} from '@expo-google-fonts/nunito-sans'
import { ThemeProvider } from 'styled-components'
import { SafeAreaView, StatusBar } from 'react-native'
import { light, dark } from '@theme/index'
import Routes from '@routes/routes'
import * as NavigationBar from 'expo-navigation-bar'
import Login from '@screens/Login'
import { Home } from '@screens/Home'

export default function App() {
  const [Fonts] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_600SemiBold,
    NunitoSans_700Bold,
    NunitoSans_800ExtraBold,
  })

  if (!Fonts) {
    return null
  }

  return (
    <ThemeProvider
      theme={() => {
        //? Navbar background colour
        if (light) {
          return NavigationBar.setBackgroundColorAsync('transparent')
        } else if (dark) {
          return null
        }
      }}
    >
      {!Fonts ? (
        <SafeAreaView style={{ flex: 1 }}>
          <StatusBar backgroundColor="dark" animated />
          <Routes />
        </SafeAreaView>
      ) : (
        <Login />
      )}
    </ThemeProvider>
  )
}
