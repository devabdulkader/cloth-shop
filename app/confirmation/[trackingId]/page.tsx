import React from "react";

const ConfirmationPage = ({ params }: { params: { trackingId: string } }) => {
  return (
    <div className="container text-center py-20 md:py-40">
      <h1 className="text-4xl md:text-6xl font-bold">
        Your order has been confirmed
      </h1>
      <p className="text-md font-medium py-4">
        This is your order tracking number id: {params.trackingId}{" "}
      </p>
    </div>
  );
};

export default ConfirmationPage;
