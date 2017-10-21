import I18n from 'react-native-i18n'
import en from './languages/en.json'
import fr from './languages/fr.json'

I18n.fallbacks = true
I18n.translations = {
    en,
    fr
}
const TextManager = I18n
export default TextManager