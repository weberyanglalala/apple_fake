'use strict'
const productList = [
  {
    "category": "iPad Pro",
    "model": [
      {
        "title": "11-inches",
        "moniter": "Liquid Retina",
        "price": 32900
      },
      {
        "title": "12.9-inches",
        "moniter": "Liquid Retina",
        "price": 34900
      }
    ],
    "color": [
      {
        "name": "太空灰色",
        "hexcode": "#abaeb1"
      },
      {
        "name": "銀色",
        "hexcode": "#dddfde"
      }
    ],
    "storage": [
      {
        "capacity": "128GB",
        "addtionalPrice": 0
      },
      {
        "ocapacity": "256GB",
        "addtionalPrice": 3100
      },
      {
        "ocapacity": "512GB",
        "addtionalPrice": 8300
      },
      {
        "ocapacity": "1TB",
        "addtionalPrice": 21700
      },
      {
        "ocapacity": "2TB",
        "addtionalPrice": 34100
      }
    ],
    "connectivity": [
      {
        "type": "Wi-Fi",
        "addtionalPrice": 5000

      },
      {
        "type": "Wi-Fi + Celluar",
        "addtionalPrice": 5000
      }
    ],
    "personalize": [
      {
        "type": "carve"
      },
      {
        "type": "no-carve"
      }

    ],
    "accessory": [],
    "chip": [],
    "keyboard": [],
    "preinstall": []
  }
]
let productCategory;
let productURL;
let productModel;
let productColor;
let productPrice;
let productStorage;


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