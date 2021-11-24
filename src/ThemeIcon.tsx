import React from "react";

interface ThemeIconProps {
    isLight: boolean
}

export const ThemeIcon = () => {
    const [isLightTheme, setIsLightTheme] = React.useState(false);

    React.useEffect(() => {
        const isDarkThemeApplied = document.documentElement?.classList.contains("dark")
        console.log(document.documentElement?.classList.contains("dark"))
        setIsLightTheme(!isDarkThemeApplied)
    }, [isLightTheme])

    const toggleTheme = () => {
        // do the opposite logic as we're about to switch the state
        if (isLightTheme) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }

        setIsLightTheme(isLightTheme => !isLightTheme)
    }

    return (
        <button onClick={() => toggleTheme()}>
            {isLightTheme ?
            (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
            )
            :
            (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
            )}
        </button>
    )
}