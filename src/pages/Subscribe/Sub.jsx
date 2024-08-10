function Sub() {
  const today = new Date();

  // Calculate the end date (6 months from today)
  const endDate = new Date(
    today.getFullYear(),
    today.getMonth() + 6,
    today.getDate()
  );

  // Format the dates to strings
  const formattedStartDate = today.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  const formattedEndDate = endDate.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="Subscribtion ">
      <div className="headingText">You have an active subscription</div>
      <div className="priceTag my-5">
        ₦ <h1 className="d-inline font-weight-bold">{1000}</h1> only
      </div>
      <div className="breifInfo">
        The subscription commenced on {formattedStartDate} and will conclude on{" "}
        {formattedEndDate}.
      </div>
      <button className="subButn btn shadow mb-5" disabled>
        Active
      </button>
    </div>
  );
}

export default Sub;
