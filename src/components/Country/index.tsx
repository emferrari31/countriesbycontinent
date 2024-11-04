const Country = ({ name, currencies, capital }) => {
    return (
        <div className="text-sm text-white">
            <h3 className="text-lg font-semibold">{name}</h3>
            <p><strong>Currency:</strong> {currencies}</p>
            <p><strong>Capital City:</strong> {capital}</p>
        </div>
    );
};

export default Country;
