const DataDestinations = [
  {
    image:
      "https://images.unsplash.com/photo-1531514381259-8c9fedc910b8?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Kuta Beach",
    location: "Kec. Kuta, Kabupaten Badung",
    category: "Beach",
    rating: 4.5,
    review: "40.429",
    price: "Rp. 2.000",
    path: `/destination/1`, 
  },
  {
    image:
      "https://images.unsplash.com/photo-1724579242963-ea62ff1f0d72?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Jerman Beach",
    location: "Kuta, Kec. Kuta, Kabupaten Badung",
    category: "Beach",
    rating: 4.4,
    review: "777",
    price: "Rp. 2.000",
    path: `/destination/2`
  },
  {
    image:
      "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Seminyak Beach",
    location: "Desa Seminyak, Kecamatan Kuta, Kabupaten Badung",
    category: "Beach",
    rating: 4.5,
    review: "4.140",
    price: "Rp. 2.000",
    path: `/destination/3`
  },
  {
    image:
      "https://images.unsplash.com/photo-1594729960117-01b8ad8ef5fd?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Double Six Beach",
    location: "Legian, Jl. Double Six, Seminyak, Kec. Kuta, Kabupaten Badung",
    category: "Beach",
    rating: 4.5,
    review: "12.604",
    price: "Rp. 2.000",
    path: `/destination/4`
  },
  {
    image:
      "https://images.unsplash.com/photo-1520212280744-e80c036f5511?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Padma Beach",
    location: "Sea, Legian, Kuta, Badung Regency, Bali",
    category: "Beach",
    rating: 4.7,
    review: "354",
    price: "Rp. 2.000",
    path: `/destination/5`
  },
  {
    image:
      "https://images.unsplash.com/photo-1495765505527-e0cea04a4829?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Petitenget Beach",
    location: "Seminyak, Kec. Kuta, Kabupaten Badung, Bali",
    category: "Beach",
    rating: 4.5,
    review: "4.239",
    price: "Rp. 2.000",
    path: `/destination/6`
  },
  {
    image:
      "https://images.unsplash.com/photo-1525183995014-bd94c0750cd5?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Honeymoon Beach",
    location: "Unnamed Road, Jimbaran, South Kuta, Badung Regency",
    category: "Beach",
    rating: 4.5,
    review: "517",
    price: "Rp. 2.000",
    path: `/destination/7`
  },
  {
    image:
      "https://images.unsplash.com/photo-1517886703796-91acf7e02e1b?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Bingin Beach",
    location: "Jl. Pantai Bingin, Pecatu, Kec. Kuta Sel., Kabupaten Badung",
    category: "Beach",
    rating: 4.5,
    review: "1.553",
    price: "Rp. 5.000",
    path: `/destination/8`
  },
  {
    image:
      "https://images.unsplash.com/photo-1570077533412-664829f85aed?q=80&w=1872&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Thomas Beach",
    location: "Pecatu, Kec. Kuta Sel., Kabupaten Badung",
    category: "Beach",
    rating: 4.3,
    review: "1.516",
    price: "Free",
    path: `/destination/9`
  },
  // {
  //   image:
  //     "https://images.unsplash.com/photo-1513386197304-a716d7e03a84?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   title: "Cemongkak Beach",
  //   location:
  //     "Sunset Place, Jl. Pantai Bingin, Pecatu, South Kuta, Badung Regency",
  //   category: "Beach",
  //   rating: 4.7,
  //   review: "107",
  //   price: "Free",
  // },
  {
    image:
    "https://images.unsplash.com/photo-1542516891-fb10fde85edf?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Balangan Beach",
    location: "Jl. Pantai Balangan No.54, Jimbaran, Kec. Kuta Sel., Kabupaten Badung",
    category: "Beach",
    rating: 4.6,
    review: "2.395",
    price: "Rp. 2.000",
    path: `/destination/10`
  },
  {
    image:
      "https://images.unsplash.com/photo-1539200865223-e27fa04a4044?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Dreamland Beach",
    location:
      "Jl. Pantai Balangan No.54, Pecatu, Kec. Kuta Sel., Kabupaten Badung",
    category: "Beach",
    rating: 4.4,
    review: "4.574",
    price: "Rp. 10.000",
    path:`/destination/11`,
  },
  {
    image:
      "https://images.unsplash.com/photo-1549516004-038daa48dabd?q=80&w=1949&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Suluban Beach",
    location: "Desa Pecatu, Kecamatan Kuta Selatan, Kabupaten Badung",
    category: "Beach",
    rating: 4.6,
    review: "1.581",
    price: "Rp. 10.000",
    path:`/destination/12`,
  },
  // {
  //   image:
  //     "https://images.unsplash.com/photo-1523177839081-99e24a24e9a6?q=80&w=1785&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   title: "Gunung Payung Beach",
  //   location: "Pantai Gunung Payung, Kutuh, Kec. Kuta Sel., Kabupaten Badung",
  //   category: "Beach",
  //   rating: 4.8,
  //   review: "814",
  //   price: "Rp. 12.000",
  // },
  // {
  //   image:
  //     "https://images.unsplash.com/photo-1533443144047-ea8a81e83e68?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   title: "Geger Beach",
  //   location: "Benoa, Kec. Kuta Sel., Kabupaten Badung, Bali",
  //   category: "Beach",
  //   rating: 4.7,
  //   review: "854",
  //   price: "Free",
  // },
  {
    image:
      "https://images.unsplash.com/photo-1567858156907-bc0d6be1fa4f?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Karma Beach",
    location:
      "Jalan Villa Kandara, Selatan Ungasan, Kuta Selatan, Ungasan, Kec. Kuta, Kabupaten Badung",
    category: "Beach",
    rating: 4.6,
    review: "1.529",
    price: "Free",
    path:`/destination/13`,
  },
  // {
  //   image:
  //     "https://images.unsplash.com/photo-1473186578172-c141e6798cf4?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   title: "Karang Boma Cliff Beach",
  //   location: "Unnamed Road, Pecatu, South Kuta, Badung Regency, Bali",
  //   category: "Beach",
  //   rating: 4.6,
  //   review: "1.535",
  //   price: "Rp. 2.000",
  // },
  // {
  //   image:
  //     "https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   title: "The Jaran Hill",
  //   location: "Pecatu, Kec. Kuta Sel., Kabupaten Badung",
  //   category: "Beach",
  //   rating: 4.7,
  //   review: "291",
  //   price: "Free",
  // },
  {
    image:
      "https://images.unsplash.com/photo-1505633738715-ebaa78bf4dd1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Padang Padang Beach",
    location: "Pecatu, Kec. Kuta Sel., Kabupaten Badung, Bali",
    category: "Beach",
    rating: 4.3,
    review: "7.609",
    price: "Rp. 2.000",
    path:`/destination/14`,
  },
  // {
  //   image:
  //     "https://images.unsplash.com/photo-1569202731905-b29295bc7530?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   title: "Labuan Sait Beach",
  //   location: "Pecatu, Kec. Kuta Sel., Kabupaten Badung",
  //   category: "Beach",
  //   rating: 4.4,
  //   review: "1.925",
  //   price: "Rp. 2.000",
  // },
  {
    image:
      "https://images.unsplash.com/photo-1540500625409-52c6872db1ab?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Sanur Beach",
    location: "Jalan Cemara, Sanur, Denpasar Selatan, Kota Denpasar, Bali",
    category: "Beach",
    rating: 4.6,
    review: "1.276",
    price: "Rp. 2.000",
    path:`/destination/15`
  },
  {
    image:
      "https://images.unsplash.com/photo-1681156996604-2c580ef79267?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Karang Beach",
    location:
      "8748+HJC, Jl. Pantai Karang, Sanur, Denpasar Selatan, Kota Denpasar",
    category: "Beach",
    rating: 4.6,
    review: "5.800",
    price: "Rp. 2.000",
    path:`/destination/16`
  },
  {
    image:
      "https://images.unsplash.com/photo-1640277430769-94faa79c1258?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Melasti Beach",
    location: "Jl. Melasti Ungasan, Ungasan, Kec. Kuta Sel., Kabupaten Badung",
    category: "Beach",
    rating: 4.7,
    review: "3.113",
    price: "Rp. 5.000",
    path:`/destination/17`
  },
  {
    image:
      "https://images.unsplash.com/photo-1414609245224-afa02bfb3fda?q=80&w=1889&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Pandawa Beach",
    location: "Jl. Pantai Pandawa, Kutuh, Kec. Kuta Sel., Kabupaten Badung",
    category: "Beach",
    rating: 4.6,
    review: "43.045",
    price: "Rp. 5.000",
    path:`/destination/18`
  },
  {
    image:
      "https://images.unsplash.com/photo-1424581342241-2b1aba4d3462?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Green Bowl Beach",
    location: "Ungasan, Kec. Kuta Sel., Kabupaten Badung, Bali",
    category: "Beach",
    rating: 4.6,
    review: "2.448",
    price: "Free",
    path:`/destination/19`
  },
  {
    image:
      "https://images.unsplash.com/photo-1422405153578-4bd676b19036?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Diamond Beach",
    location: "Pejukutan, Kec. Nusa Penida, Kabupaten Klungkung",
    category: "Beach",
    rating: 4.7,
    review: "6.194",
    price: "Rp. 50.000",
    path:`/destination/20`
  },
  {
    image:
      "https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Kelingking Beach",
    location: "Bunga Mekar, Kec. Nusa Penida, Kabupaten Klungkung",
    category: "Beach",
    rating: 4.7,
    review: "13.849",
    price: "Rp. 50.000",
    path:`/destination/21`,
  },
  {
    image:
      "https://images.unsplash.com/photo-1604430289851-5161e1659371?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Blue Lagoon Beach",
    location: "Padangbai, Kec. Manggis, Kabupaten Karangasem",
    category: "Beach",
    rating: 4.2,
    review: "4.382",
    price: "Rp. 25.000",
    path:`/destination/22`,
  },
  {
    image:
      "https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Tanah Barak Beach",
    location:
      "Jalan Tanah Barak, Near, Kutuh, South Kuta, Badung Regency, Bali",
    category: "Beach",
    rating: 4.7,
    review: "1.494",
    price: "Rp. 5.000",
    path:`/destination/23`,
  },
  {
    image:
      "https://images.unsplash.com/photo-1492762232409-8362d8796048?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Virgin Beach",
    location:
      "Jl. Raya Bukit Asah No.Desa, Adat Bugbug, Kec. Manggis, Kabupaten Karangasem",
    category: "Beach",
    rating: 4.6,
    review: "2.938",
    price: "Rp. 2.000",
    path:`/destination/24`,
  },
  {
    image:
      "https://images.unsplash.com/photo-1602217401791-a5fab1b8b775?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Kedungu Beach",
    location:
      "Jl. Pantai Kedungu, Desa Belalang, Belalang, Kediri, Tabanan Regency, Bali",
    category: "Beach",
    rating: 4.5,
    review: "1.826",
    price: "Rp. 2.000",
    path:`/destination/25`,
  },
  {
    image:
      "https://images.unsplash.com/photo-1517699418036-fb5d179fef0c?q=80&w=1034&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Soka Beach",
    location:
      "Jl. Raya Denpasar - Gilimanuk, Antap, Kec. Selemadeg, Kabupaten Tabanan",
    category: "Beach",
    rating: 4.2,
    review: "1.346",
    price: "Rp. 2.000",
    path:`/destination/26`,
  },
  {
    image:
      "https://images.unsplash.com/photo-1530184099777-b35a91004580?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Penimbangan Barat Pura Beach",
    location: "Baktiseraga, Kec. Buleleng, Kabupaten Buleleng, Bali",
    category: "Beach",
    rating: 4.4,
    review: "1.735",
    price: "Rp. 2.000",
    path:`/destination/27`,
  },
  {
    image:
      "https://images.unsplash.com/photo-1606925207923-c580f25966b0?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Lovina Beach",
    location: "Anturan Kec. Buleleng. Kabupaten Buleleng, Bali",
    category: "Beach",
    rating: 4.4,
    review: "1.257",
    price: "Rp. 2.000",
    path:`/destination/28`,
  },
  {
    title: "Amed Beach",
    image:
      "https://images.unsplash.com/photo-1543257605-7f1c6ed9fe40?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "Kec. Abang, Kabupaten Karangasem, Bali",
    category: "Beach",
    rating: 4.5,
    review: "1.552",
    price: "Rp. 2.000",
    path:`/destination/29`,
  },
  {
    title: "Waterfall Jagatsatru",
    image:
      "https://images.unsplash.com/photo-1576878176876-517cdb8006ac?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "Duda Tim., Kec. Selat, Kabupaten Karangasem, Bali",
    category: "Waterfall",
    rating: 4.7,
    review: "386",
    price: "Rp. 30.000",
    path:`/destination/30`,
  },
  {
    image:
      "https://images.unsplash.com/photo-1523952578875-e6bb18b26645?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Tegenungan Waterfall",
    location: "Kemenuh, Kec. Sukawati, Kabupaten Gianyar, Bali",
    category: "Waterfall",
    rating: 4.4,
    review: "32.472",
    price: "Rp. 80.000",
    path:`/destination/31`,
  },
  {
    image:
      "https://images.unsplash.com/photo-1560627441-da8b4d6aedb1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Suwat Waterfall",
    location:
      "Jl. Pura Dalem No.Desa, Suwat, Kec. Gianyar, Kabupaten Gianyar, Bali",
    category: "Waterfall",
    rating: 4.5,
    review: "1.383",
    price: "Rp. 80.000",
    path:`/destination/32`,
  },
  {
    image:
      "https://images.unsplash.com/photo-1656904997768-52123a9a9f65?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Kanto Lampo Waterfall",
    location:
      "Jl. Kaliasem lingk.kelod kangin, Beng, Kec. Gianyar, Kabupaten Gianyar, Bali",
    category: "Waterfall",
    rating: 4.4,
    review: "4.069",
    price: "Rp. 50.000",
    path:`/destination/33`,
  },
  {
    image:
      "https://images.unsplash.com/photo-1651822153861-ed438beccae5?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Banyumala Waterfall",
    location: "Wanagiri, Kec. Sukasada, Kabupaten Buleleng, Bali",
    category: "Waterfall",
    rating: 4.8,
    review: "4.276",
    price: "Rp. 50.000",
    path:`/destination/34`,
  },
  {
    image:
      "https://images.unsplash.com/photo-1684228359460-1dce3f49b04c?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Banyu Wana Amertha Waterfall",
    location: "Wanagiri, Kec. Sukasada, Kabupaten Buleleng, Bali",
    category: "Waterfall",
    rating: 4.8,
    review: "1.067",
    price: "Rp. 30.000",
    path:`/destination/35`,
  },
  {
    image:
      "https://images.unsplash.com/photo-1598960383478-bcc6dddb4781?q=80&w=1836&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Goa Raja Waterfall",
    location: "Jehem, Kec. Tembuku, Kabupaten Bangli, Bali",
    category: "Waterfall",
    rating: 4.8,
    review: "688",
    price: "Rp. 30.000",
    path:`/destination/36`,
  },
  {
    image:
      "https://images.unsplash.com/photo-1576878176876-517cdb8006ac?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Nungnung Waterfall",
    location: "Belok/Sidan, Kec. Petang, Kabupaten Badung, Bali",
    category: "Waterfall",
    rating: 4.7,
    review: "755",
    price: "Rp. 45.000",
    path:`/destination/37`,
  },
  {
    image:
      "https://plus.unsplash.com/premium_photo-1669018130466-cf68f1155569?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Gembleng Waterfall",
    location: "Unnamed Road, Tri Eka Buana, Kec. Sidemen, Kabupaten Karangasem",
    category: "Waterfall",
    rating: 4.7,
    review: "1.100",
    price: "Rp. 55.000",
    path:`/destination/38`,
  },
  {
    image:
      "https://images.unsplash.com/photo-1614139009864-fca811ed0a16?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Tukad Cepung",
    location: "Jl. Tembuku, Tembuku, Kec. Tembuku, Kabupaten Bangli",
    location: "",
    category: "Waterfall",
    rating: 4.6,
    review: "3.528",
    price: "Rp. 2.000",
    path:`/destination/39`,
  },
  {
    image:
      "https://images.unsplash.com/photo-1694906768713-71a7f21b44a7?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Beratan Lake",
    location: "Kec. Baturiti, Kabupaten Tabanan, Bali",
    category: "Lake",
    rating: 4.7,
    review: "805",
    price: "Rp. 50.000",
    path:`/destination/40`,
  },
  {
    image:
      "https://images.unsplash.com/photo-1676563113499-1b41a9f410bb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Batur Lake",
    location: "Songan B, Kec. Kintamani, Kabupaten Bangli, Bali",
    category: "Lake",
    rating: 4.6,
    review: "875",
    price: "Rp. 10.000",
    path:`/destination/41`,
  },
  {
    image:
      "https://images.unsplash.com/photo-1556492721-d9b051557498?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Buyan Lake",
    location: "Pancasari, Kec. Sukasada, Kabupaten Buleleng, Bali",
    category: "Lake",
    rating: 4.6,
    review: "372",
    price: "Rp. 30.000",
    path:`/destination/42`,
  },
  {
      image: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=2041&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Toya Devasya Geopark Resort",
      location: "Batur Tengah, Kec. Kintamani, Kabupaten Bangli, Bali",
      category: "Waterfall",
      rating: 4.2,
      review: "7.696",
      price: "Rp. 65.000",
      path:`/destination/42`,
  },
  // {
  //     image: "",
  //     title: "",
  //     location: "",
  //     category: "Waterfall",
  //     rating: ,
  //     review: "",
  //     price: "Rp. "
  // },
  // {
  //     image: "",
  //     title: "",
  //     location: "",
  //     category: "",
  //     rating: ,
  //     review: "",
  //     price: "Rp. "
  // },
  // {
  //     image: "",
  //     title: "",
  //     location: "",
  //     category: "",
  //     rating: ,
  //     review: "",
  //     price: "Rp. "
  // },
  // {
  //     image: "",
  //     title: "",
  //     location: "",
  //     category: "",
  //     rating: ,
  //     review: "",
  //     price: "Rp. "
  // },
  // {
  //     image: "",
  //     title: "",
  //     location: "",
  //     category: "",
  //     rating: ,
  //     review: "",
  //     price: "Rp. "
  // },
  // {
  //     image: "",
  //     title: "",
  //     location: "",
  //     category: "",
  //     rating: ,
  //     review: "",
  //     price: "Rp. "
  // },
  // {
  //     image: "",
  //     title: "",
  //     location: "",
  //     category: "",
  //     rating: ,
  //     review: "",
  //     price: "Rp. "
  // },
  // {
  //     image: "",
  //     title: "",
  //     location: "",
  //     category: "",
  //     rating: ,
  //     review: "",
  //     price: "Rp. "
  // },
  // {
  //     image: "",
  //     title: "",
  //     location: "",
  //     category: "",
  //     rating: ,
  //     review: "",
  //     price: "Rp. "
  // },
  // {
  //     image: "",
  //     title: "",
  //     location: "",
  //     category: "",
  //     rating: ,
  //     review: "",
  //     price: "Rp. "
  // },
  // {
  //     image: "",
  //     title: "",
  //     location: "",
  //     category: "",
  //     rating: ,
  //     review: "",
  //     price: "Rp. "
  // },
  // {
  //     image: "",
  //     title: "",
  //     location: "",
  //     category: "",
  //     rating: ,
  //     review: "",
  //     price: "Rp. "
  // },
  // {
  //     image: "",
  //     title: "",
  //     location: "",
  //     category: "",
  //     rating: ,
  //     review: "",
  //     price: "Rp. "
  // },
  // {
  //     image: "",
  //     title: "",
  //     location: "",
  //     category: "",
  //     rating: ,
  //     review: "",
  //     price: "Rp. "
  // },
  // {
  //     image: "",
  //     title: "",
  //     location: "",
  //     category: "",
  //     rating: ,
  //     review: "",
  //     price: "Rp. "
  // },
];

export default DataDestinations;
