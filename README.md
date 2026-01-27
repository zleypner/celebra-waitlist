# Celebra Waitlist - Pre-Lanzamiento Premium (Next.js)

Waitlist de pre-lanzamiento diseñada para empresas organizadoras de eventos (bodas, quinceañeras, celebraciones especiales).

## 🎯 Objetivo

Lograr que empresas organizadoras de eventos:
- Perciban **exclusividad**
- Sientan que **llegaron antes que el resto**
- Dejen **Email + WhatsApp**
- Entiendan que el acceso es **limitado y curado**

## 🧠 Posicionamiento

- Marca **premium**
- Experiencia **elegante**
- No masiva
- No urgente-agresiva
- **Selectiva y anticipada**

## 🚀 Tech Stack

- **Next.js 15.5.7** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS 4**
- **Framer Motion** (para animaciones)

## 📁 Estructura

```
celebra-waitlist/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── waitlist/
│   │   │       └── route.ts      # API endpoint para formulario
│   │   ├── layout.tsx            # Layout principal
│   │   ├── page.tsx              # Página principal
│   │   └── globals.css           # Estilos globales
│   └── components/
│       ├── Hero.tsx              # Sección hero
│       ├── ValueSection.tsx      # Sección de valor
│       ├── ExclusivitySection.tsx # Sección de exclusividad
│       ├── FormSection.tsx       # Formulario de waitlist
│       ├── CTAsSection.tsx       # CTAs secundarios
│       └── SuccessMessage.tsx   # Mensaje de éxito
├── public/
│   └── assets/
│       └── celebralogo.png       # Logo de Celebra
├── package.json
├── tsconfig.json
├── next.config.ts
├── tailwind.config.js
└── README.md
```

## 🚀 Instalación y Uso

1. **Instalar dependencias:**
```bash
npm install
```

2. **Copiar el logo:**
```bash
cp assets/celebralogo.png public/assets/
```

3. **Ejecutar en desarrollo:**
```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:3001`

4. **Build para producción:**
```bash
npm run build
npm start
```

## 🔧 Configuración Backend

El endpoint API está en `src/app/api/waitlist/route.ts`. Actualmente solo registra los datos en consola. Para integrar con tu backend:

1. **Opción 1: Guardar en base de datos**
```typescript
// Ejemplo con Prisma
import { prisma } from '@/lib/prisma';
await prisma.waitlist.create({
  data: { email, whatsapp, timestamp, source }
});
```

2. **Opción 2: Enviar a servicio externo**
```typescript
// Ejemplo con servicio de email
await fetch('https://api.tu-servicio.com/waitlist', {
  method: 'POST',
  body: JSON.stringify({ email, whatsapp })
});
```

3. **Opción 3: Integrar con WhatsApp API**
```typescript
// Enviar notificación automática
await sendWhatsAppMessage(whatsapp, 'Gracias por registrarte...');
```

## 📝 Copy & Psicología

### Disparadores Psicológicos Implementados:

1. **FOMO Sutil**: "Cada semana más organizadores se están sumando"
2. **Exclusividad**: "No abrimos para todos al mismo tiempo"
3. **Social Proof**: "Algunos organizadores ya están en lista"
4. **Authority**: "Sistema probado. Proceso claro"
5. **Value Framing**: "Menos caos, más control"
6. **Objection Handling**: "No necesitás cambiar tu forma de trabajar"

## 🎨 Características

- ✅ Diseño premium y elegante
- ✅ Responsive (mobile-first)
- ✅ Copy optimizado para conversión
- ✅ Múltiples CTAs estratégicos
- ✅ Formulario Email + WhatsApp con validación
- ✅ Mensaje de éxito post-submit
- ✅ Animaciones sutiles on-scroll
- ✅ TypeScript para type safety
- ✅ API Route para manejo del formulario
- ✅ Tono: Cercano, elegante, seguro, aspiracional

## 📱 Próximos Pasos

- [ ] Integrar con base de datos (Prisma/PostgreSQL)
- [ ] Configurar automatización WhatsApp post-registro
- [ ] Añadir analytics (Google Analytics, Vercel Analytics)
- [ ] Implementar A/B testing en CTAs
- [ ] Añadir pixel de Facebook/Instagram para remarketing
- [ ] Configurar email automático de confirmación
- [ ] Añadir rate limiting al endpoint API

## 🔒 Variables de Entorno

Crea un archivo `.env.local` si necesitas configurar variables:

```env
# Ejemplo
DATABASE_URL=postgresql://...
WHATSAPP_API_KEY=...
EMAIL_SERVICE_API_KEY=...
```

## 📄 Licencia

ISC
