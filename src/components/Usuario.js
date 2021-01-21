export const Usuario = ({setUsuario}) => {

    function handleUser (evt) {
        evt.preventDefault()
        const usuario = evt.target.elements["usuario"].value
        setUsuario(usuario)
    }

    return (
        <form method="post" onSubmit={ handleUser }>
            <div className="form-row">
                <div className="col">
                    <input type="text" className="form-control" name="usuario" id="usuario" placeholder="Usuario" />
                </div>
                <div className="col">
                    <input type="submit" className="btn btn-primary" value="Aceptar" />
                </div>
            </div>
        </form>
    )
}