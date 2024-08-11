const CATEGORIES_URL = "https://japceibal.github.io/emercado-api/cats/cat.json";
const PUBLISH_PRODUCT_URL = "https://japceibal.github.io/emercado-api/sell/publish.json";
const PRODUCTS_URL = "https://japceibal.github.io/emercado-api/cats_products/";
const PRODUCT_INFO_URL = "https://japceibal.github.io/emercado-api/products/";
const PRODUCT_INFO_COMMENTS_URL = "https://japceibal.github.io/emercado-api/products_comments/50921.json";
const CART_INFO_URL = "https://japceibal.github.io/emercado-api/user_cart/";
const CART_BUY_URL = "https://japceibal.github.io/emercado-api/cart/buy.json";
const EXT_TYPE = ".json";

let showSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "block";
}

let hideSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "none";
}

let getJSONData = function(url){
    let result = {};
    showSpinner();
    return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }else{
        throw Error(response.statusText);
      }
    })
    .then(function(response) {
          result.status = 'ok';
          result.data = response;
          hideSpinner();
          return result;
    })
    .catch(function(error) {
        result.status = 'error';
        result.data = error;
        hideSpinner();
        return result;
    });
}
[
  {
      "id": 101,
      "name": "Autos",
      "description": "Los mejores precios en autos 0 kilómetro, de alta y media gama.",
      "productCount": "5",
      "imgSrc": "cat101_1.jpg"
  },
  {
      "id": 102,
      "name": "Juguetes",
      "description": "Encuentra aquí los mejores precios para niños/as de cualquier edad.",
      "productCount": "4",
      "imgSrc": "cat102_1.jpg"
  },
  {
      "id": 103,
      "name": "Muebles",
      "description": "Muebles antiguos, nuevos y para ser armados por uno mismo.",
      "productCount": "4",
      "imgSrc": "cat103_1.jpg"
  },
  {
      "id": 104,
      "name": "Herramientas",
      "description": "Herramientas para cualquier tipo de trabajo.",
      "productCount": 0,
      "imgSrc": "cat104_1.jpg"
  },
  {
      "id": 105,
      "name": "Computadoras",
      "description": "Todo en cuanto a computadoras, para uso de oficina y/o juegos.",
      "productCount": 1,
      "imgSrc": "cat105_1.jpg"
  },
  {
      "id": 106,
      "name": "Vestimenta",
      "description": "Gran variedad de ropa, nueva y de segunda mano.",
      "productCount": 0,
      "imgSrc": "cat106_1.jpg"
  },
  {
      "id": 107,
      "name": "Electrodomésticos",
      "description": "Todos los electrodomésticos modernos y de bajo consumo.",
      "productCount": 0,
      "imgSrc": "cat107_1.jpg"
  },
  {
      "id": 108,
      "name": "Deporte",
      "description": "Toda la variedad de indumentaria para todo tipo de deporte.",
      "productCount": 0,
      "imgSrc": "cat108_1.jpg"
  },
  {
      "id": 109,
      "name": "Celulares",
      "description": "Celulares de todo tipo para cubrir todas las necesidades.",
      "productCount": 0,
      "imgSrc": "cat109_1.jpg"
  }
]