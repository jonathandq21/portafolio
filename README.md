# 🚀 Portafolio Personal – Arquitectura con Autenticación Segura

Aplicación web desarrollada con **Next.js (App Router)** que implementa un sistema de autenticación, control de acceso y protección de rutas privadas utilizando Supabase como proveedor de identidad.

Este proyecto funciona como base arquitectónica para aplicaciones SaaS o dashboards administrativos que requieren gestión de sesiones y acceso restringido.

---

## 🧠 Objetivo del Proyecto

El propósito principal de esta aplicación es demostrar:

- Protección de rutas privadas en aplicaciones Next.js
- Redirección segura y control de navegación
- Estructura escalable para futuras integraciones

---


## 🔐 Sistema de Autenticación

La autenticación fue implementada utilizando **Supabase Auth** como servicio de identidad.

### Flujo de autenticación:

1. El usuario ingresa sus credenciales (email y contraseña).
2. Supabase valida las credenciales y genera una sesión activa.
3. Se redirige al usuario al Dashboard privado.
4. En cada carga del Dashboard se valida la sesión activa.
5. Si no existe sesión válida → redirección automática al Login.
6. El cierre de sesión elimina la sesión activa y bloquea el acceso inmediato a rutas privadas.

Este enfoque garantiza que el contenido protegido no sea accesible sin autenticación válida.

---

## 🖥 Dashboard Privado

El Dashboard representa una zona protegida accesible únicamente con sesión activa.

### Características implementadas:

- Validación de sesión al montar el componente
- Redirección inmediata en caso de sesión inexistente
- Cierre de sesión controlado
- Navegación gestionada con `router.replace()` para evitar accesos indebidos mediante historial del navegador


---

## 🏗 Arquitectura Técnica

### Frontend
- Next.js 14 (App Router)
- React
- TailwindCSS
- Framer Motion (animaciones)

### Autenticación
- Supabase Auth
- Gestión de sesión en cliente
- Validación dinámica de acceso


---

## 📂 Estructura del Proyecto

/app
/login
/dashboard
/components
/lib
supabase.ts


---

## ⚙ Instalación

```bash
npm install
npm run dev
