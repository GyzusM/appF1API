import { useState, useEffect } from 'react'
import { useContext } from 'react'
import { StoreContext } from './store/StoreProvider'

export function useFetchErgast(url) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [store] = useContext(StoreContext)
  const {search} = store

  const getData = async() => {
    await fetch(url)
      .then((response) => response.json())
      .then(function(data) {
        var driverstandings = data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
        localStorage.setItem("data", JSON.stringify(driverstandings));
        //
        
        setData(driverstandings);
        if (search === 'driver') {
          localStorage.setItem("data", JSON.stringify(driverstandings));
          setData(driverstandings);
          console.log(driverstandings)
        } else if (search === 'constructor') {
          var constructorstandings = data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings;
          localStorage.setItem("data", JSON.stringify(constructorstandings));
          setData(constructorstandings);
        }
      })
      .catch((error) => {
        setError(error)
        var dataLocal = JSON.parse(localStorage.getItem("data"))
        setData(dataLocal)
      })
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    setLoading(true)
    getData()
  }, [url])

  return { data, loading, error }
}