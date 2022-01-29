import React, { useState } from 'react'
import { connect, useDispatch } from 'react-redux'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { setUser } from '../../actions/user'
import FooterLinks from '../common/FooterLinks'
import { firebase } from '../../firebase/config'
import { AppView, TextInput, TouchableOpacityButton, TouchableOpacityButtonText, LogoImage } from '../styles'

const LoginScreen = ({ navigation, theme }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()

    const onLoginPress = () => {
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then((response) => {
                const uid = response.user.uid
                const usersRef = firebase.firestore().collection('users')
                usersRef
                    .doc(uid)
                    .get()
                    .then(firestoreDocument => {
                        if (!firestoreDocument.exists) {
                            alert("User does not exist anymore.")
                            return
                        }
                        const user = firestoreDocument.data()
                        dispatch(setUser(user))
                        setTimeout(() => {
                            navigation.navigate('Home1', {user})
                        }, 1000)
                    })
                    .catch(error => {
                        alert(error)
                    })
            })
            .catch(error => {
                alert(error)
            })
    }

    return (
        <AppView>
            <KeyboardAwareScrollView
                style={{ flex: 1, width: '100%' }}
                keyboardShouldPersistTaps="always">
                <LogoImage
                    source={require('../../../assets/logo.png')}
                />
                <TextInput
                    theme={theme}
                    placeholder='E-mail'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TextInput
                    theme={theme}
                    placeholderTextColor="#aaaaaa"
                    secureTextEntry
                    placeholder='Password'
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TouchableOpacityButton
                    onPress={() => onLoginPress()}>
                    <TouchableOpacityButtonText>Log in</TouchableOpacityButtonText>
                </TouchableOpacityButton>
                <FooterLinks navigation={navigation} showLogin={false} theme={theme} />
            </KeyboardAwareScrollView>
        </AppView>
    )
}


const mapStateToProps = ({ theme }) => ({
    theme
})

export default connect(mapStateToProps)(LoginScreen)
