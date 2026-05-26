# Bvyon Marketing — Dirección Estratégica

> **Versión:** v3 (incorpora realidad operativa del freelancer: part-time, 2 proyectos max, ejecución propia).
> **Estatus:** Aprobada por el board.
> **Issue de origen:** MET-148 — Optimización GOALS, Cerebro.
> **Última actualización:** 2026-05-26.

---

## 1. Contexto

Bvyon Marketing operaba bajo posicionamiento "agencia 360 zona norte de Chile". El board redefinió la realidad operativa:

1. El operador es un **freelancer de marketing**, no una agencia tradicional.
2. Portafolio modular: **automatización, planificación estratégica digital, sitios web** y servicios adyacentes.
3. Mercado objetivo: **PYMEs y emprendimientos en todo Chile** (no solo zona norte).
4. **El freelancer genera sus propios leads.** El equipo NO hace prospección ni captación — su trabajo arranca cuando el freelancer entrega un proyecto ya cerrado.
5. **Investigación de mercado obligatoria** al inicio de cada proyecto entregado.
6. **Entrega cross-funcional** — todos los miembros del equipo se activan según su expertise en cada proyecto entregado.

Los 20 goals originales fueron diseñados para un modelo agencia genérico. Son operacionales ("Mantener X funcionando") y no reflejan ni el modelo freelance, ni el research-first mandate, ni el protocolo cross-funcional.

---

## 1b. Realidad Operativa del Freelancer (v3 — crítico)

> Esta sección define cómo opera realmente el freelancer. Todo agente debe leerla antes de tomar cualquier decisión de ejecución.

**Capacidad:**
- El freelancer tiene un **trabajo a tiempo completo** (clínica). Bvyon es su actividad freelance en tiempo libre.
- Capacidad activa: **máximo 2 proyectos simultáneos** en cualquier momento.
- Volumen bajo → cada proyecto cuenta. No hay margen para re-trabajo.

**División real del trabajo:**

| Tarea | ¿Quién la hace? |
|-------|----------------|
| Ejecución operativa (ads, contenido, desarrollo, etc.) | **El freelancer directamente** |
| Automatización y planificación estratégica | **Conjunto** — freelancer + agentes como co-pilotos |
| Análisis de datos y reporting | **Agentes** con sus herramientas |
| Investigación de mercado inicial | **Agentes** (ResearchExpert gatekeeper) |

**Las especialidades técnicas del freelancer:**
- Automatización (n8n como herramienta principal)
- Estrategias SEO
- Paid Ads (Google Ads + Meta Ads)
- Sitios web completos: frontend, backend, base de datos, funciones avanzadas

**Stack de herramientas actual:**
- Automatización: **n8n**
- Ads: **Google Ads**, **Meta Ads**
- Analytics: **Search Console**, **Google Analytics 4**
- CMS/Web: **WordPress** (clientes), **Next.js** (proyectos avanzados)
- SEO Research: **Ubersuggest**, **AnswerThePublic**
- Storage/Collab: **Google Drive**
- IA: **Claude Code** (suscripción Max — uso personal y empresarial)

**Implicaciones para los agentes:**
- Los agentes NO ejecutan en nombre del freelancer. **Son co-pilotos, no ejecutores.**
- En Stage 4 los agentes entregan recomendaciones, drafts, análisis y automatizaciones listas para revisar — el freelancer decide e implementa.
- Priorizar velocidad de entrega ligera sobre procesos pesados. Con 2 proyectos max, el protocolo debe ser ágil, no burocrático.
- Cualquier automatización sugerida debe ser implementable en **n8n** preferentemente.

---

## 2. Visión (North Star)

> **Apoyar al freelancer en entregar proyectos de marketing digital (estrategia, automatización, web) a PYMEs y emprendimientos en Chile con investigación de mercado obligatoria al inicio, ejecución cross-funcional y resultados que generen retención y referidos.**

---

## 3. Pilares Estratégicos

### P1. Excelencia en Entrega (Research-First)
Cada proyecto entregado por el freelancer sigue el Protocolo Kickoff: Handoff → Market Research (gate) → Brief Estratégico → Plan Cross-Funcional → Ejecución → Optimización.

KPIs: cumplimiento del protocolo (100%), tiempo desde handoff a Stage 2, NPS cliente, KPIs específicos por cliente vs. baseline del research.

### P2. Retención & Expansión
Mantener clientes existentes contentos, identificar oportunidades de upsell y cross-sell dentro de la cuenta. **NO incluye prospección de nuevos leads** — esa es responsabilidad exclusiva del freelancer.

KPIs: churn (mensual y anual), expansión revenue (MRR upsell por cuenta), referidos generados por satisfacción, % de clientes que renuevan.

### P3. Confiabilidad Operacional
Sitios, automatizaciones e integraciones del cliente y propios funcionan sin fricción.

KPIs: uptime de entregables, tiempo de respuesta a incidentes, tickets cerrados a tiempo, postura de seguridad.

### P4. Márgenes Sostenibles
Rentabilidad por proyecto entregado: margen bruto saludable, % facturable alto, baja rework.

KPIs: margen bruto por proyecto, horas no facturables como % del total, costo por entregable.

---

## 4. Principios Operacionales

1. **Research-First Mandate** — Ningún proyecto avanza más allá del Stage 1 sin el "Market Intelligence Brief" aprobado por CEO + CMO.
2. **Kickoff Cross-Funcional** — Todo proyecto dispara una checklist que involucra a research, estrategia, creativo, técnico y account según corresponda.
3. **AccountManager = Owner Único Post-Handoff** — Una vez el freelancer entrega un proyecto, AccountManager es el único dueño de la relación con el cliente y orquesta la entrega multi-área.
4. **El freelancer es la fuente de leads** — El equipo no busca clientes nuevos. El trabajo comienza con el handoff de un proyecto cerrado.
5. **Freelance Brand First** — Toda comunicación interna y externa refleja el modelo freelance / consultoría boutique, nunca "agencia 360".
6. **Chile-Wide, no solo norte** — Mercado objetivo es todo Chile; el research del proyecto define el foco geográfico fino.

---

## 5. Protocolo de Kickoff de Proyecto (obligatorio)

```
Stage 0 — Handoff
   Trigger: el freelancer entrega un proyecto cerrado al equipo.
   Owner: AccountManager
   Input del freelancer: cliente, alcance, presupuesto, fechas clave, info de contacto.
   Output: parent issue "Project: {Cliente}" + brief de discovery interno.

Stage 1 — Market Intelligence  ⛔ GATE
   Owner: ResearchExpert (+ DataScientist para datos cuantitativos)
   Output: Market Intelligence Brief
     · análisis del mercado chileno objetivo
     · competencia directa e indirecta
     · audiencia (ICPs, segmentos, jobs-to-be-done)
     · oportunidades y riesgos
     · benchmarks cuantitativos (CAC, CPL, CR, ROAS típicos del sector)
   Aprobación requerida: CEO + CMO antes de Stage 2.

Stage 2 — Strategic Brief
   Owner: CMO
   Output: posicionamiento, narrativa, mezcla de canales,
           hipótesis de crecimiento, KPIs por fase.

Stage 3 — Cross-Functional Plan
   Owners: CMO + CTO + UXDesigner + CreativeExpert + AccountManager
   Output: plan integrado con responsables, fechas y entregables.

Stage 4 — Execution (co-piloto, no ejecución autónoma)
   El freelancer ejecuta. Los agentes entregan:
   · Drafts de contenido, copy, diseño para revisión
   · Automatizaciones (n8n) listas para importar y revisar
   · Configuraciones de ads, SEO, analytics para aplicar
   · Análisis de performance con recomendaciones priorizadas
   AccountManager comunica avances al cliente semanalmente.

Stage 5 — Optimization & Reporting
   Owners: DataScientist + CROExpert
   Output: reporte de KPIs vs. baseline del research,
           ajustes de optimización continua.
```

---

## 6. Restructure de los 20 Goals

### Nivel Compañía

| # | Goal | Estado |
|---|---|---|
| 1 | **NEW:** "Apoyar al freelancer en la entrega de proyectos de marketing digital (estrategia, automatización, web) a PYMEs y emprendimientos en Chile, con investigación de mercado obligatoria al inicio y ejecución cross-funcional que maximice retención y referidos." | Reemplaza top goal "agencia 360 zona norte" |

### Liderazgo

| Owner | NEW Goal |
|---|---|
| **CMO** (fd2cd4e3) | Liderar la estrategia digital de cada proyecto entregado desde el research inicial hasta la entrega, asegurando que el equipo cross-funcional correcto se active y que cada cliente supere los KPIs definidos en el brief. |
| **CTO** (25baa2a9) | Liderar la entrega técnica de proyectos (sitios web, automatizaciones, integraciones) garantizando timeline, calidad, mantenimiento post-lanzamiento y postura de seguridad. |
| **CFO** (8fd0b528) | Proteger la rentabilidad por proyecto entregado: monitorear margen por engagement, costos por entregable y mantener el runway del freelance saludable. |
| **AccountManager** (23d848df) | Recibir el handoff de cada proyecto desde el freelancer y ser el dueño único de la relación con el cliente: orquestar el kickoff cross-funcional, asegurar el research inicial, comunicar avances, y proteger retención + expansión dentro de la cuenta. |

### Marketing & Performance (bajo CMO)

| Owner | NEW Goal |
|---|---|
| **PaidMediaManager** (43de1db4) | Diseñar y ejecutar pauta pagada (Meta/Google/TikTok) para cada cliente, basada en la investigación de mercado, con ROAS superior al benchmark del sector y optimización continua. |
| **SEOSpecialist** (773af211) | Posicionar a cada cliente en búsquedas orgánicas relevantes a su mercado (local o nacional según el research), maximizando tráfico calificado y autoridad de dominio. |
| **EmailMarketing** (221f2c9c) | Diseñar flujos de email y automatización de nurturing on-brand para cada cliente, manteniendo deliverability >98% y mejorando conversión cohort sobre cohort. |
| **CROExpert** (c9a06f67) | Optimizar tasas de conversión en sitios y funnels de clientes con experimentación basada en datos, partiendo del baseline definido en el research inicial. |
| **CreativeExpert** (ec5c78e1) | Dirigir la línea creativa de cada proyecto (visual + conceptual) garantizando consistencia de marca y diferenciación frente a la competencia identificada en el research. |
| **Copywriter** (25c9d808) | Escribir copy persuasivo en español de Chile, on-brand y por canal, calibrado al tono y arquetipo definidos en el research del cliente. |
| **CommunityManager** (5eeea765) | Construir y gestionar comunidades de cliente en redes sociales con engagement consistente y voz alineada al brief estratégico. |
| **UXDesigner** (7545a886) | Diseñar experiencias UX/UI para sitios y funnels de cliente que maximicen conversión, refuercen identidad de marca y respondan a la investigación de audiencia. |
| **ResearchExpert** (d09dc0db) | **GATEKEEPER del research.** Entregar el Market Intelligence Brief obligatorio al inicio de cada proyecto entregado por el freelancer: mercado chileno, competencia, audiencia, oportunidades. Sin este documento aprobado, ningún proyecto avanza a entrega. |
| **DataScientist** (e03017e4) | Analizar datos de proyectos en curso para identificar oportunidades de optimización, alimentar el research inicial con benchmarks cuantitativos y reportar KPIs a cliente. |

### Ingeniería (bajo CTO)

| Owner | NEW Goal |
|---|---|
| **APISpecialist** (ffb61c09) | Construir y mantener las automatizaciones e integraciones de marketing que Bvyon entrega como servicio (Make/n8n/Zapier, CRM, APIs de cliente) con confiabilidad operativa. |
| **BackendDev** (fd5962a7) | Construir el backend de los sitios y herramientas internas de Bvyon que soportan la entrega freelance, con énfasis en automatizaciones server-side y APIs de cliente. |
| **FrontendDev** (20480379) | Implementar los sitios web de clientes con stack moderno (Next.js/Tailwind), Core Web Vitals en verde, accesibilidad y SEO técnico desde el día uno. |
| **DatabaseArchitect** (811daad2) | Diseñar la capa de datos de cada proyecto (cliente o interno) priorizando simplicidad, costo bajo y trazabilidad analítica. |
| **SecurityEngineer** (3edcf31b) | Proteger los datos de clientes y la postura de seguridad de los entregables Bvyon (sitios, automatizaciones, CRM, credenciales), cumpliendo buenas prácticas y normativa chilena aplicable. |

---

## 7. Lo que NO hace el equipo

- **Generar leads / prospección** — responsabilidad exclusiva del freelancer.
- **Cerrar ventas con prospectos** — el freelancer entrega proyectos ya cerrados.
- **Definir precios** — el freelancer negocia con cada cliente; CFO solo monitorea rentabilidad ex-post.

---

## 8. Cambios Operativos Inmediatos

1. **Reescribir los 20 goals** vía API con los textos de la sección 6.
2. **Actualizar instructions** de cada agente (`AGENTS.md` en su carpeta) para que:
   - Conozcan el Protocolo de Kickoff y el Research-First Mandate.
   - Sepan en qué stages participan.
   - Tengan el goal nuevo visible.
3. **Actualizar AGENTS.md del repo** con la nueva posicionamiento + Kickoff Protocol (auto-cargado por CLAUDE.md).
4. **Protocolo Stage 0 = Handoff del freelancer** — no Intake/prospección.
5. **ResearchExpert** recibe poder de gatekeeping: nada avanza sin su Brief.

---

## 9. Lo que NO se cambia en esta ronda

- La estructura jerárquica del equipo (chain of command).
- El número de agentes.
- Pricing concreto, contratos, branding visual.
