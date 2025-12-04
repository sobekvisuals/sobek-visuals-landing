# Cómo Actualizar las Miniaturas del Portfolio

## 📍 Ubicación del Archivo
Las miniaturas están en: `sobek-visuals/src/app/page.tsx`

## 🔍 Encontrar la Sección de Portfolio

Busca en el archivo la sección que comienza con:
```typescript
{[
  {
    title: "Digital Marketing Agency",
    metric: "+42% CTR",
    image: "https://placehold.co/1280x720/1a1f35/22d3ee?text=Thumbnail+1&font=roboto",
  },
```

## ✏️ Cómo Reemplazar las Imágenes

Tienes **2 opciones** para actualizar las miniaturas:

### Opción 1: Usar URLs de Imágenes en Internet
Reemplaza la URL del placeholder con la URL de tu miniatura:

```typescript
{
  title: "Tu Título",
  metric: "+50% CTR",
  image: "https://tu-imagen.com/miniatura.jpg",
},
```

### Opción 2: Subir Imágenes al Proyecto (Recomendado)

1. **Sube tus imágenes** a la carpeta: `sobek-visuals/public/thumbnails/`
   - Nombra tus archivos: `thumbnail-1.jpg`, `thumbnail-2.jpg`, etc.

2. **Actualiza las rutas** en el código:
```typescript
{
  title: "Digital Marketing Agency",
  metric: "+42% CTR",
  image: "/thumbnails/thumbnail-1.jpg",
},
{
  title: "Business Strategy",
  metric: "+35% CTR",
  image: "/thumbnails/thumbnail-2.jpg",
},
```

## 📝 Personalizar Título y Métrica

Puedes cambiar el título y la métrica de cada miniatura:

```typescript
{
  title: "Canal de Finanzas",  // ← Cambia esto
  metric: "+55% CTR",           // ← Y esto
  image: "/thumbnails/finanzas.jpg",
},
```

## 🎨 Ejemplo Completo

```typescript
{[
  {
    title: "Canal Tech",
    metric: "+60% CTR",
    image: "/thumbnails/tech-channel.jpg",
  },
  {
    title: "Marketing Digital",
    metric: "+45% CTR",
    image: "/thumbnails/marketing.jpg",
  },
  {
    title: "Finanzas Personales",
    metric: "+50% CTR",
    image: "/thumbnails/finanzas.jpg",
  },
  {
    title: "Emprendimiento",
    metric: "+55% CTR",
    image: "/thumbnails/emprendimiento.jpg",
  },
  {
    title: "Productividad",
    metric: "+48% CTR",
    image: "/thumbnails/productividad.jpg",
  },
  {
    title: "LinkedIn Growth",
    metric: "+52% CTR",
    image: "/thumbnails/linkedin.jpg",
  },
]
```

## 📐 Tamaño Recomendado de Imágenes

- **Ancho:** 1280px
- **Alto:** 720px
- **Formato:** JPG, PNG, o WebP
- **Peso:** Máximo 500KB para mejor rendimiento

## ⚠️ Importante

- Asegúrate de que las imágenes tengan **buena calidad**
- Usa el mismo **formato de aspecto** (16:9) para todas
- Optimiza las imágenes antes de subirlas para mejor velocidad de carga

## 🔄 Después de Hacer Cambios

1. Guarda el archivo `page.tsx`
2. El servidor se recargará automáticamente
3. Verás tus nuevas miniaturas en la vista previa
