# Sobek Visuals - Landing Page Profesional

![Sobek Visuals](public/logo/sobekvisualstextoblanco.png)

Landing page profesional para Sobek Visuals - Especialistas en diseño de miniaturas de YouTube para aumentar conversiones.

## 🚀 Características

- ✨ **Diseño Moderno**: Gradientes cyan/blue con efectos visuales profesionales
- 🎨 **Animaciones Interactivas**: Cards con efectos de hover, shimmer y lighting dinámico
- 📱 **Completamente Responsive**: Optimizado para móvil, tablet y desktop
- ⚡ **Rendimiento Optimizado**: Carga rápida con pantalla de loading personalizada
- 🎯 **Scroll Reveal**: Animaciones al hacer scroll para mejor engagement
- 📊 **Contadores Animados**: Estadísticas con animación de números
- 💬 **Integración WhatsApp**: Botones de contacto directo en toda la página
- 🎬 **Portfolio Interactivo**: Grid de thumbnails con efectos glow en hover

## 🛠️ Tecnologías

- **Framework**: [Next.js 15](https://nextjs.org/)
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS
- **Componentes UI**: shadcn/ui
- **Animaciones**: CSS personalizado + Intersection Observer API
- **Runtime**: Bun

## 📦 Instalación

```bash
# Clonar el repositorio
git clone https://github.com/sobekvisuals/sobek-visuals-landing.git

# Entrar al directorio
cd sobek-visuals-landing

# Instalar dependencias
bun install

# Ejecutar en desarrollo
bun run dev
```

El sitio estará disponible en `http://localhost:3000`

## 🌐 Deployment

### Opción 1: Vercel (Recomendado para Next.js)

1. Crea una cuenta en [Vercel](https://vercel.com)
2. Conecta tu repositorio de GitHub
3. Vercel detectará automáticamente Next.js
4. Click en "Deploy"
5. Configura tu dominio personalizado en Settings → Domains

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/sobekvisuals/sobek-visuals-landing)

### Opción 2: Netlify

1. Crea una cuenta en [Netlify](https://netlify.com)
2. Importa desde GitHub
3. Configuración de build:
   - Build command: `bun run build`
   - Publish directory: `.next`
4. Click en "Deploy site"
5. Configura tu dominio personalizado en Site settings → Domain management

### Opción 3: GitHub Pages + Dominio Personalizado

#### Paso 1: Configurar GitHub Pages
```bash
# Instalar gh-pages
bun add -d gh-pages

# Agregar scripts a package.json
"scripts": {
  "predeploy": "bun run build && touch out/.nojekyll",
  "deploy": "gh-pages -d out -t true"
}
```

Actualizar `next.config.js`:
```js
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  }
}
```

#### Paso 2: Desplegar
```bash
bun run deploy
```

#### Paso 3: Configurar Dominio Personalizado

1. Ve a tu repositorio en GitHub
2. Settings → Pages
3. En "Custom domain", ingresa tu dominio (ej: `sobekvisuals.com`)
4. Guarda

#### Paso 4: Configurar DNS en tu proveedor de dominio

Agrega los siguientes registros DNS:

**Para usar dominio raíz (sobekvisuals.com):**
```
Type: A
Name: @
Value: 185.199.108.153
       185.199.109.153
       185.199.110.153
       185.199.111.153
```

**Para usar www (www.sobekvisuals.com):**
```
Type: CNAME
Name: www
Value: sobekvisuals.github.io
```

**Tiempo de propagación**: 24-48 horas (normalmente más rápido)

## 📁 Estructura del Proyecto

```
sobek-visuals/
├── public/
│   ├── logo/               # Logo de Sobek Visuals
│   ├── thumbnails/         # Portfolio de miniaturas
│   └── loading/           # Imagen de pantalla de carga y favicon
├── src/
│   ├── app/
│   │   ├── layout.tsx     # Layout principal
│   │   ├── page.tsx       # Página principal
│   │   └── globals.css    # Estilos globales
│   └── components/
│       ├── ui/            # Componentes shadcn/ui
│       ├── AnimatedBackground.tsx
│       ├── AnimatedCounter.tsx
│       ├── FloatingParticles.tsx
│       ├── InteractiveCard.tsx
│       ├── LoadingScreen.tsx
│       └── ScrollRevealSection.tsx
└── netlify.toml           # Configuración para Netlify

```

## 🎨 Personalización

### Cambiar imágenes del portfolio
Reemplaza las imágenes en `public/thumbnails/` (thumbnail-1.jpg a thumbnail-6.jpg)

### Actualizar información de contacto
Edita `src/app/page.tsx`:
- WhatsApp: Busca `whatsappNumber`
- Email: Busca `sobekvisuals@gmail.com`
- Instagram: Busca `@sobekvisuals`

### Modificar colores
Los colores principales están en `src/app/globals.css` y `tailwind.config.ts`

## 📞 Contacto

- **WhatsApp**: +34 602 731 218
- **Email**: sobekvisuals@gmail.com
- **Instagram**: [@sobekvisuals](https://www.instagram.com/sobekvisuals/)

## 📄 Licencia

© 2025 Sobek Visuals. All rights reserved.

---

🤖 Generated with [Same](https://same.new)
