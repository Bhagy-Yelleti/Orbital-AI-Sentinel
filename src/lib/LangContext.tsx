"use client";

import { createContext, useContext, useState } from "react";
import { t, type Lang, type TKey } from "./translations";

interface LangState {
  lang: Lang;
  setLang: (l: Lang) => void;
  tr: (key: TKey) => string;
}

const LangContext = createContext<LangState>({
  lang: "en",
  setLang: () => {},
  tr: (key) => t.en[key],
});

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  const tr = (key: TKey) => t[lang][key];
  return (
    <LangContext.Provider value={{ lang, setLang, tr }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
