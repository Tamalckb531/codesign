"use client";

import GradientProvider from "@/context/gradientContext";
import DarkModeProvider from "./DarkModeProvider";
import ThemeProvider from "@/context/themeContext";
import LanguageProvider from "@/context/LanguageContext";
import FontSizeProvider from "@/context/fontSizeContext";
import { BackgroundProvider } from "@/context/backgroundContext";
import { CodePreviewProvider } from "@/context/codePreviewContext";
import { CodeProvider } from "@/context/codeContext";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <GradientProvider>
      <ThemeProvider>
        <LanguageProvider>
          <FontSizeProvider>
            <DarkModeProvider>
              <BackgroundProvider>
                <CodeProvider>
                  <CodePreviewProvider>{children}</CodePreviewProvider>
                </CodeProvider>
              </BackgroundProvider>
            </DarkModeProvider>
          </FontSizeProvider>
        </LanguageProvider>
      </ThemeProvider>
    </GradientProvider>
  );
}
