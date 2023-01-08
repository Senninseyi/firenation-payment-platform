import React from "react";
import { motion } from "framer-motion";
import Item from "../components/card/items";

function Home() {
  const data = [
    {
      id: 1,
      name: "Item 1",
      image:
        "https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$",
      price: 5000,
    },
    {
      id: 2,
      name: "Item 2",
      image:
        "https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$",
      price: 10000,
    },
    {
      id: 3,
      name: "Item 3",
      image:
        "https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$",
      price: 50000,
    },
    {
      id: 4,
      name: "Item 4",
      image:
        "https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$",
      price: 100000,
    },
  ];

  return (
    <div className="mt-16 w-full">
      <div className="w-full flex items-center flex-col justify-center h-48">
        <motion.h2 className="font-bold text-4xl text-center">
          Get your tickets now
        </motion.h2>
      </div>
      <div>
        <motion.h2 className="font-bold text-2xl text-center">
          Buy Tickets
        </motion.h2>
        <div className="grid mt-6 lg:grid-cols-3 grid-cols-2 gap-4">
          {data.map((d, index) => (
            <div key={index} className="p-4">
              <Item id={d.id} title={d.name} price={d.price} image={d.image} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
