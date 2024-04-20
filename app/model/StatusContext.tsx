import React from "react";

interface StatusContext {
  status: Record<string, { value: number; color: string }> | null;
}

export const StatusContext = React.createContext<StatusContext | null>(null);
