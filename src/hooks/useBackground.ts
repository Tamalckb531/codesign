import { BackgroundContext } from "@/context/backgroundContext";
import { useContext } from "react";

export const useBackground = () => {
  const context = useContext(BackgroundContext);
  if (!context)
    throw new Error("useBackground must be used with in BackgroundProvider");
  return context;
};
