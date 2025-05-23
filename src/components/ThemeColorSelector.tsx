"use client";

import React, { useEffect, useState } from "react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Palette } from "lucide-react";

const availableColors = [
    { name: "Red", value: "red", color: "#dc2626" },
    { name: "Rose", value: "rose", color: "#e11d48" },
    { name: "Orange", value: "orange", color: "#f97316" },
    { name: "Green", value: "green", color: "#16a34a" },
    { name: "Blue", value: "blue", color: "#2563eb" },
    { name: "Yellow", value: "yellow", color: "#eab308" },
    { name: "Violet", value: "violet", color: "#7c3aed" },
];

const LOCAL_STORAGE_KEY = "theme-color";

export function ThemeColorSelector({
    initialColor = "red",
    onColorChange,
}: {
    initialColor?: string;
    onColorChange?: (color: string) => void;
}) {
    const [colorTheme, setColorTheme] = useState<string>(initialColor);

    // Carrega o tema salvo no localStorage ao montar o componente
    useEffect(() => {
        const savedTheme = localStorage.getItem(LOCAL_STORAGE_KEY);
        if (savedTheme && savedTheme !== colorTheme) {
            setColorTheme(savedTheme);
        }
    }, []);

    // Aplica o tema ao <html> e salva no localStorage sempre que mudar
    useEffect(() => {
        const themes = availableColors.map((c) => `theme-${c.value}`);
        document.documentElement.classList.remove(...themes);
        document.documentElement.classList.add(`theme-${colorTheme}`);

        localStorage.setItem(LOCAL_STORAGE_KEY, colorTheme); // salva o tema
        if (onColorChange) onColorChange(colorTheme);
    }, [colorTheme, onColorChange]);

    return (
        <Select

            onValueChange={(value) => setColorTheme(value)}
            value={colorTheme} // usa `value` ao invés de `defaultValue`
        >
            <SelectTrigger className="w-full border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 cursor-pointer">
                <div className="flex items-center gap-2">
                    <Palette className="h-4 w-4" />
                    <span className="md:block hidden">Choose the theme color</span>
                    <SelectValue placeholder="Select color" />
                </div>
            </SelectTrigger>

            <SelectContent className="border-muted">
                {availableColors.map(({ name, value, color }) => (
                    <SelectItem key={value} value={value}>
                        <div className="flex items-center space-x-3">
                            <div
                                className="w-[16px] h-[16px] rounded-full"
                                style={{ backgroundColor: color }}
                            />
                            <span className="text-sm">{name}</span>
                        </div>
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
}
