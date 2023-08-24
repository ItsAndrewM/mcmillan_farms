//fall-attractions
import pumpkins from "../public/images/attractions/pumpkins.jpg";
import concessionStand from "../public/images/attractions/concessionStand.jpg";
import hayRide from "../public/images/attractions/hayRide.jpg";
import hayMaze from "../public/images/attractions/hayMaze.jpg";
import pettingZoo from "../public/images/attractions/pettingZoo.jpg";
import pumpkinSlingshot from "../public/images/attractions/pumpkinSlingshot.png";
import cornMaze from "../public/images/attractions/cornMaze.jpg";
import wildLife from "../public/images/attractions/wildLife.jpg";
import heroCornMaze from "../public/images/cornmaze3.jpg";
//seasonal goods
import heroPumpkins from "../public/images/pumpkins6.jpg";
import summerGoods from "../public/images/summerGoods.jpg";
import pumpkins2 from "../public/images/pumpkins5.jpg";
//summer-activities
import sunflowerSummer from "../public/images/sunflowerMaze.jpg";
import sunflowerDog from "../public/images/sunflower3.jpg";
import deer from "../public/images/deer.jpg";

export const data = {
  "fall-attractions": {
    title: "fall attractions",
    slug: "fall-attractions",
    image: heroCornMaze,
    small: "discover your inner farmer",
    content:
      "McMillan Farms is more than just a farm, it’s a destination. We have a range of attractions that will delight and entertain you and your family. Our hay ride is one of a kind, as it spans 100 acres of farm land and offers a scenic view of the countryside. Our wildlife is also unpredictable, as you never know what animals you might encounter on your visit. Whether you want to carve a pumpkin, shoot a slingshot, pet a goat, or see a deer, we have something for everyone.",
    data: [
      {
        name: "pumpkins",
        link: "/the-farm/fall-attractions/pumpkins",
        slug: "pumpkins",
        image: pumpkins,
      },
      {
        name: "corn maze",
        link: "/the-farm/fall-attractions/corn-maze",
        slug: "corn-maze",
        image: cornMaze,
      },
      {
        name: "Hay Rides",
        link: "/the-farm/fall-attractions/hay-rides",
        slug: "hay-rides",
        image: hayRide,
      },
      {
        name: "Hay Maze",
        link: "/the-farm/fall-attractions/hay-maze",
        slug: "hay-maze",
        image: hayMaze,
      },
      {
        name: "pumpkin slingshot",
        link: "/the-farm/fall-attractions/pumpkin-slingshot",
        slug: "pumpkin-slingshot",
        image: pumpkinSlingshot,
      },
      {
        name: "petting zoo",
        link: "/the-farm/fall-attractions/petting-zoo",
        slug: "petting-zoo",
        image: pettingZoo,
      },
      {
        name: "concession stand",
        link: "/the-farm/fall-attractions/concession-stand",
        slug: "concession-stand",
        image: concessionStand,
      },
      {
        name: "wild life",
        link: "/the-farm/fall-attractions/wild-life",
        slug: "wild-life",
        image: wildLife,
      },
    ],
  },
  "summer-activities": {
    title: "summer activities",
    slug: "summer-activities",
    image: sunflowerSummer,
    small: "discover your inner farmer",
    content:
      "McMillan Farms is more than just a farm, it’s a destination. We have a range of attractions that will delight and entertain you and your family. Our hay ride is one of a kind, as it spans 100 acres of farm land and offers a scenic view of the countryside. Our wildlife is also unpredictable, as you never know what animals you might encounter on your visit. Whether you want to carve a pumpkin, shoot a slingshot, pet a goat, or see a deer, we have something for everyone.",
    data: [
      {
        name: "sunflower maze",
        link: "/the-farm/summer-activities/sunflower-maze",
        slug: "sunflower-maze",
        image: sunflowerDog,
      },
      {
        name: "Hay Rides",
        link: "/the-farm/summer-activities/hay-rides",
        slug: "hay-rides",
        image: hayRide,
      },
      {
        name: "petting zoo",
        link: "/the-farm/summer-activities/petting-zoo",
        slug: "petting-zoo",
        image: pettingZoo,
      },
      {
        name: "concession stand",
        link: "/the-farm/summer-activities/concession-stand",
        slug: "concession-stand",
        image: concessionStand,
      },
      {
        name: "wild life",
        link: "/the-farm/summer-activities/wild-life",
        slug: "wild-life",
        image: deer,
      },
    ],
  },
  "seasonal-goods": {
    title: "seasonal goods",
    slug: "seasonal-goods",
    image: heroPumpkins,
    small: "fresh from the farm",
    content:
      "At McMillan Farms, we are passionate about our crops and goods that come straight from our soil. You can choose from a variety of seasonal items, such as pumpkins and hay in the fall, or plums and sunflowers in the summer. Our ornamental corn, gourds, merchandise and apple juice are also made from our own crops. You can visit our farm and pick your own products, or let us know if you need any assistance. Discover the freshness and quality of McMillan Farms now!",
    data: [
      {
        name: "summer crops",
        link: "/the-farm/seasonal-goods/summer-crops",
        slug: "summer-crops",
        image: summerGoods,
        tag: "SHOW YOUR SUPPORT",
        content:
          "Merchandise is a way to show your support for your favorite farm or brand. At McMillan Farms, we sell merchandise such as hats, shirts, mugs, bags, or stickers with our logo or slogan. Our merchandise is high-quality and stylish, and it is a great way to show your love for our farm or to give as a souvenir. Show your support with our merchandise!",
      },
      {
        name: "fall goods",
        link: "/the-farm/seasonal-goods/fall-goods",
        slug: "fall-goods",
        image: pumpkins2,
        tag: "ADD SOME FLAIR",
        content:
          "Decorated gourds are a fun and creative way to spice up your home or garden. At McMillan Farms, we sell decorated gourds that have been dried, painted, or carved by our talented artists. You can choose from different designs, themes, and colors of decorated gourds, or you can request a custom-made one. Our decorated gourds are unique and beautiful, and they are a great way to add some flair to your space. Come and see our decorated gourds today!",
      },
    ],
  },
};
