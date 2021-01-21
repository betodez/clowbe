import { useEffect, useState } from 'react';
import './App.css';
import { TimeBlock } from './components/TimeBlock';
import { Usuario } from './components/Usuario';

function App() {

  const [horarios, setHorarios] = useState([])
  const [usuario, setUsuario] = useState('')
  

  useEffect(() => {
    fetch('http://localhost:3000/api/horarios')
    .then(resp => resp.json())
    .then((data) => {
      setHorarios(data)
    })
  },[])
  
  if (usuario === '') {
    return <div className="container-fluid">
      <div className="row">
        <div className="offset-md-4"> 
          <Usuario setUsuario={setUsuario} />
        </div>
      </div>
      </div>
    } else {
      return <div className="container-fluid">
        {
        horarios.map((hour) => (
          <TimeBlock key={hour.id} {...hour} usuario={usuario} />
        ))
        }
      </div>
      }
    
  
}

export default App;
