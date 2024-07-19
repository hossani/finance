import api from "../api/api";
import { setTransactions } from "../redux/transaction";
import { useSelector, useDispatch } from "react-redux";

function Option({toggleModal,transactionId}) {
    const transactions=useSelector(state=>state.transaction.transactions);
    const dispatch=useDispatch();

    const handleDelete = async () => {
        try {
            console.log("id",transactionId)
          await api.delete(`/transaction/${transactionId}`);
          const filteredTransactions = transactions.data.filter(
            (transaction) => transaction._id != transactionId
          );
        dispatch(setTransactions(filteredTransactions));
        } catch (error) {
          console.error("Failed to delete transaction", error);
        }
      };
  return (
    <>
      <div className="container-option">
      <div className="div-option" onClick={toggleModal}>
      <h3 className="cursor-pointer">Edit</h3>
        </div>
        <div className="div-option" >
          <h3 className="cursor-pointer" onClick={handleDelete}>Delete</h3>
        </div>
      </div>
    </>
  );
}

export default Option;
