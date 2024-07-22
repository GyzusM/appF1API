import { useState, useEffect } from 'react'

export function useFetchCalendar(url) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const getCalendar = async() => {
    await fetch(url)
      .then((response) => response.json())
      .then(function(data) {
        var calendar = data.MRData.RaceTable.Races;
        localStorage.setItem("calendar", JSON.stringify(data));
        setData(calendar)
      })
      .catch((error) => {
        setError(error)
        var dataLocal = JSON.parse(localStorage.getItem("calendar"))
        setData(dataLocal)
      })
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    setLoading(true)
    getCalendar()
  }, [url])

  return { data, loading, error }
}