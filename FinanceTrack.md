# Proyecto FinanceTrack
Proyecto para el manejo de finanzas personales, para asi llevar un control de gastos, realizar planes de ahorro para inversiones ó proyectos a corto, mediano o lago plazo y manejo eficiente de los gastos hormigas. 

## Dependencias a usar

* **Zustand**: Para el manejo de estados y LocalStorage
* **ForwardRef**: Para el manejo de referencias
* **React Router**: Para el manejo de rutas 
* **React Icons**: Para el manejo de Iconos 
* **ChartJS**: Para el manejo de graficos 
* **Tailwindcss**: Para el manejo de estilos 
* **React Hook Form**: Para el manejo de formularios

## Core Features ó Funcionalidades 

* **DashBoard**: Mostrar el resumen de balance, transacciones recientes, los gastos realizados e ingresos optenidos, etc...
* **Transactions**: Manejo de las transacciones (CRUD: Create, Read, Update, Delete), transacciones recientes, filtros por fecha, monto ó tipo, etc...

## UI/UX

* **Sidebar**
* **Animaciones**
* **Paletas de Colores**

## Stack Tecnologico 

```json
{
    "fronted": "React 19.1.1",
    "style": "Tailwindcss 4.1.13",
    "building": "Vite 7.1.7",
    "routing": "React-Router-Dom 7.9.1",
    "graphics": "ChartJS 4.5.0",
}
```

## Fase 1. _Setup del proyecto_

### Objetivos

- **1)** Crear el proyecto con vite 
- **2)** Descargar las diferentes dependencias a utilizar
- **3)** Limpiar la estructura actual del proyecto
- **4)** Configuro tailwindcss 
- **5)** Estructuros las diferentes carpetas del proyecto

### Comandos para el desarrollo del proyecto

- creación del proyecto:  
`pnpm create vite FinanceTrack --template react`
- ir a la carpeta del proyecto:  
`cd FinanceTrack`

- Instalar dependencias del proyecto:  
`pnpm add chart.js react-chartjs-2 react-router-dom react-icons zustand react-hook-form`

- Intalar y configurar tailwindcss:  
`pnpm add -D tailwindcss @tailwindcss/vite`

- Ir a vite.config.js y agregar:  
```js
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
]
```

- Ir a index.css la hoja de estilo pricipal y colocar: 
```js
    @import 'tailwindcss'
```

## Estructura del proyecto 

```
FINANTRACK
|- src/
|  |- components/
|     |-- layout/
|         |--- layout.jsx 
|     |-- dashboard/
|         |--- BalanceCard.jsx 
|         |--- ChartExpense.jsx
|         |--- RecentTransaction.jsx 
|     |-- transactions/
|         |--- AddTransaction.jsx 
|     |-- pages/
|         |--- Dashboard.jsx
|         |--- Transaction.jsx    
|     |-- lib/
|         |--- utils.js
|         |--- categories.js 
|         |--- dataExample.js 
|     |-- forms/
|         |--- TransactionForm.jsx
|         |--- CategorieForm.jsx 
|     |-- ui/
|         |--- Button.jsx
|         |--- Card.jsx 
|     |-- stores/
|         |--- useExpenseStore.js 
|     |-- App.jsx
|     |-- index.css 
|     |-- main.jsx 
|-FinanceTrack.md
|-index.html
|-package.json
|-pnpm-lock.yaml
|-vite.config.js
```
