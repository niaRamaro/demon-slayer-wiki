import { ReactElement, useEffect, useState } from 'react';

const themes = {
  light: 'Light',
  dark: 'Dark',
};

export default function ThemeSwitch(): ReactElement {
  const [theme, setTheme] = useState(Object.keys(themes)[0]);

  useEffect(() => {
    // eslint-disable-next-line operator-linebreak
    const savedTheme =
      localStorage.getItem('data-theme') || Object.keys(themes)[0];
    setTheme(savedTheme);
  }, []);
  useEffect(() => {
    localStorage.setItem('data-theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <>
      <span>Theme : </span>
      <button
        type="button"
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      >
        {themes[theme]}
      </button>
    </>
  );
}
