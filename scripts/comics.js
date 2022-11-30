const comicBooks = [
  {
      nome: "O Incrível Hulk - Vol. 11",
      preco: "14,99",
      descricao: "Nesse volume, MODOC e o general Ross se unem e liberam o Abominável! Uma amiga de Bruce Banner sofre uma transformação terrível! O Mestre do Picadeiro força Banner a se tornar o Hulk e ameaça controlar sua mente para sempre! E o cientista ainda cai sob a influência de um mafioso moribundo!",
      editora: "marvel",
      categoria: "herois",
      foto: "hulk.png",
  },
  {
      nome: "Boa Noite Punpun - Vol. 5",
      preco: "27,99",
      descricao: "Ao encontrar a felicidade, Punpun finalmente acha o seu lugar. Nessa hora, um incidente e o reencontro com uma certa pessoa fazem a vida do jovem entrar em colapso mais uma vez, e sua alegria começa a ruir aos poucos…",
      editora: "Editora JBC",
      categoria: "manga",
      foto: "punpun.png",
  },
  {
      nome: "365 HISTORIAS EM QUADRINHOS",
      preco: "24,89",
      descricao: "Seus personagens favoritos vão te acompanhar o ano inteiro! Este especial reúne 365 histórias em quadrinhos cheias de humor, aventura, mistério e amizade. Mickey, Pateta, Donald, Tio Patinhas, Margarida e muitos outros personagens estão preparados para deixar seus dias ainda mais divertidos!",
      editora: "disney",
      categoria: "infantil",
      foto: "hulk.png",
  },
  {
      nome: "Doutor Estranho: Marvel-Verse",
      preco: "21,50",
      descricao: "O Mago Supremo protagoniza algumas de suas aventuras mais espetaculares aqui! Descubra como a busca de Stephen Strange por uma cura para suas mãos destruídas o levou a um mundo de magia e mistério! Junte-se a ele em uma batalha interdimensional alucinante contra Dormammu, como somente Lee e Ditko poderiam apresentar! Depois, um triste Strange aborda o demoníaco D'Spayre e aprende como seria a vida se ele nunca tivesse dominado as artes místicas. E, claro, tem muito mais!",
      editora: "marvel",
      categoria: "herois",
      foto: "estranho.png",
  },
  {
      nome: "Thor: A Deusa Do Trovão",
      preco: "39,95",
      descricao: "Mjolnir está sem dono, agora que os segredos do Deus do Trovão o tornaram indigno de levantá-lo. Mas quando Gigantes de Gelo invadem a Terra, uma nova mão deverá tocar o martelo. e uma misteriosa mulher assumirá o manto do Poderoso Thor! Quem é essa nova Deusa do Trovão? Nem mesmo Odin sabe, mas ela pode ser a única esperança da Terra contra os Gigantes de Gelo! Confira o início desse passo do mito em direção ao futuro!",
      editora: "marvel",
      categoria: "herois",
      foto: "thor.png",
  },
  {
      nome: "Homem-Aranha Vol. 1",
      preco: "29,90",
      descricao: "Uma nova e espetacular era começa aqui! Leitores de todas as idades poderão vivenciar as novíssimas aventuras do Homem-Aranha e de seus incríveis amigos! Peter Parker já teve que lidar com vilões mortais e heróis lendários, mas a vida no Ensino Médio pode ser seu maior desafio até agora. Por sorte, ele vai ter uma ajudinha de seus amigos. Miles Morales e Gwen Stacy! (Marvel Action: Spider-Man (2018) 1-6)",
      editora: "marvel",
      categoria: "herois",
      foto: "aranha1.png",
  },
  {
      nome: "A Morte de Wolverine",
      preco: "39,90",
      descricao: "Chegou a hora. Após toda uma vida lutando por aquilo em que acredita, a interminável batalha de Wolverine chega ao fim. Esgotado, sem fator de cura e com sua cabeça a prêmio, Logan terá de lutar uma última vez para partir deste mundo de acordo com seus próprios termos, fazendo com que sua morte, assim como sua vida, tenha algum sentido. Charles Soule (Inumanos vs. X-Men) e Steve McNiven (Guerra Civil) narram a derradeira aventura de um dos personagens mais queridos das HQs.        ",
      editora: "marvel",
      categoria: "herois",
      foto: "wolverine.png",
  },
  {
      nome: "Homem-Aranha: Caído Entre os Mortos",
      preco: "67,45",
      descricao: "Alguém descobriu a verdadeira identidade do Homem-Aranha e pretende usar a informação para destruir o que Peter mais ama! Enquanto luta para proteger sua família e seus amigos de um misterioso e insano inimigo, o Aracnídeo é levado ao limite absoluto e esta perto de cruzar um limite que jurou jamais atravessar. Após uma grande luta contra o seu pior inimigo, o Duende Verde, Peter Parker agora se vê em um desafio maior: descobrir quem raptou a sua tia. Um grande momento do Aranha por Mark Millar e Terry Dodson!",
      editora: "marvel",
      categoria: "herois",
      foto: "aranha2.png",
  },
  {
      nome: "Watchmen - Edição Definitiva",
      preco: "120,99",
      descricao: "O ano é 1985. Os Estados Unidos são uma nação totalitária e fechada, isolada do resto do mundo. A presença de arsenais nucleares e dos chamados super-heróis mantém um certo equilíbrio entre as forças do planeta... até que o relógio do fim do mundo começa a marchar para a meia-noite e a raça humana para um abismo sem-fim. A sombria e inigualável trama tem início com ilusões paranóicas do supostamente insano herói Rorschach, um dos Watchmen que patrulhavam os EUA décadas atrás. Mas ele estaria realmente insano ou na verdade teria descoberto uma sórdida conspiração para assassinar super-heróis -- ou, pior ainda, milhões de civis inocentes? Fugindo da lei, Rorschach junta-se a ex-companheiros do passado em uma desesperada tentativa de salvar suas próprias vidas... e o que acabam descobrindo, além de abalar suas estruturas, poderá alterar o próprio destino do planeta Terra! Seguindo duas gerações de heróis mascarados, desde a Segunda Guerra até os tensos anos da Guerra Fria, surge esta pioneira epopéia de ódio, amor, reencontros impossíveis, grandes reviravoltas e muita ação, como só a criatividade de Alan Moore e Dave Gibbons poderia conceber!",
      editora: "dc comics",
      categoria: "herois",
      foto: "watchmen.png",
  },
  {
      nome: "Flash de Dois Mundos",
      preco: "63,70",
      descricao: "O cientista policial Barry Allen – também conhecido como o Flash da Era de Prata – finalmente conhece seu predecessor da Era de Ouro, Jay Garrick – o primeiro Velocista Escarlate –, e o destino do Universo DC muda para sempre! Este encontro marcou o início das famosas múltiplas Terras da DC, com o mundo de Barry tornando-se a “Terra-1”, e o de Jay e da Sociedade da Justiça da América virando a “Terra-2”. A partir destes eventos surgiria o vasto Multiverso DC que conhecemos. As seis reuniões iniciais e intermundos dos dois Flashes são apresentadas nesta edição especial de luxo pela primeira vez.",
      editora: "dc comics",
      categoria: "herois",
      foto: "flash.png",
  },
  {
      nome: "Batman: O Tempo E O Batman",
      preco: "41,65",
      descricao: "O cientista policial Barry Allen – também conhecido como o Flash da Era de Prata – finalmente conhece seu predecessor da Era de Ouro, Jay Garrick – o primeiro Velocista Escarlate –, e o destino do Universo DC muda para sempre! Este encontro marcou o início das famosas múltiplas Terras da DC, com o mundo de Barry tornando-se a “Terra-1”, e o de Jay e da Sociedade da Justiça da América virando a “Terra-2”. A partir destes eventos surgiria o vasto Multiverso DC que conhecemos. As seis reuniões iniciais e intermundos dos dois Flashes são apresentadas nesta edição especial de luxo pela primeira vez.",
      editora: "dc comics",
      categoria: "herois",
      foto: "batman1.png",
  },
  {
      nome: "O Pacificador: Pertubando a Paz",
      preco: "17,90",
      descricao: "O premiado roteirista Garth Ennis dá o seu ponto de vista de um dos personagens de destaque do Universo DC. Antes de entrar para o Esquadrão Suicida, Christopher Smith conheceu uma psiquiatra obcecada por seu passado. O Pacificador narra sua vida, da infância ao serviço militar, expondo os possíveis podres ocultos do anti-herói. Uma história violenta que pode ser a responsável por trazer paz - ou não - ao Pacificador.",
      editora: "dc comics",
      categoria: "herois",
      foto: "pacificador.png",
  },
  {
      nome: "Batman & Superman - 1",
      preco: "12,90",
      descricao: "Agora, não será possível confiar em ninguém. Os infectados estão à solta! Após os devastadores acontecimentos presentes na revista O Batman que Ri, Superman e Batman estão juntos novamente para encarar uma aterradora nova ameaça que pode atacar de qualquer lugar. O Cavaleiros das Trevas e o Homem de Aço mergulharão nas profundezas de Gotham City para descobrir quais de seus colegas heróis foram transformados em terríveis agentes do perigoso Batman que Ri! E para dificultar ainda mais. será que poderão confiar um no outro?! Este encadernado ainda inclui três histórias especiais de vilões que participarão do megaevento Ano dos Vilões, que afetará todo o Universo DC: Sinestro, Charada e Máscara Negra! (Batman/Superman 1, Year of The Villain: Sinestro 1, Year of The Villain: The Riddler 1, Year of The Villain: Black Mask 1)",
      editora: "dc comics",
      categoria: "herois",
      foto: "batman2.png",
  },
  {
      nome: "Batman - A Morte da Família",
      preco: "66,74",
      descricao: "O Coringa retornou, agora transformado em algo ainda mais perigoso do que qualquer uma de suas encarnações passadas. Desta vez, porém, parece que o Cavaleiro das Trevas não é o alvo direto do vilão, mas sim todos aqueles que o herói chama ou já chamou de “família”! Comissário Gordon, Alfred, Batgirl, Robin, Capuz Vermelho… todos estão prestes a se tornar alvos de um Palhaço do Crime mais imprevisível, impiedoso e psicótico do que nunca. Conseguirá o Batman deter o ataque mais mortal de seu mais perturbado arquirrival? Ou a revelação de um segredo antigo entre os dois destruirá tudo que o Morcego mais ama? Os premiados criadores SCOTT SNYDER e GREG CAPULLO apresentam aqui o aguardado retorno do Coringa, criando um dos momentos mais incríveis dos Novos 52! Este encadernado inclui as histórias publicadas nas edições Batman 13-17 e em Batman & Robin 15-17 em 252 páginas.",
      editora: "dc comics",
      categoria: "herois",
      foto: "batman3.png",
  },
  {
      nome: "A Biografia Não Autorizada De Lex Luthor",
      preco: "17,95",
      descricao: "O Coringa retornou, agora transformado em algo ainda mais perigoso do que qualquer uma de suas encarnações passadas. Desta vez, porém, parece que o Cavaleiro das Trevas não é o alvo direto do vilão, mas sim todos aqueles que o herói chama ou já chamou de “família”! Comissário Gordon, Alfred, Batgirl, Robin, Capuz Vermelho… todos estão prestes a se tornar alvos de um Palhaço do Crime mais imprevisível, impiedoso e psicótico do que nunca. Conseguirá o Batman deter o ataque mais mortal de seu mais perturbado arquirrival? Ou a revelação de um segredo antigo entre os dois destruirá tudo que o Morcego mais ama? Os premiados criadores SCOTT SNYDER e GREG CAPULLO apresentam aqui o aguardado retorno do Coringa, criando um dos momentos mais incríveis dos Novos 52! Este encadernado inclui as histórias publicadas nas edições Batman 13-17 e em Batman & Robin 15-17 em 252 páginas.",
      editora: "dc comics",
      categoria: "herois",
      foto: "lex.png",
  }   
]

function renderSugestion(i) {
  const comic = comicBooks[i]
  const sugestionContainer = document.createElement("div");
  sugestionContainer.className = "sugestion-container";
  sugestionContainer.onclick = () => {
    onCardClick(i);
  };

  const img = document.createElement("img");
  img.src = `./images/${comic.foto}`;
  img.className = "sugestion-image";

  const name = document.createElement("span");
  name.className = "sugestion-name";
  name.innerHTML = comic.nome;

  const priceContainer = document.createElement("div");
  priceContainer.className = "sugestion-price-container";

  const price = document.createElement("span");
  price.className = "sugestion-price";
  price.innerHTML = comic.preco;

  const priceLabel = document.createElement("span");
  priceLabel.className = "sugestion-price-label";
  priceLabel.innerHTML = "R$";

  priceContainer.appendChild(price);
  priceContainer.appendChild(priceLabel);

  sugestionContainer.appendChild(img);
  sugestionContainer.appendChild(name);
  sugestionContainer.appendChild(priceContainer);
  return sugestionContainer;
}
