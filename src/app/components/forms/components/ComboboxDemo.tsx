import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";

const fruits = [
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
    { label: "Cherry", value: "cherry" },
    { label: "Durian", value: "durian" },
    { label: "Elderberry", value: "elderberry" },
]

interface ComboboxDemoProps {
    value: string
    onChange: (value: string) => void
}

export function ComboboxDemo({ value, onChange }: ComboboxDemoProps) {
    const [open, setOpen] = React.useState(false);
    const selected = value || null;

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-full justify-between"
                >
                    {selected ? fruits.find((fruit) => fruit.value === selected)?.label : "Select a fruit"}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-full p-0">
                <Command>
                    <CommandInput placeholder="Search fruit..." />
                    <CommandEmpty>No fruit found.</CommandEmpty>
                    <CommandList>
                        <CommandGroup>
                            {fruits.map((fruit) => (
                                <CommandItem
                                    key={fruit.value}
                                    value={fruit.value}
                                    onSelect={(currentValue) => {
                                        onChange(currentValue === selected ? "" : currentValue)
                                        setOpen(false)
                                    }}
                                >
                                    <Check
                                        className={cn(
                                            "mr-2 h-4 w-4",
                                            selected === fruit.value ? "opacity-100" : "opacity-0"
                                        )}
                                    />
                                    {fruit.label}
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    )
}
