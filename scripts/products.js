export function getProducts(productId) {
  let matchingProduct;

    products.forEach((product) => {
      if (product.id === productId) {
        matchingProduct = product;
      }
    });
    return matchingProduct
}

export const products = [{
  id: '74774vdjd-qqiw908',
  image: 'images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg',
  name: 'Plain Cotton T-shirt',
  rating: {
    stars: 3,
    count: 87
  },
  priceCents: 2089
},
{
  id: '94774odjd-qqiw908',
  image: 'images/products/intermediate-composite-basketball.jpg',
  name: 'Composite BasketBall',
  rating: {
    stars: 4.5,
    count: 120
  },
  priceCents: 1999
},
{
  id: '74774vdjd-qmiw978',
  image: 'images/products/athletic-cotton-socks-6-pairs.jpg',
  name: 'Athletic Cotton Socks',
  rating: {
    stars: 4,
    count: 100
  },
  priceCents: 2321
},
{
  id: '74174vvjd-qqiw908',
  image: 'images/products/umbrella.jpg',
  name: 'Pocket Umbrella',
  rating: {
    stars: 4,
    count: 110
  },
  priceCents: 321
},
{
  id: '14774vdjd-qqiw9i8',
  image: 'images/products/backpack.jpg',
  name: 'Fashion Backpack',
  rating: {
    stars: 4,
    count: 110
  },
  priceCents: 821
},
{
  id: '74764vdjd-qqbw908',
  image: 'images/products/duvet-cover-set-blue-twin.jpg',
  name: 'Duvet Cover Set Blue',
  rating: {
    stars: 5,
    count: 98
  },
  priceCents: 8321
},
{
  id: '79754vdjd-qziw908',
  image: 'images/products/vanity-mirror-silver.jpg',
  name: 'Vanity Mirror Silver',
  rating: {
    stars: 4,
    count: 119
  },
  priceCents: 321
},
{
  id: '75774vdsd-qqiw908',
  image: 'images/products/sky-flower-stud-earrings.webp',
  name: 'Sky Flower Earings',
  rating: {
    stars: 4,
    count: 101
  },
  priceCents: 200
},
{
  id: '72774vdjd-gqiw908',
  image: 'images/products/plain-hooded-fleece-sweatshirt-yellow.jpg',
  name: 'Hooded Fleece Sweatshirt',
  rating: {
    stars: 5,
    count: 121
  },
  priceCents: 3321
},
{
  id: '84774vdjd-qqiw308',
  image: 'images/products/blackout-curtain-set-beige.webp',
  name: 'Blackout Curtain',
  rating: {
    stars: 4,
    count: 99
  },
  priceCents: 4009
},
{
  id: '44774vdjd-qqhw908',
  image: 'images/products/round-sunglasses-black.jpg',
  name: 'Black Sunglasses',
  rating: {
    stars: 4,
    count: 110
  },
  priceCents: 921
},
{
  id: '70774vdjd-qqlw908',
  image: 'images/products/straw-sunhat.webp',
  name: 'Sunhat',
  rating: {
    stars: 4,
    count: 117
  },
  priceCents: 291
},
{
  id: '747r4vdjd-xqiw908',
  image: 'images/products/women-chiffon-beachwear-coverup-black.jpg',
  name: 'Women Beachwear',
  rating: {
    stars: 4.5,
    count: 77
  },
  priceCents: 1091
},
{
  id: '7477vvdjd-qqyw908',
  image: 'images/products/women-french-terry-fleece-jogger-camo.jpg',
  name: 'Terry Fleece Jogger',
  rating: {
    stars: 4.5,
    count: 70
  },
  priceCents: 1020
},
{
  id: '544774djd-qqew908',
  image: 'images/products/women-knit-ballet-flat-black.jpg',
  name: 'Women Knit Ballet',
  rating: {
    stars: 4.5,
    count: 70
  },
  priceCents: 2020
},
{
  id: '64i774dhd-qqew908',
  image: 'images/products/facial-tissue-2-ply-18-boxes.jpg',
  name: 'Facial Tissue',
  rating: {
    stars: 4.5,
    count: 100
  },
  priceCents: 200
},
{
  id: '1l0774dhd-qqew908',
  image: 'images/products/cooker.webp',
  name: 'Modern Electric Cooker',
  rating: {
    stars: 4,
    count: 190
  },
  priceCents: 20000
},
{
  id: '64c774dhd-qqew908',
  image: 'images/products/Hisense fridge.jpg',
  name: 'Hisense Fridge',
  rating: {
    stars: 4.5,
    count: 80
  },
  priceCents: 21000
},
{
  id: '64a774dhd-qqew908',
  image: 'images/products/tv43inch.webp',
  name: 'Vitron 43-Inch tv',
  rating: {
    stars: 5,
    count: 188
  },
  priceCents: 19000
},
{
  id: '6a4774dhd-qqew908',
  image: 'images/products/11Pieces kitchenware.jpg',
  name: '11 Pieces Kitchen Ware',
  rating: {
    stars: 4.5,
    count: 100
  },
  priceCents: 9000
},
]