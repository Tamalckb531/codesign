"use client";

import GradientProvider from "@/context/gradientContext";
import ThemeProvider from "@/context/themeContext";
import LanguageProvider from "@/context/LanguageContext";
import FontSizeProvider from "@/context/fontSizeContext";
import { CodePreviewProvider } from "@/context/codePreviewContext";
import { CodeProvider } from "@/context/codeContext";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <GradientProvider>
      <ThemeProvider>
        <LanguageProvider>
          <FontSizeProvider>
            <CodeProvider>
              <CodePreviewProvider>{children}</CodePreviewProvider>
            </CodeProvider>
          </FontSizeProvider>
        </LanguageProvider>
      </ThemeProvider>
    </GradientProvider>
  );
}
