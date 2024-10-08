import  Dropdown  from './components/Dropdown'
import { useFetchErgast } from './useFetchErgastF1'
import DriverImage from './components/DriverImage'
import TeamStandings from './components/TeamStandings'
import logoF1 from './assets/logoF1_bgRed.png'
import github from './assets/github.png'
import './App.css'
import { useContext } from 'react'
import { StoreContext } from './store/StoreProvider'
import Calendar from './components/Calendar'

function App() {
  
  /*const [search, setSearch] = useState('driver')*/

  /*
  function searchStandings () {
    var optionSelected = document.getElementById("standings-select").value
    setSearch(optionSelected)
    console.log(optionSelected)
  }*/

  const [store] = useContext(StoreContext)
  const {search} = store

  const { data, loading } = useFetchErgast(`https://ergast.com/api/f1/2024/driverstandings.json`, search)

  return (
  <>
    <div className='main'>
      <div className="header">      
        <div className='logoF1'><img src={logoF1} alt="" /></div>
        <Dropdown/>
      </div> 
      <div className='contentMain'>
        <div className='rowTitle mb-8'>
          {search ==='driver' ? <h1 className='font-[1000] text-4xl'>2024 DRIVER CHAMPIONSHIP</h1> : search === 'constructor' ? <h1 className='font-[1000] text-4xl'>2024 CONSTRUCTOR CHAMPIONSHIP</h1> : <h1 className='font-[1000] text-4xl'>2024 F1 CALENDAR</h1>}
        </div>
        <>
        {search === 'driver' ?
          <>
          {loading && <div>Loading...</div>}
          {data?.map((driver) => (
          <div className='rowDriver' key={driver.Driver.driverId}>
            <div className='contentDriver driverLeft'>
              <DriverImage pilotoNombre={driver.Driver.code} />
              <div className='bannerDriver'>
                <span className='positionDriver'>{driver.position}</span>
                  <div className='contentInfoDriver'>
                    <span className='lastnameDriver'>{driver.Driver.familyName}</span>
                    <span className='pointsDriver'>{driver.points} PTS</span>
                  </div>
              </div>
            </div>
          </div>
          ))}
          </>
          : search === 'constructor' ?
            <TeamStandings search={search}/>
          : <Calendar search={search}/>      
        }
        </>
      </div>  
    </div>
    <footer>
      <div className='flex justify-center'>
        <a href="https://github.com/gyzusm" className='flex my-2 text-white'>
          <img src={github} alt="icon-github" className='mx-1 octocat'/> 
          <span className='mx-1'>|</span><span className='text-white font-bold gitname'>GyzusM</span></a> 
      </div>
      <div className='flex justify-center'>
        <span className='text-[#f2f2f2]'>By: Jesús Morán</span>
      </div>
    </footer>
  </>
  )
}

export default App