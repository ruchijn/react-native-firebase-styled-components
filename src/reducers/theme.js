import { Appearance } from 'react-native'
import { themes } from '../styles/themes'
import { SWITCH_THEME } from '../actions/theme'

const colorScheme = Appearance.getColorScheme()

const initialState = {...themes[colorScheme] }

const themeReducer = (state = initialState, { type, theme }) => {
  switch (type) {
    case SWITCH_THEME:
      return { ...theme }
    default:
      return state
  }
}

export default themeReducer
