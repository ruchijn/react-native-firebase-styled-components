import React, { useState } from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import FooterLinks from '../common/FooterLinks'
import { firebase } from '../../firebase/config'
import { AppView, TextInput, TouchableOpacityButton, TouchableOpacityButtonText, LogoImage } from '../styles'

const RegistrationScreen = ({ navigation, theme }) => {
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const onRegisterPress = () => {
        if (password !== confirmPassword) {
            alert("Passwords don't match.")
            return
        }
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then((response) => {
                const uid = response.user.uid
                const data = {
                    id: uid,
                    email,
                    fullName,
                }
                const usersRef = firebase.firestore().collection('users')
                usersRef
                    .doc(uid)
                    .set(data)
                    .then(() => {
                        navigation.navigate('Home1', {user: data})
                    })
                    .catch((error) => {
                        alert(error)
                    })
            })
            .catch((error) => {
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
                    placeholder='Full Name'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setFullName(text)}
                    value={fullName}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
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
                <TextInput
                    theme={theme}
                    placeholderTextColor="#aaaaaa"
                    secureTextEntry
                    placeholder='Confirm Password'
                    onChangeText={(text) => setConfirmPassword(text)}
                    value={confirmPassword}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TouchableOpacityButton
                    onPress={() => onRegisterPress()}>
                    <TouchableOpacityButtonText>Create account</TouchableOpacityButtonText>
                </TouchableOpacityButton>
                <FooterLinks navigation={navigation} showLogin />
            </KeyboardAwareScrollView>
        </AppView>
    )
}

export default RegistrationScreen

