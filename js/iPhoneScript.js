'use strict'
const productList = [
  {
    "category": "iPhone 13 Pro",
    "model": "iPhone 13 Pro",
    "price": 32900,
    "color": [
      {
        "name": "松嶺青色",
        "hexcode": "#576856",
        "image": "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-13-pro-green-select?wid=940&hei=1112&fmt=png-alpha&.v=1644969385505"
      },
      {
        "name": "銀色",
        "hexcode": "#f2f3ee",
        "image": "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-13-pro-silver-select?wid=940&hei=1112&fmt=png-alpha&.v=1645552345849"
      },
      {
        "name": "金色",
        "hexcode": "#f9e9d2",
        "image": "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-13-pro-gold-select?wid=940&hei=1112&fmt=png-alpha&.v=1645552345862"
      },
      {
        "name": "石墨色",
        "hexcode": "#605f5c",
        "image": "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-13-pro-graphite-select?wid=940&hei=1112&fmt=png-alpha&.v=1645552346276"
      },
      {
        "name": "天峰藍色",
        "hexcode": "#acc4dc",
        "image": "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-13-pro-blue-select?wid=940&hei=1112&fmt=png-alpha&.v=1645552346275"
      }
    ],
    "storage": [
      {
        "capacity": "128GB",
        "addtionalPrice": 0
      },
      {
        "capacity": "256GB",
        "addtionalPrice": 3500
      },
      {
        "capacity": "512GB",
        "addtionalPrice": 10500
      },
      {
        "capacity": "1TB",
        "addtionalPrice": 17500
      }
    ],
    "connectivity": [],
    "personalize": [],
    "accessory": [],
    "chip": [],
    "keyboard": [],
    "preinstall": []
  },
  {
    "category": "iPhone 13 Pro",
    "model": "iPhone 13 Pro Max",
    "price": 36900,
    "color": [
      {
        "name": "松嶺青色",
        "hexcode": "#576856",
        "image": "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-13-pro-max-green-select?wid=940&hei=1112&fmt=png-alpha&.v=1644969385495"
      },
      {
        "name": "銀色",
        "hexcode": "#f2f3ee",
        "image": "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-13-pro-max-silver-select?wid=940&hei=1112&fmt=png-alpha&.v=1645552346280"
      },
      {
        "name": "金色",
        "hexcode": "#f9e9d2",
        "image": "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-13-pro-max-gold-select?wid=940&hei=1112&fmt=png-alpha&.v=1645552346295"
      },
      {
        "name": "石墨色",
        "hexcode": "#605f5c",
        "image": "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-13-pro-max-graphite-select?wid=940&hei=1112&fmt=png-alpha&.v=1645552346288"
      },
      {
        "name": "天峰藍色",
        "hexcode": "#acc4dc",
        "image": "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-13-pro-max-blue-select?wid=940&hei=1112&fmt=png-alpha&.v=1645552346295"
      }
    ],
    "storage": [
      {
        "capacity": "128GB",
        "addtionalPrice": 0
      },
      {
        "capacity": "256GB",
        "addtionalPrice": 3500
      },
      {
        "capacity": "512GB",
        "addtionalPrice": 10500
      },
      {
        "capacity": "1TB",
        "addtionalPrice": 17500
      }
    ],
    "connectivity": [],
    "personalize": [],
    "accessory": [],
    "chip": [],
    "keyboard": [],
    "preinstall": []
  }
]
let productCategory = productList.find(item => item["model"] === "iPhone 13 Pro")
let productURL = productList.find(item => item["model"] === "iPhone 13 Pro")['color'][0]['image']
let productModel = productList.find(item => item["model"] === "iPhone 13 Pro")['model']
let productColor = productList.find(item => item["model"] === "iPhone 13 Pro")['color'][0]['name']
let productPrice = productList.find(item => item["model"] === productModel)['price']
let productStorage = productList.find(item => item["model"] === productModel)['storage'][0]['capacity']


const productTitle = document.querySelector('.product-title')
const productTitlePrice = document.querySelector('.product-title-price')
const customizeTitle = document.querySelector('.customize-title')
const model = document.querySelector('#main-product')
const navToggle = document.querySelector('.nav-toggle')
const mainNav = document.querySelector('#mainNav')
const optionProduct = document.querySelector('#option-product')
const optionColor = document.querySelector('#option-color')
const optionStorage = document.querySelector('#option-storage')
const mainImage = document.querySelector('#main-image')
const total = document.querySelector('#total')


DisplayModels(optionProduct, GenerateOptions(productList, 'model'))
OptionSetting(optionProduct)

DisplayColors(optionColor, GenerateOptions(productCategory['color'], 'name'), GenerateOptions(productCategory['color'], 'hexcode'))
OptionSetting(optionColor)


DisplayStorages(optionStorage, GenerateOptions(productCategory['storage'], 'capacity'), GenerateOptions(productCategory['storage'], 'addtionalPrice'))
OptionSetting(optionStorage)

CalculatePrice()

navToggle.addEventListener('click', () => {
  mainNav.classList.toggle("nav-active")
})
optionProduct.querySelectorAll('.option-btn').forEach(element => {
  element.addEventListener('click', (event) => {
    productModel = productList.find(item => item["model"] === event.currentTarget.innerHTML)['model']

    CalculatePrice()
  })
})
optionColor.querySelectorAll('.option-btn').forEach(element => {
  element.addEventListener('click', (event) => {
    productColor = event.currentTarget.innerText
    CalculatePrice()
  })
})
optionStorage.querySelectorAll('.option-btn').forEach(element => {
  element.addEventListener('click', (event) => {
    productStorage = event.currentTarget.id.slice(8, event.currentTarget.id.length)
    CalculatePrice()
  })
})

function CalculatePrice() {
  const productSelected = productList.find(item => item["model"] === productModel)['color']
  productURL = productSelected.find(color => color.name === productColor)['image']
  productPrice = productList.find(item => item["model"] === productModel)['price']
  productPrice += productList.find(item => item["model"] === productModel)['storage'].find(item => item['capacity'] === productStorage)['addtionalPrice']
  SetElementText(productTitle, productModel)
  SetElementText(productTitlePrice, `NT$ ${productPrice} 起`)
  SetElementText(customizeTitle, `購買 ${productModel}`)
  SetElementText(total, `NT$ ${productPrice}`)
  mainImage.src = productURL
  ChangeStoragePrice()
}
function SetElementText(element, text) {
  element['innerText'] = text
}
function GenerateOptions(list, prop) {
  const options = []
  list.forEach(item => {
    options.push(item[prop])
  })
  return options
}
function DisplayModels(element, options) {
  options.forEach(option => {
    const li = document.createElement('li')
    li.classList.add("option-btn")
    li.innerText = option
    element.appendChild(li)
  })
}
function DisplayColors(element, colorNames, colorHexs) {
  colorNames.forEach((name, index) => {
    element.innerHTML +=
      `<li class="option-btn w-50">
        <div class="option-color-wrap">
          <div class="option-color-display" style="background-color: ${colorHexs[index]};"></div>
          <div class="option-color-name">${name}</div>
        </div>
      </li>`
  })
}
function DisplayStorages(element, storages, addtionalPrices) {
  element.innerHTML = ""
  storages.forEach((item, index) => {
    element.innerHTML +=
      `<li class="option-btn w-50" id="storage-${item}">
      <div class="option-storage-wrap">
        <div class="option-storage-name">${item}</div>
        <span class="option-storage-price">NT$${addtionalPrices[index] + productPrice}</span>
      </div>
    </li>`
  })
}
function ChangeStoragePrice() {
  const storagePrice = document.querySelectorAll('.option-storage-price')
  const basicPrice = productList.find(item => item["model"] === productModel)['price']
  let addtionalPrices = productList.find(item => item["model"] === productModel)['storage'].map(item => item.addtionalPrice)
  storagePrice.forEach((price, index) => {
    price.innerText = `NT$${basicPrice + addtionalPrices[index]}`
  })
}
function GetAllSiblings(element) {
  let siblings = []
  if (!element.parentNode) return siblings
  let sibling = element.parentNode.firstElementChild
  do {
    if (sibling != element) {
      siblings.push(sibling)
    }
  } while (sibling = sibling.nextElementSibling)
  return siblings
}
function OptionSetting(element) {
  const options = element.querySelectorAll('.option-btn')
  options.forEach(option => {
    option.addEventListener('click', () => {
      const currentSelectOption = element.querySelector('.option-btn-selected')
      if (currentSelectOption && currentSelectOption !== option) {
        currentSelectOption.classList.toggle("option-btn-selected")
        GetAllSiblings(currentSelectOption).forEach(option => {
          option.classList.remove("option-btn-selected")
        })
      }
      option.classList.add("option-btn-selected")
    })
  })
}