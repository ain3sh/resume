import { ThemeMode } from './utils/themeStyles';

declare global {
    interface Window {
        __REACT_THEME__?: ThemeMode;
        fs: {
        readFile(path: string, options?: { encoding?: string }): Promise<Uint8Array | string>;
        };
    }
}