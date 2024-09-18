import { useEffect, useState } from 'react';

function PilotoImagenComponent({ pilotoNombre }) {
  const [pilotos, setPilotos] = useState([])
  const [imagenUrl, setImagenUrl] = useState('')

  const getImages = async() => {
    await fetch('https://api.openf1.org/v1/drivers?session_key=9465')
    .then(response => response.json())
    .then(data => {
      setPilotos(data);
      const pilotoEncontrado = data.find(piloto => piloto.name_acronym === pilotoNombre);
      if (pilotoEncontrado) {
        setImagenUrl(pilotoEncontrado.headshot_url);
      }
    })
    .catch(error => console.error('Error fetching pilotos:', error));
  }

  useEffect(() => {
    getImages()
  }, [pilotoNombre]);

  return (
    <div className='contentImg'>
      {imagenUrl && <img src={imagenUrl} alt={pilotoNombre} />}
    </div>
  )
}

export default PilotoImagenComponent;