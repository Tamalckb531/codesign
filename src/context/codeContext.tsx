import React, { createContext, useState } from "react";

type CodeContextType = {
  code: string;
  setCode: (code: string) => void;
};

export const CodeContext = createContext<CodeContextType | undefined>(
  undefined
);

export const CodeProvider = ({ children }: { children: React.ReactNode }) => {
  const [code, setCode] = useState(`import { Style, type Chill } from "codesign"
import { code } from "you"

export function Share(mode: Chill) {
  return Style(mode(code))
}`);

  return (
    <CodeContext.Provider value={{ code, setCode }}>
      {children}
    </CodeContext.Provider>
  );
};
