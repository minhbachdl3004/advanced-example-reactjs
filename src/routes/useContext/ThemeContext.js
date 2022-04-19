import { useState, createContext } from 'react'
import Content from './Content'

export const ThemeContext = createContext()


function ToggleTheme() {
    const [theme, setTheme] = useState('dark')

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }


    return (
        <ThemeContext.Provider value={theme}>
            <div style={{ padding: 20 }}>
                <button className='btn' onClick={toggleTheme}>Toggle</button>
                <Content />
            </div>
        </ThemeContext.Provider>
    )
}

export default ToggleTheme;