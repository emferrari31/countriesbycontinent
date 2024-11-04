import Country from '../Country';
import { useState, useEffect } from 'react';

const CountriesBox = ({ continents }) => {
    const [countries, setCountries] = useState([]);

    const fetchCountries = async () => {
        const response = await fetch('https://restcountries.com/v3.1/region/' + continents);
        const countryArray = await response.json();
        setCountries(countryArray);
    };

    useEffect(() => {
        fetchCountries();
    }, [continents]);

    return (
        <div className="overflow-auto flex flex-wrap justify-center gap-6 p-6 h-[calc(100vh-40px)]"> {/* Adjust height as needed */}
            {countries.map((info, index) => (
                <div key={index} className="border border-gray-300 rounded-lg p-4 shadow-md transition-transform
                transform hover:scale-105 hover:shadow-lg w-full sm:w-72 md:w-80 lg:w-96 xl:w-[450px]">
                    <Country
                        name={info.name.common}
                        currencies={Object.values(info.currencies)[0]?.name || 'N/A'}
                        capital={info.capital && info.capital.length > 0 ? info.capital.join(', ') : 'No capital'}
                    />
                </div>
            ))}
        </div>
    );
};

export default CountriesBox;

