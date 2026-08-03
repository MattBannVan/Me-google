/**
 * Theme tokens bridge. Will integrate with platform/quest theme system (THEME-* tasks).
 */
export const defaultTokens = {
  background: '#0a0a0f',
  foreground: '#e0e0e0',
  accent: '#6c5ce7',
} as const;

export type ThemeTokens = typeof defaultTokens;
