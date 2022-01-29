import React, { useState } from 'react'
import { TouchableOpacity, View } from 'react-native'
import { firebase } from '../../firebase/config'
import { SiteText } from '../styles'
import { StyledImage, StyledTouchableOpacity } from './styles'

const TopNavigation = ({ theme, navigation, user }) => {
    const [showProfileMenu, setShowProfileMenu] = useState(false)
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
                <StyledTouchableOpacity
                    theme={theme}
                    width={40}
                    onPress={() => setShowProfileMenu(!showProfileMenu)}
                >
                    <StyledImage
                        source={require('../../../assets/avatar.png')}
                    />
                </StyledTouchableOpacity>
                {showProfileMenu && <SiteText theme={theme}>Logout</SiteText>}
            </TouchableOpacity>
        </View>
    )
}

export default TopNavigation
