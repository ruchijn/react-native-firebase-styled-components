import 'react-native-gesture-handler'
import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import ThemeWrapper from './src/screens/common/ThemeWrapper'
import reducers from './src/reducers'
import { firebase } from './src/firebase/config'
import { LoginScreen, HomeScreen, RegistrationScreen } from './src/screens'
import {decode, encode} from 'base-64'
if (!global.btoa) {  global.btoa = encode }
if (!global.atob) { global.atob = decode }

const Stack = createStackNavigator()

const store = createStore(
  reducers,
  applyMiddleware(thunk)
)

const App = () => {
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    const usersRef = firebase.firestore().collection('users')
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        usersRef
          .doc(user.uid)
          .get()
          .then((document) => {
            const userData = document.data()
            setLoading(false)
            setUser(userData)
          })
          .catch((error) => {
            setError(error)
            setLoading(false)
          })
      } else {
        setLoading(false)
      }
    })
  }, [])

  if (loading) return <Text>Loading...</Text>

  if(error) return <Text>{error}</Text>

  return (
    <NavigationContainer>
      <Provider store={store}>
        <ThemeWrapper>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            {user && (
                <Stack.Screen name="Home1">
                  {props => <HomeScreen {...props} extraData={user} />}
                </Stack.Screen>
            )}
              <Stack.Screen name="Login" component={LoginScreen} />
              <Stack.Screen name="Registration" component={RegistrationScreen} />
          </Stack.Navigator>
        </ThemeWrapper>
      </Provider>
    </NavigationContainer>
  )
}

export default App
