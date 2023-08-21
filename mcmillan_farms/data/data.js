import pumpkins from "../public/images/attractions/pumpkins.jpg";
import concessionStand from "../public/images/attractions/concessionStand.jpg";
import hayRide from "../public/images/attractions/hayRide.jpg";
import hayMaze from "../public/images/attractions/hayMaze.jpg";
import pettingZoo from "../public/images/attractions/pettingZoo.jpg";
import pumpkinSlingshot from "../public/images/attractions/pumpkinSlingshot.png";
import cornMaze from "../public/images/attractions/cornMaze.jpg";
import wildLife from "../public/images/attractions/wildLife.jpg";
import heroCornMaze from "../public/images/cornmaze3.jpg"
//products
import pumpkinProduct from "../public/images/products/pumpkins4.jpg";
import appleJuice from "../public/images/products/appleJuice.jpg";
import gourd from "../public/images/products/gourd.jpg";
import hayBale from "../public/images/products/hayBale.jpg";
import corn from "../public/images/products/ornamentalCorn.jpg";
import painted from "../public/images/products/paintedPumpkin.jpg";
import plums from "../public/images/products/plums.jpg";
import sunflower from "../public/images/products/sunflower.jpg";
import merchandise from "../public/images/products/merchandise.jpg";
import heroPumpkins from "../public/images/pumpkins6.jpg"

export const data = {
  attractions: {
    title: "attractions",
    image: heroCornMaze,
    small: "discover your inner farmer",
    content: "McMillan Farms is more than just a farm, it’s a destination. We have a range of attractions that will delight and entertain you and your family. Our hay ride is one of a kind, as it spans 100 acres of farm land and offers a scenic view of the countryside. Our wildlife is also unpredictable, as you never know what animals you might encounter on your visit. Whether you want to carve a pumpkin, shoot a slingshot, pet a goat, or see a deer, we have something for everyone.",
    data: [
      {
        name: "pumpkins",
        link: "/activities/attractions/pumpkins",
        slug: "pumpkins",
        image: pumpkins,
      },
      {
        name: "corn maze",
        link: "/activities/attractions/corn-maze",
        slug: "corn-maze",
        image: cornMaze,
      },
      {
        name: "Hay Rides",
        link: "/activities/attractions/hay-rides",
        slug: "hay-rides",
        image: hayRide,
      },
      {
        name: "Hay Maze",
        link: "/activities/attractions/hay-maze",
        slug: "hay-maze",
        image: hayMaze,
      },
      {
        name: "pumpkin slingshot",
        link: "/activities/attractions/pumpkin-slingshot",
        slug: "pumpkin-slingshot",
        image: pumpkinSlingshot,
      },
      {
        name: "petting zoo",
        link: "/activities/attractions/petting-zoo",
        slug: "petting-zoo",
        image: pettingZoo,
      },
      {
        name: "concession stand",
        link: "/activities/attractions/concession-stand",
        slug: "concession-stand",
        image: concessionStand,
      },
      {
        name: "wild life",
        link: "/activities/attractions/wild-life",
        slug: "wild-life",
        image: wildLife,
      },
    ]
  },
  products: {
    title: "products",
    image: heroPumpkins,
    small: "fresh from the farm",
    content: "At McMillan Farms, we are passionate about our products that come straight from our soil. You can choose from a variety of seasonal items, such as pumpkins and hay in the fall, or plums and sunflowers in the summer. Our ornamental corn, gourds, merchandise and apple juice are also made from our own crops. You can visit our farm and pick your own products, or let us know if you need any assistance. Discover the freshness and quality of McMillan Farms now!",
    data: [
      {
        name: "pumpkins",
        link: "/activities/products/pumpkins",
        slug: "pumpkins",
        image: pumpkinProduct,
        tag: "PICK YOUR PERFECT PUMPKIN",
        content: "Pumpkins are a staple of the fall season, and we have plenty of them at McMillan Farms. You can choose from different sizes, shapes, and colors of pumpkins, and carve them into your own masterpiece. Our pumpkins are grown with care and quality, and they are perfect for decorating, baking, or making jack-o-lanterns. Come and pick your perfect pumpkin today!"
      },
      {
        name: "hay",
        link: "/activities/products/hay",
        slug: "hay",
        image: hayBale,
        tag: "HAVE A HAY DAY",
        content: "Hay is not only a great feed for animals, but also a fun and versatile material for crafts and activities. At McMillan Farms, we sell hay in bales or bundles, and you can use it for making scarecrows, wreaths, or hay rides. Our hay is fresh and clean, and it adds a rustic charm to any occasion. Have a hay day with our hay!"
      },
      {
        name: "Fresh Plums",
        link: "/activities/products/fresh-plums",
        slug: "fresh-plums",
        image: plums,
        tag: "PLUCK A PLUM",
        content: "Plums are a delicious and nutritious fruit that you can enjoy fresh or dried. At McMillan Farms, we grow and harvest plums in our orchard, and you can pluck your own plums from our trees. Our plums are juicy and sweet, and they are great for making jams, pies, or snacks. Pluck a plum from our farm and taste the difference!"
      },
      {
        name: "ornamental corn",
        link: "/activities/products/ornamental-corn",
        slug: "ornamental-corn",
        image: corn,
        tag: "CORN FOR ALL SEASONS",
        content: "Ornamental corn is a type of corn that has colorful kernels and husks, and it is used for decoration or crafts. At McMillan Farms, we grow and sell ornamental corn in various colors and sizes, and you can use it for making centerpieces, garlands, or wreaths. Our ornamental corn is eye-catching and festive, and it is suitable for all seasons. Corn for all seasons with our ornamental corn!"
      },
      {
        name: "sunflowers",
        link: "/activities/products/sunflowers",
        slug: "sunflowers",
        image: sunflower,
        tag: "SUNNY AND STUNNING",
        content: "Sunflowers are a beautiful and cheerful flower that brightens up any space. At McMillan Farms, we grow and sell sunflowers in different varieties and heights, and you can cut your own sunflowers from our fields. Our sunflowers are sunny and stunning, and they are ideal for bouquets, arrangements, or gifts. Bring some sunshine to your home with our sunflowers!"
      },
      {
        name: "gourds",
        link: "/activities/products/gourds",
        slug: "gourds",
        image: gourd,
        tag: "GORGEOUS GOURDS",
        content: "Gourds are a type of fruit that has a hard shell and a unique shape, and it is used for decoration or crafts. At McMillan Farms, we grow and sell gourds in different shapes, sizes, and colors, and you can pick your own gourds from our farm. Our gourds are gorgeous and creative, and they are perfect for making lanterns, birdhouses, or sculptures. Express your creativity with our gourds!"
      },
      {
        name: "merchandise",
        link: "/activities/products/merchandise",
        slug: "merchandise",
        image: merchandise,
        tag: "SHOW YOUR SUPPORT",
        content: "Merchandise is a way to show your support for your favorite farm or brand. At McMillan Farms, we sell merchandise such as hats, shirts, mugs, bags, or stickers with our logo or slogan. Our merchandise is high-quality and stylish, and it is a great way to show your love for our farm or to give as a souvenir. Show your support with our merchandise!"
      },
      {
        name: "decorated gourds",
        link: "/activities/products/decorated-gourds",
        slug: "decorated-gourds",
        image: painted,
        tag: "ADD SOME FLAIR",
        content: "Decorated gourds are a fun and creative way to spice up your home or garden. At McMillan Farms, we sell decorated gourds that have been dried, painted, or carved by our talented artists. You can choose from different designs, themes, and colors of decorated gourds, or you can request a custom-made one. Our decorated gourds are unique and beautiful, and they are a great way to add some flair to your space. Come and see our decorated gourds today!"
      },
      {
        name: "Fresh Locally Sourced Apple Juice",
        link: "/activities/products/fresh-locally-sourced-apple-juice",
        slug: "fresh-locally-sourced-apple-juice",
        image: appleJuice,
        tag: "SIP AND SAVOR",
        content: "Apple juice is a refreshing and healthy drink that you can enjoy any time of the day. At McMillan Farms, we make our own apple juice from our apples that we grow in our orchard. Our apple juice is natural and pure, and it has no added sugar or preservatives. Sip and savor our apple juice!"
      },
    ]
  },
};
