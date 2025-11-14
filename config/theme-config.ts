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
    light: "#fb923c", // orange-400
    DEFAULT: "#f97316", // orange-500
    dark: "#ea580c", // orange-600
  },
  secondary: {
    light: "#475569", // slate-600
    DEFAULT: "#334155", // slate-700
    dark: "#1e293b", // slate-800
  },
  tertiary: {
    light: "#94a3b8", // slate-400
    DEFAULT: "#64748b", // slate-500
    dark: "#475569", // slate-600
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
