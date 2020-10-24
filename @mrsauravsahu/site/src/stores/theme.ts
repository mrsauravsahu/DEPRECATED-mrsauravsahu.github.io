import { writable } from "svelte/store";
import { THEMES } from '../utils/theme';

export const theme = writable(THEMES.DARK);
