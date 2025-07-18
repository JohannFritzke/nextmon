"use client";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { CheckIcon, ChevronsUpDownIcon } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";

const frameworks = [
  {
    value: "normal",
    label: <Hexagon width={15} color="white"/>,
  },
  {
    value: "g-max",
    label: <ChevronsUp width={15} color="white"/>,
  },
  {
    value: "mega",
    label: <Dna width={15} color="white"/>,
  },
  {
    value: "hisuian",
    label: <Flower width={15} color="white"/>,
  },
  {
    value: "alolan",
    label: <SunMoon width={15} color="white"/>,
  },
  {
    value: "galar",
    label: <Swords width={15} color="white"/>,
  },
];
import {
  ChevronsUp,
  Dna,
  Flower,
  SunMoon,
  Swords,
  Hexagon,
} from "lucide-react";

export function ComboBox() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <div className="bg-white/30 rounded-full w-6 h-6 flex justify-center items-center cursor-pointer p-1">
          {value ? (
            frameworks.find((framework) => framework.value === value)?.label
          ) : (
            <Hexagon width={15} />
          )}
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-6 flex bg-white/30 p-0">
        <Command>
          <CommandList>
            <CommandGroup className="p-0 w-6 bg-white/30 hover:bg-white/30 flex justify-center gap-2">
              {frameworks.map((framework) => (
                <CommandItem
                  className="flex justify-center cursor-pointer hover:bg-white/30"
                  key={framework.value}
                  value={framework.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  {framework.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
