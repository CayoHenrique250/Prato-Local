# Prato Local

Guia comunitário para comer bem em Arapiraca (AL) gastando pouco: onde comprar, o que está na época, receitas de aproveitamento, lista de compras com orçamento e informações de alimentação e saúde.

**Projeto de extensão** realizado por **Cayo Henrique da Silva Freitas**, aluno de Análise e Desenvolvimento de Sistemas.

## O que o site faz

- **Início:** mostra onde dá para comprar hoje, o que está na época no mês atual, dicas de economia e o que é a xepa.
- **Onde comprar:** feiras, mercado e sacolões com dia, horário, filtro por tipo, mapa e botão de rota.
- **Receitas:** 8 receitas baratas com ingredientes e modo de preparo, busca, filtros e favoritas. Os ingredientes podem ser enviados para a lista de compras.
- **Lista de compras:** itens com quantidade e preço, total, orçamento da semana e aviso quando o valor passa do limite. Dá para copiar a lista ou enviar por WhatsApp.
- **Saúde:** como montar o prato, temas de alimentação, mito ou verdade e quando procurar o posto de saúde.
- Modo claro e escuro, menu inferior no celular e navegação pelo teclado.

## Arquivos

| Arquivo | Para que serve |
| --- | --- |
| `index.html` | Estrutura e textos fixos das telas |
| `style.css` | Cores, layout e responsividade |
| `script.js` | Dados (locais, receitas, saúde), mapa, lista de compras e interações |

Os três arquivos precisam ficar na mesma pasta.

## Como abrir

Dê dois cliques em `index.html`. É preciso internet, porque o mapa (Leaflet e OpenStreetMap) e as fontes do Google são carregados de fora.

Para testar como servidor local, na pasta do projeto:

```bash
python3 -m http.server 8000
```

e acesse `http://localhost:8000`.

## Como editar o conteúdo

Todo o conteúdo fica no começo do `script.js`:

- `LOCAIS`: feiras, mercado e sacolões. Campos: `nome`, `tipo`, `dias` (0 = domingo até 6 = sábado), `horario`, `lat`/`lng` (deixe `null` se não souber o ponto no mapa), `xepa`, `compra`.
- `RECEITAS`: título, categoria, tempo, ingredientes e passos. O campo opcional `foto` aceita o endereço de uma foto; sem ele, aparece a ilustração da receita.
- `SAFRA`: meses de safra de cada alimento (1 = janeiro até 12 = dezembro).
- `DICAS`, `SAUDE`, `MITOS`: textos das seções correspondentes.

## Como publicar de graça (GitHub Pages)

1. Crie um repositório no GitHub e envie os três arquivos.
2. Em **Settings > Pages**, escolha a branch `main` e a pasta raiz.
3. Aguarde alguns minutos. O endereço aparece na mesma tela.

## Atenção aos dados

- Dias, horários e coordenadas dos locais devem ser confirmados no local. A informação de que a Feira Livre acontece toda segunda-feira vem de matéria da imprensa local; os demais dados vieram do primeiro código do projeto.
- O calendário de safra é uma referência aproximada para o Nordeste.
- O conteúdo de saúde é informativo, baseado no Guia Alimentar para a População Brasileira (Ministério da Saúde) e na OMS, e não substitui orientação de médico ou nutricionista.
- A lista de compras, os favoritos e o tema ficam salvos só no navegador de quem usa (localStorage). Nada é enviado para servidor.

## Tecnologias

HTML, CSS e JavaScript puros, sem frameworks. Mapa com [Leaflet](https://leafletjs.com) e dados do [OpenStreetMap](https://www.openstreetmap.org). Fontes Fraunces e Figtree (Google Fonts).
