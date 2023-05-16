import '../styles/global.css'
import Typography from "typography"
import grandviewTheme from "typography-theme-grand-view"

grandviewTheme.overrideStyles = () => ({
    a: {
      color: 'var(--textLink)',
    }
  })

const typography = new Typography(grandviewTheme)

export const { scale, rhythm, options } = typography
export default typography