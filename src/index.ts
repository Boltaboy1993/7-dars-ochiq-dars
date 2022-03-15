//Blog
type MaqolaAvtori = {
  name: string,
  userName: string,
  profession: string,
  img: string,
  rating: number
}
type InternetMaqola = {
  name: string,
  date: string,
  img: string,
  https: string,
  text: string,
  textAvtor: string,
  MaqolaAvtori:MaqolaAvtori
}

//Moshina  Car
type MoshinaMatoriMalumoti = {
  serialNumber: number,
  horsepower: number,
  theAmountOfGasolineThatIsConsumed: number
}
type Moshina = {
  model: string,
  countryNumber: number,
  yearOfManufacture: number,
  kilometers: number,
  MoshinaMatoriMalumoti:MoshinaMatoriMalumoti
}





let kunUz = {
  name: 'kun.uz',
  date: '15.03.2022',
  img: 'kun.uz img',
  https: 'https://kun.uz/',
  text: 'Маст ҳолда рулга ўтирганлар 5 йилга ҳайдовчилик ҳуқуқидан маҳрум қилиниши мумкин',
  textAvtor: 'Boltaboy Muratov',
  MaqolaAvtori:{
    name: 'Boltaboy',
    userName: 'Muratov',
    profession:'jurnalist',
    img:'Boltaboy.img',
    rating:'1-o`rinda'
  }
}

console.log(kunUz);
