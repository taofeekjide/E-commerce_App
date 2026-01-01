import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const ShopContext = createContext();

const products = [
  {
    _id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    image: [
      "/images/products/athletic-cotton-socks-6-pairs.jpg",
      "/images/products/intermediate-composite-basketball.jpg",
    ],
    name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
    rating: {
      stars: 4.5,
      count: 87,
    },
    price: 1090,
    keywords: ["socks", "sports", "apparel"],
    sizes: ["large", "small"],
    category: "Men",
    subCategory: "Topwear",
  },
  {
    _id: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
    image: ["/images/products/intermediate-composite-basketball.jpg"],
    name: "Intermediate Size Basketball",
    rating: {
      stars: 4,
      count: 127,
    },
    price: 2095,
    keywords: ["sports", "basketballs"],
    sizes: ["large", "small"],
    category: "Men",
    subCategory: "Topwear",
  },
  {
    _id: "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
    image: ["/images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg"],
    name: "Adults Plain Cotton T-Shirt - 2 Pack",
    rating: {
      stars: 4.5,
      count: 56,
    },
    price: 799,
    keywords: ["tshirts", "apparel", "mens"],
    type: "clothing",
    sizeChartLink: "images/clothing-size-chart.png",
    sizes: ["large", "small"],
    category: "Men",
    subCategory: "Topwear",
  },
  {
    _id: "54e0eccd-8f36-462b-b68a-8182611d9add",
    image: ["/images/products/black-2-slot-toaster.jpg"],
    name: "2 Slot Toaster - Black",
    rating: {
      stars: 5,
      count: 2197,
    },
    price: 1899,
    keywords: ["toaster", "kitchen", "appliances"],
    sizes: ["large", "small"],
    category: "Men",
    subCategory: "Topwear",
  },
  {
    _id: "3ebe75dc-64d2-4137-8860-1f5a963e534b",
    image: ["/images/products/6-piece-white-dinner-plate-set.jpg"],
    name: "6 Piece White Dinner Plate Set",
    rating: {
      stars: 4,
      count: 37,
    },
    price: 2067,
    keywords: ["plates", "kitchen", "dining"],
    sizes: ["large", "small"],
    category: "Men",
    subCategory: "Topwear",
  },
  {
    _id: "8c9c52b5-5a19-4bcb-a5d1-158a74287c53",
    image: "images/products/6-piece-non-stick-baking-set.webp",
    name: "6-Piece Nonstick, Carbon Steel Oven Bakeware Baking Set",
    rating: {
      stars: 4.5,
      count: 175,
    },
    price: 3499,
    keywords: ["kitchen", "cookware"],
  },
  {
    _id: "dd82ca78-a18b-4e2a-9250-31e67412f98d",
    image: "images/products/plain-hooded-fleece-sweatshirt-yellow.jpg",
    name: "Plain Hooded Fleece Sweatshirt",
    rating: {
      stars: 4.5,
      count: 317,
    },
    price: 2400,
    keywords: ["hoodies", "sweaters", "apparel"],
  },
];

function ShopContextProvider(props) {
  const currency = "$";
  const delivery_fee = 10;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});

  async function addToCart(itemId, size) {
    if (!size) {
      toast.error("Select a size for the product");
      return;
    }

    let cartData = structuredClone(cartItems);

    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }
    setCartItems(cartData);
  }

  function getCartCount() {
    let totalCount = 0;
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalCount += cartItems[items][item];
          }
        } catch (error) {}
      }
    }
    return totalCount;
  }

  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    addToCart,
    getCartCount,
  };
  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
}

export default ShopContextProvider;
