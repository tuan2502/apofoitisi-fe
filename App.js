import { StatusBar } from "expo-status-bar"
import { StyleSheet, useColorScheme } from "react-native"
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer
} from "@react-navigation/native"
import { useCallback, useMemo } from "react"
import "react-native-gesture-handler"
import { GestureHandlerRootView } from "react-native-gesture-handler"
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet"
import { SafeAreaProvider } from "react-native-safe-area-context"
import RootNavigator from "navigators/RootNavigator"
import { useFonts } from "expo-font"
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const colorScheme = useColorScheme()


  const theme = useMemo(
    () =>
      colorScheme === "dark"
        ? {
            ...DarkTheme,
            colors: {
              ...DarkTheme.colors,
              primary: "#fff",
              text: "#fff"
            }
          }
        : {
            ...DefaultTheme,
            colors: {
              ...DefaultTheme.colors,
              background: "#f5f5f5",
              text: "#191919",
              border: "#D9D9D9",
              primary: "#191919"
            }
          },
    [colorScheme]
  )


  const [fontsLoaded] = useFonts({
    'Montserrat': require("/assets/fonts/Montserrat-Regular.ttf"),
    'Montserrat-Bold': require("/assets/fonts/Montserrat-Bold.ttf"),
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <GestureHandlerRootView style={styles.container}>
        <NavigationContainer theme={theme}>
          <BottomSheetModalProvider>
            <RootNavigator />
          </BottomSheetModalProvider>
          <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
        </NavigationContainer>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
