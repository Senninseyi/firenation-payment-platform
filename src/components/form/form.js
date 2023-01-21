import React, { useEffect, useState } from "react";
import { usePaystackPayment } from "react-paystack";
import { useSelector } from "react-redux";
import { CustomInput } from "../../style/styled";

export const PaymentForm = () => {
  const initialState = {
    firstname: "",
    lastname: "",
    phone: "",
    email: "",
  };
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const [formData, setFormData] = useState(initialState);
  const [config, setConfig] = useState({
    reference: new Date().getTime().toString(),
    email: "",
    amount: totalPrice * 100,
    publicKey: process.env.REACT_APP_PAYSTACK_PUBLIC_KEYS,
    metadata: "",
    channels: ["card", "bank_transfer"],
    currency: "NGN",
  });

  useEffect(() => {
    setConfig({
      ...config,
      email: formData.email,
      metadata: formData,
    });
  }, [formData]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSuccess = (reference) => {
    setFormData(initialState);
  };

  const onClose = () => {
    console.log("closed");
  };

  const initializePayment = usePaystackPayment(config);

  const onFinish = (e) => {
    e.preventDefault();
    initializePayment(onSuccess, onClose);
  };
  
  let nairaCurrency = new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    currencyDisplay: "symbol",
  });

  return (
    <div className="flex flex-col gap-4 w-full items-center justify-center">
      <div className="w-full">
        <form
          autoComplete="false"
          className="flex w-full flex-col gap-5"
          onSubmit={onFinish}
        >
          <div className="flex w-full items-center justify-center flex-col gap-y-6">
            <div className="flex gap-4 w-full">
              <CustomInput
                type="text"
                value={formData.firstname}
                onChange={handleChange}
                required={true}
                name="firstname"
                className="placeholder-white"
                placeholder="firstname"
              />

              <CustomInput
                type="text"
                value={formData.lastname}
                onChange={handleChange}
                name="lastname"
                className="placeholder-white"
                required={true}
                placeholder="lastname"
              />
            </div>
            <div className="flex gap-4 w-full">
              <CustomInput
                value={formData.phone}
                onChange={handleChange}
                required={true}
                placeholder="phone number"
                type="tel"
                className="placeholder-white"
                name="phone"
              />
            </div>
            <div className="flex gap-4 w-full">
              <CustomInput
                value={formData.email}
                onChange={handleChange}
                required={true}
                type="email"
                className="placeholder-white"
                placeholder="email"
                name="email"
              />
            </div>
            <div className="flex gap-4 w-full">
              <CustomInput
                type="text"
                disabled={true}
                className="placeholder-white"
                name="amount"
                placeholder={nairaCurrency.format(totalPrice)}
              />
            </div>
          </div>
          <button
            className="px-5 py-3 text-white font-medium tracking-[0.065rem] rounded-md bg-secondary w-fit"
            type="submit"
          >
            pay with paystack
          </button>
        </form>
      </div>
    </div>
  );
};
