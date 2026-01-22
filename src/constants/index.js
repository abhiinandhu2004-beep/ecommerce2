import Icon1 from '../assets/icon1.svg'
import Icon2 from '../assets/icon2.svg'
import Icon3 from '../assets/icon3.svg'
import Icon4 from '../assets/icon4.svg'

import Img1 from '../assets/image1.png'
import Img2 from '../assets/image2.png'
import Img3 from '../assets/image3.png'
import Img4 from '../assets/image4.png'

import p1 from '../assets/img1.png'
import p2 from '../assets/img2.png'
import p3 from '../assets/img3.png'
import p4 from '../assets/img4.png'
import p5 from '../assets/img5.png'
import p6 from '../assets/img6.png'

import googlepay from '../assets/gpay.svg'
import phonepe from '../assets/ppay.svg'
import paytm from '../assets/ptym.svg'
import card from '../assets/credit.svg'

export const nav = [
  "OFFERS","EARRINGS","DEVOTIONAL","BANGLES","BRACELET",
  "PLATINUM","SOLITAIR","PENDANT","RINGS","NOSE PIN",
  "COUPLE BAND","NECKLACE","NAVARATNA"


];


export const features = [
  {
    id: 1,
    icon: Icon1,
    title: "Free shipping",
    desc: "On order over ₹2000",
  },
  {
    id: 2,
    icon: Icon2,
    title: "Moneyback",
    desc: "Moneyback guarantee",
  },
  {
    id: 3,
    icon: Icon3,
    title: "24/7 Support",
    desc: "Online consultations",
  },
  {
    id: 4,
    icon: Icon4,
    title: "Secure payment",
    desc: "Safe shopping guarantee",
  },
];


 export const items = [
        { img: Img1, title: "Over 250k", sub: "72000+ styles" },
        { img: Img2, title: "100k - 250k", sub: "58000 styles" },
        { img: Img3, title: "50k - 100k", sub: "34000 styles" },
        { img: Img4, title: "Under 50k", sub: "19000 styles" },
    ]

  export  const products = [
  { id: 1, img: p1, name: "Celeste Halo Diamond Ring", sku: "I8037", price: "27000",oldprice: "AED 29500" },
  { id: 2, img: p2, name: "Aurora Bloom Diamond Ring", sku: "I8038", price: "27000",oldprice: "AED 29500" },
  { id: 3, img: p3, name: "Eternal Grace Solitaire Ring", sku: "I8039", price: "27000",oldprice: "AED 29500" },
  { id: 4, img: p4, name: "Luna Radiance Diamond Ring", sku: "I8040", price: "27000",oldprice: "AED 29500" },
  { id: 5, img: p1, name: "Royal Embrace Diamond Ring", sku: "I8041", price: "27000",oldprice: "AED 29500" },
  { id: 6, img: p3, name: "Velora Classic Diamond Ring", sku: "I8042", price: "27000",oldprice:"AED 29500" },
  { id: 7, img: p4, name: "Serene Promise Diamond Ring", sku: "I8043", price: "27000",oldprice:"AED 29500" },
  { id: 8, img: p2, name: "Ophelia Spark Diamond Ring", sku: "I8044", price: "27000",oldprice:"AED 29500" },
]
;


export const demanded = [
  {
    id: 1,
    icon: p5,
    title: "Emerald earrings",
    sku: "18040",
    price:"20000",
    oldprice:"22000"
  },
  {
    id: 2,
    icon: p2,
    title: "Emerald earrings",
    sku: "18040",
    price:"20000",
    oldprice:"22000"
  },
  {
   id: 3,
    icon: p3,
    title: "Silver bracelet",
    sku: "18039",
    price:"8000",
    oldprice:"9500"
  },
  {
    id: 4,
    icon: p6,
    title: "Emerald earrings",
    sku: "18040",
    price:"20000",
    oldprice:"22000"
  },
  {
    id: 5,
    icon: p5,
    title: "Emerald earrings",
    sku: "18040",
    price:"20000",
    oldprice:"22000"
  },
  {
    id: 6,
    icon: p3,
    title: "Emerald earrings",
    sku: "18040",
    price:"20000",
    oldprice:"22000"
  },
  {
    id: 7,
    icon: p2,
    title: "Emerald earrings",
    sku: "18040",
    price:"20000",
    oldprice:"22000"
  },
  {
    id: 8,
    icon: p3,
    title: "Emerald earrings",
    sku: "18040",
    price:"20000",
    oldprice:"22000"
  }
];


export const productDetails = [
  { label: "Product ID", value: "SKU 1245" },
  { label: "Dimension", value: "9 – 15.6 mm" },
  { label: "Gold & KT", value: "18 KT Yellow Gold" },
  { label: "Gold Weight", value: "12.460 GM" },
  { label: "Diamond Weight", value: "0.180 CT" },
  { label: "Diamond", value: "SII J" },
];


 export const payments = [
    { id: "gpay", label: "Google Pay", icon: googlepay },
    { id: "phonepe", label: "PhonePe", icon: phonepe },
    { id: "paytm", label: "Paytm", icon: paytm },
    { id: "card", label: "Debit / Credit card", icon: card },
  ];





export const orders = products.map((product) => ({
  id: product.id,
  productname: product.name,
  date: new Date().toDateString(),
  username: "Abhinand",      
  total: product.price,
  discount: "Promo applied",
}));
