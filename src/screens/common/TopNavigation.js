import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { firebase } from '../../firebase/config'

const TopNavigation = ({navigation}) => {

    const onClickLogout = () => {
        firebase
            .auth()
            .signOut()
            .then(() => console.log('User signed out!'))
        
        navigation.navigate('Login')
    }

    return (
        <View>
            <TouchableOpacity onPress={onClickLogout}>
                <Text>Logout</Text>
            </TouchableOpacity>
        </View>
    )
}

export default TopNavigation
