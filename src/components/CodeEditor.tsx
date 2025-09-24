"use client";

import { useBackground } from "@/hooks/useBackground";
import { useCode } from "@/hooks/useCode";
import { useCodePreview } from "@/hooks/useCodePreview";
import { useFontSize } from "@/hooks/useFontSize";
import { useGradient } from "@/hooks/useGradient";
import { useLanguage } from "@/hooks/useLanguage";
import { useTheme } from "@/hooks/useTheme";
import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const CodeEditor = () => {
  const { code, setCode } = useCode();
  const { gradient } = useGradient();
  const { theme } = useTheme();
  const { language } = useLanguage();
  const { fontSize } = useFontSize();
  const { setPreviewRef } = useCodePreview();

  console.log(gradient);

  return (
    <div className=" flex w-full flex-col gap-6 items-center pb-4 mt-8 justify-center text-white max-sm:px-2 mb-8">
      <div
        ref={setPreviewRef}
        className={`w-fit min-w-[20vw] max-sm:w-full py-8 px-10 max-sm:px-2 max-sm:p-2 shadow-lg `}
        style={{ background: gradient }}
      >
        <div className=" relative">
          <div className=" flex items-center space-x-2 mt-1 absolute left-3 top-2 z-10">
            <span className="w-[9px] h-[9px] max-sm:w-2 max-sm:h-2 rounded-full bg-red-500"></span>
            <span className="w-[9px] h-[9px] max-sm:w-2 max-sm:h-2 rounded-full bg-yellow-500"></span>
            <span className="w-[9px] h-[9px] max-sm:w-2 max-sm:h-2 rounded-full bg-green-500"></span>
          </div>

          <SyntaxHighlighter
            language={language}
            style={typeof theme === "string" ? coldarkDark : theme}
            customStyle={{
              fontSize: `${fontSize}px`,
              borderRadius: "8px",
              padding: "45px 35px 30px 10px",
              boxShadow:
                "0 4px 8px 0 rgba(0, 0, 0, 0.4), 0 6px 20px 0 rgba(0, 0, 0, 0.4)",
              overflow: "hidden",
              opacity: 0.85,
            }}
            wrapLongLines
            showLineNumbers
          >
            {code}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
};

export default CodeEditor;
