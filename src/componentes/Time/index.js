import Colaborador from '../Colaborador'
import './Time.css'

const Time = ({time, colaboradores}) => {

    const css = { backgroundColor: time.corSecundaria }

    if (colaboradores.length === 0) {
        return null
    }

    return (
        <section className='time' style={css}>
            <h3 style={{ borderColor: time.corPrimaria }}>{time.nome}</h3>
            <div className='colaboradores'>
                {colaboradores.map(colaborador => (
                    <Colaborador
                        corDeFundo={time.corPrimaria}
                        key={colaborador.nome}
                        nome={colaborador.nome}
                        cargo={colaborador.cargo}
                        imagem={colaborador.imagem}
                        // aoDeletar={}
                    />
                ))}
            </div>
        </section>
    )
}

export default Time