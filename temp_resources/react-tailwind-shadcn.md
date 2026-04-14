# APEX — versão React/Tailwind com tokens shadcn

## Objetivo

Este pacote traduz o design system da **APEX Power Projects** para uma base de implementação com:

- tokens de cor, radius, sombras e motion
- mapeamento compatível com `shadcn/ui`
- classes utilitárias semânticas para storytelling da marca
- exemplos de componentes e página demo

## Decisões de implementação

### Base visual
- **Primary** = azul petróleo
- **Accent / CTA** = laranja
- **Surface default** = branco
- **Surface dark / hero** = azul profundo
- **Typography** = Inconsolata via `--font-inconsolata`

### Estratégia
- tokens principais definidos em `app/globals.css`
- uso de `hsl(var(--token))` para integração nativa com shadcn
- extensão Tailwind para paleta nominal `apex.*`
- componentes expressam a narrativa institucional da marca

## Classes semânticas incluídas

- `.apex-section`
- `.apex-shell`
- `.apex-eyebrow`
- `.apex-kicker-dark`
- `.apex-display`
- `.apex-heading`
- `.apex-subheading`
- `.apex-card`
- `.apex-card-hover`
- `.apex-panel-dark`
- `.apex-metric`
- `.apex-grid-hero`
- `.text-gradient-apex`
- `.bg-apex-radial`
- `.ring-focus-apex`

## Componentes de referência

- `HeroApex`
- `SectionHeading`
- `ServiceCard`
- `MetricCard`

## Como plugar no projeto

1. Copie `app/globals.css`
2. Substitua ou una com seu `tailwind.config.ts`
3. Configure a Inconsolata no `layout.tsx`
4. Garanta que os componentes do shadcn estejam disponíveis
5. Use os componentes de referência como base para a landing institucional

## Observação

Os arquivos foram pensados para **Next.js + Tailwind + shadcn/ui**, mas os tokens podem ser reutilizados em qualquer stack React.
