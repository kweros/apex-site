# Design System — APEX Power Projects

## 1. Essência da marca

**APEX Power Projects** comunica autoridade técnica, precisão operacional e energia aplicada a contextos de alta exigência.  
O storytelling visual deve equilibrar três ideias centrais:

- **Poder com controle** — a marca atua em ambientes complexos, mas transmite domínio, segurança e previsibilidade.
- **Movimento com método** — há dinamismo, execução e performance, porém sempre com racionalidade.
- **Sofisticação técnica** — o visual deve ser premium, limpo e assertivo, evitando excessos “publicitários” ou linguagem visual genérica de eventos.

### Arquétipo visual
A marca combina:
- **Estratégia e comando**  
- **Energia e ação**
- **Confiança institucional**
- **Performance orientada a resultado**

### Direção de linguagem visual
A interface e os materiais devem parecer:
- sóbrios
- tecnológicos
- robustos
- premium
- claros
- orientados à decisão

Não devem parecer:
- infantis
- excessivamente festivos
- genéricos de agência
- “esportivos demais” sem densidade institucional
- excessivamente ornamentados

---

## 2. Logomarca e assinaturas

### Versões oficiais
Utilizar as três versões fornecidas:

- **Horizontal** — aplicação preferencial em headers, rodapés, propostas, apresentações widescreen e hero section de site.
- **Quadrada** — aplicação institucional para peças verticais, capas, redes sociais e assinaturas destacadas.
- **Ícone** — favicon, avatar, marca d’água, aplicações reduzidas e bullets gráficos.

### Regra de prioridade de uso
1. Horizontal
2. Quadrada
3. Ícone

### Área de proteção
Definir uma área livre equivalente à largura do vértice interno do “A” ao redor de toda a marca.  
Nenhum texto, botão, filete ou elemento decorativo deve invadir essa área.

### Tamanho mínimo sugerido
- Horizontal digital: **160 px** de largura
- Quadrada digital: **96 px** de largura
- Ícone / favicon: **32 px**, **48 px**, **64 px**, **180 px**

### Regras de aplicação
- Preferir uso sobre fundos sólidos.
- Em fundos escuros, usar a versão original.
- Em fundos claros, manter azul petróleo e laranja originais.
- Evitar contornos artificiais, brilhos, bevels, emboss, sombras pesadas ou gradientes não previstos.
- Não distorcer proporção, inclinar ou recompor o símbolo.

---

## 3. Fundamentos de marca para UI e storytelling

## Tom visual
A interface deve contar a história de uma empresa que:
- transforma complexidade em direção
- opera com precisão
- reduz risco
- conduz projetos críticos com energia e controle

## Princípios de composição
1. **Hierarquia forte** — títulos claros, contrastes evidentes, blocos com função nítida.
2. **Espaço como autoridade** — respiro generoso transmite sofisticação.
3. **Contraste funcional** — usar o laranja como força de ação e destaque, não como cor dominante de grandes superfícies.
4. **Estrutura modular** — grids, cartões e seções bem organizadas reforçam método.
5. **Imagem com intenção** — fotos e ilustrações devem sugerir operação, campo, engenharia, mobilidade, performance e comando.

---

## 4. Color system

As cores principais derivam diretamente da logo.

## 4.1 Cores primárias

```css
--apex-blue-900: #1F2C4C;   /* azul petróleo principal da marca */
--apex-orange-500: #ED7507; /* laranja principal da marca */
--apex-white: #FFFFFF;      /* branco puro */
```

## 4.2 Cores secundárias derivadas

### Escala do azul
```css
--apex-blue-950: #141E35;
--apex-blue-900: #1F2C4C;
--apex-blue-800: #2A3A63;
--apex-blue-700: #354A7A;
--apex-blue-600: #51679A;
--apex-blue-500: #7183B0;
--apex-blue-100: #E8EDF7;
--apex-blue-50:  #F5F7FC;
```

### Escala do laranja
```css
--apex-orange-700: #B95A05;
--apex-orange-600: #D56606;
--apex-orange-500: #ED7507;
--apex-orange-400: #F08C31;
--apex-orange-300: #F5AA67;
--apex-orange-200: #F9D2B0;
--apex-orange-100: #FDF1E6;
```

### Neutros de apoio
```css
--apex-neutral-950: #0E1320;
--apex-neutral-900: #161C2B;
--apex-neutral-800: #263146;
--apex-neutral-700: #465066;
--apex-neutral-600: #677086;
--apex-neutral-500: #8D95A6;
--apex-neutral-300: #C9CFD9;
--apex-neutral-200: #DDE2EA;
--apex-neutral-100: #EEF2F7;
--apex-neutral-50:  #F7F9FC;
```

## 4.3 Semântica de uso

### Papéis principais
- **Primary**: azul petróleo
- **Accent / CTA**: laranja
- **Surface base**: branco ou azul muito escuro
- **Text default em fundo claro**: azul 950 / neutral 900
- **Text default em fundo escuro**: branco com opacidade alta

### Cores de feedback
Derivadas para manter coerência visual:

```css
--success: #1E8E5A;
--success-soft: #E8F6EF;

--warning: #D97706;
--warning-soft: #FFF4E5;

--destructive: #C53D2F;
--destructive-soft: #FBEAE7;

--info: #2F6FB2;
--info-soft: #EAF2FB;
```

## 4.4 Regras de uso da cor
- O **azul** deve dominar a identidade.
- O **laranja** deve sinalizar ação, energia e pontos focais.
- O laranja não deve ser usado em excesso em textos longos ou superfícies gigantes.
- Grandes áreas de fundo devem preferir branco, azul escuro ou neutros frios.
- Cards de destaque podem usar filetes, ícones ou badges em laranja.

---

## 5. Tipografia

## Família principal
**Inconsolata**  
Referência oficial: Google Fonts

### Motivo da escolha
A Inconsolata comunica:
- precisão
- técnica
- clareza
- personalidade distinta
- linguagem contemporânea com caráter operacional

Ela reforça a sensação de sistema, comando e confiabilidade.

## Escala tipográfica sugerida

### Display
- **Display XL**: 64 / 72 / 700
- **Display L**: 56 / 64 / 700

### Heading
- **H1**: 48 / 56 / 700
- **H2**: 40 / 48 / 700
- **H3**: 32 / 40 / 700
- **H4**: 26 / 34 / 600
- **H5**: 22 / 30 / 600
- **H6**: 18 / 26 / 600

### Body
- **Body L**: 18 / 30 / 400
- **Body M**: 16 / 28 / 400
- **Body S**: 14 / 24 / 400

### UI
- **Label L**: 16 / 24 / 600
- **Label M**: 14 / 20 / 600
- **Label S**: 12 / 18 / 600
- **Caption**: 12 / 18 / 400
- **Overline**: 11 / 16 / 700, tracking ampliado

## Regras tipográficas
- Títulos: peso 600 ou 700
- Corpo de texto: peso 400
- Labels e botões: peso 600
- Evitar blocos muito longos em caixa alta
- Preferir contrastes de peso e tamanho em vez de muitas variações decorativas

---

## 6. Espaçamento, grid e layout

## 6.1 Escala de espaçamento
Base de 4 px:

```css
--space-1: 4px;
--space-2: 8px;
--space-3: 12px;
--space-4: 16px;
--space-5: 20px;
--space-6: 24px;
--space-8: 32px;
--space-10: 40px;
--space-12: 48px;
--space-16: 64px;
--space-20: 80px;
--space-24: 96px;
--space-32: 128px;
```

## 6.2 Grid
### Desktop
- Container máximo: **1200 px a 1280 px**
- Grid: **12 colunas**
- Gutter: **24 px**
- Margens laterais: **32 px a 64 px**

### Tablet
- Container: **100% com padding lateral de 24 px**
- Grid: **8 colunas**

### Mobile
- Grid: **4 colunas**
- Padding lateral: **16 px**
- Espaçamento vertical generoso entre blocos

## 6.3 Seções
Altura vertical recomendada por bloco:
- pequena: 64–80 px
- média: 96–120 px
- grande: 128–160 px

## 6.4 Princípios de layout
- Alinhamento preferencial à esquerda
- Conteúdo sempre organizado por blocos e sub-blocos
- Máximo de 2 larguras textuais relevantes por seção
- Evitar páginas “cheias demais”
- Priorizar leitura em Z nas páginas institucionais
- Priorizar leitura vertical direta em landing pages

---

## 7. Formas, cantos, bordas e sombras

## Border radius
```css
--radius-sm: 8px;
--radius-md: 12px;
--radius-lg: 16px;
--radius-xl: 20px;
--radius-2xl: 24px;
--radius-full: 999px;
```

### Regra de uso
- Cards padrão: **16 px**
- Botões principais: **12 px ou pill**
- Inputs: **12 px**
- Modais grandes: **20 px**
- Badges: **full**

## Bordas
```css
--border-subtle: 1px solid #DDE2EA;
--border-strong: 1px solid #C9CFD9;
--border-dark: 1px solid rgba(255,255,255,0.12);
```

## Sombras
```css
--shadow-sm: 0 2px 8px rgba(15, 23, 42, 0.06);
--shadow-md: 0 8px 24px rgba(15, 23, 42, 0.08);
--shadow-lg: 0 16px 40px rgba(15, 23, 42, 0.12);
--shadow-xl: 0 24px 64px rgba(15, 23, 42, 0.16);
```

### Regra de uso
- Usar sombras com moderação
- Interfaces premium da APEX dependem mais de contraste, espaçamento e bordas do que de sombras pesadas

---

## 8. Motion e microinterações

## Princípios
- Movimento curto, preciso e funcional
- Nada elástico demais
- Nada “lúdico”
- Sensação de resposta operacional e profissional

## Duração sugerida
- hover simples: **120–160 ms**
- transições padrão: **180–220 ms**
- entrada de modais/drawers: **220–280 ms**

## Easing sugerido
```css
cubic-bezier(0.22, 1, 0.36, 1)
```

## Comportamentos
- Botões: leve elevação ou alteração de brilho/contraste
- Cards: realce sutil de borda e sombra
- Navegação: underlines ou barras indicadoras elegantes
- Formulários: feedback instantâneo de foco, erro e sucesso

---

## 9. Direção de imagem e iconografia

## Fotografia
As imagens devem mostrar:
- operação em campo
- veículos
- engenharia
- capacitação
- infraestrutura
- controle e segurança
- liderança técnica

### Características desejadas
- enquadramentos limpos
- contraste médio a alto
- sensação de robustez
- contexto real de operação
- evitar poses artificiais

## Tratamento
- Preferência por fundos escuros, neutros ou industriais
- Possível uso de overlay azul petróleo em imagens hero
- Laranja apenas como acento gráfico, nunca como filtro dominante

## Ícones
- Estilo linear ou duotone discreto
- Traço consistente
- Sem excesso de detalhes
- Preferência por ícones geométricos e técnicos

Biblioteca recomendada para produto digital:
- **Lucide** (compatível com shadcn)

---

## 10. Tokens para UI

```css
:root {
  --background: #FFFFFF;
  --foreground: #1F2C4C;

  --card: #FFFFFF;
  --card-foreground: #1F2C4C;

  --popover: #FFFFFF;
  --popover-foreground: #1F2C4C;

  --primary: #1F2C4C;
  --primary-foreground: #FFFFFF;

  --secondary: #F5F7FC;
  --secondary-foreground: #1F2C4C;

  --muted: #EEF2F7;
  --muted-foreground: #677086;

  --accent: #ED7507;
  --accent-foreground: #FFFFFF;

  --destructive: #C53D2F;
  --destructive-foreground: #FFFFFF;

  --border: #DDE2EA;
  --input: #DDE2EA;
  --ring: #ED7507;

  --radius: 1rem;
}
```

## Tema escuro
```css
.dark {
  --background: #0E1320;
  --foreground: #F7F9FC;

  --card: #161C2B;
  --card-foreground: #F7F9FC;

  --popover: #161C2B;
  --popover-foreground: #F7F9FC;

  --primary: #F7F9FC;
  --primary-foreground: #1F2C4C;

  --secondary: #263146;
  --secondary-foreground: #F7F9FC;

  --muted: #1B2435;
  --muted-foreground: #C9CFD9;

  --accent: #ED7507;
  --accent-foreground: #FFFFFF;

  --destructive: #E06052;
  --destructive-foreground: #FFFFFF;

  --border: rgba(255,255,255,0.12);
  --input: rgba(255,255,255,0.14);
  --ring: #F08C31;
}
```

---

## 11. Padrões de componentes com shadcn/ui

## 11.1 Botões

### Variantes
- **Primary** — fundo azul petróleo, texto branco
- **Accent** — fundo laranja, texto branco
- **Outline** — fundo transparente, borda azul, texto azul
- **Ghost** — discreto, para áreas secundárias
- **Destructive** — vermelho semântico

### Regras
- Altura padrão: **44 px a 48 px**
- Padding horizontal: **16 px a 20 px**
- Raio: **12 px**
- Peso do texto: **600**
- Hover: pequena alteração de luminosidade e sombra sutil
- Focus: ring laranja ou azul conforme contexto

### Uso
- Primary: CTA institucional
- Accent: conversão e ação destacada
- Outline: ações secundárias
- Ghost: toolbars, tabelas, menus internos

---

## 11.2 Cards

### Estrutura
- `Card`
- `CardHeader`
- `CardTitle`
- `CardDescription`
- `CardContent`
- `CardFooter`

### Estilo recomendado
- Fundo branco
- Borda sutil
- Radius 16 px
- Shadow sm ou md
- Títulos com bom contraste
- Ícones ou marcadores em laranja para destaque pontual

### Tipos de card
- **Institutional Card** — serviços, diferenciais, pilares
- **Metric Card** — indicadores, provas e números
- **Case Card** — clientes, projetos, resultados
- **Action Card** — formulários rápidos, CTA contextual

---

## 11.3 Forms

### Campos
- Inputs com altura **44 px**
- Textarea com mínimo de **120 px**
- Labels sempre visíveis
- Mensagens de ajuda abaixo do campo
- Estados claros: default, focus, error, success, disabled

### Estilo
- Fundo branco
- Borda neutral 200
- Focus com ring laranja
- Placeholder em neutral 500
- Label com peso 600

### Regras UX
- Agrupar campos por contexto
- Máximo de 1 coluna em mobile
- Em desktop, 2 colunas apenas quando o entendimento continuar óbvio
- CTA sempre visível ao final do bloco

---

## 11.4 Badges

### Papéis
- status
- categoria
- segmento
- destaque de métrica

### Estilo
- Badge default: azul suave com texto azul 900
- Badge accent: laranja claro com texto laranja 700
- Badge success/warning/destructive conforme semântica

---

## 11.5 Navbar / Header

### Composição
- logo horizontal à esquerda
- links centrais ou à direita
- CTA principal destacado
- fundo branco ou azul 950
- linha inferior sutil ou sombra mínima

### Comportamento
- sticky opcional
- compactação leve no scroll
- evitar menus poluídos

---

## 11.6 Hero section

### Estrutura
- headline forte
- subheadline objetiva
- prova social ou métricas
- CTA primário
- CTA secundário opcional
- imagem de operação ou composição institucional

### Regras
- máximo impacto sem ruído
- headline curta e dominante
- uso estratégico do laranja em detalhes, números ou CTA

---

## 11.7 Tabelas
- densidade média
- cabeçalho com contraste claro
- linhas com hover sutil
- ações por linha em ghost buttons
- badges para status
- zebra opcional apenas em casos de alta densidade

---

## 11.8 Dialog / Modal / Drawer
- raio 20 px
- fundo limpo
- título forte
- texto objetivo
- footer com ações alinhadas à direita
- evitar modais para conteúdos longos demais

---

## 11.9 Tabs
- usar para segmentar soluções, serviços ou públicos
- indicador azul ou laranja
- labels curtas
- não usar mais de 5 tabs por agrupamento

---

## 11.10 Accordion
Ideal para FAQ, escopo de serviços, diferenciais e compliance.  
Cabeçalho com peso 600 e ícone discreto.

---

## 12. Estrutura de páginas

## 12.1 Landing page institucional
Sequência recomendada:

1. Hero
2. Prova de autoridade
3. Serviços / pilares
4. Diferenciais
5. Casos ou métricas
6. Processo / método
7. CTA
8. FAQ
9. Rodapé institucional

## 12.2 Página de serviço
1. Hero específico
2. Dor do mercado
3. Solução APEX
4. Metodologia
5. Provas / números
6. Casos
7. CTA consultivo

## 12.3 Página de contato
- título objetivo
- formulário enxuto
- contatos diretos
- mapa opcional
- reforço institucional no rodapé

---

## 13. Storytelling por linha de serviço

## Projetos incentivados
Visual:
- mais institucional
- mais estratégico
- mais sóbrio
- foco em credibilidade, agilidade e domínio burocrático

Elementos visuais:
- dashboards, documentação, reuniões executivas, arenas, impacto social

## Test drives e ações automotivas
Visual:
- dinamismo controlado
- performance
- engenharia de experiência
- segurança operacional

Elementos visuais:
- pista, condução, briefing técnico, interação com cliente, veículo em contexto premium

## Treinamentos off road
Visual:
- robustez
- técnica
- terreno
- prontidão
- redução de risco

Elementos visuais:
- frota, instrução prática, solo, infraestrutura crítica, operação em campo

---

## 14. Acessibilidade

- Contraste mínimo AA para texto e componentes
- Não depender apenas da cor para comunicar estado
- Focus visível em todos os componentes interativos
- Alvos clicáveis com pelo menos 44x44 px
- Tipografia com line-height confortável
- Formulários com mensagens claras e associadas aos inputs

---

## 15. Tailwind + shadcn mapping sugerido

## Font
```ts
fontFamily: {
  sans: ["Inconsolata", "ui-monospace", "SFMono-Regular", "monospace"],
}
```

## Radius
```ts
borderRadius: {
  lg: "16px",
  md: "12px",
  sm: "8px",
}
```

## Shadows
```ts
boxShadow: {
  sm: "0 2px 8px rgba(15, 23, 42, 0.06)",
  md: "0 8px 24px rgba(15, 23, 42, 0.08)",
  lg: "0 16px 40px rgba(15, 23, 42, 0.12)",
}
```

## Example color extension
```ts
colors: {
  apex: {
    blue: {
      50: "#F5F7FC",
      100: "#E8EDF7",
      500: "#7183B0",
      600: "#51679A",
      700: "#354A7A",
      800: "#2A3A63",
      900: "#1F2C4C",
      950: "#141E35",
    },
    orange: {
      100: "#FDF1E6",
      200: "#F9D2B0",
      300: "#F5AA67",
      400: "#F08C31",
      500: "#ED7507",
      600: "#D56606",
      700: "#B95A05",
    },
  },
}
```

---

## 16. Regras de consistência

- Todo CTA principal deve ter destaque inequívoco.
- Toda seção deve ter um objetivo claro.
- Toda página deve ter uma leitura progressiva: autoridade → clareza → prova → ação.
- O laranja deve atuar como energia de decisão.
- O azul deve atuar como base de confiança.
- O branco deve atuar como espaço de clareza e sofisticação.

---

## 17. Resumo executivo

O design system da **APEX Power Projects** deve unir:

- **autoridade institucional**
- **energia operacional**
- **precisão técnica**
- **sofisticação contemporânea**

O resultado esperado é uma presença digital e visual que traduza a empresa como uma organização capaz de conduzir projetos complexos com método, segurança, performance e alto padrão de execução.
