import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PaystackButton } from "react-paystack";

export const Modal = ({ open, close, amount }) => {
  const overlayVariants = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        duration: 0.3,
        delayChildren: 0.4,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
        duration: 0.3,
        delay: 0.4,
      },
    },
  };

  return (
    <div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={overlayVariants}
            className="inset-0 fixed bg-primary bg-opacity-70 flex items-center justify-center"
          >
            <motion.div
              className="w-full max-w-[500px] bg-white rounded-md"
              initial={{ y: "100vh" }}
              animate={{ y: 0 }}
              exit={{ y: "100vh" }}
              transition={{ duration: 0.5 }}
            >
              <div className="border-b-[1px] border-[#dedede]">
                <h5 className="m-0 text-xl p-4 font-semibold tracking-[0.065rem]">
                  Select Payment Method
                </h5>
              </div>
              <div className="flex items-center justify-center p-4">
                <PaystackButton amount={amount} />
              </div>
              <div className="p-4 border-t-[1px] border-[#dedede]">
                <button className="" onClick={close}>
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
