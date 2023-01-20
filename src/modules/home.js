import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Item from "../components/card/items";
import Entry from "../assets/entry.jpeg";
import BlueFlame from "../assets/blueflame.jpeg";
import RedFlame from "../assets/redflame.jpeg";
import YellowFlame from "../assets/yellowflame.jpeg";

function Home() {
  const data = [
    {
      id: 1,
      name: "Entry",
      image: Entry,
      price: 6000,
    },
    {
      id: 2,
      name: "Blue Flame",
      image: BlueFlame,
      price: 500000,
    },
    {
      id: 3,
      name: "Yellow Flame",
      image: YellowFlame,
      price: 250000,
    },
    {
      id: 4,
      name: "Red Flame",
      image: RedFlame,
      price: 1000000,
    },
  ];

  let nairaCurrency = new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    currencyDisplay: "symbol",
  });

  return (
    <div className="mt-20 w-full flex flex-col gap-8 justify-center items-center">
      <div className="w-full max-w-5xl flex items-center bg-black flex-col justify-center h-48">
        <motion.h2 className="font-bold text-7xl font-mono text-white capitalize text-center">
          Get your tickets now
        </motion.h2>
      </div>
      <div className="flex items-center justify-center flex-col">
        <motion.h2 className="font-bold text-2xl text-center">
          Buy Tickets
        </motion.h2>
        <div className="grid mt-6 md:grid-cols-2 lg: grid-cols-1 w-full max-w-5xl gap-4">
          {data.map((d, index) => (
            <div key={index} className="p-4">
              <Item
                id={d.id}
                title={d.name}
                price={nairaCurrency.format(d.price)}
                image={d.image}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
