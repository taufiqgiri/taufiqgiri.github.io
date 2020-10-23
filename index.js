let region = [
  'jogja', 'sleman', 'gunungkidul', 'kulonprogo', 'bantul'
]

let hospitalList = [
  [
    {
      name: 'Klinik Gading Yogyakarta',
      address: 'No. 25, Jl. DI Panjaitan, Mantrijeron, Kec. Mantrijeron, Kota Yogyakarta, Jogja',
      telp: '(0274) 375396',
      link: './klinik gading yogyakarta.jpg',
      location: 'https://goo.gl/maps/F7NydvAE9bm6a1z37'
    },
    {
      name: 'Laboratorium Klinik Cito Yogyakarta',
      address: 'Jl. Atmosukarto No.4, Kotabaru, Kec. Gondokusuman, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55224',
      telp: '(0274) 563656',
      link: './lab klinik cito jogja.jpg',
      location: 'https://g.page/labcitojogja?share'
    },
    {
      name: 'Laboratorium Klinik Pramita Cik Ditiro',
      address: 'Jalan Teuku No.17 Terban, Kec. Gondokusuman, Kota Yogyakarta, Jogja',
      telp: '(0274) 550526',
      link: './lab klinik pramita cik ditiro.jpg',
      location: 'https://g.page/pramitalabcikditirojoga?share'
    },
    {
      name: 'Laboratorium Klinik Pramita Sultan Agung',
      address: 'Jl. Sultan Agung, Gunungketur, Pakualaman, Kota Yogyakarta, Jogja',
      telp: '(0274) 510378',
      link: './lab klinik pramita sultan agung.png',
      location: 'https://g.page/pramita-lab-yogyakarta?share'
    },
    {
      name: 'Laboratorium Klinik Prodia Yogyakarta Bintaran',
      address: 'Jl. Bintaran Kulon No.28, Wirogunan, Kec. Mergangsan, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55151, Indonesia',
      telp: '-',
      link: './lab klinik prodia yogyakarta bintaran.jpg',
      location: 'https://g.page/prodia-jogja-bintaran?share'
    },
    {
      name: 'Parahita Diagnostic Center Doktor Sutomo',
      address: 'Jl. Doktor Sutomo No.10, Baciro, Kec. Gondokusuman, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55225, Indonesia',
      telp: '(0274) 520850',
      link: './parahita diagnostic center doktor sutomo.jpg',
      location: 'https://goo.gl/maps/XdiZF2SQeMgNHacb9'
    },
    {
      name: 'RS Bethesda Yogyakarta',
      address: 'Jl. Jend. Sudirman, Kotabaru, Kec. Gondokusuman, Kota Yogyakarta, Jogja',
      telp: '(0274) 586688',
      link: './RS Bethesda Yogyakarta.jpg',
      location: 'https://goo.gl/maps/6XKHm3zLr8NTC4Fw6'
    },
    {
      name: 'RS Mata dr YAP',
      address: 'Jl. Cik Di Tiro, Terban, Kec. Gondokusuman, Kota Yogyakarta, Jogja',
      telp: '(0274) 547448',
      link: './RS Mata dr YAP.jpg',
      location: 'https://g.page/rsmatadryap?share'
    },
    {
      name: 'RS Siloam Hospitals Yogyakarta',
      address: 'Jl. Laksda Adisucipto, Demangan, Kec. Gondokusuman, Kota Yogyakarta, Jogja',
      telp: '(0274) 4600900',
      link: './RS Siloam.jpg',
      location: 'https://g.page/siloam-yogyakarta?share'
    },
    {
      name: 'RSUD Kota Yogyakarta',
      address: 'Jl. Wirosaban No.1 Yogyakarta',
      telp: '(0274) 371195',
      link: './RSUD Jogja.jpg',
      location: 'https://goo.gl/maps/p1NHJMLyJtFeMjLp8'
    }
  ],
  [
    {
      name: 'Parahita Diagnostic Center Kaliurang',
      address: 'Jl. Kaliurang KM.6 No.26 ,Kentungan, Manggung, Manggung, Condongcatur, Kec. Depok, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55582, Indonesia',
      telp: '-',
      link: './parahita diagnostic center kaliurang.jpg',
      location: 'https://goo.gl/maps/bafvkuj21ToqHoVQ7'
    },
    {
      name: 'RS Hermina Yogya',
      address: 'Jl. Selokan Mataram, RT.06/RW.50, Meguwo, Maguwoharjo, Kec. Depok, Kabupaten Sleman, Daerah Istimewa Yogyakarta',
      telp: '(0274) 2800808',
      link: './RS Hermina Jogja.jpg',
      location: 'https://g.page/rsu-hermina-yogya?share'
    },
    {
      name: 'RS JIH Yogyakarta',
      address: 'Jl. Ring Road Utara, Perumnas Condong Catur, Condongcatur, Kec. Depok, Kabupaten Sleman, Jogja',
      telp: '(0274) 4463535',
      link: './RS JIH.jpg',
      location: 'https://goo.gl/maps/EW9ByoB6ziwfEWAp6'
    },
    {
      name: 'Siloam Clinic Sleman',
      address: 'Gejayan CT/X/51 RT 010 RW 03 Desa Caturtunggal Kecamatan Depok, Kabupaten Sleman',
      telp: '(0274) 5018068',
      link: './siloam clinic.jpg',
      location: 'https://goo.gl/maps/ss2ypqNDtjizhAe49'
    },
    {
      name: 'Laboratorium Klinik Kimia Farma Kaliurang Yogya',
      address: 'Jl. Kaliurang, Purwosari, Sinduadi, Kec. Mlati, Kabupaten Sleman, Jogja',
      telp: '(0274) 886981',
      link: './lab klinik kimia farma kaliurang.jpg',
      location: 'https://goo.gl/maps/6a5ggDyKJwCeVyTW7'
    },
    {
      name: 'Laboratorium Klinik Kimia Farma Yogya Adisucipto',
      address: 'Jl. Laksda Adisucipto No.63A, Ambarukmo, Caturtunggal, Kec. Depok, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55281',
      telp: '(0274) 2806667',
      link: './lab klinik kimia farma yogya adi sucipto.jpg',
      location: 'https://goo.gl/maps/onM5XNGp77PmHfuA8'
    },
    {
      name: 'RS Bedah An-Nur Yogyakarta',
      address: 'Samirono, Caturtunggal, Depok Sub-District, Sleman Regency, Jogja',
      telp: '(0274) 585848',
      link: './RS Bedah An-Nur.jpg',
      location: 'https://goo.gl/maps/GBewva2FvwVRXXxk9'
    },
    {
      name: 'RS Bhayangkara Yogyakarta',
      address: 'Glondong, Tirtomartani, Kec. Kalasan, Kabupaten Sleman, Jogja',
      telp: '(0274) 498278',
      link: './RS Bhayangkara.png',
      location: 'https://g.page/rsbhy-jogja?share'
    },
    {
      name: 'RS PKU Muhammadiyah Gamping Yogyakarta',
      address: 'Jl. RS PKU Gamping, Bodeh, Ambarketawang, Kec. Gamping, Kabupaten Sleman, Jogja',
      telp: '(0274) 6499704',
      link: './RS PKU Gamping.jpg',
      location: 'https://g.page/pkugamping?share'
    },
    {
      name: 'RS Panti Baktiningsih',
      address: 'Krompakan, Klepu, Sendangmulyo, Kec. Minggir, Kabupaten Sleman, Jogja',
      telp: '(0274) 6497209',
      link: 'RS Panti Baktiningsih.jpg',
      location: 'https://goo.gl/maps/fE7KzmrGoZe7JcdX8'
    },
    {
      name: 'RS Sakina Idaman',
      address: 'Jl. Blunyah Gede, Kutu Dukuh, Sinduadi, Kec. Mlati, Kabupaten Sleman, Jogja',
      telp: '(0274) 8000111',
      link: './RS Sakina Idaman.jpg',
      location: 'https://goo.gl/maps/wGW4vsz66LDQEjo89'
    },
    {
      name: 'RSUP dr Sardjito',
      address: 'No.1, Jl. Kesehatan, Senolowo, Sinduadi, Kec. Mlati, Kabupaten Sleman, Jogja',
      telp: '(0274) 631190',
      link: './RSUP Sardjito.jpg',
      location: 'https://goo.gl/maps/Q56S4fVzKEUFkXMg6'
    }
  ],
  [
    {
      name: 'RSUD Wonosari',
      address: 'Jl. Taman Bakti, Purbosari, Wonosari, Kec. Wonosari, Kabupaten Gunung Kidul, Jogja',
      telp: '(0274) 391288',
      link: './RSUD Wonosari.jpg',
      location: 'https://goo.gl/maps/brYRMtrPgJS4ggLm9'
    }
  ],
  [
    {
      name: 'Laboratorium Klinik Cito Wates',
      address: 'Jl. Brigjen Katamso No.67, Wates, Kabupaten Kulon Progo, Daerah Istimewa Yogyakarta 55611',
      telp: '(0274) 2890039',
      link: './lab klinik cito wates.jpg',
      location: 'https://g.page/labcitokulonprogo?share'
    },
    {
      name: 'RS Umum Pura Raharja Medika',
      address: 'Jl. Raya Brosot No.18, Bangeran, Bumirejo, Lendah, Kabupaten Kulon Progo, Daerah Istimewa Yogyakarta',
      telp: '(0274) 2654049',
      link: './RS Pura Raharja Medika.jpg',
      location: 'https://goo.gl/maps/Q2Mj6DSiNKkH6GQd6'
    },
    {
      name: 'RSUD Wates',
      address: 'Area Sawah, Beji, Wates, Kabupaten Kulon Progo, Jogja',
      telp: '(0274) 773169',
      link: './RSUD Wates.jpg',
      location: 'https://goo.gl/maps/ErksudQLc6bc47ty8'
    }
  ],
  [
    {
      name: 'Laboratorium Klinik Cito Bantul',
      address: 'Jl. Bantul No.10, Badegan, Bantul, Kec. Bantul, Bantul, Daerah Istimewa Yogyakarta 55711',
      telp: '(0274) 2810028',
      link: './lab klinik cito bantul.jpg',
      location: 'https://g.page/labcitobantul?share'
    },
    {
      name: 'RS Griya Mahardhika Yogyakarta',
      address: 'Gg. Wijaya Kusuma, Druwo, Bangunharjo, Kec. Sewon, Bantul, Jogja',
      telp: '(0274) 445026',
      link: './RS Griya Mahardhika Yogyakarta.jpg',
      location: 'https://g.page/rsgriyamahardhika?share'
    },
    {
      name: 'RS Nur Hidayah',
      address: 'Bembem, Trimulyo, Kec. Jetis, Bantul, Jogja',
      telp: '0851-0047-2941',
      link: './RS Nur Hidayah.jpg',
      location: 'https://g.page/rsnurhidayah?share'
    },
    {
      name: 'RS Universitas Islam Indonesia',
      address: 'Jl. Srandakan, Gedongsari, Wijirejo, Kec. Pandak, Bantul, Jogja',
      telp: '(0274) 2812999',
      link: 'RS UII.jpg',
      location: 'https://g.page/rumahsakit-uii?share'
    },
    {
      name: 'RSPAU Hardjolukito Yogyakarta',
      address: 'Karang Janbe, Banguntapan, Kec. Banguntapan, Bantul, Jogja',
      telp: '(0274) 444702',
      link: './RS Hardjo Lukito.jpg',
      location: 'https://g.page/rspauhardjolukito?share'
    },
    {
      name: 'RSUD Panembahan Senopati',
      address: 'Jl. Dr. Wahidin Sudiro Husodo, Area Sawah, Trirenggo, Kec. Bantul, Bantul, Jogja',
      telp: '(0274) 367381',
      link: './RSUD Panembahan Senopati.jpg',
      location: 'https://goo.gl/maps/zEL4h4EzcfUs1Sr37'
    }
  ]
]

let onSearchBox = document.getElementById('searchBox')
let city = ''
let picture = document.getElementById("gambar")
let hospitalName = document.getElementById("name")
let hospitalAddress = document.getElementById("address")
let hospitalPhone = document.getElementById("telp")
let pictureClass = document.getElementsByClassName("pict")

onSearchBox.addEventListener("submit", function(event) {
  let idx = document.getElementById("region").selectedIndex
  event.preventDefault()
  city = document.getElementsByTagName("option")[idx].value
  

  for (let j = 0; j < pictureClass[0].children.length; j++) {
    let arrClass = []
    let strClass = ''
    for (let k = 0; k < pictureClass[0].children[j].className.length; k++) {
      if (pictureClass[0].children[j].className[k] === ' ') {
        arrClass.push(strClass)
        strClass = ''
      } else if (k === pictureClass[0].children[j].className.length-1) {
        strClass += pictureClass[0].children[j].className[k]
        arrClass.push(strClass)
      } else {
        strClass += pictureClass[0].children[j].className[k]
      }
    }
    let flagHide = false
    for (let k = 0; k < arrClass.length; k++) {
      if (arrClass[k] === 'hide') {
        flagHide = true
        break
      }
    }
    if (!flagHide) {
      pictureClass[0].children[j].className += " hide"    
    }
  }
  
  for (let i = 0; i < region.length; i++) {
    if (city === region[i]) {
      let flag = false
      for (let j = 0; j < pictureClass[0].children.length; j++) {
        if (hospitalList[i][j] !== undefined) {
          pictureClass[0].children[j].children[0].src = hospitalList[i][j].link
          pictureClass[0].children[j].children[1].children[0].innerText = hospitalList[i][j].name
          pictureClass[0].children[j].children[2].children[0].innerText = hospitalList[i][j].address
          pictureClass[0].children[j].children[3].children[0].innerText = hospitalList[i][j].telp
          pictureClass[0].children[j].children[4].children[0].children[0].innerText = hospitalList[i][j].location
          pictureClass[0].children[j].children[4].children[0].children[0].href = hospitalList[i][j].location
          pictureClass[0].children[j].classList.remove("hide")
          flag = true
        }
      }
      if (!flag) {
        alert("Tidak ada fasilitas kesehatan yang tersedia di kota tersebut")
      }
    }
  }
})
