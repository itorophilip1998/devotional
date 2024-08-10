// import { usePaystackPayment } from "react-paystack";

import { FlutterWaveButton, closePaymentModal } from "flutterwave-react-v3";
import { useAuth } from "../../context/firebaseContext";
import { 
  updateSubStatus,
} from "../../utils/firebase/functions";
import { useNavigate } from "react-router-dom";

function NoSub() {
  const navigate = useNavigate();
  const onSuccess = async (data) => {
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
      status: true,  
    }; 
 
    await updateSubStatus(payload.status, payload);

    setTimeout(() => {
      navigate(-1);
    }, 1000);
  };

  const { userDetails } = useAuth();
  const email = userDetails?.email ?? "";
  const username = userDetails?.username ?? "";
  const id = userDetails?.id ?? "";

  const config = {
    public_key: process.env.REACT_APP_FLUTTER_KEY,
    tx_ref: Date.now(),
    amount: 1000,
    currency: "NGN",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: email,
      phone_number: "09024195493",
      name: username,
      id: id,
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
        ₦ <h1 className="d-inline font-weight-bold">{1000}</h1> only
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
