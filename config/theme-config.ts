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
    light: "#ef4444", // red-500 - Rouge racing clair
    DEFAULT: "#dc2626", // red-600 - Rouge racing
    dark: "#b91c1c", // red-700 - Rouge racing foncé
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
