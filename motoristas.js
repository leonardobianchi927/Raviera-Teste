// ============================================================
//  EDITE AQUI: configurações da empresa e lista de motoristas
// ============================================================
const EMPRESA = {
  nome: "RAVIERA GROUP",        // nome da empresa
  slogan: "Transportadora virtual de Euro Truck Simulator 2",
  discord: ""                   // link do convite (deixe "" para esconder)
};

// foto: caminho da imagem na pasta fotos/ (se faltar, aparecem as iniciais)
// ganhos / ganhosMes: valores em euros (€)
// status: "online" | "estrada" | "folga"
// km e entregas: totais do motorista. A patente é calculada pelo km.
const MOTORISTAS = [
  { nome: "Carlos Silva", foto: "fotos/carlos.jpg", ganhos: 2480000, ganhosMes: 61000,   apelido: "Carlão",  km: 182400, entregas: 1240, caminhao: "Scania S 730",       cargaFavorita: "Cargas pesadas", entrada: "2023-02-14", status: "estrada" },
  { nome: "Marcos Oliveira", foto: "fotos/marcos.jpg", ganhos: 1310000, ganhosMes: 48500,apelido: "Marquito",km: 96350,  entregas: 812,  caminhao: "Volvo FH16 750",     cargaFavorita: "Combustível",    entrada: "2023-04-02", status: "online"  },
  { nome: "Ana Souza", foto: "fotos/ana.jpg", ganhos: 742000, ganhosMes: 39200,      apelido: "Aninha",  km: 54200,  entregas: 530,  caminhao: "DAF XG+",            cargaFavorita: "Alimentos",      entrada: "2023-06-20", status: "online"  },
  { nome: "João Pereira", foto: "fotos/joao.jpg", ganhos: 318000, ganhosMes: 12800,   apelido: "JP",      km: 23100,  entregas: 241,  caminhao: "MAN TGX",            cargaFavorita: "Carga frigorífica", entrada: "2023-09-11", status: "folga" },
  { nome: "Rafael Lima", foto: "fotos/rafael.jpg", ganhos: 121000, ganhosMes: 9400,    apelido: "Rafa",    km: 8700,   entregas: 96,   caminhao: "Mercedes Actros",    cargaFavorita: "Máquinas",       entrada: "2024-01-08", status: "folga"   },
  { nome: "Bruno Costa", foto: "fotos/bruno.jpg", ganhos: 16500, ganhosMes: 5200,    apelido: "Brunão",  km: 1200,   entregas: 14,   caminhao: "Renault T High",     cargaFavorita: "Ainda explorando", entrada: "2024-03-30", status: "estrada" }
];

// Patentes (usadas no painel e na página de regras)
const PATENTES = [
  { n: "Recruta",   min: 0,      cor: "#9bb0a1" },
  { n: "Motorista", min: 5000,   cor: "#a6d94a" },
  { n: "Veterano",  min: 25000,  cor: "#2fd12f" },
  { n: "Elite",     min: 75000,  cor: "#14b8a6" },
  { n: "Lenda",     min: 150000, cor: "#f2c230" }
];

// Regras da empresa: edite títulos e itens à vontade
const REGRAS = [
  { titulo: "Convivência", itens: [
    "Respeite todos os motoristas, dentro e fora do jogo.",
    "Nada de ofensas, discriminação ou spam no Discord.",
    "Dúvidas ou conflitos? Fale com a administração." ] },
  { titulo: "Na estrada", itens: [
    "Dirija com cuidado: respeite semáforos, limites de velocidade e demais veículos.",
    "Proibido trapacear, usar teleporte ou modificar o jogo para ganhar vantagem.",
    "Nos comboios, siga a ordem combinada e mantenha a distância segura.",
    "Danos ao caminhão ou à carga devem ser comunicados no Discord." ] },
  { titulo: "Entregas e atividade", itens: [
    "Cada motorista deve fazer ao menos 1 entrega por mês.",
    "Avise a administração se for ficar mais de 30 dias sem jogar.",
    "Registre km, entregas e ganhos até o dia 5 de cada mês." ] },
  { titulo: "Pagamento e patentes", itens: [
    "Os ganhos mostrados no painel são totais acumulados em euros (€).",
    "A patente sobe automaticamente conforme os km percorridos (tabela abaixo).",
    "A administração pode rebaixar ou remover quem descumprir as regras." ] }
];
