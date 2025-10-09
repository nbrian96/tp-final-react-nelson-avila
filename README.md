# 🎮 Pokédex - TP Final Integrador

Una aplicación web moderna para explorar el mundo de los Pokémon, desarrollada con React, TypeScript y Material-UI.

## ✨ Características

- 🔍 **Exploración de Pokémon**: Navega por una lista completa de Pokémon
- ❤️ **Sistema de Favoritos**: Guarda tus Pokémon favoritos con persistencia local
- 🎲 **Pokémon Aleatorios**: Descubre nuevos Pokémon en la página principal
- 📱 **Diseño Responsive**: Optimizado para desktop, tablet y móvil
- 🎨 **UI Moderna**: Interfaz atractiva con Material-UI
- ⚡ **Rendimiento**: Carga rápida con Vite y React

## 🚀 Instalación y Configuración

### Prerrequisitos

Asegúrate de tener instalado:
- [Node.js](https://nodejs.org/) (versión 16 o superior)
- [npm](https://www.npmjs.com/) o [yarn](https://yarnpkg.com/)

### Pasos de Instalación

1. **Clona el repositorio**
   ```bash
   git clone <url-del-repositorio>
   cd tp-final-react-nelson-avila
   ```

2. **Instala las dependencias**
   ```bash
   npm install
   ```
   o si usas yarn:
   ```bash
   yarn install
   ```

3. **Inicia el servidor de desarrollo**
   ```bash
   npm run dev
   ```
   o con yarn:
   ```bash
   yarn dev
   ```

4. **Abre tu navegador**
   - Ve a `http://localhost:5173`
   - ¡La aplicación debería estar funcionando!

## 📜 Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Inicia el servidor de desarrollo

# Producción
npm run build        # Construye la aplicación para producción
npm run preview      # Previsualiza la build de producción

# Linting
npm run lint         # Ejecuta ESLint para verificar el código
```

## 🛠️ Tecnologías Utilizadas

- **React 19** - Biblioteca de UI
- **TypeScript** - Tipado estático
- **Vite** - Herramienta de build y desarrollo
- **Material-UI (MUI)** - Componentes de UI
- **Redux Toolkit** - Manejo de estado
- **React Router** - Navegación
- **React Slick** - Carruseles
- **ESLint** - Linting del código

## 📁 Estructura del Proyecto

```
src/
├── components/         # Componentes reutilizables
├── pages/              # Páginas de la aplicación
├── hooks/              # Custom hooks
├── store/              # Redux store y slices
├── interfaces/         # Definiciones de TypeScript
├── constants/          # Constantes de la aplicación
└── assets/             # Recursos estáticos
```

## 🎯 Funcionalidades Principales

### Página Principal
- Carrusel de Pokémon favoritos
- Sección de Pokémon aleatorios para descubrir

### Lista de Pokémon
- Paginación de Pokémon
- Búsqueda y filtrado
- Vista de tarjetas responsive

### Detalles de Pokémon
- Información completa del Pokémon
- Estadísticas visuales
- Botón de favoritos

### Favoritos
- Lista de Pokémon guardados
- Persistencia en localStorage
- Opción de limpiar favoritos

## 📝 Licencia

Este proyecto es parte del Trabajo Práctico Final Integrador.

---

**Desarrollado por Nelson Avila** 🚀
