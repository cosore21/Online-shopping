
import{cart} from './cart.js'
import{products} from './products.js'

const addedMessageTimeouts = {}

const showAddedMessage = (productId) => {
  const addedMsg = document.querySelector(`.js-added-message-${productId}`)
  if (!addedMsg) return

  // hide all other messages first (optional requirement for product navigation)
  hideAllAddedMessages()

  addedMsg.classList.add('add-to-cart-visible')

  if (addedMessageTimeouts[productId]) {
    clearTimeout(addedMessageTimeouts[productId])
  }

  addedMessageTimeouts[productId] = setTimeout(() => {
    addedMsg.classList.remove('add-to-cart-visible')
    delete addedMessageTimeouts[productId]
  }, 2000)
}

const hideAddedMessage = (productId) => {
  const addedMsg = document.querySelector(`.js-added-message-${productId}`)
  if (!addedMsg) return

  addedMsg.classList.remove('add-to-cart-visible')

  if (addedMessageTimeouts[productId]) {
    clearTimeout(addedMessageTimeouts[productId])
    delete addedMessageTimeouts[productId]
  }
}

const hideAllAddedMessages = () => {
  document.querySelectorAll('.added-to-cart').forEach((elem) => {
    elem.classList.remove('add-to-cart-visible')
  })

  Object.keys(addedMessageTimeouts).forEach((productId) => {
    clearTimeout(addedMessageTimeouts[productId])
  })

  for (const productId in addedMessageTimeouts) {
    delete addedMessageTimeouts[productId]
  }
}

let productHTML = ''
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
          $${(product.priceCents / 100).toFixed(2)}
          </div>  

          <div class="product-quantity-container">
            <select class="js-quantity-selector-${product.id}">
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

          <div class="added-to-cart js-added-message-${product.id}" data-product-id="${product.id}">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button class="js-add-to-cart add-to-cart-button button-primary " data-product-id="${product.id}">
            Add to Cart
          </button>
        </div>

  `

  document.querySelector('.js-products-grid').innerHTML = productHTML
})

// Add-to-cart behavior

document.querySelectorAll('.js-add-to-cart').forEach((button) => {
  button.addEventListener('click', () => {
    const { productId } = button.dataset

    let matchingItem
    cart.forEach((item) => {
      if (productId === item.productId) {
        matchingItem = item
      }
    })

    const quantitySelector = document.querySelector(`.js-quantity-selector-${productId}`).value
    const quantity = Number(quantitySelector)

    if (matchingItem) {
      matchingItem.quantity += quantity
    } else {
      cart.push({
        productId,
        quantity,
      })
    }

    let cartQuantity = 0
    cart.forEach((item) => {
      cartQuantity += item.quantity
    })

    document.querySelector('.js-cart-quantity').textContent = cartQuantity

    showAddedMessage(productId)
  })
})

// Clicking the added message itself shows the same effect

document.querySelector('.js-products-grid').addEventListener('click', (event) => {
  const messageEl = event.target.closest('.added-to-cart')
  if (!messageEl) return

  const productId = messageEl.dataset.productId
  if (!productId) return

  showAddedMessage(productId)
})

// Next/Prev product buttons should hide visible added messages immediately

const nextProductButton = document.querySelector('.js-next-product')
const prevProductButton = document.querySelector('.js-prev-product')

if (nextProductButton) nextProductButton.addEventListener('click', hideAllAddedMessages)
if (prevProductButton) prevProductButton.addEventListener('click', hideAllAddedMessages)
