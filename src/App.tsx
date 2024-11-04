import './App.css'
import Header from './components/Header'
import CountriesBox from './components/CountriesBox'
import Continent from "./components/Continent";
import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom'

function App() {
    return (
        <>
            <BrowserRouter>
                <div className={'bg-gradient-to-r from-green-950 via-sky-800 via-30% to-emerald-500 to-90% text-white m-30 w-full h-full min-h-screen border-gray-300 fixed top-0 left-0 m-0 p-0'}>
                    <div className={'flex flex-row place-content-between'}>
                        <Header></Header>
                    </div>
                    <div className={'flex flex-row gap-5'}>
                        <div className={'flex flex-col gap-4 flex-wrap'}>
                            <Continent></Continent>
                        </div>
                        <div className={''}>
                            <Routes>
                                <Route path='/africa' element={<CountriesBox continents='africa'></CountriesBox>}/>
                                <Route path='/asia' element={<CountriesBox continents='asia'></CountriesBox>}/>
                                <Route path='/europe' element={<CountriesBox continents='europe'></CountriesBox>}/>
                                <Route path='/northAmerica'
                                       element={<CountriesBox continents='north%20america'></CountriesBox>}/>
                                <Route path='/oceania' element={<CountriesBox continents='oceania'></CountriesBox>}/>
                                <Route path='/southAmerica'
                                       element={<CountriesBox continents='south%20america'></CountriesBox>}/>
                            </Routes>
                        </div>
                    </div>
                </div>
            </BrowserRouter>
        </>
    )
}
export default App