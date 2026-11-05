// OrdKompis PT - Portuguese explanations for word order (overlay, keyed by section id)
window.ORDKOMPIS_PT_WORDORDER = {
 "description": "A ordem das palavras em sueco segue regras rígidas. A mais importante é a regra V2: nas orações principais, o verbo fica SEMPRE na segunda posição.",
 "sections": {
  "v2": {
   "title": "V2-regeln (regra do verbo em segundo lugar)",
   "explanation": "Em uma oração principal sueca (huvudsats), o verbo conjugado fica SEMPRE na segunda posição, não importa o que venha primeiro.",
   "rules": [
    "Sujeito primeiro (normal): <b>Jag</b> <u>äter</u> frukost varje dag.",
    "Tempo primeiro (inversão): <b>Varje dag</b> <u>äter</u> jag frukost.",
    "Lugar primeiro (inversão): <b>I Sverige</b> <u>fikar</u> man ofta.",
    "Objeto primeiro (ênfase): <b>Den boken</b> <u>läste</u> jag igår."
   ],
   "why": [
    "Depois de uma palavra de abertura que não é o sujeito, o verbo TEM que vir em segundo lugar (antes do sujeito).",
    "O advérbio vem primeiro → o verbo vem em segundo → o sujeito passa para a terceira posição."
   ]
  },
  "biff": {
   "title": "BIFF-regeln (posição da negação)",
   "explanation": "BIFF = <b>B</b>isats <b>I</b>nte <b>F</b>öre det <b>F</b>inita verbet. Em uma oração subordinada, 'inte' (e outros advérbios) vem ANTES do verbo. Em uma oração principal, 'inte' vem DEPOIS do verbo.",
   "rules": [
    "<b>Huvudsats</b> (principal): Jag <u>äter</u> <b>inte</b> frukost. (Eu não tomo café da manhã.)",
    "<b>Bisats</b> (subordinada): ...att jag <b>inte</b> <u>äter</u> frukost. (...que eu não tomo café da manhã.)",
    "Vale também para 'aldrig', 'alltid', 'ofta', 'redan', 'bara' etc."
   ],
   "why": [
    "Em uma bisats (depois de att, om, när etc.), 'inte' vem ANTES do verbo.",
    "Em uma huvudsats, 'inte' vem DEPOIS do verbo."
   ]
  },
  "satschema": {
   "title": "Satsschema (mapa da estrutura da frase)",
   "explanation": "As frases suecas seguem uma estrutura previsível, dividida em posições. Entender essas posições ajuda a montar frases corretas.",
   "slotDescs": [
    "Posição 1: o que vem primeiro (sujeito, tempo, lugar etc.)",
    "Posição 2: o verbo conjugado (SEMPRE aqui!)",
    "Posição 3: o sujeito (só se não estiver no fundament)",
    "Posição 4: inte, aldrig, alltid, ofta, redan, bara",
    "Infinitivo, particípio ou outras formas verbais",
    "Quem/o quê + quando/onde/como"
   ],
   "mainLabel": "Huvudsats (oração principal):",
   "subLabel": "Bisats (oração subordinada):"
  },
  "questions": {
   "title": "Frågesatser (perguntas)",
   "explanation": "Perguntas de sim ou não: o verbo vem primeiro. Perguntas com palavra interrogativa: a palavra interrogativa vem primeiro, depois o verbo em segundo lugar.",
   "rules": [
    "<b>Ja/Nej-fråga:</b> <u>Äter</u> du frukost? (Você toma café da manhã?)",
    "<b>Frågeord:</b> <b>Vad</b> <u>äter</u> du? (O que você come?)",
    "<b>Frågeord:</b> <b>Var</b> <u>bor</u> du? (Onde você mora?)"
   ],
   "wrong": [
    "❌ Du äter frukost? (como pergunta de verdade)"
   ],
   "why": [
    "Troque o verbo e o sujeito de lugar nas perguntas de sim ou não."
   ]
  },
  "bisats": {
   "title": "Bisatsord (conjunções subordinativas)",
   "explanation": "Estas palavras iniciam uma oração subordinada (bisats) e ativam a regra BIFF (advérbio antes do verbo).",
   "words": [
    "que / para",
    "se (condicional ou dúvida)",
    "quando",
    "porque / já que",
    "porque / para (finalidade)",
    "enquanto",
    "antes (de uma oração)",
    "embora / apesar de que",
    "que / quem / o qual (relativo)",
    "embora",
    "para que",
    "até que"
   ]
  }
 }
};
