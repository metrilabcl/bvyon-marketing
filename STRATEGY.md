# Bvyon Marketing — Dirección Estratégica

> **Estatus:** Propuesta CEO pendiente de aprobación del board.
> **Issue de origen:** MET-148 — Optimización GOALS, Cerebro.
> **Fecha:** 2026-05-26.

---

## 1. Contexto

Bvyon Marketing operaba bajo posicionamiento "agencia 360 zona norte de Chile". El board redefinió la realidad operativa:

1. El operador es un **freelancer de marketing**, no una agencia tradicional.
2. Portafolio modular: **automatización, planificación estratégica digital, sitios web** y servicios adyacentes.
3. Mercado objetivo: **PYMEs y emprendimientos en todo Chile** (no solo zona norte).
4. **Investigación de mercado obligatoria** al inicio de cada proyecto.
5. **Entrega cross-funcional** — todos los miembros del equipo se activan según su expertise en cada proyecto nuevo.

Los 20 goals actuales fueron diseñados para un modelo agencia genérico. Son operacionales ("Mantener X funcionando") y no reflejan ni el modelo freelance, ni el research-first mandate, ni el protocolo cross-funcional.

---

## 2. Visión (North Star)

> **Ser el freelancer de marketing digital de referencia en Chile para PYMEs y emprendimientos, con un portafolio modular (estrategia, automatización, web) ejecutado con investigación de mercado al inicio de cada proyecto y orquestación cross-funcional del equipo.**

---

## 3. Pilares Estratégicos

### P1. Pipeline & Adquisición
Generar consultas calificadas de PYMEs y emprendimientos chilenos. Posicionar a Bvyon como el freelancer de referencia.

KPIs: leads calificados/mes, tasa de cierre, CAC, share of voice en búsquedas "freelance marketing Chile".

### P2. Excelencia en Entrega (Research-First)
Cada proyecto sigue el protocolo Kickoff: Market Research → Brief Estratégico → Plan Cross-Funcional → Ejecución → Optimización.

KPIs: cumplimiento del protocolo (100%), NPS cliente, KPIs específicos por cliente vs. baseline del research.

### P3. Confiabilidad Operacional
Sitios, automatizaciones e integraciones del cliente y propios funcionan sin fricción.

KPIs: uptime de entregables, tiempo de respuesta a incidentes, tickets cerrados a tiempo.

### P4. Márgenes Sostenibles
Precios competitivos para el mercado chileno y rentabilidad por proyecto.

KPIs: margen bruto por proyecto, % horas facturables, runway personal del freelance.

---

## 4. Principios Operacionales

1. **Research-First Mandate** — Ningún proyecto avanza más allá del Stage 1 sin el "Market Intelligence Brief" aprobado por CEO + CMO.
2. **Kickoff Cross-Funcional** — Todo proyecto dispara una checklist que involucra a research, estrategia, creativo, técnico y account según corresponda.
3. **AccountManager = Owner Único** — Cada cliente tiene un único dueño de relación que orquesta la entrega multi-área.
4. **Freelance Brand First** — Toda comunicación externa refleja el modelo freelance / consultoría boutique, nunca "agencia 360".
5. **Chile-Wide, no solo norte** — El mercado objetivo es todo Chile; el research del proyecto define el foco geográfico fino.

---

## 5. Protocolo de Kickoff de Proyecto (obligatorio)

```
Stage 0 — Intake
   Owner: AccountManager
   Output: parent issue "Project: {Cliente}" + brief de discovery

Stage 1 — Market Intelligence  ⛔ GATE
   Owner: ResearchExpert (+ DataScientist para datos cuantitativos)
   Output: Market Intelligence Brief
     · análisis del mercado chileno objetivo
     · competencia directa e indirecta
     · audiencia (ICPs, segmentos, jobs-to-be-done)
     · oportunidades y riesgos
     · benchmarks cuantitativos (CAC, CPL, CR, ROAS típicos del sector)
   Aprobación requerida: CEO + CMO antes de Stage 2

Stage 2 — Strategic Brief
   Owner: CMO
   Output: posicionamiento, narrativa, mezcla de canales,
           hipótesis de crecimiento, KPIs por fase

Stage 3 — Cross-Functional Plan
   Owners: CMO + CTO + UXDesigner + CreativeExpert + AccountManager
   Output: plan integrado con responsables, fechas y entregables

Stage 4 — Execution
   Subtasks fan out a especialistas según su goal.
   AccountManager actualiza cliente semanal.

Stage 5 — Optimization & Reporting
   Owners: DataScientist + CROExpert
   Output: reporte de KPIs vs. baseline del research,
           ajustes de optimización continua
```

---

## 6. Restructure de los 20 Goals

### Nivel Compañía

| # | Goal | Estado |
|---|---|---|
| 1 | **NEW:** "Ser el freelancer de marketing digital de referencia en Chile para PYMEs y emprendimientos, con portafolio modular (estrategia, automatización, web) y entrega cross-funcional con investigación de mercado al inicio de cada proyecto." | Reemplaza top goal "agencia 360 zona norte" |

### Liderazgo

| Owner | NEW Goal |
|---|---|
| **CMO** (fd2cd4e3) | Liderar la estrategia digital de cada cliente desde el research inicial hasta la entrega, asegurando que cada proyecto active al equipo cross-funcional correcto y supere el benchmark del sector en los KPIs definidos. |
| **CTO** (25baa2a9) | Liderar la entrega técnica de proyectos (sitios web, automatizaciones, integraciones) garantizando timeline, calidad, mantenimiento post-lanzamiento y postura de seguridad. |
| **CFO** (8fd0b528) | Proteger la rentabilidad por proyecto: definir pricing competitivo para el mercado chileno, monitorear margen por engagement y mantener el runway del freelance saludable. |
| **AccountManager** (23d848df) | Ser el dueño único de la relación con cada cliente: calificar consultas entrantes, orquestar el kickoff cross-funcional, asegurar el research inicial, comunicar avances y proteger retención + expansión. |

### Marketing & Performance (bajo CMO)

| Owner | NEW Goal |
|---|---|
| **PaidMediaManager** (43de1db4) | Diseñar y ejecutar pauta pagada (Meta/Google/TikTok) basada en la investigación de mercado del cliente, con ROAS superior al benchmark del sector y optimización continua. |
| **SEOSpecialist** (773af211) | Posicionar a clientes en búsquedas orgánicas relevantes a su mercado (local o nacional según el research), maximizando tráfico calificado y autoridad de dominio. |
| **EmailMarketing** (221f2c9c) | Diseñar flujos de email y automatización de nurturing on-brand para cada cliente, manteniendo deliverability >98% y mejorando conversión cohort sobre cohort. |
| **CROExpert** (c9a06f67) | Optimizar tasas de conversión en sitios y funnels de clientes mediante experimentación basada en datos, partiendo del baseline definido en el research inicial. |
| **CreativeExpert** (ec5c78e1) | Dirigir la línea creativa de cada proyecto (visual + conceptual) garantizando consistencia de marca y diferenciación frente a la competencia identificada en el research. |
| **Copywriter** (25c9d808) | Escribir copy persuasivo en español de Chile, on-brand y por canal, calibrado al tono y arquetipo definidos en el research del cliente. |
| **CommunityManager** (5eeea765) | Construir y gestionar comunidades de cliente en redes sociales con engagement consistente y voz alineada al brief estratégico. |
| **UXDesigner** (7545a886) | Diseñar experiencias UX/UI para sitios y funnels de cliente que maximicen conversión, refuercen identidad de marca y respondan a la investigación de audiencia. |
| **ResearchExpert** (d09dc0db) | **GATEKEEPER del research.** Entregar el Market Intelligence Brief obligatorio al inicio de cada proyecto: mercado chileno, competencia, audiencia, oportunidades. Sin este documento aprobado, ningún proyecto avanza a entrega. |
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

## 7. Cambios Operativos Inmediatos (al aprobar)

1. **Reescribir los 20 goals** vía API con los textos de la sección 6.
2. **Actualizar instructions** de cada agente (`AGENTS.md` en su carpeta) para que:
   - Conozcan el Protocolo de Kickoff y el Research-First Mandate.
   - Sepan en qué stages participan.
   - Tengan el goal nuevo visible como referencia rápida.
3. **AGENTS.md del repo** — agregar nota: posicionamiento freelance + research-first.
4. **AccountManager** recibe nueva responsabilidad: ser intake de leads + orquestador de Stage 0–1.
5. **ResearchExpert** recibe poder de gatekeeping: nada avanza sin su Brief.
6. **Plantilla "Project Kickoff"** — issue template con los 6 stages como subtasks predefinidas.

---

## 8. Lo que NO se cambia en esta ronda

- La estructura jerárquica del equipo (chain of command). Se evalúa por separado.
- El número de agentes. 20 es generoso para un freelance, pero podar antes de validar es prematuro.
- Pricing concreto, contratos, branding visual. Tareas separadas.

---

## 9. Preguntas para el Board

1. ¿Apruebas el reemplazo del top goal y la reescritura de los 20 goals según sección 6?
2. ¿Apruebas el Protocolo de Kickoff (sección 5) como obligatorio?
3. ¿Apruebas que ResearchExpert tenga poder de gatekeeping sobre el inicio de cada proyecto?
4. ¿Hay algún servicio adicional que quieras explicitar en el portafolio (e.g. consultoría, formación, growth hacking)?
