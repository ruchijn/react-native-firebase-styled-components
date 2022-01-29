import { ThemeProvider } from 'styled-components/native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { switchTheme } from '../../actions/theme'
import { themes } from '../../styles/themes'
import { StyledImage, StyledTouchableOpacity, StyledView } from './styles'

const ThemeWrapper = ({ children, theme, switchTheme }) => {
    return (
        <ThemeProvider theme={theme}>
            {children}
            <StyledView theme={theme}>
                {theme.mode === 'light' ? (
                    <StyledTouchableOpacity
                        theme={theme}
                        width={10}
                        onPress={() => switchTheme(themes.dark)}>
                        <StyledImage
                            source={require('../../../assets/moon.png')}
                        />
                    </StyledTouchableOpacity>
                ) : (
                    <StyledTouchableOpacity
                        theme={theme}
                        width={10}
                        onPress={() => switchTheme(themes.light)}>
                        <StyledImage
                            source={require('../../../assets/sun.png')}
                        />
                    </StyledTouchableOpacity>
                )}
            </StyledView>
        </ThemeProvider>
      )
}

const mapStateToProps = ({ theme }) => ({
    theme
})
  
const mapDispatchToProps = dispatch => ({
    switchTheme: bindActionCreators(switchTheme, dispatch)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ThemeWrapper)