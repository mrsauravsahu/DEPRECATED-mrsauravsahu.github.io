export const THEMES = {
    LIGHT: 'light',
    DARK: 'dark'
};

const setThemeFromResourceDictionary = (theme, element) => {
    const resourceDictionary = {
        [THEMES.LIGHT]: {
            '--ss-accent': '33, 42, 61',
            '--ss-bg': '243, 248, 248',
            '--ss-bg1': '255, 255, 255',
            '--site-image-filter': 'none',
        },
        [THEMES.DARK]: {
            '--ss-accent': '160, 160, 160',
            '--ss-bg': '30, 30, 30',
            '--ss-bg1': '30, 30, 30',
            '--site-image-filter': 'grayscale()',
        }
    }

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

export const getThemeLabelForTheme = (theme) => {
    const themeLabelMapper = {
        [THEMES.LIGHT]: '🔆',
        [THEMES.DARK]: '🌙'
    }

    return themeLabelMapper[theme];
}

export const getNextTheme = (theme) => theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;