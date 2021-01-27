export const THEMES = {
    LIGHT: 'light',
    DARK: 'dark'
};

const resourceDictionary = {
    [THEMES.LIGHT]: {
        '--ss-accent': '33, 42, 61',
        '--ss-bg': '243, 248, 248',
        '--ss-bg1': '255, 255, 255',
        '--site-image-filter': 'none',
    },
    [THEMES.DARK]: {
        '--ss-accent': '150, 150, 150',
        '--ss-bg': '51, 51, 51',
        '--ss-bg1': '30, 30, 30',
        '--ss-text1': '187,187,187',
        '--site-image-filter': 'grayscale()',
    }
}

const setThemeFromResourceDictionary = (theme, element) => {
    var themeData = resourceDictionary[theme];

    Object
        .keys(themeData)
        .forEach(key => {
            element.style.setProperty(key, themeData[key]);
        })
}

export const setThemeVariables = (theme) => {
    if (theme) {
        const rootElement = document.documentElement;
        setThemeFromResourceDictionary(theme, rootElement);
    }
}

export const saveTheme = (currentTheme) => {
    localStorage.setItem('SS-THEME', currentTheme)
}

export const getCurrentSavedTheme = () => {
    const defaultTheme = THEMES.DARK;
    let currentSavedTheme;

    if (localStorage) {
        currentSavedTheme = localStorage.getItem('SS-THEME')
    }

    return defaultTheme
}

export const getThemeLabelForTheme = (theme) => {
    const themeLabelMapper = {
        [THEMES.LIGHT]: 'lumos',
        [THEMES.DARK]: 'nox'
    }

    return themeLabelMapper[theme];
}

export const getCSSVariableForTheme = (theme, variableName) => {
    return resourceDictionary[theme][variableName];
}

export const getNextTheme = (theme) => theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;

