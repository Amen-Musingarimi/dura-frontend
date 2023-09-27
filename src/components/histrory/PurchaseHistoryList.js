import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPurchaseHistoryAsync } from "../../redux/transactionsSlice";
import classes from "./PuchaseHistory.module.css";

const PurchaseHistoryList = () => {
  const dispatch = useDispatch();
  const { purchaseHistory } = useSelector((state) => state.purchaseHistory);
  console.log(purchaseHistory)

  useEffect(() => {
    dispatch(fetchPurchaseHistoryAsync());
  }, [dispatch]);

  // Helper function to format the timestamp
  const formatTimestamp = (timestamp) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    };
    return new Date(timestamp).toLocaleDateString(undefined, options);
  };

  // Helper function to group purchase history by date and time
  const groupPurchaseHistoryByTimestamp = (data) => {
    const groupedData = {};
    data.forEach((item) => {
      const timestamp = formatTimestamp(item.created_at);
      if (!groupedData[timestamp]) {
        groupedData[timestamp] = [];
      }
      groupedData[timestamp].push(item);
    });
    return groupedData;
  };

  // Group purchaseHistory by timestamp
  const groupedPurchaseHistory = groupPurchaseHistoryByTimestamp(purchaseHistory);

  return (
    <div className={classes.historyContainer}>
      <h3 className={classes.sectionHeading}>Your Transactions Here</h3>
      <div className={classes.historyCardsContainer}>
        {Object.keys(groupedPurchaseHistory).map((timestamp) => {
          const cardData = groupedPurchaseHistory[timestamp];
          const cardProducts = {};
          
          // Prepare card products data and calculate total order price
          cardData.forEach((purchase) => {
            if (!cardProducts[purchase.product.id]) {
              cardProducts[purchase.product.id] = { ...purchase.product };
              cardProducts[purchase.product.id].quantity = 0;
            }
            cardProducts[purchase.product.id].quantity += purchase.quantity;
          });

          return (
            <div key={timestamp} className={classes.card}>
              <p className={classes.transactionDate}>{timestamp}</p>
              {Object.keys(cardProducts).map((productId) => {
                const product = cardProducts[productId];
                const imageUrl = product.image
                  ? `data:${product.image.content_type};base64,${product.image.data}`
                  : ''; 
                  console.log(imageUrl)
                return (
                  <div key={productId} className={classes.productDetails}>
                    <img src={imageUrl} alt="ProductImage" />
                    <div className={classes.productTextDetails}>
                      <h4 className={classes.productName}>{product.name}</h4>
                      <div className={classes.orderTextDetails}>
                        <p className={classes.productpricePerUnit}>
                            ${product.price} / {product.measurement_unit}
                        </p>
                        <p className={classes.productQuantity}>
                          {product.quantity} {product.measurement_unit}
                        </p>
                        <p className={classes.productTotalPrice}>
                          Total Price: ${(product.price * product.quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
              <p className={classes.transactionTotalPrice}>
                {/* Calculate and display the total price for this order */}
                Total Order Price: $
                {Object.values(cardProducts).reduce(
                  (total, product) => total + product.price * product.quantity,
                  0
                ).toFixed(2)}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PurchaseHistoryList;
