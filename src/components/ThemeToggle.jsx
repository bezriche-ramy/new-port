import React from 'react';
import { BsSun, BsMoon } from 'react-icons/bs';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-6 right-6 z-50 p-3 rounded-full 
                 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700
                 shadow-lg hover:shadow-xl transition-all duration-300
                 text-gray-700 dark:text-gray-300 hover:text-accent dark:hover:text-accent
                 hover:scale-110"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <BsSun className="w-5 h-5" />
      ) : (
        <BsMoon className="w-5 h-5" />
      )}
    </button>
  );
};

export default ThemeToggle;
