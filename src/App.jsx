import React from 'react';
import Header from './components/Header';
import WineDetails from './components/WineMain';
import './index.css';

const data = {
  name: "2014 Concha y Toro Casillero del Diablo Leyenda Cabernet Sauvignon",
  winery: "Concha y Toro",
  type: "Tinto",
  grapes: ["Cabernet Sauvignon"],
  vintage: "2014",
  region: "Central Valley, Maipo Valley e Pirque, Chile",
  price: 185.00,
  images: [
    "./public/front_out.webp",
    "./public/front_in.webp",
    "./public/path-to-image3.jpg"
  ],
  technical: {
    volume: "750ml",
    alcohol: "13.5%",
    classification: "Seco"
  },
  sensory: {
    visual: "Rubi intenso",
    gustative: "Taninos jovens e arenosos presentes, com final bem acentuado",
    olfactory: "A fruta é marcante na medida certa",
    pairing: "carne vermelha",
    servingTemperature: ""
  },
  reviews: [
    { user: "João", rating: 4, comment: "Excelente vinho, boa acidez." },
    { user: "Maria", rating: 5, comment: "Ótimo para acompanhar carnes." }
  ],
  expert:{
      label: "Bronze, International Wine Challenge",
      comment: "A fruta não se excede e apresenta taninos jovens e arenosos, com final vivo"
    }
};

export default function App() {
  return (
    <div className="App">
      <Header />
      <WineDetails wine={data} />
    </div>
  );
}

