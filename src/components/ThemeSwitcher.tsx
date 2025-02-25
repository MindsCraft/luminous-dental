"use client";

import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";

const ThemeSwitcher = () => {
    const { theme, setTheme } = useTheme();

    return (
        <Button
            variant="ghost"
            size="icon"
            className="border border-gray-300 dark:border-gray-600 rounded-lg p-2 transition"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            aria-label="Toggle theme"
        >
            {theme === "light" ? <Moon size={24} /> : <Sun size={24} />}
        </Button>
    );
};

export default ThemeSwitcher;
