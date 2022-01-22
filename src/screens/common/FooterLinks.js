import React from 'react'
import { Text, View } from 'react-native'
import styles from '../styles'

const FooterLinks = ({ showLogin, navigation}) => {
    const onFooterLinkPress = (pageName) => {
        navigation.navigate(pageName)
    }

    return (
        <View style={styles.footerView}>
            {showLogin ? (
                <>
                    <Text style={styles.footerText}>Already registered with us?</Text>
                    <Text><Text onPress={() => onFooterLinkPress('Login')} style={styles.footerLink}>Click here</Text> to login</Text>
                </>
            ) : (
                <Text style={styles.footerText}>Don't have an account? <Text onPress={() => onFooterLinkPress('Registration')} style={styles.footerLink}>Register here</Text></Text>
            )}
        </View>
    )
}

export default FooterLinks

