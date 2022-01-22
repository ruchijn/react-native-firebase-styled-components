import React from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';

const HomeScreen = ({navigation}) => {
    const onFooterLinkPress = (pageName) => {
        navigation.navigate({ name: pageName })
    }

    return (
        <View style={styles.container}>
            <KeyboardAwareScrollView
                style={{ flex: 1, width: '100%' }}
                keyboardShouldPersistTaps="always">
                <Image
                    style={styles.logo}
                    source={require('../../../assets/logo.png')}
                />
                <Text>This is home screen</Text>
                <View style={styles.footerView}>
                    <Text style={styles.footerText}>Already registered with us?</Text>
                    <Text><Text onPress={() => onFooterLinkPress('Login')} style={styles.footerLink}>Click here</Text> to login</Text>
                    <Text style={styles.footerText}>Don't have an account? <Text onPress={() => onFooterLinkPress('Registration')} style={styles.footerLink}>Register here</Text></Text>
                </View>
            </KeyboardAwareScrollView>
        </View>
    )
}

export default HomeScreen;
