import { Helmet } from "react-helmet";
import usePayments from "../../Hooks/usePayments";

const PaymentHistory = () => {
    const [payment] = usePayments();
    return (
        <div className="w-full p-5">
            <Helmet>
                <title>ACADEMIA | Payment History</title>
            </Helmet>
            <div className="uppercase font-semibold h-[60px] flex justify-evenly items-center">
                <h3 className="text-3xl">My Payment History</h3>
            </div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead className="bg-slate-200">
                        <tr>
                            <th>#</th>
                            <th>Customer Name</th>
                            <th>Email</th>
                            <th>Transaction ID</th>
                            <th>Enrolled Date</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            payment?.map((item, index) => <tr
                                key={item._id}
                            >
                                <td>
                                    {index + 1}
                                </td>
                                <td className="text-bold">
                                    {item.name}
                                </td>
                                <td className="">{item.email}</td>
                                <td className="">{item.transactionId}</td>
                                <td className="">{item.date}</td>
                                <td className="">${item.price}</td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;