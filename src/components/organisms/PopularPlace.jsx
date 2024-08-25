import React, { useState, useEffect } from "react";
import { IoGolfSharp } from "react-icons/io5";
import SelectedCategory from "../molecules/SelectedCategory.jsx";
import CardHero from "../molecules/CardHero";
//Beach
import pantaiKuta from "../../assets/Home/Card Popular Place/Beach/pantai-kuta.jpg";
import nusaPenida from "../../assets/Destinations/nusa-penida.jpg";
import nusaDua from "../../assets/Home/Card Popular Place/Beach/nusaDua.jpg";
import padangPadang from "../../assets/Home/Card Popular Place/Beach/padangPadang.jpg";
import sanur from "../../assets/Home/Card Popular Place/Beach/sanur.jpg";
import dreamland from "../../assets/Home/Card Popular Place/Beach/dreamland.jpg";
//Mountain
import gunungAgung from "../../assets/Home/Card Popular Place/Mountain/gunung-agung.jpg";
import gunungBatur from "../../assets/Home/Card Popular Place/Mountain/gunung-batur.jpg";
import gunungAbang from "../../assets/Home/Card Popular Place/Mountain/gunung-abang.jpg";
//Villa
import sankara from "../../assets/Home/Card Popular Place/Villa/sankara.jpg";
import legian from "../../assets/Home/Card Popular Place/Villa/legian.jpg";
import laVie from "../../assets/Home/Card Popular Place/Villa/laVie.jpg";
import laMira from "../../assets/Home/Card Popular Place/Villa/laMira.jpg";
import royalKamuela from "../../assets/Home/Card Popular Place/Villa/royalKamuela.jpg";
import aleva from "../../assets/Home/Card Popular Place/Villa/aleva.jpg";
//Hotel
import como from "../../assets/Home/Card Popular Place/Hotel/como.jpg";
import melia from "../../assets/Home/Card Popular Place/Hotel/melia.jpg";
import adiwana from "../../assets/Home/Card Popular Place/Hotel/adiwana.jpg";
import the101 from "../../assets/Home/Card Popular Place/Hotel/the101.jpg";
import truntum from "../../assets/Home/Card Popular Place/Hotel/truntum.jpg";
import hyatt from "../../assets/Home/Card Popular Place/Hotel/hyatt.jpg";
//Restaurant
import babi from "../../assets/Home/Card Popular Place/Restaurant/babi.jpg";
import betutu from "../../assets/Home/Card Popular Place/Restaurant/betutu.jpg";
import babiGuling from "../../assets/Home/Card Popular Place/Restaurant/babiGuling.jpg";
import laPlanca from "../../assets/Home/Card Popular Place/Restaurant/laPlanca.jpg";
import seaCircus from "../../assets/Home/Card Popular Place/Restaurant/seaCircus.jpg";
import menTempeh from "../../assets/Home/Card Popular Place/Restaurant/menTempeh.jpg";

const PopularPlace = () => {
  const [selectedCategory, setSelectedCategory] = useState({
    id: 1,
    name: "All",
  });
  const [travelCards, setTravelCards] = useState([]);

  const handleSelect = (selectedCategory) => {
    setSelectedCategory(selectedCategory);
    console.log(selectedCategory);
  };

  const categories = [
    { id: 1, name: "All" },
    { id: 2, name: "Beach" },
    { id: 3, name: "Mountain" },
    { id: 4, name: "Villa" },
    { id: 5, name: "Hotel" },
    { id: 6, name: "Restaurant" },
  ];

  const cardData = [
    //PANTAI
    {
      image: pantaiKuta,
      judul: "Kuta Beach",
      detailTempat: "Kec. Kuta, Kabupaten Badung, Bali",
      distance: "30 km",
      rating: "4.5 Rating",
      reviews: "40.413 Review",
      price: "Free",
      category: "Beach",
    },
    {
      image: nusaPenida,
      judul: "Virgin Beach",
      detailTempat: "Jl. Raya Bukit Asah No.Desa, Adat Bugbug, Kec. Manggis, Kabupaten Karangasem",
      distance: "50 km",
      rating: "4.6 Rating",
      reviews: "2.932 Review",
      price: "Rp. 15.000",
      category: "Beach",
    },
    {
      image: nusaDua,
      judul: "Nusa Dua Beach",
      detailTempat: "Nusa Dua, Badung Regency, Bali",
      distance: "25 km",
      rating: "4.5 Rating",
      reviews: "837 Review",
      price: "Free",
      category: "Beach",
    },
    {
      image: padangPadang,
      judul: "Padang Padang Beach",
      detailTempat: "Pecatu, Kec. Kuta Sel., Kabupaten Badung, Bali",
      distance: "35 km",
      rating: "4.3 Rating",
      reviews: "7.585 Review",
      price: "Free",
      category: "Beach",
    },
    {
      image: dreamland,
      judul: "Dreamland Beach",
      detailTempat: "Pecatu, Badung Regency, Bali",
      distance: "35 km",
      rating: "4.6 Rating",
      reviews: "6.610 Review",
      price: "Free",
      category: "Beach",
    },
    {
      image: sanur,
      judul: "Sanur Beach",
      detailTempat: "Sanur, Denpasar Selatan, Bali",
      distance: "12 km",
      rating: "4.5 Rating",
      reviews: "5.473 Review",
      price: "Free",
      category: "Beach",
    },
    //GUNUNG
    {
      image: gunungAgung,
      judul: "Gunung Agung",
      detailTempat: "Jungutan, Kec. Bebandem, Kabupaten Karangasem, Bali",
      distance: "100km",
      rating: "4,4 Rating",
      reviews: "2.183 review",
      price: "Rp. 30.000",
      category: "Mountain",
    },
    {
      image: gunungBatur,
      judul: "Gunung Batur",
      detailTempat: "Batur Sel., Kec. Kintamani, Kabupaten Bangli, Bali",
      distance: "100km",
      rating: "4,5 Rating",
      reviews: "3.781 review",
      price: "Rp. 30.000",
      category: "Mountain",
    },
    {
      image: gunungAbang,
      judul: "Gunung Abang",
      detailTempat: "Desa Abangsongan, Kecamatan Kintamani, Kabupaten Bangli",
      distance: "100km",
      rating: "4,7 Rating",
      reviews: "173 review",
      price: "Rp. 30.000",
      category: "Mountain",
    },

  //VILLA
    {
      image: legian,
      judul: "Legian Kriyamaha Villa",
      detailTempat: "Kabupaten Badung, Bali",
      distance: "35 km",
      rating: "4.8 Rating",
      reviews: "1078 Review",
      price: "Rp 2.287.125",
      category: "Villa",
    },
    {
      image: laVie,
      judul: "La Vie Villa Seminyak",
      detailTempat: "Kabupaten Badung, Bali",
      distance: "35 km",
      rating: "4.8 Rating",
      reviews: "411 Review",
      price: "Rp 2.458.125",
      category: "Villa",
    },
    {
      image: aleva,
      judul: "Aleva Villa",
      detailTempat:
        "Jl. Dewi Saraswati No.8, Seminyak, Kec. Kuta, Kabupaten Badung",
      distance: "35 km",
      rating: "4.7 Rating",
      reviews: "433 Review",
      price: "Rp 3.383.492",
      category: "Villa",
    },
    {
      image: laMira,
      judul: "La Mira Villa Seminyak",
      detailTempat:
        " Jl. Merta Sari No.88 x, kerobokan, Kec. Kuta Utara, Kabupaten Badung",
      distance: "35 km",
      rating: "4.9 Rating",
      reviews: "312 Review",
      price: "Rp 1.775.876",
      category: "Villa",
    },
    {
      image: royalKamuela,
      judul: "Royal Kamuela Villas",
      detailTempat:
        "Sanctuary, Jalan Wenara Wana Sacred Monkey Forest, Ubud, Gianyar Regency",
      distance: "35 km",
      rating: "4.8 Rating",
      reviews: "842 Review",
      price: "Rp 4.829.326",
      category: "Villa",
    },
    {
      image: sankara,
      judul: "The Sankara Suites",
      detailTempat:
        "Jl. Sri Wedari No.973, Ubud, Kecamatan Ubud, Kabupaten Gianyar",
      distance: "35 km",
      rating: "4.7 Rating",
      reviews: "491 Review",
      price: "Rp 2.083.840",
      category: "Villa",
    },
    //HOTEL
    {
      image: como,
      judul: "COMO Uma Canggu",
      detailTempat:
        "Echo Beach, Jl. Pantai Batu Mejan, Canggu, Kec. Kuta Utara, Kabupaten Badung",
      distance: "35 km",
      rating: "4.6 Rating",
      reviews: "1.319 Review",
      price: "Rp 3.305.352",
      category: "Hotel",
    },
    {
      image: the101,
      judul: "THE 1O1 Bali Fontana Seminyak",
      detailTempat:
        "Jl. Dewi Sri No.68, Legian, Kec. Kuta, Kabupaten Badung",
      distance: "35 km",
      rating: "4.4 Rating",
      reviews: "3.416 Review",
      price: "Rp 446.612",
      category: "Hotel",
    },
    {
      image: adiwana,
      judul: "Adiwana Suwetra",
      detailTempat:
        "Jl. Sri Wedari No.973, Ubud, Kecamatan Ubud, Kabupaten Gianyar",
      distance: "35 km",
      rating: "4.9 Rating",
      reviews: "587 Review",
      price: "Rp 4.147.200",
      category: "Hotel",
    },
    {
      image: hyatt,
      judul: "Hyatt Regency Bali",
      detailTempat:
        "Jl. Danau Tamblingan No.89, Sanur, Denpasar Selatan, Kota Denpasar, Bali 80228",
      distance: "com",
      rating: "4.7 Rating",
      reviews: "2.960 Review",
      price: "Rp 4.834.517",
      category: "Hotel",
    },
    {
      image: truntum,
      judul: "Truntum Kuta Bali",
      detailTempat:
        "Pande Mas, Jl. Pantai Kuta No.1, Kec. Kuta, Kabupaten Badung",
      distance: "com",
      rating: "4.5 Rating",
      reviews: "5.364 Review",
      price: "Rp 1.011.397",
      category: "Hotel",
    },
    {
      image: melia,
      judul: "Meliá Bali",
      detailTempat:
        "Jl. Kw. Nusa Dua Resort Itdc Lot 1, Jl. Nusa Dua, Benoa, Kec. Kuta Sel",
      distance: "com",
      rating: "4.5 Rating",
      reviews: "5.045 Review",
      price: "Rp 4.314.735",
      category: "Hotel",
    },
    //Restaurant
    {
      image: babi,
      judul: "Babi Guling Golden",
      detailTempat:
        "JJl. Badak Agung No.Utara, Renon, Denpasar Selatan, Kota Denpasar",
      distance: "com",
      rating: "4.5 Rating",
      reviews: "575 Review",
      price: "Rp 30.000",
      category: "Restaurant",
    },
    {
      image: betutu,
      judul: "Ayam Betutu Ibu Nia Renon",
      detailTempat:
        "Jl. Merdeka No.1, Renon, Kec. Denpasar Tim., Kota Denpasar",
      distance: "com",
      rating: "4.9 Rating",
      reviews: "1.597 Review",
      price: "Rp 35.000",
      category: "Restaurant",
    },
    {
      image: menTempeh,
      judul: "Ayam Betutu Men Tempeh 1978",
      detailTempat:
        "Jl. Rajawali, Gilimanuk, Kec. Melaya, Kabupaten Jembrana",
      distance: "com",
      rating: "4.5 Rating",
      reviews: "4.680 Review",
      price: "Rp 35.000",
      category: "Restaurant",
    },
    {
      image: babiGuling,
      judul: "Babi Guling Men Lari",
      detailTempat:
        "Jl. By Pass Tanah Lot, Munggu, Kec. Kuta Utara, Kabupaten Badung",
      distance: "com",
      rating: "4.4 Rating",
      reviews: "2.285 Review",
      price: "Rp 35.000",
      category: "Restaurant",
    },
    {
      image: laPlanca,
      judul: "La Plancha",
      detailTempat:
        "Jalan Mesari Beach, Seminyak, Kec. Kuta, Kabupaten Badung",
      distance: "com",
      rating: "4.4  Rating",
      reviews: "12.004 Review",
      price: "Rp 200.000",
      category: "Restaurant",
    },
    {
      image: seaCircus,
      judul: "Sea Circus Restaurant & Bar",
      detailTempat:
        "Jl. Kayu Aya No.22, Seminyak, Kec. Kuta, Kabupaten Badung",
      distance: "com",
      rating: "4.4  Rating",
      reviews: "1.778 Review",
      price: "Rp 300.000",
      category: "Restaurant",
    }
  ];

  useEffect(() => {
    if (selectedCategory.name === "All") {
      setTravelCards(cardData);
    } else {
      const filteredTravelCards = cardData.filter(
        (item) => item.category === selectedCategory.name
      );
      setTravelCards(filteredTravelCards);
    }
  }, [selectedCategory]);
  return (
    <div className="flex flex-col items-center">
      <SelectedCategory categories={categories} onSelect={handleSelect} />
      <div className="flex flex-wrap min-w-72 mt-7 gap-5">
        {travelCards.map((item, index) => (
          <CardHero
            key={index}
            image={item.image}
            judul={item.judul}
            detailTempat={item.detailTempat}
            distance={item.distance}
            rating={item.rating}
            reviews={item.reviews}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default PopularPlace;
