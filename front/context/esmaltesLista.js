import React, { createContext, useState } from 'react';


export const EsmalteContext = createContext();


export function EsmalteProvider({ children }) {
  const [esmaltes, setEsmaltes] = useState([]);

  const addEsmalte = (esmalte) => {
    setEsmaltes((prev) => [
      ...prev,
      { ...esmalte, id: Date.now().toString() },
    ]);
  };


  const editEsmalte = (esmalte) => {
    setEsmaltes((prev) =>
      prev.map((e) => (e.id === esmalte.id ? esmalte : e))
    );
  };


  const deleteEsmalte = (id) => {
    setEsmaltes((prev) => prev.filter((e) => e.id !== id));
  };


  return (
    <EsmalteContext.Provider
      value={{ esmaltes, addEsmalte, editEsmalte, deleteEsmalte }}
    >
      {children}
    </EsmalteContext.Provider>
  );
}
