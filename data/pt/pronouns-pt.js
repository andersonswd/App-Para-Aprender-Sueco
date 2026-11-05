// OrdKompis PT - Portuguese explanations for pronouns (overlay)
window.ORDKOMPIS_PT_PRONOUNS = {
 "description": "Tabelas completas de pronomes: sujeito, objeto, possessivos (en/ett/plural) e formas reflexivas.",
 "personalLabels": [
  "jag (eu)",
  "du (você / tu)",
  "han (ele)",
  "hon (ela)",
  "hen (neutro)",
  "den (ele/ela, palavra en)",
  "det (ele/ela, palavra ett)",
  "vi (nós)",
  "ni (vocês)",
  "de (eles / elas)"
 ],
 "sin": {
  "description": "Um dos pontos mais difíceis do sueco: sin/sitt/sina se refere de volta ao SUJEITO da frase. Hans/hennes/deras se refere a outra pessoa.",
  "rules": [
   {
    "rule": "<b>sin</b> = seu/sua (dele, dela, deles — do próprio sujeito) — palavra en",
    "example": "Han älskar <b>sin</b> fru. (Ele ama a sua [própria] esposa.)"
   },
   {
    "rule": "<b>sitt</b> = seu/sua (do próprio sujeito) — palavra ett",
    "example": "Hon tog <b>sitt</b> paraply. (Ela pegou o seu [próprio] guarda-chuva.)"
   },
   {
    "rule": "<b>sina</b> = seu/sua (do próprio sujeito) — plural",
    "example": "De hämtade <b>sina</b> barn. (Eles buscaram os seus [próprios] filhos.)"
   },
   {
    "rule": "<b>hans</b> = dele (de outra pessoa)",
    "example": "Han älskar <b>hans</b> fru. (Ele ama a esposa [de outro homem].)"
   },
   {
    "rule": "⚠️ Sin/sitt/sina NUNCA pode ser o sujeito!",
    "example": "✗ Sin bil är röd. ✓ Hans bil är röd."
   }
  ],
  "contrast": [
   {
    "en": "Lisa lava o carro dela (o próprio carro).",
    "note": "sin → o carro da Lisa"
   },
   {
    "en": "Lisa lava o carro dela (de outra mulher).",
    "note": "hennes → o carro de outra mulher"
   },
   {
    "en": "Erik pegou o guarda-chuva dele (o próprio).",
    "note": "sitt → o guarda-chuva do Erik"
   },
   {
    "en": "Erik pegou o guarda-chuva dele (de outro homem).",
    "note": "hans → o guarda-chuva de outro homem"
   }
  ]
 },
 "demo": {
  "title": "Demonstrativa pronomen (este / esse / aquele...)",
  "rows": [
   "este / esta (palavra en)",
   "este / isto (palavra ett)",
   "estes / estas (plural)",
   "esse / essa / aquele (palavra en)",
   "esse / isso / aquele (palavra ett)",
   "esses / essas / aqueles (plural)"
  ]
 },
 "interro": {
  "title": "Frågeord (palavras interrogativas)",
  "rows": [
   "quem",
   "o quê / que",
   "qual / quais (en / ett / plural)",
   "onde",
   "para onde (direção)",
   "de onde",
   "quando",
   "como",
   "quanto / quantos",
   "por que"
  ]
 },
 "indef": {
  "title": "Obestämda pronomen (pronomes indefinidos)",
  "rows": [
   "algum / alguma / alguns; alguém",
   "nenhum / nenhuma; ninguém",
   "todos / tudo",
   "a gente; se; qualquer um (impessoal)",
   "cada; todo",
   "outro / outra / outros",
   "mesmo / mesma",
   "mesmo; próprio; sozinho"
  ]
 }
};
