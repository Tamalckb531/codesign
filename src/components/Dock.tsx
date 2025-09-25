"use client";
import { useCodePreview } from "@/hooks/useCodePreview";
import { useFontSize } from "@/hooks/useFontSize";
import { useGradient } from "@/hooks/useGradient";
import { useLanguage } from "@/hooks/useLanguage";
import { useTheme } from "@/hooks/useTheme";
import copyAsImage from "@/utils/copyAsImage";
import exportAsImage from "@/utils/exportAsImage";
import React from "react";
import { toast } from "sonner";
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
import { ALargeSmall, Code, Palette, Shirt } from "lucide-react";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Textarea } from "./ui/textarea";
import { useCode } from "@/hooks/useCode";

const Dock = () => {
  const { code, setCode } = useCode();
  const { gradient, setGradient } = useGradient();
  const { setTheme } = useTheme();
  const { setLanguage } = useLanguage();
  const { fontSize, setFontSize } = useFontSize();
  const { getPreviewRef } = useCodePreview();

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
        toast.success("Image copied to clipboard");
      } catch {
        console.log("failed to copy image");
      }
    }
  };

  return (
    <section className="w-full flex justify-center mt-8">
      <div className="flex justify-center w-fit min-w-[40vw] max-sm:min-w-full max-sm:w-full max-sm:justify-start ">
        <div className="flex items-center h-20 px-10  text-white">
          <div className="flex border px-2 py-1 rounded-2xl items-center justify-center gap-6 max-sm:gap-6">
            <div className="space-y-1 flex items-center justify-center gap-2 rounded-md p-2">
              <Palette size={25} />
              <Select
                onValueChange={(value: string) => {
                  setGradient(value);
                }}
              >
                <SelectTrigger className="border-none w-16 h-6 flex items-center justify-center bg-transparent">
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
            <div className="space-y-1 flex items-center justify-center gap-2 rounded-md p-2">
              <Shirt size={25} />
              <Select
                onValueChange={(value: string) => {
                  setTheme(themes[value]);
                }}
              >
                <SelectTrigger className="w-28 h-6 text-xs text-center border-none !text-white">
                  <SelectValue
                    placeholder="ColdarkDark"
                    className="text-center !text-white "
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
            <div className="space-y-1 flex items-center justify-center gap-2 rounded-md p-2">
              <Code />
              <Select
                onValueChange={(value: string) => {
                  setLanguage(value);
                }}
              >
                <SelectTrigger className="w-[100px] h-6 text-xs border-none !text-white">
                  <SelectValue
                    placeholder="JavaScript"
                    className="!text-white"
                  />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="javascript">JavaScript</SelectItem>
                  <SelectItem value="typescript">TypeScript</SelectItem>
                  <SelectItem value="bro">Bro</SelectItem>
                  <SelectItem value="python">Python</SelectItem>
                  <SelectItem value="html">HTML</SelectItem>
                  <SelectItem value="css">CSS</SelectItem>
                  <SelectItem value="sass">Sass</SelectItem>
                  <SelectItem value="java">Java</SelectItem>
                  <SelectItem value="rust">Rust</SelectItem>
                  <SelectItem value="go">Go</SelectItem>
                  <SelectItem value="bash">Bash</SelectItem>
                  <SelectItem value="c">C</SelectItem>
                  <SelectItem value="cpp">C++</SelectItem>
                  <SelectItem value="csharp">C#</SelectItem>
                  <SelectItem value="dart">Dart</SelectItem>
                  <SelectItem value="fortran">Fortran</SelectItem>
                  <SelectItem value="json">Json</SelectItem>
                  <SelectItem value="jsx">React(js)</SelectItem>
                  <SelectItem value="tsx">React(ts)</SelectItem>
                  <SelectItem value="zig">Zig</SelectItem>
                  <SelectItem value="swift">Swift</SelectItem>
                  <SelectItem value="solidity">Solidity</SelectItem>
                  <SelectItem value="brainfuck">Brainfuck</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1 flex items-center justify-center gap-2 rounded-md p-2">
              <ALargeSmall />
              <Input
                type="number"
                value={fontSize}
                onChange={(e) =>
                  setFontSize(parseInt(e.target.value, 10) || 16)
                }
                className="w-18 text-center h-8 p-2 font-xs border-none outline-none"
              />
            </div>
            <div className="flex flex-col">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="default"
                    className="text-lg p-3 h-8 bg-transparent border-none"
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
            <div className="flex flex-col">
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant="secondary"
                    className="text-lg text-white hover:text-black p-3 h-8 bg-transparent border-none"
                  >
                    Add Code
                  </Button>
                </DialogTrigger>
                <DialogContent className=" bg-black text-white border-none text-center">
                  <DialogTitle className=" mb-2">
                    {" "}
                    Please Add Your Code{" "}
                  </DialogTitle>
                  <Textarea
                    className="w-full h-40 p-4 rounded-md border-none "
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    placeholder="Paste your code here..."
                  />
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dock;
