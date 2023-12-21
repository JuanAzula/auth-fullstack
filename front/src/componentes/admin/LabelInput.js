export default function LabelInput({ nombre, id, tipo, requerido, soloLectura, textoMinimo, numeroMinimo, valor, onEnviar, modificarValor }) {
    let control;

    switch(tipo) {
        case 'textarea':
            control = <textarea required={requerido} minLength={textoMinimo} min={numeroMinimo} className="form-control" id={id} value={valor} onChange={e => modificarValor(e.target.value)} />;
            break;
        case 'button':
            control = <button onClick={onEnviar} type="button" className="btn btn-primary">{nombre}</button>;
            break;
        default:
            control = <input type={tipo} required={requerido} readOnly={soloLectura} minLength={textoMinimo} min={numeroMinimo} className="form-control" id={id} value={valor} onChange={e => modificarValor(e.target.value)} />;
            
    }
    return (
        <div className="row mb-3">
            {tipo !== 'button' && <label htmlFor={id} className="col-sm-2 col-form-label">{nombre}</label>}
            <div className={'col-sm ' + (tipo === 'button' ? 'offset-sm-2' : '')}>
                {control}
            </div>
        </div>
    );
}