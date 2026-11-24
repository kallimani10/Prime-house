// All photography is from Unsplash (https://unsplash.com/license — free to use).
// Swap any URL for your own project photos as they become available.
const u = (id, w = 1600) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=75`

export const img = (id, w) => u(id, w)

export const photos = {
  heroHouse: 'photo-1568605114967-8130f3a36994',
  colonialHouse: 'photo-1570129477492-45c003edd2be',
  suburbanHouse: 'photo-1564013799919-ab600027ffc6',
  craftsmanHouse: 'photo-1572120360610-d971b9d7767c',
  colorfulExterior: 'photo-1574359411659-15573a27fd0c',
  paintRoller: 'photo-1562259949-e8e7689d7828',
  paintersAtWork: 'photo-1595814433015-e6f5ce69614e',
  greenLivingRoom: 'photo-1615873968403-89e068629265',
  wallRenovation: 'photo-1517581177682-a085bb7ffb15',
  brickWall: 'photo-1523413651479-597eb2da0ad6',
  faucet: 'photo-1585704032915-c3400ca199e7',
  pipes: 'photo-1607472586893-edb57bdc0e39',
  electrician: 'photo-1621905251189-08b45d6a269e',
  electrician2: 'photo-1621905251918-48416bd8575a',
  drill: 'photo-1504148455328-c376907d081c',
  measuring: 'photo-1626081063434-79a2169791b1',
  carpentryCrew: 'photo-1589939705384-5185137a7f0f',
  blueprint: 'photo-1503387762-592deb58ef4e',
  toolWall: 'photo-1530124566582-a618bc2615dc',
  sawWork: 'photo-1513467535987-fd81bc7d62f8',
  whiteKitchen: 'photo-1484154218962-a197022b5858',
  modernKitchen: 'photo-1600489000022-c2086d79f9d4',
  patio: 'photo-1527359443443-84a48aec73d2',
  roofWork: 'photo-1632759145351-1d592919f522',
  livingBright: 'photo-1616486338812-3dadae4b4ace',
  livingWarm: 'photo-1618221195710-dd6b41faaea6',
  livingNeutral: 'photo-1600210492486-724fe5c67fb0',
  livingBlue: 'photo-1599619351208-3e6c839d6828',
  livingSoft: 'photo-1631679706909-1844bbd07221',
  livingWindow: 'photo-1505691938895-1758d7feb511',
  bedroom: 'photo-1595526114035-0d45ed16cfbf',
  bathroom: 'photo-1620626011761-996317b8d101',
  stairs: 'photo-1600573472550-8090b5e0745e',
}
