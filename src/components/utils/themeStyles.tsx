export type ThemeMode = 'light' | 'dark';

interface ThemeStyles {
  background: string;
  text: string;
  link: string;
  bullet: string;
}

export const themeConfig: Record<ThemeMode, ThemeStyles> = {
  light: {
    background: '#ffffff',
    text: '#000000',
    link: '#1a73e8',
    bullet: '#000000',
  },
  dark: {
    background: '#1a1a1a',
    text: '#f5f5f5',
    link: '#8ab4f8',
    bullet: '#f5f5f5',
  },
};

export const getThemeStyles = (theme: ThemeMode): ThemeStyles => themeConfig[theme];