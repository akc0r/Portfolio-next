export interface ThemeColors {
  primary: {
    light: string;
    DEFAULT: string;
    dark: string;
  };
  secondary: {
    light: string;
    DEFAULT: string;
    dark: string;
  };
  tertiary: {
    light: string;
    DEFAULT: string;
    dark: string;
  };
  racing: {
    orange: string;
    orangeLight: string;
    orangeDark: string;
    checkeredFlag: string;
    asphalt: string;
    chrome: string;
    neon: string;
  };
}

export const themeColors: ThemeColors = {
  primary: {
    light: "#fb923c", // orange-400 - Orange racing clair
    DEFAULT: "#f97316", // orange-500 - Orange racing
    dark: "#ea580c", // orange-600 - Orange racing foncé
  },
  secondary: {
    light: "#38bdf8", // sky-400 - Bleu racing clair
    DEFAULT: "#0ea5e9", // sky-500 - Bleu racing
    dark: "#0284c7", // sky-600 - Bleu racing foncé
  },
  tertiary: {
    light: "#334155", // slate-700 - Noir carbone clair
    DEFAULT: "#1e293b", // slate-800 - Noir carbone
    dark: "#0f172a", // slate-900 - Noir carbone foncé
  },
  racing: {
    orange: "#f97316", // orange-500
    orangeLight: "#fb923c", // orange-400
    orangeDark: "#ea580c", // orange-600
    checkeredFlag: "#000000",
    asphalt: "#18181b", // zinc-900
    chrome: "#e4e4e7", // zinc-200
    neon: "#ff6b00", // Custom orange neon
  },
};

// Export individual color values for easy access
export const colors = {
  ...themeColors.primary,
  ...themeColors.racing,
};
