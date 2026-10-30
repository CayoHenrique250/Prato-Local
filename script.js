"use strict";

const MESES = [
  "Jan",
  "Fev",
  "Mar",
  "Abr",
  "Mai",
  "Jun",
  "Jul",
  "Ago",
  "Set",
  "Out",
  "Nov",
  "Dez",
];

const LOCAIS = [
  {
    id: "mercado-publico",
    nome: "Mercado Público de Arapiraca",
    tipo: "Mercado",
    lat: -9.749,
    lng: -36.661,
    dias: [1, 2, 3, 4, 5, 6],
    horario: "Segunda a sábado, de manhã até o meio da tarde",
    xepa: "Aos sábados, depois do meio-dia, as bancas do fundo costumam baixar o preço de tomate, cebola e folhas.",
    compra: "Verduras, frutas, farinha, temperos, carnes e ovos.",
    busca: "Mercado Público de Arapiraca AL",
  },
  {
    id: "feira-livre",
    nome: "Feira Livre de Arapiraca",
    tipo: "Feira",
    lat: null,
    lng: null,
    dias: [1],
    horario: "Toda segunda-feira",
    xepa: "No fim da feira vale pedir desconto em frutas e verduras que não duram até a semana seguinte.",
    compra:
      "Frutas, verduras, legumes, hortaliças, roupas, utensílios e comida pronta.",
    busca: "Feira livre Arapiraca AL",
  },
  {
    id: "feira-fumageira",
    nome: "Feira da Fumageira",
    tipo: "Feira",
    lat: -9.7598,
    lng: -36.6648,
    dias: [0],
    horario: "Domingo, a partir das 6h",
    xepa: "Domingo, por volta das 11h, as frutas regionais costumam ter desconto.",
    compra: "Frutas regionais, macaxeira, feijão verde e hortaliças.",
    busca: "Feira da Fumageira Arapiraca AL",
  },
  {
    id: "sacolao-primavera",
    nome: "Sacolão Primavera",
    tipo: "Sacolão",
    lat: -9.7545,
    lng: -36.6542,
    dias: [1, 2, 3, 4, 5, 6],
    horario: "Segunda a sábado, horário comercial",
    xepa: "Na “Quarta Verde” o hortifrúti costuma ter 20% de desconto.",
    compra: "Hortifrúti, ovos e mercearia básica.",
    busca: "Sacolão Primavera Arapiraca AL",
  },
];

const DICAS = [
  [
    "Vá no fim da feira",
    "Perto do fechamento, muitas bancas baixam o preço do que é perecível. Compre o que vai usar em até 2 dias.",
  ],
  [
    "Pesquise em 3 bancas",
    "Anote o preço na lista de compras. A diferença entre bancas, para o mesmo item, passa fácil de 30%.",
  ],
  [
    "Compre o que está na época",
    "Quando tem muito de um alimento, o preço cai. A tabela acima mostra o que está em alta.",
  ],
  [
    "Decida o cardápio antes",
    "Saber o que vai cozinhar nos próximos dias evita compra por impulso e comida estragando na geladeira.",
  ],
  [
    "Use o alimento inteiro",
    "Talos, folhas e várias cascas, bem lavados, dão refeição. Veja as receitas de aproveitamento.",
  ],
  [
    "Prefira grãos e raízes a granel",
    "Feijão, arroz, milho e farinha vendidos a granel costumam ser mais baratos que o pacote pequeno.",
  ],
];

const SAFRA = [
  { n: "Manga", m: [10, 11, 12, 1, 2] },
  { n: "Caju", m: [10, 11, 12, 1] },
  { n: "Abacaxi", m: [11, 12, 1, 2, 3] },
  { n: "Jaca", m: [12, 1, 2, 3] },
  { n: "Maracujá", m: [1, 2, 3, 4, 5, 6] },
  { n: "Acerola", m: [11, 12, 1, 2, 3, 4] },
  { n: "Feijão verde", m: [4, 5, 6, 7] },
  { n: "Milho verde", m: [5, 6, 7] },
  { n: "Macaxeira", m: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] },
  { n: "Banana", m: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] },
];

const CATS = [
  { id: "todas", nome: "Todas" },
  { id: "aproveitamento", nome: "Aproveitamento" },
  { id: "sem carne", nome: "Sem carne" },
  { id: "regional", nome: "Regionais" },
  { id: "lanche", nome: "Lanches" },
];
const CAT_COR = {
  aproveitamento: "#cfe3c7",
  "sem carne": "#f8e2a0",
  regional: "#f6d3bb",
  lanche: "#f8e2a0",
};

const RECEITAS = [
  {
    id: "farofa-casca-banana",
    titulo: "Farofa de casca de banana",
    cat: "aproveitamento",
    tempo: 20,
    porcoes: 4,
    custo: "baixo",
    desc: "Cascas bem lavadas ficam firmes e saborosas na frigideira.",
    ings: [
      "Cascas de 4 bananas",
      "1 xícara de farinha de mandioca",
      "2 dentes de alho",
      "½ cebola picada",
      "Sal e cheiro-verde",
      "1 colher (sopa) de óleo",
    ],
    passos: [
      "Lave as cascas com água e bucha macia e corte as pontas escuras.",
      "Cozinhe em água por 10 minutos, escorra e pique miúdo.",
      "Refogue alho e cebola no óleo, junte as cascas e deixe dourar.",
      "Acrescente a farinha aos poucos, mexendo, até ficar soltinha.",
      "Finalize com sal e cheiro-verde.",
    ],
    dica: "A casca cozida fica com uma textura que lembra carne desfiada e traz fibras para a refeição.",
  },
  {
    id: "bolinho-arroz",
    titulo: "Bolinho de arroz assado",
    cat: "aproveitamento",
    tempo: 30,
    porcoes: 4,
    custo: "baixo",
    desc: "A sobra de arroz vira lanche, sem fritura.",
    ings: [
      "2 xícaras de arroz cozido",
      "1 ovo",
      "½ xícara de talos de couve picadinhos",
      "3 colheres (sopa) de farinha de trigo ou de mandioca",
      "Sal, cebola e salsinha",
    ],
    passos: [
      "Ligue o forno a 200 °C e unte uma forma.",
      "Misture tudo até dar liga. Se ficar mole, junte mais farinha.",
      "Modele os bolinhos e coloque na forma.",
      "Asse de 20 a 25 minutos, virando na metade.",
    ],
    dica: "Use arroz de no máximo 2 dias, guardado na geladeira.",
  },
  {
    id: "sopa-talos",
    titulo: "Sopa de talos e folhas",
    cat: "sem carne",
    tempo: 40,
    porcoes: 5,
    custo: "baixo",
    desc: "Talos e folhas que iriam para o lixo viram uma sopa nutritiva.",
    ings: [
      "1 maço de talos de couve ou espinafre",
      "2 batatas ou 1 pedaço de macaxeira",
      "1 cenoura",
      "½ xícara de macarrão pequeno",
      "Alho, cebola e cheiro-verde",
      "1,5 litro de água",
    ],
    passos: [
      "Pique talos, batata e cenoura em cubos pequenos.",
      "Refogue alho e cebola, junte os legumes e a água.",
      "Cozinhe por 20 minutos com a panela tampada.",
      "Coloque o macarrão e as folhas picadas e cozinhe mais 8 a 10 minutos.",
      "Acerte o sal e sirva quente.",
    ],
    dica: "Bata uma parte da sopa no liquidificador para ficar cremosa, sem precisar de creme de leite.",
  },
  {
    id: "bolinho-macaxeira",
    titulo: "Bolinho assado de macaxeira",
    cat: "lanche",
    tempo: 40,
    porcoes: 6,
    custo: "baixo",
    desc: "Crocante por fora, macio por dentro. Bom para o café da tarde.",
    ings: [
      "2 xícaras de macaxeira cozida e amassada",
      "½ xícara de polvilho doce",
      "1 colher (sopa) de azeite ou óleo",
      "1 ovo (opcional)",
      "Sal e orégano",
    ],
    passos: [
      "Ligue o forno a 200 °C.",
      "Misture a macaxeira amassada com o resto até dar ponto de modelar.",
      "Faça bolinhas e coloque numa forma untada.",
      "Asse por 25 minutos, até dourar.",
    ],
    dica: "Se tiver um pouco de queijo coalho ralado, o sabor fica ainda melhor.",
  },
  {
    id: "suco-casca-abacaxi",
    titulo: "Suco de casca de abacaxi",
    cat: "aproveitamento",
    tempo: 15,
    porcoes: 4,
    custo: "baixo",
    desc: "Bebida aromática feita com a casca e o miolo da fruta.",
    ings: [
      "Casca e miolo de 1 abacaxi bem lavado",
      "1 litro de água",
      "Folhas de hortelã",
      "Açúcar ou adoçante, se quiser",
    ],
    passos: [
      "Lave a casca com escova, em água corrente.",
      "Ferva casca e miolo na água por 10 minutos.",
      "Desligue, coloque a hortelã e deixe abafado por 10 minutos.",
      "Coe e leve à geladeira.",
    ],
    dica: "Consuma em até 24 horas. Não há prova de efeito emagrecedor: é só uma bebida gostosa e sem desperdício.",
  },
  {
    id: "cuscuz-legumes",
    titulo: "Cuscuz nordestino com ovo e legumes",
    cat: "regional",
    tempo: 20,
    porcoes: 3,
    custo: "baixo",
    desc: "Café da manhã ou jantar completo, que sustenta e custa pouco.",
    ings: [
      "1 xícara e meia de flocão de milho",
      "¾ de xícara de água com sal",
      "1 ovo por pessoa",
      "Cenoura, tomate e cebola picados",
      "Um fio de azeite",
    ],
    passos: [
      "Hidrate o flocão com a água salgada e deixe descansar 5 minutos.",
      "Cozinhe na cuscuzeira, no vapor, por 10 a 12 minutos.",
      "Refogue os legumes e frite ou cozinhe os ovos.",
      "Sirva o cuscuz com os legumes e o ovo por cima.",
    ],
    dica: "Acompanhado de feijão, vira uma refeição com proteína e fibras.",
  },
  {
    id: "baiao-simples",
    titulo: "Baião de dois simples",
    cat: "regional",
    tempo: 45,
    porcoes: 6,
    custo: "médio",
    desc: "Arroz e feijão cozidos juntos. Rende bastante.",
    ings: [
      "1 xícara de feijão de corda cozido",
      "1 xícara de arroz cru",
      "Cebola, alho, coentro e cebolinha",
      "Queijo coalho em cubos (opcional)",
      "Pimenta-de-cheiro",
    ],
    passos: [
      "Refogue cebola e alho.",
      "Junte o arroz e frite 1 minuto, depois coloque o feijão com o caldo e água suficiente.",
      "Cozinhe com a panela tampada até o arroz ficar macio, uns 20 minutos.",
      "Finalize com coentro, cebolinha e o queijo.",
    ],
    dica: "As sobras viram recheio do bolinho de arroz assado.",
  },
  {
    id: "caldo-feijao",
    titulo: "Caldo de feijão com macaxeira",
    cat: "sem carne",
    tempo: 50,
    porcoes: 5,
    custo: "baixo",
    desc: "Caldo grosso e quentinho para dia de chuva.",
    ings: [
      "2 xícaras de feijão cozido com o caldo",
      "1 pedaço grande de macaxeira em cubos",
      "Alho, cebola e coentro",
      "½ pimentão picado (opcional)",
      "Sal",
    ],
    passos: [
      "Refogue alho, cebola e pimentão.",
      "Junte o feijão, o caldo e a macaxeira.",
      "Cozinhe por 25 minutos, até a macaxeira começar a desmanchar.",
      "Amasse um pouco da macaxeira na panela para engrossar e finalize com coentro.",
    ],
    dica: "Congele em porções individuais por até 3 meses.",
  },
];

const SAUDE = [
  {
    t: "Sal escondido nos temperos prontos",
    p: "Cubos e temperos industrializados concentram muito sódio. Um único cubo pode ter uma parte grande do limite diário que a OMS recomenda (menos de 5 g de sal por dia).",
    l: [
      "Veja no rótulo o valor de sódio por porção.",
      "Troque por alho, cebola, coentro, cebolinha, limão e pimenta.",
      "Menos sal ajuda a controlar a pressão.",
    ],
  },
  {
    t: "Bebidas com açúcar",
    p: "Uma lata de refrigerante (350 ml) tem cerca de 35 g de açúcar. Tomar com frequência está ligado a maior risco de obesidade e de diabetes tipo 2.",
    l: [
      "Prefira água, suco da fruta sem açúcar ou água com hortelã e limão.",
      "Suco de caixinha e néctar também costumam ter muito açúcar.",
    ],
  },
  {
    t: "Feijão com arroz funciona",
    p: "Juntos, feijão e arroz dão proteína de boa qualidade, fibras, ferro e energia. É uma das bases do Guia Alimentar brasileiro.",
    l: [
      "Para aproveitar melhor o ferro do feijão, coma junto uma fonte de vitamina C (limão, acerola, laranja).",
      "Deixar o feijão de molho e jogar essa água fora ajuda a cozinhar mais rápido.",
    ],
  },
  {
    t: "Ultraprocessados",
    p: "Salgadinho, biscoito recheado, macarrão instantâneo e embutidos têm muito sal, açúcar ou gordura e pouco nutriente. O Guia Alimentar recomenda evitar e montar a alimentação com comida de verdade.",
    l: [
      "Uma regra prática: lista de ingredientes comprida, com nomes que você não usa na cozinha, indica ultraprocessado.",
      "Frutas, raízes, ovos e feijão devem ser a base.",
    ],
  },
  {
    t: "Higiene e conservação",
    p: "Lavar, cozinhar e guardar do jeito certo evita intoxicação alimentar.",
    l: [
      "Lave frutas e verduras em água corrente. Para folhas cruas, use água com produto próprio para higienizar alimentos, seguindo o rótulo.",
      "Guarde as sobras na geladeira em até 2 horas e consuma em até 3 dias.",
      "Carne e ovo não devem ficar muito tempo fora da geladeira.",
    ],
  },
  {
    t: "Crianças e idosos",
    p: "Crianças pequenas e idosos precisam de mais cuidado com a textura, o sal e a variedade dos alimentos.",
    l: [
      "Evite dar açúcar e sal a bebês e crianças pequenas.",
      "Para idosos, prefira alimentos macios e lembre de oferecer água várias vezes ao dia.",
      "Em caso de dúvida sobre dieta, procure a nutricionista ou a equipe da UBS.",
    ],
  },
];

const MITOS = [
  {
    q: "Casca de abacaxi emagrece.",
    v: "mito",
    r: "Não há prova disso. A casca vira um suco gostoso, mas não faz perder peso.",
  },
  {
    q: "Comer ovo todo dia faz mal ao coração.",
    v: "mito",
    r: "Para a maioria das pessoas saudáveis, o ovo no dia a dia é seguro. Quem tem colesterol alto deve conversar com o médico.",
  },
  {
    q: "Alimento congelado perde todos os nutrientes.",
    v: "mito",
    r: "Frutas e legumes congelados logo depois da colheita mantêm boa parte dos nutrientes, e ainda evitam desperdício.",
  },
  {
    q: "Talos e folhas de legumes podem ser comidos.",
    v: "verdade",
    r: "Folha de cenoura e de beterraba, talo de couve e de espinafre são comestíveis e têm fibras, desde que bem lavados.",
  },
  {
    q: "Deixar o feijão de molho ajuda na digestão.",
    v: "verdade",
    r: "Jogar fora a água do molho reduz compostos que causam gases e ainda encurta o cozimento.",
  },
  {
    q: "Produto “light” ou “diet” pode ser consumido à vontade.",
    v: "mito",
    r: "Muitos têm calorias parecidas com a versão comum. Leia o rótulo e compare.",
  },
];

const ITENS_BASICOS = [
  "Arroz",
  "Feijão",
  "Ovos",
  "Macaxeira",
  "Cebola",
  "Tomate",
  "Coentro",
];

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];

const esc = (v) =>
  String(v ?? "").replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ],
  );

const brl = (n) =>
  n.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

const store = {
  get(k, d) {
    try {
      const v = localStorage.getItem("pl:" + k);
      return v ? JSON.parse(v) : d;
    } catch {
      return d;
    }
  },
  set(k, v) {
    try {
      localStorage.setItem("pl:" + k, JSON.stringify(v));
    } catch {}
  },
};

const ICONS = {
  home: "M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z",
  pin: "M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0zM12 7a3 3 0 1 0 0 6 3 3 0 0 0 0-6z",
  book: "M4 19.5A2.5 2.5 0 0 1 6.5 17H20V3H6.5A2.5 2.5 0 0 0 4 5.5zM6.5 17H20v4H6.5a2.5 2.5 0 0 1 0-4z",
  bag: "M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4zM3 6h18M16 10a4 4 0 0 1-8 0",
  heart:
    "M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21l7.8-7.5 1-1.1a5.5 5.5 0 0 0 0-7.8z",
  moon: "M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z",
  sun: "M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4",
  share: "M4 12v7a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-7M16 6l-4-4-4 4M12 2v13",
  clock: "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zM12 6v6l4 2",
  plus: "M12 5v14M5 12h14",
  trash: "M3 6h18M8 6V4h8v2M6 6l1 14h10l1-14",
  route: "M3 11l19-9-9 19-2-8z",
  search: "M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14zM21 21l-4.3-4.3",
  x: "M18 6 6 18M6 6l12 12",
  leaf: "M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.5 19 2c1 2 2 4.5 2 8 0 5.5-4.8 10-10 10zM2 21c0-3 1.9-5.5 6-7",
  locate: "M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM12 2v3M12 19v3M2 12h3M19 12h3",
  users:
    "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8z",
  arrow: "M5 12h14M13 6l6 6-6 6",
};
const icon = (n, cls = "") =>
  `<svg class="icon ${cls}" viewBox="0 0 24 24" aria-hidden="true"><path d="${ICONS[n] || ""}"/></svg>`;
const hydrateIcons = () =>
  $$("[data-icon]").forEach((el) => {
    const cls = el.className || "";
    el.outerHTML = icon(el.dataset.icon, cls);
  });

let toastTimer;
function toast(msg) {
  const t = $("#toast");
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove("show"), 2800);
}

const rng = (s) => () => (s = (s * 16807) % 2147483647) / 2147483647;

function dots(seed, n, cx, cy, rx, ry, cols, r0, r1) {
  const r = rng(seed);
  let out = "";
  for (let i = 0; i < n; i++) {
    const a = r() * 6.283,
      d = Math.sqrt(r());
    const x = cx + Math.cos(a) * d * rx,
      y = cy + Math.sin(a) * d * ry;
    out += `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${(r0 + r() * (r1 - r0)).toFixed(1)}" fill="${cols[Math.floor(r() * cols.length)]}"/>`;
  }
  return out;
}
const plate = (cx, cy, rx) =>
  `<ellipse cx="${cx}" cy="${cy + 10}" rx="${rx}" ry="${rx * 0.3}" fill="rgba(0,0,0,.16)"/>` +
  `<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${rx * 0.3}" fill="#fffdf6" stroke="#cdbf9f" stroke-width="2"/>` +
  `<ellipse cx="${cx}" cy="${cy}" rx="${rx * 0.78}" ry="${rx * 0.22}" fill="#f1e8d2"/>`;
const bowl = (cx, cy, rx, fill) =>
  `<ellipse cx="${cx}" cy="${cy + rx * 0.85 + 4}" rx="${rx * 0.6}" ry="8" fill="rgba(0,0,0,.16)"/>` +
  `<path d="M${cx - rx} ${cy} A${rx} ${rx * 0.85} 0 0 0 ${cx + rx} ${cy}Z" fill="#fffdf6" stroke="#cdbf9f" stroke-width="2"/>` +
  `<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${rx * 0.26}" fill="#fffdf6" stroke="#cdbf9f" stroke-width="2"/>` +
  `<ellipse cx="${cx}" cy="${cy + 1}" rx="${rx - 9}" ry="${rx * 0.26 - 6}" fill="${fill}"/>`;
const steam = (x, y) =>
  `<path d="M${x} ${y} q 9 -12 0 -24 q -9 -12 0 -24" fill="none" stroke="#fff" stroke-opacity=".8" stroke-width="4" stroke-linecap="round"/>`;
const spoon = (x, y, rot) =>
  `<g transform="rotate(${rot} ${x} ${y})"><ellipse cx="${x}" cy="${y}" rx="14" ry="20" fill="#d6c8a8" stroke="#9a8a6a" stroke-width="2"/><rect x="${x - 3}" y="${y + 16}" width="6" height="70" rx="3" fill="#d6c8a8" stroke="#9a8a6a" stroke-width="2"/></g>`;

const ART = {
  "farofa-casca-banana": () =>
    plate(200, 150, 155) +
    `<ellipse cx="200" cy="138" rx="92" ry="34" fill="#e3b85a"/>` +
    dots(
      11,
      120,
      200,
      136,
      86,
      30,
      ["#d9a441", "#f0d27a", "#b9822c", "#f6e3a0"],
      2.5,
      5,
    ) +
    dots(12, 16, 200, 130, 70, 22, ["#4f8a3a", "#6aa84f"], 2, 3.5) +
    `<path d="M318 152 c 30 -46 62 -40 66 -4 c -22 -14 -44 -6 -66 4z" fill="#f2cf3c" stroke="#a8841a" stroke-width="2.5"/><path d="M382 146 l7 -7" stroke="#5b3d12" stroke-width="5" stroke-linecap="round"/>`,

  "bolinho-arroz": () => {
    const b = [
      [160, 138, 28],
      [218, 126, 28],
      [264, 152, 26],
      [188, 172, 26],
    ];
    return (
      plate(200, 150, 155) +
      b
        .map(
          ([x, y, r], i) =>
            `<circle cx="${x}" cy="${y}" r="${r}" fill="#d99a45" stroke="#a8691f" stroke-width="2.5"/><circle cx="${x - 8}" cy="${y - 9}" r="${r * 0.35}" fill="#efc07a"/>${dots(70 + i, 9, x, y, r * 0.7, r * 0.7, ["#b9782a", "#f1d9a8"], 1.4, 2.4)}`,
        )
        .join("") +
      `<path d="M90 122 q 20 -32 52 -14 q -14 32 -52 14z" fill="#5a9a3e" stroke="#3b6e28" stroke-width="2"/><path d="M96 120 q 18 -10 38 -10" stroke="#3b6e28" stroke-width="2" fill="none"/>`
    );
  },

  "sopa-talos": () =>
    spoon(335, 78, 22) +
    bowl(200, 112, 115, "#8fb35a") +
    dots(
      21,
      70,
      200,
      113,
      98,
      20,
      ["#6e9b3b", "#b7d77a", "#f0a63a", "#4e7d2a"],
      3,
      6,
    ) +
    steam(165, 90) +
    steam(205, 84) +
    steam(245, 90),

  "bolinho-macaxeira": () => {
    const b = [
      [135, 142, 25],
      [186, 128, 25],
      [234, 146, 25],
      [162, 174, 24],
      [212, 178, 24],
    ];
    return (
      plate(190, 152, 150) +
      b
        .map(
          ([x, y, r], i) =>
            `<circle cx="${x}" cy="${y}" r="${r}" fill="#f0d58a" stroke="#c9a548" stroke-width="2.5"/><circle cx="${x - 7}" cy="${y - 8}" r="${r * 0.33}" fill="#faeab8"/>${dots(80 + i, 7, x, y, r * 0.7, r * 0.7, ["#e0bb5c", "#fff2c4"], 1.3, 2.2)}`,
        )
        .join("") +
      `<g transform="translate(-30 22)"><g transform="rotate(-18 330 150)"><path d="M270 150 q 0 -22 30 -22 h 70 q 18 0 18 22 q 0 22 -18 22 h -70 q -30 0 -30 -22z" fill="#8c5a2b" stroke="#5e3a17" stroke-width="2.5"/><ellipse cx="388" cy="150" rx="8" ry="20" fill="#fff4d6" stroke="#5e3a17" stroke-width="2"/><path d="M290 140 h60 M300 158 h50" stroke="#6b4320" stroke-width="2" stroke-linecap="round"/></g></g>`
    );
  },

  "suco-casca-abacaxi": () =>
    `<g transform="translate(40 40)"><path d="M46 34 l-20 -34 l16 12 l4 -32 l8 30 l16 -12z" fill="#4f8f3a" stroke="#2f6325" stroke-width="2.5"/><ellipse cx="46" cy="112" rx="38" ry="52" fill="#e6a82e" stroke="#a8741b" stroke-width="2.5"/><path d="M14 90 l64 36 M10 112 l72 38 M16 134 l60 28 M78 90 l-64 36 M82 112 l-72 38 M76 134 l-60 28" stroke="#a8741b" stroke-width="2" opacity=".6"/></g>` +
    `<ellipse cx="260" cy="206" rx="70" ry="9" fill="rgba(0,0,0,.16)"/>` +
    `<rect x="262" y="26" width="9" height="140" rx="4" fill="#d9483b" transform="rotate(10 266 96)"/>` +
    `<path d="M210 62 h100 l-12 132 q-1 10 -12 10 h-52 q-11 0 -12 -10z" fill="#fff" fill-opacity=".4" stroke="#cdbf9f" stroke-width="3"/>` +
    `<path d="M216 88 h88 l-9 102 q-1 8 -10 8 h-50 q-9 0 -10 -8z" fill="#f4c430"/>` +
    `<rect x="228" y="104" width="26" height="26" rx="5" fill="#fff" fill-opacity=".55" transform="rotate(12 241 117)"/><rect x="262" y="124" width="24" height="24" rx="5" fill="#fff" fill-opacity=".5" transform="rotate(-10 274 136)"/>` +
    `<ellipse cx="248" cy="74" rx="17" ry="8" fill="#3f8f48" transform="rotate(-30 248 74)"/><ellipse cx="274" cy="72" rx="17" ry="8" fill="#52a45a" transform="rotate(25 274 72)"/><ellipse cx="262" cy="64" rx="15" ry="7" fill="#2f7a3a" transform="rotate(-75 262 64)"/>`,

  "cuscuz-legumes": () =>
    plate(200, 155, 162) +
    `<path d="M104 164 q 0 -64 76 -64 q 76 0 76 64z" fill="#f4dc8c" stroke="#c9a548" stroke-width="2.5"/>` +
    dots(31, 46, 180, 142, 58, 26, ["#e3c25f", "#fff0b8", "#d9b44a"], 2, 3.6) +
    `<path d="M268 152 q -20 -32 14 -36 q 36 -4 38 24 q 2 28 -30 30 q -28 2 -22 -18z" fill="#fff" stroke="#d9d2bf" stroke-width="2.5"/><circle cx="294" cy="142" r="15" fill="#f5ab1c"/><circle cx="289" cy="137" r="4.5" fill="#fde08a"/>` +
    `<circle cx="108" cy="184" r="17" fill="#d6402f" stroke="#a02a1d" stroke-width="2.5"/><circle cx="108" cy="184" r="9" fill="#ef7a63"/><circle cx="148" cy="192" r="16" fill="#d6402f" stroke="#a02a1d" stroke-width="2.5"/><circle cx="148" cy="192" r="8" fill="#ef7a63"/>` +
    dots(32, 16, 215, 175, 40, 10, ["#4f8a3a", "#6aa84f"], 2, 3.4),

  "baiao-simples": () => {
    const q = [
      [160, 104, 14],
      [210, 98, -20],
      [250, 110, 30],
    ];
    return (
      bowl(200, 108, 118, "#f7f0dc") +
      dots(
        41,
        150,
        200,
        109,
        100,
        20,
        ["#f7f0dc", "#fffaf0", "#c79a6b", "#a6693c", "#7a4a25"],
        3,
        5.5,
      ) +
      q
        .map(
          ([x, y, a]) =>
            `<rect x="${x}" y="${y}" width="17" height="17" rx="2" fill="#f3cf5c" stroke="#c49a22" stroke-width="1.5" transform="rotate(${a} ${x + 8} ${y + 8})"/>`,
        )
        .join("") +
      dots(42, 18, 200, 109, 92, 16, ["#4f8a3a", "#6aa84f"], 2, 3.4) +
      steam(170, 88) +
      steam(236, 88)
    );
  },

  "caldo-feijao": () =>
    spoon(335, 78, 22) +
    bowl(200, 112, 115, "#7b3b22") +
    dots(51, 56, 200, 113, 98, 20, ["#a05a35", "#5e2a16", "#c47a4a"], 2.5, 5) +
    [
      [160, 112, 0],
      [212, 120, 25],
      [250, 108, -20],
      [190, 104, 40],
    ]
      .map(
        ([x, y, a]) =>
          `<ellipse cx="${x}" cy="${y}" rx="16" ry="9" fill="#f3e2b0" stroke="#c9a548" stroke-width="2" transform="rotate(${a} ${x} ${y})"/>`,
      )
      .join("") +
    steam(170, 90) +
    steam(236, 90),
};

function arte(r) {
  const cena = (ART[r.id] || (() => plate(200, 150, 150)))();
  const foto = r.foto
    ? `<img src="${esc(r.foto)}" alt="" loading="lazy" onerror="this.remove()">`
    : "";
  return `<svg viewBox="0 0 400 240" preserveAspectRatio="xMidYMid slice" aria-hidden="true" style="background:${CAT_COR[r.cat] || "#f8e2a0"}">${cena}</svg>${foto}`;
}

const state = {
  favReceitas: new Set(store.get("favRec", [])),
  favLocais: new Set(store.get("favLoc", [])),
  lista: store.get("lista", []),
  orcamento: store.get("orcamento", ""),
  catReceita: "todas",
  tipoLocal: "Todos",
  hoje: new Date().getDay(),
  mes: new Date().getMonth() + 1,
};

const ROTAS = ["inicio", "feiras", "receitas", "lista", "saude"];
const TITULOS = {
  inicio: "Prato Local · Comer bem em Arapiraca gastando pouco",
  feiras: "Onde comprar · Prato Local",
  receitas: "Receitas baratas · Prato Local",
  lista: "Lista de compras · Prato Local",
  saude: "Alimentação e saúde · Prato Local",
};
let mapa = null;

function rota() {
  const id = ROTAS.includes(location.hash.slice(1))
    ? location.hash.slice(1)
    : "inicio";
  $$(".view").forEach((v) => (v.hidden = v.id !== id));
  $$("[data-route]").forEach((a) => {
    if (a.dataset.route === id) a.setAttribute("aria-current", "page");
    else a.removeAttribute("aria-current");
  });
  window.scrollTo({ top: 0 });
  document.title = TITULOS[id];
  if (id === "feiras") iniciarMapa();
}

const primeiraMaiuscula = (s) => s.charAt(0).toUpperCase() + s.slice(1);

function renderInicio() {
  const abrem = LOCAIS.filter((l) => l.dias.includes(state.hoje));
  $("#today-label").textContent = primeiraMaiuscula(
    new Date().toLocaleDateString("pt-BR", {
      weekday: "long",
      day: "numeric",
      month: "long",
    }),
  );
  $("#today-title").textContent = abrem.length
    ? "Onde comprar hoje"
    : "Hoje não há feira";
  $("#today-list").innerHTML = abrem.length
    ? abrem
        .map(
          (l) =>
            `<li><strong>${esc(l.nome)}</strong><span>${esc(l.horario)}</span></li>`,
        )
        .join("")
    : `<li class="empty">Nenhum dos locais cadastrados abre hoje. Veja os próximos dias na tela “Onde comprar”.</li>`;

  const agora = SAFRA.filter((s) => s.m.includes(state.mes));
  $("#h-safra").textContent =
    `O que está na época em ${new Date().toLocaleDateString("pt-BR", { month: "long" })}`;
  $("#safra-now").innerHTML = agora
    .map((s) => `<span class="pill">${icon("leaf")} ${esc(s.n)}</span>`)
    .join("");
  $("#safra-table").insertAdjacentHTML(
    "beforeend",
    `<thead><tr><th scope="col">Alimento</th>${MESES.map((m, i) => `<th scope="col" class="${i + 1 === state.mes ? "now" : ""}">${m}</th>`).join("")}</tr></thead>
     <tbody>${SAFRA.map(
       (s) =>
         `<tr><th scope="row">${esc(s.n)}</th>${MESES.map((_, i) => {
           const on = s.m.includes(i + 1);
           return `<td class="${i + 1 === state.mes ? "now" : ""}"><span class="${on ? "on" : "off"}"><span class="sr-only">${on ? "na época" : "fora da época"}</span></span></td>`;
         }).join("")}</tr>`,
     ).join("")}</tbody>`,
  );

  $("#tips").innerHTML = DICAS.map(
    ([t, p]) => `<div><dt>${esc(t)}</dt><dd>${esc(p)}</dd></div>`,
  ).join("");
}

const marcadores = new Map();
const temPino = (l) => typeof l.lat === "number" && typeof l.lng === "number";

function locaisFiltrados() {
  const soHoje = $("#only-today").checked;
  return LOCAIS.filter(
    (l) =>
      (state.tipoLocal === "Todos" || l.tipo === state.tipoLocal) &&
      (!soHoje || l.dias.includes(state.hoje)),
  );
}

function renderFiltrosLocais() {
  const tipos = ["Todos", ...new Set(LOCAIS.map((l) => l.tipo))];
  $("#place-filters").innerHTML = tipos
    .map(
      (t) =>
        `<button class="chip" type="button" data-tipo="${esc(t)}" aria-pressed="${t === state.tipoLocal}">${esc(t)}</button>`,
    )
    .join("");
}

function linkRota(l) {
  return temPino(l)
    ? `https://www.google.com/maps/dir/?api=1&destination=${l.lat},${l.lng}`
    : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(l.busca)}`;
}

function renderLocais() {
  const lista = locaisFiltrados();
  $("#places-list").innerHTML = lista.length
    ? lista
        .map(
          (l) => `
    <article class="place" id="place-${esc(l.id)}" data-id="${esc(l.id)}">
      <div class="place-top">
        <div>
          <h3>${esc(l.nome)}</h3>
          <div class="meta">
            <span>${icon("pin")} ${esc(l.tipo)}</span>
            <span>${icon("clock")} ${esc(l.horario)}</span>
          </div>
        </div>
        <div style="display:flex;gap:6px;align-items:center">
          ${l.dias.includes(state.hoje) ? `<span class="open-now">Abre hoje</span>` : ""}
          <button class="fav-btn" type="button" data-fav-loc="${esc(l.id)}" aria-pressed="${state.favLocais.has(l.id)}" aria-label="Favoritar ${esc(l.nome)}">${icon("heart")}</button>
        </div>
      </div>
      <p class="buy"><strong>O que encontrar:</strong> ${esc(l.compra)}</p>
      <p class="xepa-box"><strong>Dica de economia:</strong> ${esc(l.xepa)}</p>
      <div class="place-actions">
        ${temPino(l) ? `<button class="btn btn-ghost btn-sm" type="button" data-focus="${esc(l.id)}">Ver no mapa</button>` : ""}
        <a class="btn btn-ghost btn-sm" target="_blank" rel="noopener" href="${linkRota(l)}">${icon("route")} Traçar rota</a>
      </div>
    </article>`,
        )
        .join("")
    : `<div class="empty-box">Nenhum local para este filtro. Desmarque “só os que abrem hoje” para ver todos.</div>`;

  if (mapa) atualizarMarcadores(lista);
}

function atualizarMarcadores(lista) {
  marcadores.forEach((m) => m.remove());
  marcadores.clear();
  const comPino = lista.filter(temPino);
  comPino.forEach((l) => {
    const m = L.marker([l.lat, l.lng], { title: l.nome })
      .addTo(mapa)
      .bindPopup(
        `<strong>${esc(l.nome)}</strong><br><small>${esc(l.horario)}</small>`,
      );
    m.on("click", () => destacarLocal(l.id));
    marcadores.set(l.id, m);
  });
  if (comPino.length > 1)
    mapa.fitBounds(L.latLngBounds(comPino.map((l) => [l.lat, l.lng])).pad(0.3));
  else if (comPino.length === 1)
    mapa.setView([comPino[0].lat, comPino[0].lng], 15);
}

function destacarLocal(id) {
  $$(".place").forEach((p) => p.classList.toggle("focus", p.dataset.id === id));
  const el = document.getElementById("place-" + id);
  if (el) el.scrollIntoView({ block: "nearest", behavior: "smooth" });
}

function iniciarMapa() {
  if (typeof L === "undefined") {
    $("#map").innerHTML =
      `<div class="empty-box" style="margin:12px">Não foi possível carregar o mapa. Verifique a internet. A lista ao lado continua funcionando.</div>`;
    return;
  }
  if (!mapa) {
    mapa = L.map("map", { scrollWheelZoom: false }).setView(
      [-9.7513, -36.6603],
      14,
    );
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 18,
      attribution: "© OpenStreetMap",
    }).addTo(mapa);
    atualizarMarcadores(locaisFiltrados());
  }
  setTimeout(() => mapa.invalidateSize(), 50);
}

function localizarUsuario() {
  if (!navigator.geolocation)
    return toast("Este aparelho não consegue informar a localização.");
  if (!mapa) iniciarMapa();
  if (!mapa) return;
  navigator.geolocation.getCurrentPosition(
    ({ coords }) => {
      mapa.setView([coords.latitude, coords.longitude], 15);
      L.circleMarker([coords.latitude, coords.longitude], {
        radius: 8,
        color: "#a63a0a",
        fillOpacity: 0.8,
      })
        .addTo(mapa)
        .bindPopup("Você está aqui")
        .openPopup();
    },
    () => toast("Ative a localização do aparelho para ver onde você está."),
    { enableHighAccuracy: true, timeout: 10000 },
  );
}

function renderFiltrosReceitas() {
  $("#recipe-filters").innerHTML = CATS.map(
    (c) =>
      `<button class="chip" type="button" data-cat="${esc(c.id)}" aria-pressed="${c.id === state.catReceita}">${esc(c.nome)}</button>`,
  ).join("");
}

function renderReceitas() {
  const termo = $("#recipe-search").value.trim().toLowerCase();
  const soFav = $("#only-favs").checked;
  const lista = RECEITAS.filter(
    (r) =>
      (state.catReceita === "todas" || r.cat === state.catReceita) &&
      (!soFav || state.favReceitas.has(r.id)) &&
      (!termo ||
        (r.titulo + " " + r.ings.join(" ")).toLowerCase().includes(termo)),
  );

  $("#recipe-count").textContent =
    `${lista.length} ${lista.length === 1 ? "receita encontrada" : "receitas encontradas"}`;
  $("#recipes").innerHTML = lista.length
    ? lista
        .map(
          (r) => `
    <article class="recipe">
      <div class="recipe-art">
        ${arte(r)}
        <button class="fav-btn" type="button" data-fav-rec="${esc(r.id)}" aria-pressed="${state.favReceitas.has(r.id)}" aria-label="Favoritar ${esc(r.titulo)}">${icon("heart")}</button>
      </div>
      <div class="recipe-body">
        <span class="tag">${esc(r.cat)}</span>
        <h3>${esc(r.titulo)}</h3>
        <p>${esc(r.desc)}</p>
        <div class="facts">
          <span>${icon("clock")} ${r.tempo} min</span>
          <span>${icon("users")} ${r.porcoes} porções</span>
          <span>Custo ${esc(r.custo)}</span>
        </div>
        <button class="btn btn-ghost btn-sm" type="button" data-open="${esc(r.id)}">Ver receita</button>
      </div>
    </article>`,
        )
        .join("")
    : `<div class="empty-box" style="grid-column:1/-1">Nenhuma receita encontrada. Tente outra palavra ou desmarque os filtros.</div>`;
}

function abrirReceita(id) {
  const r = RECEITAS.find((x) => x.id === id);
  if (!r) return;
  $("#dlg-body").innerHTML = `
    <div class="dlg-art">${arte(r)}</div>
    <div class="dlg-head">
      <span class="tag">${esc(r.cat)}</span>
      <h2 id="dlg-title">${esc(r.titulo)}</h2>
      <div class="facts" style="margin-top:10px">
        <span>${icon("clock")} ${r.tempo} min</span><span>${icon("users")} ${r.porcoes} porções</span><span>Custo ${esc(r.custo)}</span>
      </div>
      <button class="icon-btn dlg-close" type="button" data-close aria-label="Fechar receita">${icon("x")}</button>
    </div>
    <div class="dlg-body">
      <section>
        <h3>Ingredientes</h3>
        <ul class="ing">${r.ings.map((i) => `<li>${esc(i)}</li>`).join("")}</ul>
        <button class="btn btn-ghost btn-sm" type="button" data-add-ings="${esc(r.id)}" style="margin-top:14px">${icon("bag")} Adicionar à minha lista</button>
      </section>
      <section><h3>Modo de preparo</h3><ol class="steps">${r.passos.map((p) => `<li>${esc(p)}</li>`).join("")}</ol></section>
      <p class="tipbox"><strong>Dica:</strong> ${esc(r.dica)}</p>
      ${r.cat === "aproveitamento" ? `<p class="warnbox"><strong>Cuidado:</strong> lave bem cascas e talos em água corrente antes de usar. Na dúvida sobre agrotóxico, descasque.</p>` : ""}
    </div>`;
  $("#recipe-dialog").showModal();
}

const salvarLista = () => store.set("lista", state.lista);
const uid = () =>
  Date.now().toString(36) + Math.random().toString(36).slice(2, 6);

function renderLista() {
  $("#shopping").innerHTML = state.lista.length
    ? state.lista
        .map(
          (i) => `
    <li class="${i.ok ? "done" : ""}" data-id="${esc(i.id)}">
      <input type="checkbox" data-toggle="${esc(i.id)}" ${i.ok ? "checked" : ""} aria-label="Marcar ${esc(i.nome)} como comprado" />
      <span class="nm">${esc(i.nome)}<small>${i.qtd} × ${i.preco ? brl(i.preco) : "preço não informado"}</small></span>
      <span class="sub">${i.preco ? brl(i.preco * i.qtd) : "—"}</span>
      <button class="icon-btn" type="button" data-del="${esc(i.id)}" aria-label="Remover ${esc(i.nome)}">${icon("trash")}</button>
    </li>`,
        )
        .join("")
    : `<li class="empty-box">Sua lista está vazia.<br>Adicione um item acima, abra uma receita e toque em “Adicionar à minha lista”, ou comece com o básico.<br><button class="btn btn-ghost btn-sm" type="button" data-seed>Começar com itens básicos</button></li>`;

  const total = state.lista.reduce((s, i) => s + i.preco * i.qtd, 0);
  const done = state.lista
    .filter((i) => i.ok)
    .reduce((s, i) => s + i.preco * i.qtd, 0);
  const orc = parseFloat(state.orcamento) || 0;
  $("#t-total").textContent = brl(total);
  $("#t-done").textContent = brl(done);
  $("#t-count").textContent =
    `${state.lista.filter((i) => i.ok).length} de ${state.lista.length}`;
  $("#t-left").textContent = orc ? brl(orc - total) : "—";

  const pct = orc ? Math.min(100, Math.round((total / orc) * 100)) : 0;
  const meter = $("#meter");
  meter.setAttribute("aria-valuenow", pct);
  meter.className =
    "meter" + (orc && total > orc ? " over" : orc && pct >= 80 ? " warn" : "");
  $("#meter-fill").style.width = pct + "%";
  $("#budget-msg").textContent = !orc
    ? "Digite quanto você pode gastar para acompanhar o orçamento."
    : total > orc
      ? `Passou ${brl(total - orc)} do orçamento. Veja se algum item pode esperar.`
      : pct >= 80
        ? "Atenção: você já usou mais de 80% do orçamento."
        : "Está dentro do orçamento.";

  $("#wa-list").href =
    "https://wa.me/?text=" + encodeURIComponent(textoLista());
}

function textoLista() {
  const linhas = state.lista.map(
    (i) =>
      `${i.ok ? "[x]" : "[ ]"} ${i.nome} (${i.qtd})${i.preco ? " - " + brl(i.preco * i.qtd) : ""}`,
  );
  return `Lista de compras (Prato Local)\n${linhas.join("\n")}`;
}

function adicionarItem(nome, qtd = 1, preco = 0, silencioso = false) {
  state.lista.push({
    id: uid(),
    nome: nome.trim().slice(0, 60),
    qtd: Math.max(1, parseInt(qtd, 10) || 1),
    preco: Math.max(0, parseFloat(preco) || 0),
    ok: false,
  });
  if (!silencioso) {
    salvarLista();
    renderLista();
  }
}

function renderSaude() {
  $("#health").innerHTML = SAUDE.map(
    (s, i) => `
    <details ${i === 0 ? "open" : ""}>
      <summary>${esc(s.t)}</summary>
      <div class="det-body"><p>${esc(s.p)}</p><ul>${s.l.map((x) => `<li>${esc(x)}</li>`).join("")}</ul></div>
    </details>`,
  ).join("");

  $("#myths").innerHTML = MITOS.map(
    (m) => `
    <li>
      <span class="badge ${esc(m.v)}">${m.v === "mito" ? "Mito" : "Verdade"}</span>
      <span class="q">${esc(m.q)}</span>
      <span class="r">${esc(m.r)}</span>
    </li>`,
  ).join("");
}

function ligarEventos() {
  const atualizaTema = () => {
    const t = document.documentElement.dataset.theme;
    $("#theme-toggle").innerHTML = icon(t === "dark" ? "sun" : "moon");
    $("meta[name=theme-color]").content = t === "dark" ? "#120e09" : "#f1e6cf";
  };
  atualizaTema();
  $("#theme-toggle").addEventListener("click", () => {
    const t =
      document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = t;
    try {
      localStorage.setItem("pl:theme", t);
    } catch {}
    atualizaTema();
  });

  $("#share-btn").addEventListener("click", async () => {
    const dados = {
      title: "Prato Local",
      text: "Guia de feiras, receitas e economia na comida em Arapiraca.",
      url: location.href.split("#")[0],
    };
    try {
      if (navigator.share) await navigator.share(dados);
      else {
        await navigator.clipboard.writeText(dados.url);
        toast("Link copiado!");
      }
    } catch {}
  });

  $("#place-filters").addEventListener("click", (e) => {
    const b = e.target.closest("[data-tipo]");
    if (!b) return;
    state.tipoLocal = b.dataset.tipo;
    renderFiltrosLocais();
    renderLocais();
  });
  $("#only-today").addEventListener("change", renderLocais);
  $("#locate-me").addEventListener("click", localizarUsuario);
  $("#places-list").addEventListener("click", (e) => {
    const fav = e.target.closest("[data-fav-loc]");
    if (fav) {
      const id = fav.dataset.favLoc;
      state.favLocais.has(id)
        ? state.favLocais.delete(id)
        : state.favLocais.add(id);
      store.set("favLoc", [...state.favLocais]);
      fav.setAttribute("aria-pressed", state.favLocais.has(id));
      return;
    }
    const f = e.target.closest("[data-focus]");
    if (f && mapa) {
      const l = LOCAIS.find((x) => x.id === f.dataset.focus);
      mapa.setView([l.lat, l.lng], 16);
      marcadores.get(l.id)?.openPopup();
      destacarLocal(l.id);
      $("#map").scrollIntoView({ block: "center", behavior: "smooth" });
    }
  });

  $("#recipe-search").addEventListener("input", renderReceitas);
  $("#only-favs").addEventListener("change", renderReceitas);
  $("#recipe-filters").addEventListener("click", (e) => {
    const b = e.target.closest("[data-cat]");
    if (!b) return;
    state.catReceita = b.dataset.cat;
    renderFiltrosReceitas();
    renderReceitas();
  });
  $("#recipes").addEventListener("click", (e) => {
    const fav = e.target.closest("[data-fav-rec]");
    if (fav) {
      const id = fav.dataset.favRec;
      state.favReceitas.has(id)
        ? state.favReceitas.delete(id)
        : state.favReceitas.add(id);
      store.set("favRec", [...state.favReceitas]);
      if ($("#only-favs").checked) renderReceitas();
      else fav.setAttribute("aria-pressed", state.favReceitas.has(id));
      return;
    }
    const o = e.target.closest("[data-open]");
    if (o) abrirReceita(o.dataset.open);
  });
  const dlg = $("#recipe-dialog");
  dlg.addEventListener("click", (e) => {
    if (e.target === dlg || e.target.closest("[data-close]"))
      return dlg.close();
    const a = e.target.closest("[data-add-ings]");
    if (a) {
      const r = RECEITAS.find((x) => x.id === a.dataset.addIngs);
      r.ings.forEach((i) => adicionarItem(i, 1, 0, true));
      salvarLista();
      renderLista();
      toast(`${r.ings.length} itens adicionados. Veja na aba Lista.`);
    }
  });

  $("#item-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const nome = $("#item-name").value;
    if (!nome.trim()) return;
    adicionarItem(nome, $("#item-qty").value, $("#item-price").value);
    e.target.reset();
    $("#item-qty").value = 1;
    $("#item-name").focus();
  });
  $("#shopping").addEventListener("click", (e) => {
    if (e.target.closest("[data-seed]")) {
      ITENS_BASICOS.forEach((n) => adicionarItem(n, 1, 0, true));
      salvarLista();
      renderLista();
      return;
    }
    const t = e.target.closest("[data-toggle]");
    if (t) {
      const i = state.lista.find((x) => x.id === t.dataset.toggle);
      i.ok = t.checked;
      salvarLista();
      return renderLista();
    }
    const d = e.target.closest("[data-del]");
    if (d) {
      state.lista = state.lista.filter((x) => x.id !== d.dataset.del);
      salvarLista();
      renderLista();
    }
  });
  $("#budget").value = state.orcamento;
  $("#budget").addEventListener("input", (e) => {
    state.orcamento = e.target.value;
    store.set("orcamento", state.orcamento);
    renderLista();
  });
  $("#clear-done").addEventListener("click", () => {
    state.lista = state.lista.filter((i) => !i.ok);
    salvarLista();
    renderLista();
  });
  $("#clear-all").addEventListener("click", () => {
    if (state.lista.length && confirm("Apagar toda a lista de compras?")) {
      state.lista = [];
      salvarLista();
      renderLista();
    }
  });
  $("#copy-list").addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(textoLista());
      toast("Lista copiada!");
    } catch {
      toast("Não foi possível copiar.");
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  hydrateIcons();
  renderInicio();
  renderFiltrosLocais();
  renderLocais();
  renderFiltrosReceitas();
  renderReceitas();
  renderLista();
  renderSaude();
  ligarEventos();
  window.addEventListener("hashchange", rota);
  rota();
});
