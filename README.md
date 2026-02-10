# Aplicación de Geolocalización con Flask

## Descripción
Aplicación web desarrollada con Flask que permite buscar ubicaciones geográficas utilizando la API de OpenStreetMap Nominatim y visualizar los resultados en mapas interactivos.

## Estructura del Proyecto
```
flask_geolocalizacion/
├── app.py                 # Aplicación principal Flask
├── requirements.txt       # Dependencias del proyecto
├── templates/            # Plantillas HTML
│   ├── index.html        # Página principal de búsqueda
│   └── map.html          # Página de resultados con mapa
├── static/               # Archivos estáticos
│   └── styles.css        # Estilos personalizados
└── README.md            # Este archivo
```

## Funcionalidades

### 🗺️ Geolocalización
- Búsqueda de lugares por nombre o dirección
- Obtención de coordenadas (latitud, longitud)
- Visualización en mapas interactivos

### 🌍 Mapas Interactivos
- Mapas basados en OpenStreetMap y Leaflet.js
- Controles de zoom y navegación
- Marcadores con información del lugar

### 🎨 Interfaz Moderna
- Diseño responsive y moderno
- Animaciones y transiciones suaves
- Colores gradientes y estilos atractivos
## Evidencia del Funcionamiento

### Captura 1 – Pantalla principal de búsqueda
<img width="1904" height="1088" alt="image" src="https://github.com/user-attachments/assets/7176ccd7-4bfe-4e75-af96-c3aab70423ef" />
### Captura 2 – Resultado de la búsqueda con coordenadas
<img width="1919" height="1103" alt="image" src="https://github.com/user-attachments/assets/474b487a-5852-4d70-b39d-085cb998b0dd" />
### Captura 3 – Mapa interactivo con marcador
<img width="1823" height="922" alt="image" src="https://github.com/user-attachments/assets/c19f5b4e-fa6f-4ffd-b69a-2fa1b4ed7778" />

---
## Tecnologías Utilizadas

### Backend
- **Flask 2.3.3**: Framework web para Python
- **requests 2.31.0**: Librería para peticiones HTTP

### Frontend
- **HTML5**: Estructura semántica
- **CSS3**: Estilos modernos con gradientes y animaciones
- **JavaScript**: Interactividad del mapa
- **Leaflet.js 1.9.4**: Biblioteca para mapas interactivos

### API Externa
- **OpenStreetMap Nominatim**: Servicio de geocodificación

## Instalación y Ejecución

### 1. Clonar el repositorio
```bash
git clone https://github.com/juanpaa777/-API-de-Geolocalizaci-n.git
cd -API-de-Geolocalizaci-n
```

### 2. Instalar dependencias
```bash
pip install -r requirements.txt
```

### 3. Ejecutar la aplicación
```bash
python app.py
```

### 4. Acceder a la aplicación
Abre tu navegador web y visita: `http://127.0.0.1:5000`

## Características Técnicas

### Manejo de Errores
- Validación de entrada de usuario
- Manejo de errores de conexión
- Mensajes descriptivos para el usuario

### Seguridad
- User-Agent personalizado para la API
- Validación de datos del formulario
- Escape de datos en plantillas

## Ejemplos de Búsqueda
- "Ciudad de México"
- "Eiffel Tower Paris"
- "Times Square New York"
- "Machu Picchu Peru"
- "Dolores Hidalgo Guanajuato"

## Licencia
Proyecto educativo desarrollado para fines académicos.
