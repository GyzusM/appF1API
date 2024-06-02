import { useState, useEffect } from 'react'

export function useFetchErgast(url, search) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const getStandings = async() => {
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
        } else {
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
    getStandings()
  }, [search])

  return { data, loading, error }
}