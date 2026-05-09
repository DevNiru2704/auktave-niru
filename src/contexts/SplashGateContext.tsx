"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type SplashGateContextType = {
  isGateActive: boolean;
  setIsGateActive: (active: boolean) => void;
};

const SplashGateContext = createContext<SplashGateContextType | undefined>(undefined);

export function SplashGateProvider({ children }: { children: ReactNode }) {
  const [isGateActive, setIsGateActive] = useState(false);

  return (
    <SplashGateContext.Provider value={{ isGateActive, setIsGateActive }}>
      {children}
    </SplashGateContext.Provider>
  );
}

export function useSplashGate() {
  const context = useContext(SplashGateContext);
  if (context === undefined) {
    throw new Error("useSplashGate must be used within SplashGateProvider");
  }
  return context;
}
