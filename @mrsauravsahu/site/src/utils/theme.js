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
        '--ss-accent': '160, 160, 160',
        '--ss-bg': '20, 20, 20',
        '--ss-bg1': '30, 30, 30',
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

    return currentSavedTheme || defaultTheme
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

