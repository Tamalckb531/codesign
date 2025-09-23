"use client";
import { useBackground } from "@/hooks/useBackground";
import { useCodePreview } from "@/hooks/useCodePreview";
import { useDarkMode } from "@/hooks/useDarkMode";
import { useFontSize } from "@/hooks/useFontSize";
import { useGradient } from "@/hooks/useGradient";
import { useLanguage } from "@/hooks/useLanguage";
import { useTheme } from "@/hooks/useTheme";
import copyAsImage from "@/utils/copyAsImage";
import exportAsImage from "@/utils/exportAsImage";
import React, { useState } from "react";
import { toast } from "sonner";
import PopupDialog from "./PopupDialog";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { gradientArray } from "@/constants/gradient";
import { themes } from "@/lib/theme";
import { Input } from "./ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { Switch } from "./ui/switch";

const Dock = () => {
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const [cloudLink] = useState<string>("");
  const { gradient, setGradient } = useGradient();
  const { setTheme } = useTheme();
  const { setLanguage } = useLanguage();
  const { fontSize, setFontSize } = useFontSize();
  const { isBackgroundHidden, setIsBackgroundHidden } = useBackground();
  const { getPreviewRef } = useCodePreview();
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  const handleExportImage = () => {
    const node = getPreviewRef();
    if (node) {
      exportAsImage(node);
    }
  };

  const handleCopyImage = async () => {
    const node = getPreviewRef();

    if (node) {
      try {
        await copyAsImage(node);
        setIsCopied(true);
        toast.success("Image copied to clipboard");
        setTimeout(() => setIsCopied(false), 1500);
      } catch {
        console.log("failed to copy image");
      }
    }
  };

  return (
    <section className="w-full flex justify-center ">
      <div className="flex justify-center w-fit min-w-[40vw] max-sm:min-w-full max-sm:w-full max-sm:justify-start ">
        <div className="flex items-center h-20 px-10  text-white">
          <PopupDialog
            setIsCopied={setIsCopied}
            isCopied={isCopied}
            cloudLink={cloudLink}
            isDialogOpen={isDialogOpen}
            setIsDialogOpen={setIsDialogOpen}
          />

          <div className="flex items-center gap-12 max-sm:gap-6">
            <div className="space-y-1">
              <Label className="text-xs" htmlFor="gradient">
                Gradient
              </Label>

              <Select
                onValueChange={(value: string) => {
                  setGradient(value);
                }}
              >
                <SelectTrigger className="border-black dark:border-white space-x-2 w-16 h-6 flex items-center justify-center">
                  <div
                    className="w-4 h-4 rounded-full"
                    style={{ background: gradient }}
                  ></div>
                </SelectTrigger>
                <SelectContent className="!w-48">
                  {gradientArray.map(
                    (
                      item: { name: string; gradient: string },
                      index: number
                    ) => (
                      <SelectItem
                        key={index}
                        value={item.gradient}
                        className="flex items-center gap-2 whitespace-nowrap relative"
                      >
                        <div
                          className="min-w-[20px] h-5 rounded-full shrink-0"
                          style={{ background: item.gradient }}
                        >
                          <span className="absolute ml-7 text-xs inline-block">
                            {item.name}
                          </span>
                        </div>
                      </SelectItem>
                    )
                  )}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1">
              <Label className="text-xs" htmlFor="theme">
                Theme
              </Label>
              <Select
                onValueChange={(value: string) => {
                  setTheme(themes[value]);
                }}
              >
                <SelectTrigger className="w-28 h-6 text-xs text-center border-black dark:border-white">
                  <SelectValue
                    placeholder="ColdarkDark"
                    className="text-center"
                  />
                </SelectTrigger>
                <SelectContent>
                  {Object.keys(themes).map((themeName) => (
                    <SelectItem key={themeName} value={themeName}>
                      {themeName}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1">
              <Label className="text-xs" htmlFor="language">
                Language
              </Label>
              <Select
                onValueChange={(value: string) => {
                  setLanguage(value);
                }}
              >
                <SelectTrigger className="w-[100px] h-6 text-xs border-black dark:border-white">
                  <SelectValue placeholder="JavaScript" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="javascript">JavaScript</SelectItem>
                  <SelectItem value="python">Python</SelectItem>
                  <SelectItem value="html">HTML</SelectItem>
                  <SelectItem value="css">CSS</SelectItem>
                  <SelectItem value="java">Java</SelectItem>
                  <SelectItem value="rust">Rust</SelectItem>
                  <SelectItem value="go">Go</SelectItem>
                  <SelectItem value="bash">C++</SelectItem>
                  <SelectItem value="c++">Bash</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1">
              <Label className="text-xs" htmlFor="fontSize">
                Font Size
              </Label>
              <Input
                type="number"
                value={fontSize}
                onChange={(e) =>
                  setFontSize(parseInt(e.target.value, 10) || 16)
                }
                className="w-16 text-center h-6 font-xs border-black dark:border-white"
              />
            </div>
            <div className="space-y-1 flex flex-col mb-[-5px]">
              <Label className="text-xs">Export</Label>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    className="px-3 py-1 text-xs h-6 bg-transparent border-black dark:border-white"
                  >
                    Export
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem onClick={handleExportImage}>
                    Download Image
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={handleCopyImage}>
                    Copy Image
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dock;
