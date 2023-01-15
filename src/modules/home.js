import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Item from "../components/card/items";
import Entry from "../assets/entry.jpeg";
import BlueFlame from "../assets/blueflame.jpeg";
import RedFlame from "../assets/redflame.jpeg";
import YellowFlame from "../assets/yellowflame.jpeg";
import CurrencyFormat from "react-currency-format";

function Home() {
  
  const data = [
    {
      id: 1,
      name: "Entry",
      image: Entry,
      price: "6000",
    },
    {
      id: 2,
      name: "Blue Flame",
      image: BlueFlame,
      price: "500000",
    },
    {
      id: 3,
      name: "Yellow Flame",
      image: YellowFlame,
      price: "250000",
    },
    {
      id: 4,
      name: "Red Flame",
      image: RedFlame,
      price: "1000000",
    },
  ];

  return (
    <div className="mt-16 w-full">
      <div className="w-full flex items-center flex-col justify-center h-48">
        <motion.h2 className="font-bold text-4xl text-center">
          Get your tickets now
        </motion.h2>
      </div>
      <div className="flex items-center justify-center flex-col">
        <motion.h2 className="font-bold text-2xl text-center">
          Buy Tickets
        </motion.h2>
        <div className="grid mt-6 md:grid-cols-2 grid-cols-1 w-full max-w-5xl gap-4">
          {data.map((d, index) => (
            <div key={index} className="p-4">
              <Item
                id={d.id}
                title={d.name}
                price={
                  <CurrencyFormat
                    value={d.price}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"₦"}
                  />
                }
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
