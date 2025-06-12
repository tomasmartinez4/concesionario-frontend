# Concesionario Frontend

Frontend en Angular para un sistema de gestión de un concesionario de vehículos, integrado con una API en .NET Core.

---

## Tabla de contenidos

- [Descripción](#descripción)  
- [Características](#características)  
- [Tecnologías](#tecnologías)  
- [Requisitos previos](#requisitos-previos)  
- [Instalación y ejecución](#instalación-y-ejecución)  
- [Configuración de proxy](#configuración-de-proxy)  
- [Construcción para producción](#construcción-para-producción)  
- [Server-Side Rendering (SSR)](#server-side-rendering-ssr)  
- [Estructura del proyecto](#estructura-del-proyecto)  
- [Pruebas](#pruebas)  
- [Contribución](#contribución)  
- [Licencia](#licencia)  
- [Contacto](#contacto)  

---

## Descripción

Este proyecto es el cliente web de un concesionario de autos. Permite listar, buscar y filtrar vehículos, así como crear y editar registros de inventario a través de formularios reactivos.

## Características

- 📋 **Listado de vehículos** con paginación y filtros avanzados (marca, modelo, año, precio).  
- ✏️ **Formularios reactivos** con validación de campos (PrimeNG & Angular Forms).  
- 🔄 **Gestión de estado** global con NgRx (Actions, Reducers, Effects, Selectors).  
- 🚀 **Lazy Loading** de módulos para optimizar el tamaño del bundle inicial.  
- 🤖 **Server-Side Rendering** opcional con Express (`server.ts`).  
- 🔗 **Integración con API REST** de .NET Core vía proxy (ver `proxy.conf.json`).

## Tecnologías

- **Angular** CLI v17.3.6  
- **TypeScript**, **HTML**, **SCSS**  
- **PrimeNG** (componentes UI: DataTable, Dialog, Menus…)  
- **NgRx** (state management)  
- **Node.js** + **Express** (SSR)  
- **.NET 6+** (back-end; ver repo `concesionario-backend`)  

## Requisitos previos

- [Node.js](https://nodejs.org/) ≥ 18.x  
- [npm](https://npmjs.com/) ≥ 8.x  
- [.NET 6 SDK](https://dotnet.microsoft.com/) para el backend  

## Instalación y ejecución

```bash
# Clonar el repositorio
git clone https://github.com/tomasmartinez4/concesionario-frontend.git
cd concesionario-frontend

# Instalar dependencias
npm install

# Arrancar en modo desarrollo con proxy a la API
npm run start -- --proxy-config proxy.conf.json

# Abrir en el navegador
# http://localhost:4200
```

## Configuración de proxy

El archivo `proxy.conf.json` redirige todas las llamadas a `/api/*` hacia el backend en `http://localhost:5000`. Ajusta el puerto si tu API corre en otro.

## Construcción para producción

```bash
npm run build
```

Los artefactos optimizados se generan en `dist/concesionario-frontend/`.

## Server-Side Rendering (SSR)

Para habilitar SSR (Angular Universal + Express):

```bash
npm run build:ssr
npm run serve:ssr
```

Esto compilará el bundle del servidor y levantará un servidor Express definido en `server.ts`.

## Estructura del proyecto

```
concesionario-frontend/
├── src/
│   ├── app/
│   │   ├── components/      # Componentes UI
│   │   ├── models/          # Interfaces y modelos de datos
│   │   ├── services/        # Servicios de consumo de API
│   │   ├── store/           # NgRx: actions, reducers, effects
│   │   └── app.module.ts    # Módulo raíz
│   ├── assets/              # Imágenes, estilos globales
│   ├── environments/        # Configuración por ambiente
│   └── main.ts              # Punto de entrada
├── angular.json             # Configuración de Angular CLI
├── proxy.conf.json          # Dev proxy a backend
├── server.ts                # Servidor Express para SSR
├── tsconfig*.json           # Configuración TypeScript
└── package.json             # Scripts y dependencias
```

## Pruebas

- **Unitarias**:  
  ```bash
  ng test
  ```  
- **End-to-End**:  
  ```bash
  ng e2e
  ```

## Contribución

1. Haz un fork del repositorio.  
2. Crea una rama descriptiva: `git checkout -b feature/nueva-funcionalidad`.  
3. Realiza tus cambios y commitea: `git commit -m "Agrega componente de búsqueda avanzada"`.  
4. Envía tu rama al origen y abre un Pull Request.  

## Licencia

Este proyecto está licenciado bajo **MIT**. Consulta el archivo [LICENSE](LICENSE) para más detalles.

## Contacto

Desarrollado por Tomás Martínez –  
📧 [tomas44martinez@gmail.com](mailto:tomas44martinez@gmail.com)
