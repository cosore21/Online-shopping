

const products = [{
  image: 'images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg',
  name: 'Plain Cotton T-shirt',
  rating: {
    stars: 3,
    count: 87
  },
  priceCents: 2089
},
{
  image: 'images/products/intermediate-composite-basketball.jpg',
  name: 'Composite BasketBall',
  rating: {
    stars: 4.5,
    count: 120
  },
  priceCents: 1999
},
{
  image: 'images/products/athletic-cotton-socks-6-pairs.jpg',
  name: 'Athletic Cotton Socks',
  rating: {
    stars: 4,
    count: 100
  },
  priceCents: 2321
},
{
  image: 'images/products/umbrella.jpg',
  name: 'Pocket Umbrella',
  rating: {
    stars: 4,
    count: 110
  },
  priceCents: 321
},
{
  image: 'images/products/backpack.jpg',
  name: 'Fashion Backpack',
  rating: {
    stars: 4,
    count: 110
  },
  priceCents: 821
},
{
  image: 'images/products/duvet-cover-set-blue-twin.jpg',
  name: 'Duvet Cover Set Blue',
  rating: {
    stars: 5,
    count: 98
  },
  priceCents: 8321
},
{
  image: 'images/products/vanity-mirror-silver.jpg',
  name: 'Vanity Mirror Silver',
  rating: {
    stars: 4,
    count: 119
  },
  priceCents: 321
},
{
  image: 'images/products/sky-flower-stud-earrings.webp',
  name: 'Sky Flower Earings',
  rating: {
    stars: 4,
    count: 101
  },
  priceCents: 200
},
{
  image: 'images/products/plain-hooded-fleece-sweatshirt-yellow.jpg',
  name: 'Hooded Fleece Sweatshirt',
  rating: {
    stars: 5,
    count: 121
  },
  priceCents: 3321
},
{
  image: 'images/products/blackout-curtain-set-beige.webp',
  name: 'Blackout Curtain',
  rating: {
    stars: 4,
    count: 99
  },
  priceCents: 4009
},
{
  image: 'images/products/round-sunglasses-black.jpg',
  name: 'Black Sunglasses',
  rating: {
    stars: 4,
    count: 110
  },
  priceCents: 921
},
{
  image: 'images/products/straw-sunhat.webp',
  name: 'Sunhat',
  rating: {
    stars: 4,
    count: 117
  },
  priceCents: 291
},
{
  image: 'images/products/women-chiffon-beachwear-coverup-black.jpg',
  name: 'Women Beachwear',
  rating: {
    stars: 4.5,
    count: 77
  },
  priceCents: 1091
},
{
  image: 'images/products/women-french-terry-fleece-jogger-camo.jpg',
  name: 'Terry Fleece Jogger',
  rating: {
    stars: 4.5,
    count: 70
  },
  priceCents: 1020
},
{
  image: 'images/products/women-knit-ballet-flat-black.jpg',
  name: 'Women Knit Ballet',
  rating: {
    stars: 4.5,
    count: 70
  },
  priceCents: 2020
},
]


let productHTML=''
products.forEach((product) => {
   productHTML += `
  
   <div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src="${product.image}">
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${product.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="images/ratings/rating-${product.rating.stars * 10}.png">
            <div class="product-rating-count link-primary">
            ${product.rating.count}
            </div>
          </div>

          <div class="product-price">
          $${(product.priceCents / 100)}
          </div>

          <div class="product-quantity-container">
            <select>
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>

          <div class="added-to-cart">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button button-primary">
            Add to Cart
          </button>
        </div>
  
  `
  document.querySelector('.js-products-grid').innerHTML = productHTML

});