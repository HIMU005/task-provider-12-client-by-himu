import PurchaseCoinCard from "../../../../components/DashBoard/TaskCreator/PurchaseCoinCard";

const PurchaseCoin = () => {
    return (
        <div>
            purchase coin
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <PurchaseCoinCard coinNumber={10} price={1} />
            </div>
        </div>
    );
};

export default PurchaseCoin;