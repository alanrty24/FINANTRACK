import React, { createContext } from "react";
import Swal from "sweetalert2";

// 1- Creamos un contexto
export const AlertContext = createContext();

// 2- Creamos el componente a realizar render
export const AlertProvide = ({children}) => {

  // Mensaje de alerta 
  const showAlert = ({
    title,
    text,
    icon = "success",
    confirmButtonText = "Aceptar",
  }) => {
    return Swal.fire({
        title,
        text,
        icon, // 'success', 'error', 'warning', 'info', 'question'
        confirmButtonText: confirmButtonText,
        confirmButtonColor: '#03045e'
    });
  };

    // Función reusable para alertas de confirmación (devuelve una promesa)
    const showConfirm = ({ title, text, icon = 'warning' }) => {
        return Swal.fire({
            title: title || '¿Está seguro?',
            text: text || "Esta acción es irreversible.",
            icon: icon,
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, continuar',
            cancelButtonText: 'Cancelar'
        });
    };
    
  return(
    <AlertContext.Provider value={{showAlert,showConfirm}}>
        {children}
    </AlertContext.Provider>
  );
};
