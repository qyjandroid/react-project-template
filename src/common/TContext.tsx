import * as React from 'react';

export default function <T>(initValue: T) {
  const context: React.Context<T> = React.createContext<T>(initValue);
  return context;
}
