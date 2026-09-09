export const site = {
  name: "Prestige Detail",
  city: "Coimbra",
  description:
    "Aluguer de carros e lavagem de viaturas em Coimbra. Frota moderna, preços acessíveis e atendimento de qualidade.",
  whatsappNumber: "351937179618",
  whatsappDisplay: "+351 937 179 618",
  email: "cadirvalgy@gmail.com",
  address: "Eiras, Coimbra",
  schedule: [
    { days: "Segunda a Sexta", hours: "08:00 – 20:00" },
    { days: "Sábado", hours: "09:00 – 19:00" },
    { days: "Domingo", hours: "09:00 – 13:00" },
  ],
  mapsEmbedUrl:
    "https://maps.google.com/maps?q=Eiras,%20Coimbra,%20Portugal&t=&z=14&ie=UTF8&iwloc=&output=embed",
  mapsLink: "https://maps.google.com/?q=Eiras, Coimbra, Portugal",
} as const;

export const whatsappLink = (message: string) =>
  `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;

export const fleet = [
  {
    name: "Renault Clio",
    category: "Citadino",
    pricePerDay: 35,
    seats: 5,
    transmission: "Manual",
    image:
      "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Peugeot 208",
    category: "Citadino",
    pricePerDay: 38,
    seats: 5,
    transmission: "Automático",
    image:
      "https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Volkswagen Golf",
    category: "Familiar",
    pricePerDay: 55,
    seats: 5,
    transmission: "Automático",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Mercedes-Benz Classe A",
    category: "Premium",
    pricePerDay: 85,
    seats: 5,
    transmission: "Automático",
    image:
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Opel Insignia 2009 Cosmo",
    category: "Executiva",
    pricePerDay: 90,
    seats: 5,
    transmission: "Automático",
    tag: "Eventos especiais",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Opel_Insignia_Cosmo_V6_4x4_Karbongrau.JPG/960px-Opel_Insignia_Cosmo_V6_4x4_Karbongrau.JPG",
    imageCredit: "Foto: Thomas doerfer · CC BY-SA 3.0",
  },
] as const;

export const services = [
  {
    title: "Aluguer de Carros",
    description:
      "Frota moderna e revisada para viagens de negócios ou lazer. Contratos simples, sem surpresas.",
    icon: "car",
    items: [
      "Aluguer diário, semanal ou mensal",
      "Seguro incluído em todos os alugueres",
      "Entrega e recolha em Coimbra",
      "Kilómetros livres em contratos semanais",
    ],
  },
  {
    title: "Lavagem de Viaturas",
    description:
      "Cuidamos do seu carro com produtos de qualidade e acabamento profissional.",
    icon: "sparkles",
    items: [
      "Lavagem simples e exterior",
      "Lavagem completa com polimento",
      "Aspiração e limpeza interior",
      "Enceramento e proteção de pintura",
    ],
  },
] as const;

export const testimonials = [
  {
    name: "Miguel Santos",
    role: "Aluguer de fim de semana",
    quote:
      "Processo rápido e sem burocracias. O carro estava impecável e o preço foi o melhor da zona.",
  },
  {
    name: "Ana Ferreira",
    role: "Lavagem completa",
    quote:
      "Saíram-me do carro até as manchas que já não saíam em lado nenhum. Resultado fantástico.",
  },
  {
    name: "Rui Costa",
    role: "Aluguer mensal",
    quote:
      "Precisava de um carro por um mês e deram-me uma condição excelente. Atendimento de 5 estrelas.",
  },
] as const;