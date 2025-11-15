# Examen Web - Aplicación de Cócteles

## 📋 Descripción

Aplicación web desarrollada con React, TypeScript y Vite que consume la API de TheCocktailDB para mostrar información sobre bebidas y cócteles. El proyecto incluye navegación entre páginas, consumo de API REST y diseño responsivo con Tailwind CSS.

**🔗 Demo en vivo:** [https://peaceful-crumble-628274.netlify.app/](https://peaceful-crumble-628274.netlify.app/)

## 👨‍🎓 Información del Estudiante

- **Nombre:** Teddy Leonardo Hernandez Perez
- **Carnet:** 1790-22-2563
- **Ciclo:** Octavo
- **Universidad:** Universidad Mariano Gálvez de Guatemala

## 🚀 Tecnologías Utilizadas

- **React 19.2.0** - Biblioteca de interfaz de usuario
- **TypeScript 5.9.3** - JavaScript con tipado estático
- **Vite 7.2.2** - Herramienta de construcción y desarrollo
- **Tailwind CSS 4.1.17** - Framework de CSS utilitario
- **React Router DOM 7.9.6** - Enrutamiento del lado del cliente
- **TheCocktailDB API** - API REST para datos de cócteles

## 📁 Estructura del Proyecto

```
examen-app/
├── src/
│   ├── components/
│   │   ├── Layout.tsx       # Componente de diseño principal
│   │   ├── Navbar.tsx       # Barra de navegación
│   │   └── Footer.tsx       # Pie de página
│   ├── pages/
│   │   ├── Inicio.tsx       # Página de inicio
│   │   ├── AcercaDe.tsx     # Página acerca de
│   │   └── Consumo.tsx      # Página de consumo de API
│   ├── services/
│   │   └── api.ts           # Servicios para consumo de API
│   ├── App.tsx              # Componente raíz
│   ├── main.tsx             # Punto de entrada
│   └── index.css            # Estilos globales con Tailwind
├── public/
│   └── image/
│       └── LogotipoUMG.png  # Logo de la universidad
├── package.json
├── vite.config.ts
├── tsconfig.json
└── tailwind.config.js
```

## ⚙️ Funcionalidades

### 1. Página de Inicio
- Muestra información del estudiante
- Logo de la Universidad Mariano Gálvez
- Diseño centrado y responsivo

### 2. Página Acerca De
- Información sobre las tecnologías utilizadas
- Tarjetas con descripción de cada tecnología
- Diseño en grid responsivo

### 3. Página de Consumo de API
- Consulta a TheCocktailDB API para obtener cócteles ordinarios
- Muestra 15 bebidas en formato de tarjetas
- Modal con información detallada al hacer clic en una bebida
- Información mostrada:
  - Imagen de la bebida
  - Nombre del cóctel
  - Categoría
  - Tipo de vaso
  - Instrucciones de preparación
  - Lista de ingredientes con medidas

### 4. Navegación
- Barra de navegación con enlaces a todas las páginas
- Indicador visual de la página activa
- Diseño responsivo

## 🛠️ Instalación y Ejecución

### Prerequisitos
- Node.js 18+ instalado
- npm o yarn

### Pasos para ejecutar localmente

1. **Clonar el repositorio:**
```bash
git clone https://github.com/leotedd/036-F-Teddy-Hernandez.git
cd examen-app
```

2. **Instalar dependencias:**
```bash
npm install
```

3. **Ejecutar en modo desarrollo:**
```bash
npm run dev
```

4. **Abrir en el navegador:**
```
http://localhost:5173
```

### Compilar para producción

```bash
npm run build
```

Los archivos compilados se generarán en la carpeta `dist/`.

## 🌐 Despliegue en Netlify

La aplicación está desplegada en Netlify:
- **URL:** [https://peaceful-crumble-628274.netlify.app/](https://peaceful-crumble-628274.netlify.app/)

### Pasos para desplegar:
1. Compilar el proyecto: `npm run build`
2. Arrastrar la carpeta `dist` a Netlify
3. Configurar redirects para React Router (archivo `_redirects` en `public/`)

## 📡 API Utilizada

**TheCocktailDB API**
- Base URL: `https://www.thecocktaildb.com/api/json/v1/1`
- Endpoints utilizados:
  - `/filter.php?c=Ordinary_Drink` - Lista de bebidas ordinarias
  - `/lookup.php?i={id}` - Detalle de una bebida específica

## 🎨 Características de Diseño

- **Responsivo:** Adaptable a móviles, tablets y escritorio
- **Tailwind CSS:** Estilos utilitarios y modernos
- **Modal interactivo:** Para mostrar detalles de las bebidas
- **Hover effects:** Efectos visuales al pasar el mouse
- **Loading states:** Indicadores de carga mientras se obtienen los datos

## 📝 Scripts Disponibles

```bash
npm run dev      # Inicia el servidor de desarrollo
npm run build    # Compila para producción
npm run preview  # Vista previa de la build de producción
npm run lint     # Ejecuta ESLint para verificar el código
```

## 🐛 Solución de Problemas

### El servidor no inicia
- Verificar que el puerto 5173 esté disponible
- Si está ocupado, Vite automáticamente usa el siguiente puerto disponible

### La API no muestra datos
- Verificar la conexión a internet
- Abrir DevTools (F12) y revisar la consola para errores
- Verificar que la API de TheCocktailDB esté disponible

### Estilos no se aplican
- Asegurar que Tailwind CSS esté correctamente configurado
- Verificar que `index.css` contenga los imports de Tailwind
- Limpiar caché del navegador (Ctrl + Shift + R)

## 📄 Licencia

Este proyecto fue desarrollado con fines educativos para la Universidad Mariano Gálvez de Guatemala.

## 👤 Autor

**Teddy Leonardo Hernandez Perez**
- Carnet: 1790-22-2563
- Universidad Mariano Gálvez de Guatemala

---

Desarrollado con ❤️ usando React + TypeScript + Vite
