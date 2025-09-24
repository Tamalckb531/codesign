import { useContext } from "react";
import { CodeContext } from "@/context/codeContext";

export const useCode = () => {
  const context = useContext(CodeContext);

  if (!context) {
    throw new Error("useCodePreview must be used within a CodePreviewProvider");
  }
  return context;
};
