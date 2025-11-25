// 1. A Interface (O Molde)
// Aqui definimos o que É um produto. Se tentares criar um produto sem "price", o VS Code vai gritar contigo.
export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
}

// 2. Os Dados (O Conteúdo)
// Estes são os nossos produtos fictícios.
export const products: Product[] = [
  {
    id: "1",
    name: "Lumina Sphere",
    category: "Pendente",
    price: 299,
    image: "/products/1.jpg",
    description:
      "Uma esfera perfeita de luz difusa, ideal para ambientes minimalistas.",
  },
  {
    id: "2",
    name: "Arc Floor",
    category: "Candeeiro",
    price: 450,
    image: "/products/2.jpg",
    description: "Design italiano clássico com base em mármore negro.",
  },
  {
    id: "3",
    name: "Geometric Desk",
    category: "Candeeiro de Mesa",
    price: 120,
    image: "/products/3.jpg",
    description: "Linhas precisas e acabamento em latão escovado.",
  },
  {
    id: "4",
    name: "Nebula Wall",
    category: "Lustre",
    price: 180,
    image: "/products/4.jpg",
    description: "Iluminação indireta que cria uma atmosfera espacial.",
  },
];
