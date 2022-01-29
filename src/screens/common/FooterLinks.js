import React from 'react'
import { FooterView, FooterText, FooterLink } from '../styles'

const FooterLinks = ({ showLogin, navigation, theme }) => {
    const onFooterLinkPress = (pageName) => {
        navigation.navigate(pageName)
    }

    return (
        <FooterView theme={theme}>
            {showLogin ? (
                <>
                    <FooterText theme={theme}>Already registered with us?</FooterText>
                    <FooterText theme={theme}><FooterLink onPress={() => onFooterLinkPress('Login')}>Click here</FooterLink> to login</FooterText>
                </>
            ) : (
                <FooterText theme={theme}>Don't have an account? <FooterLink onPress={() => onFooterLinkPress('Registration')}>Register here</FooterLink></FooterText>
            )}
        </FooterView>
    )
}

export default FooterLinks

