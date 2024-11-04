import { Link } from 'react-router-dom';

const Continent = () => {
    return (
        <div className="ml-4 flex flex-col leading-loose max-w-xs">
            {['africa', 'asia', 'europe', 'northAmerica', 'oceania', 'southAmerica'].map(continent => (
                <Link
                    key={continent}
                    to={`/${continent}`}
                    className="block p-2 mb-2 text-white transition-colors duration-200 rounded-lg hover:bg-blue-200 hover:text-blue-800"
                >
                    {continent.charAt(0).toUpperCase() + continent.slice(1).replace(/([A-Z])/g, ' $1')}
                </Link>
            ))}
        </div>
    );
};

export default Continent;
