import { useFetchErgast } from '../useFetchErgastF1'

function PilotoImagenComponent(search) {

  const { data, loading } = useFetchErgast(`https://ergast.com/api/f1/2024/constructorstandings.json`, search)

  return (
    <>
    {loading && <span>Loading...</span>}
    {data?.map((team) => (
      <div className='rowDriver' key={team.Constructor.constructorId}>
        <div className='contentDriver driverLeft'>
          <div className='driversConstructor'>
            <img src={`/images/${team.Constructor.name}/1.png`} />
            <img src={`/images/${team.Constructor.name}/2.png`} />
          </div>
          
          <div className='bannerDriver min-w-[340px] m-h-[100px]'>
            <span className='positionDriver'>{team.position}</span>
              <div className='contentInfoDriver'>
                <span className='lastnameDriver'>{team.Constructor.name}</span>
                <span className='pointsDriver'>{team.points} Points</span>
              </div>
          </div>
        </div>
      </div>
    ))}
    </>
  )

}

export default PilotoImagenComponent