const express = require("express");
const http = require("http");
const cors = require("cors");

const app = express();
app.use(cors());

const Categories = [
  {
    id: 1,
    name: "Painting",
    src: "/assets/images/Component 14.png",
    href: "/product",
  },
  {
    id: 2,
    name: "Canvus",
    src: "/assets/images/Component 14.png",
    href: "/product",
  },
  {
    id: 3,
    name: "Wood",
    src: "/assets/images/Component 14.png",
    href: "/product",
  },
  {
    id: 4,
    name: "Bamboo",
    src: "/assets/images/Component 14.png",
    href: "/product",
  },
  {
    id: 5,
    name: "Paper Carft",
    src: "/assets/images/Component 14.png",
    href: "/product",
  },
  {
    id: 6,
    name: "Pottery",
    src: "/assets/images/Component 14.png",
    href: "/product",
  },
  {
    id: 7,
    name: "Textile",
    src: "/assets/images/Component 14.png",
    href: "/product",
  },
  {
    id: 8,
    name: "Rattan",
    src: "/assets/images/Component 14.png",
    href: "/product",
  },
  {
    id: 9,
    name: "Food",
    src: "/assets/images/Component 14.png",
    href: "/product",
  },
];

const products = [
  {
    id: 1,
    name: "Painting",
    src: "/assets/images/Component 14.png",
    href: "/product",
  },
  {
    id: 2,
    name: "Canvus",
    src: "/assets/images/Component 14.png",
    href: "/product",
  },
  {
    id: 3,
    name: "Wood",
    src: "/assets/images/Component 14.png",
    href: "/product",
  },
  {
    id: 4,
    name: "Bamboo",
    src: "/assets/images/Component 14.png",
    href: "/product",
  },
  {
    id: 5,
    name: "Paper Carft",
    src: "/assets/images/Component 14.png",
    href: "/product",
  },
  {
    id: 6,
    name: "Pottery",
    src: "/assets/images/Component 14.png",
    href: "/product",
  },
  {
    id: 7,
    name: "Textile",
    src: "/assets/images/Component 14.png",
    href: "/product",
  },
  {
    id: 8,
    name: "Rattan",
    src: "/assets/images/Component 14.png",
    href: "/product",
  },
  {
    id: 9,
    name: "Food",
    src: "/assets/images/Component 14.png",
    href: "/product",
  },
  {
    id: 10,
    name: "Gifts",
    src: "/assets/images/Component 14.png",
    href: "/product",
  },
];

const Carousel = [
  {
    id: "1",
    name: "Painting",
    src: "/assets/banner/banner1.jpg",
    placeholder: "/assets/banner/banner1Lazy.jpg",
    href: "/product",
  },
  {
    id: "2",
    name: "Canvus",
    src: "/assets/banner/banner2.jpg",
    placeholder: "/assets/banner/banner2Lazy.jpg",
    href: "/product",
  },
  {
    id: "3",
    name: "Wood",
    src: "/assets/banner/banner3.jpg",
    placeholder: "/assets/banner/banner3Lazy.jpg",
    href: "/product",
  },
  {
    id: "4",
    name: "Bamboo",
    src: "/assets/banner/banner2.jpg",
    placeholder: "/assets/banner/banner2Lazy.jpg",
    href: "/product",
  },
];

app.get("/api/categories", (req, res) => {
  res.json(Categories);
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/carousel", (req, res) => {
  res.json(Carousel);
});

app.listen(8000, () => {
  console.log("listening on port 8000");
});
