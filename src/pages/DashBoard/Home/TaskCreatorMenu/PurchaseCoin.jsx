<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> d8d0a65 (implement helmet of dynamic title)
import { Helmet } from "react-helmet-async";
import PurchaseCoinCard from "../../../../components/DashBoard/TaskCreator/PurchaseCoinCard";
=======
>>>>>>> 087dfad (set up all home route and dashboard route)
=======
import PurchaseCoinCard from "../../../../components/DashBoard/TaskCreator/PurchaseCoinCard";
>>>>>>> 2ed9c7f (payment method left for later time)

const PurchaseCoin = () => {
    return (
        <div>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> d8d0a65 (implement helmet of dynamic title)
            <Helmet>
                <title> Work Provider || Dashboard |  Purchase coin  </title>
            </Helmet>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                <PurchaseCoinCard coinNumber={10} price={1} />
                <PurchaseCoinCard coinNumber={100} price={9} />
                <PurchaseCoinCard coinNumber={500} price={19} />
                <PurchaseCoinCard coinNumber={1000} price={39} />
            </div>
=======
            purchase coin
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 087dfad (set up all home route and dashboard route)
=======
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
=======
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
>>>>>>> db7b544 (purchase coin successfully finished)
                <PurchaseCoinCard coinNumber={10} price={1} />
                <PurchaseCoinCard coinNumber={100} price={9} />
                <PurchaseCoinCard coinNumber={500} price={19} />
                <PurchaseCoinCard coinNumber={1000} price={39} />
            </div>
>>>>>>> 2ed9c7f (payment method left for later time)
        </div>
    );
};

export default PurchaseCoin;