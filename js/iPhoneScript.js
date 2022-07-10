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
        "ocapacity": "256GB",
        "addtionalPrice": 3500
      },
      {
        "ocapacity": "512Gb",
        "addtionalPrice": 10500
      },
      {
        "ocapacity": "1TB",
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
        "ocapacity": "256GB",
        "addtionalPrice": 3500
      },
      {
        "ocapacity": "512Gb",
        "addtionalPrice": 10500
      },
      {
        "ocapacity": "1TB",
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
let mainProduct = productList.find(item => item["model"] === "iPhone 13 Pro")

const productTitle = document.querySelector('.product-title')
const productTitlePrice = document.querySelector('.product-title-price')
const customizeTitle = document.querySelector('.customize-title')
const model = document.querySelector('#main-product')
const navToggle = document.querySelector('.nav-toggle')
const mainNav = document.querySelector('#mainNav')
const optionProduct = document.querySelector('#option-product')

DisplayOptions(optionProduct, GenerateOptions(productList, 'model'))
ChangePriceDisplay()
const optionBtns = document.querySelectorAll('.option-btn')
navToggle.addEventListener('click', () => {
  mainNav.classList.toggle("nav-active")
})
optionBtns.forEach(option => {
  option.addEventListener('click', () => {
    const currentSelectOption = document.querySelector('.option-btn-selected')
    if (currentSelectOption && currentSelectOption !== option) {
      currentSelectOption.classList.toggle("option-btn-selected")
      GetAllSiblings(currentSelectOption).forEach(option => {
        option.classList.remove("option-btn-selected")
      })
    }
    option.classList.add("option-btn-selected")
  })
})

optionProduct.childNodes.forEach(element => {
  element.addEventListener('click', (event) => {
    mainProduct = productList.find(item => item["model"] === `${event.target.innerText}`)
    ChangePriceDisplay()
  })
})
function ChangePriceDisplay() {
  SetElementText(productTitle, mainProduct['model'])
  SetElementText(productTitlePrice, `NT$ ${mainProduct['price']} 起`)
  SetElementText(customizeTitle, `購買 ${mainProduct['model']}`)
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
function DisplayOptions(element, options) {
  options.forEach(option => {
    const li = document.createElement('li')
    li.classList.add("option-btn")
    li.innerText = option
    element.appendChild(li)
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