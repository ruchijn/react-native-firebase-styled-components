import React from 'react'
import { connect } from 'react-redux'
import { View } from 'react-native'
import TopNavigation from '../common/TopNavigation'
import { AppView, SiteText } from '../styles'

const HomeScreen = ({ navigation, theme, user }) => (
    <AppView>
        <TopNavigation { ...{ navigation, user, theme } } />
        <View><SiteText>Welcome {user.fullName}</SiteText></View>
    </AppView>
)


const mapStateToProps = ({ user }) => ({
    user
})

export default connect(mapStateToProps)(HomeScreen)
