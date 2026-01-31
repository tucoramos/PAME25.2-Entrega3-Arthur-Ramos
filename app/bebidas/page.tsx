import ProductGrid from "../components/ProductGrid";

const items = [
  {
    id: "B-01",
    title: "Espresso Clean Roast",
    price: 2.5,
    imageSrc: "/menuBebidas/EspressoCleanRoast.jpg",
    liked: false,
  },
  {
    id: "B-02",
    title: "Latte Clean Girl",
    price: 3.0,
    imageSrc: "/menuBebidas/LatteCleanGirl.jpg",
    liked: false,
  },
  {
    id: "B-03",
    title: "Iced Latte Vanilla",
    price: 3.0,
    imageSrc: "/menuBebidas/IcedLatteVanilla.jpg",
    liked: false,
  },
  {
    id: "B-04",
    title: "Cappuccino Artesanal",
    price: 2.0,
    imageSrc: "/menuBebidas/CappuccinoArtesanal.jpg",
    liked: false,
  },

  {
    id: "B-05",
    title: "Matcha Latte Creamy",
    price: 2.0,
    imageSrc: "/menuBebidas/MatchaLatteCreamy.jpg",
    liked: false,
  },
];

export default function page() {
  return (
    <div className="w-full h-full">
      <ProductGrid products={items} />
    </div>
  );
}
