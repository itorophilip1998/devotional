// import { usePaystackPayment } from "react-paystack";
import { useSelector } from "react-redux";
import { subscribe } from "../../utils/request/index";
import { FlutterWaveButton, closePaymentModal } from "flutterwave-react-v3";

// you can call this function anything
const onSuccess = (data) => {
  // Implementation for whatever you want to do with reference and after success call.
  const currentDate = new Date();
  const startDate = currentDate.toISOString().split("T")[0];
  const endDate = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 5,
    currentDate.getDate()
  )
    .toISOString()
    .split("T")[0];

  const payload = {
    start_date: startDate,
    end_date: endDate,
    reference: data.flw_ref,
    status: data.status,
  };

  subscribe(payload);

  setTimeout(() => {
    window.location.href = "/profile";
  }, 1000);
};

// // you can call this function anything
// const onClose = () => {
//   // implementation for  whatever you want to do when the Paystack dialog closed.
//   console.log("closed");
// };

function NoSub() {
  const { email } = useSelector((state) => state.data.user);

  // const timestamp = new Date().getTime();
  // const referenceNumber = `REF-${timestamp}`;
  // const config = {
  //   reference: referenceNumber,
  //   email,
  //   amount: 700 * 100,
  //   // publicKey: "pk_live_3f3b5aebbf467d9c030ed9c76ee332eaa9ab9ddf",
  //   publicKey: "pk_test_b9ac9968f82485184ceaa9a31ab524bdc9efb58c",
  // };
  // const initializePayment = usePaystackPayment(config);

  const config = {
    public_key: "FLWPUBK-f3d08435d1916da22fe81a0c0d94b9b5-X",
    tx_ref: Date.now(),
    amount: 700,
    currency: "NGN",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: email,
      phone_number: "09024195493",
      name: email,
    },
    customizations: {
      title: "Fulga Devotional",
      description: `Subscribe your double impact edition sunday school manual & the
        dayspring devotional for  6 Months`,
      logo: "/logo.jpeg",
    },
  };

  const fwConfig = {
    ...config,
    text: "Subscribe",
    callback: (response) => {
      onSuccess(response);
      closePaymentModal(); // this will close the modal programmatically
    },
    onClose: () => {},
  };

  return (
    <div className="Subscribtion ">
      <div className="headingText">Subscribe to FULGA Devotionals Today</div>
      <div className="priceTag my-5">
        ₦ <h1 className="d-inline font-weight-bold">{700}</h1> only
      </div>
      <div className="breifInfo">
        Subscribe your double impact edition sunday school manual & the
        dayspring devotional for <b>6 Months</b>
      </div>
      {/* <button
        className="subButn btn shadow mb-5"
        onClick={() => initializePayment(onSuccess, onClose)}
      >
        Subscribe
      </button> */}

      <FlutterWaveButton {...fwConfig} className="subButn btn shadow mb-5" />
    </div>
  );
}

export default NoSub;
