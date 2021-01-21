import { useEffect, useState } from "react"

export const TimeBlock = ({id, hora, recursos, usuarios, usuario}) => {

    const [lista, setLista] = useState(usuarios)
    const [motos, setMotos] = useState(recursos)
    
    const seleccionar = (id, target) => {
        fetch(`http://localhost:3000/api/horarios/${id}`)
            .then(resp => resp.json())
            .then(({recursos, usuarios}) => {
                target.classList.toggle("bg-success")
                //console.log("Motos reales: " + recursos)
                //setMotos(recursos)
                let x = [...usuarios]
                if (target.classList.contains("bg-success")) {
                    x.push(usuario)
                    setMotos(recursos - 1)
                    setLista(x)
                } else {
                    const ix = x.findIndex(ele => ele === usuario)
                    x.splice(ix, 1)
                    setMotos(recursos + 1)
                    setLista(x)
                }
            })
    }

    useEffect(() => {
        
        fetch(`http://localhost:3000/api/horarios/${id}`,{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                    "id" : id,
                    "hora" : hora,
                    "recursos" : motos,
                    "usuarios" : lista
                }) 
        })
        .then(resp => resp.json())
        .then((data) => {
          console.log(data)
        })
    }, [lista])

    return (
        <div className={ recursos === 0 ? "bg-danger card" : "card" } onClick={(e) => recursos > 0 ? seleccionar(id, e.target) : undefined}>
            <div className={ usuarios.includes(usuario) ? "bg-success card-body" : "card-body" } >
                { hora }<br />
                <span>Motocicleta disponibles: { motos }</span>
            </div>
        </div>
       
    )

}