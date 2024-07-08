export const Balance = ({ value }) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-2xl font-bold text-gray-800">Balance</h2>
            <div className="text-4xl font-bold text-green-500 mt-2">{value}</div>
        </div>
    );
};
