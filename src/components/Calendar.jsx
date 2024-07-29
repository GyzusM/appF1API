import { useFetchCalendar} from '../useFetchCalendar'
function Calendar() {

  const { data, loading } = useFetchCalendar(`https://ergast.com/api/f1/current.json`)

  function formatearFechas(inicio,fin) {
    let arrayInicio = inicio.split('-')
    let arrayFin = fin.split('-')

    let diaInicio = arrayInicio[2]
    let mesInicio = arrayInicio[1]
    
    let diaFin = arrayFin[2]
    let mesFin = arrayFin[1]
    
    const meses = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic' ]
    return  diaInicio + ' ' + meses[mesInicio-1] + ' - ' + diaFin + ' ' + meses[mesFin-1]
  }

  function fechaInicio(fecha, tipo){
    let arrayFecha = fecha.split('-')

    let dia = arrayFecha[2]
    let mes = arrayFecha[1]

    const meses = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic' ]
  
    return tipo ? meses [mes-1] : dia
  }

  return (
    <>
    {loading && <span>Loading...</span>}
    <div className='contentCalendar'>
      {data?.map((gp) => (
        <div key={gp.Circuit.circuitId} className='dateCell'>
          <div className='round'>
            <hr />
            <h4 className='text-center font-[1000]'>R{gp.round}</h4>
            <hr />
          </div>
          <div className='cellContent'>
            <h2 className='font-[1000] text-4xl'>{ fechaInicio(gp.FirstPractice.date, true) }</h2>
            <h3 className='font-[1000] text-4xl'>{ fechaInicio(gp.FirstPractice.date, false) }</h3>

            <img src={`../images/flags/${gp.Circuit.Location.country}.png`} alt="" />
            <p className='text-[20px] font-[1000] text-red-f1 mt-[15px]'>{gp.Circuit.Location.country}</p>
            <p className='text-[20px] city'>{gp.Circuit.Location.locality}</p>

            <p className='text-[20px] font-[1000]'>{ formatearFechas(gp.FirstPractice.date, gp.date) }</p>
          </div>
        </div>
      ))}
    </div>
    </>
  )

}

export default Calendar