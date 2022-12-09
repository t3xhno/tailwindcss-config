import { themes } from "./index";

export interface ITheme {
  [key: string]: string;
};

export interface IThemes {
  [key: string]: ITheme;
};

export interface IMappedTheme {
  [key: string]: string | null;
};

export const mapTheme = (variables: ITheme): IMappedTheme => {
  return {
    "--color-primary": variables.primary || "",
    "--color-secondary": variables.secondary || "",
    "--bg-color-primary": variables.bgPrimary || "",
    "--bg-color-secondary": variables.bgSecondary || "",
  };
};

export const applyTheme = (theme: string): void => {
  const themeObj: IMappedTheme = mapTheme(themes[theme]);
  if (!themeObj) return;

  const root = document.documentElement;

  Object.keys(themeObj).forEach(prop => {
    if (prop === "name") return;

    root.style.setProperty(prop, themeObj[prop]);
  });
};

export const extend = (extending: ITheme, newTheme: ITheme): ITheme =>
  ({ ...extending, ...newTheme });
