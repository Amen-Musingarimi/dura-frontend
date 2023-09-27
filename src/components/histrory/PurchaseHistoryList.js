import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPurchaseHistoryAsync } from '../../redux/transactionsSlice';
import classes from './PuchaseHistory.module.css';

const PurchaseHistoryList = () => {
  const dispatch = useDispatch();
  const { purchaseHistory } = useSelector((state) => state.purchaseHistory);

  useEffect(() => {
    dispatch(fetchPurchaseHistoryAsync());
  }, [dispatch]);

  // Helper function to format the timestamp
  const formatTimestamp = (timestamp) => {
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    };
    return new Date(timestamp).toLocaleDateString(undefined, options);
  };

  // Helper function to group purchase history by date and time
  const groupPurchaseHistoryByTimestamp = (data) => {
    if (!Array.isArray(data)) {
      return [];
    }
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
  const groupedPurchaseHistory = groupPurchaseHistoryByTimestamp(
    purchaseHistory
  );

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
              <table className={classes.orderTextDetailsTable}>
                <tr>
                  <th className={classes.tableHeading}>Product</th>
                  <th className={classes.tableHeading}>Price/unit</th>
                  <th className={classes.tableHeading}>Quantity</th>
                  <th className={classes.tableHeading}>Total($)</th>
                </tr>
                {Object.keys(cardProducts).map((productId) => {
                  const product = cardProducts[productId];
                  return (
                    <tr>
                      <td className={classes.tableData}>{product.name}</td>
                      <td className={classes.tableData}>${product.price}</td>
                      <td className={classes.tableData}>{product.quantity}</td>
                      <td className={classes.tableData}>
                        ${(product.price * product.quantity).toFixed(2)}
                      </td>
                    </tr>
                  );
                })}
              </table>
              <p className={classes.transactionTotalPrice}>
                Total Order Price:
                <span className={classes.orderPrice}>
                  {' '}
                  $
                  {Object.values(cardProducts)
                    .reduce(
                      (total, product) =>
                        total + product.price * product.quantity,
                      0
                    )
                    .toFixed(2)}
                </span>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PurchaseHistoryList;
