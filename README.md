# GestorApp

**GestorApp** es una plataforma web moderna para gestionar reservas de espacios comunes en unidades residenciales como piscinas, gimnasios, salones sociales, entre otros.

---

## 🛠 Tecnologías usadas

- React + Vite
- React Router DOM
- Bootstrap 5 + React-Bootstrap
- JavaScript moderno (ES6+)
- LocalStorage para persistencia de datos
- XLSX para exportar reservas a Excel

---

## 🚀 ¿Cómo usar la app?

### 1. Clonar el repositorio

git clone https://github.com/tu-usuario/gestorapp.git
cd gestorapp
2. Instalar dependencias
npm install
3. Ejecutar la aplicación
npm run dev
La app estará disponible en: http://localhost:5173

🧭 Rutas principales
/ → Página de inicio (Banner moderno y sección Acerca)

/Dashboard → Lista de espacios y posibilidad de reservar

/Booking → Galería visual de espacios (sin opciones de reserva)

/Formulario → Formulario para crear una nueva reserva (solo accesible desde el Dashboard)

/admin → Panel de administración (protegido por contraseña)

🔐 Acceso al Panel Admin
Haz clic en el ícono ⚙️ ubicado en la parte superior derecha del menú de navegación y digita:


Contraseña: admin123
⚙️ Funcionalidades del Panel Admin
🔁 Reiniciar reservas (restablece el calendario de todos los espacios)

📥 Exportar a Excel todas las reservas registradas

📋 Ver todas las reservas en tabla ordenada

📂 Estructura del proyecto
src/
│
├── assets/                  # Imágenes usadas
├── components/
│   ├── common/              # Menu, Footer, Calendario, Acerca, Banner
│   └── pages/               # Home, Dashboard, Booking, AdminPanel, etc.
│
├── DatosJSON.js             # Datos base de los espacios comunes
├── App.jsx
├── main.jsx
Nota: Las imágenes deben estar en public/img y referenciarse como /img/nombre.jpg para funcionar correctamente.

📦 LocalStorage
Toda la lógica de reserva se almacena de manera local en el navegador usando localStorage.

Al iniciar por primera vez, se copian los datos base desde DatosJSON.js.

Las reservas se sobrescriben dinámicamente al reservar un nuevo horario.

💡 Componentes clave
Menu.jsx → Navbar moderna con acceso admin.

Banner.jsx → Sección visual destacada (ahora con carousel).

Acerca.jsx → Información explicativa de la app con imágenes rotativas.

Dashboard.jsx → Vista principal con tarjetas de espacios, modal y calendario.

Booking.jsx → Solo muestra visualmente los espacios (modo lectura).

AdminPanel.jsx → Vista oculta con funciones especiales.

Galeria.jsx → Permite buscar imágenes por palabra clave a través de la API de Pexels, con diseño moderno, campo de búsqueda estilizado, manejo de errores y visualización adaptable.

🧑‍💻 Autor
Desarrollado por: David Salazar