import { createContext, useContext, useState } from "react";

export const themeHeaderContext = createContext();

export const useThemeHeader = () => {
  const context = useContext(themeHeaderContext);
  if (!context) throw new Error("No hay proveedor de contexto.");
  return context;
};

const initTheme = {
  background: "var(--color-primary)",
  color: "var(--color-white)",
  coloractive: "var(--color-orange)",
  hasShadow: true,
};

export const ThemeHeaderProvider = ({ children }) => {
  const [background, setBackground] = useState(initTheme.background);
  const [color, setColor] = useState(initTheme.color);
  const [coloractive, setColorActive] = useState(initTheme.coloractive);
  const [hasShadow, setHasShadow] = useState(initTheme.hasShadow);

  const configTheme = (
    param_background,
    param_color,
    param_color_active,
    param_shadow
  ) => {
    setBackground(param_background || background);
    setColor(param_color || color);
    setColorActive(param_color_active || coloractive);
    setHasShadow(param_shadow === null ? hasShadow : param_shadow);
  };

  const resetTheme = () => {
    setBackground(initTheme.background);
    setColor(initTheme.color);
    setColorActive(initTheme.coloractive);
    setHasShadow(initTheme.hasShadow);
  };
  return (
    <themeHeaderContext.Provider
      value={{
        background,
        color,
        coloractive,
        hasShadow,
        configTheme,
        resetTheme,
      }}
    >
      {children}
    </themeHeaderContext.Provider>
  );
};
