import React from "react";
import { Todo } from "../models/todo";

// CUSTOM HOOK PARA GUARDAR DATOS EN EL STORAGE
export const useLocalStorage = (itemName: string, initialValue: any) => {
    const [error, setError] = React.useState(false)
    const [loading, setLoading] = React.useState(true)
    // Guardamos los valores definidos en nuestros componentes
    const [item, setItem] = React.useState(initialValue);
     React.useEffect(()=> {
      setTimeout(() => {
        try {
          // Traemos nuestros TODOs almacenados
          const localStorageItem = localStorage.getItem(itemName);
          let parsedItem: any;
          
          if (!localStorageItem) {
          // Si el usuario es nuevo no existe un item en localStorage, por lo tanto guardamos uno con un array vacío
            localStorage.setItem(itemName, JSON.stringify(initialValue));
            parsedItem = initialValue;
          } else {
            // Si existen TODOs en el localStorage los regresamos como nuestros todos
            parsedItem = JSON.parse(localStorageItem);
          } 
          setItem(parsedItem)
          setLoading(false)
        } catch (error:any) {
          setError(error)
        }
      }, 1000);
     })
    
    
    const saveItem = (newItem: Todo[]) => {
      try {
        const stringifiedItem = JSON.stringify(newItem);
        localStorage.setItem(itemName, stringifiedItem);
        setItem(newItem);  
      } catch (error:any) {
        setError(error)
      }
    }
  
    return {
      item,
      saveItem,
      loading, 
      error
    };
  }