import hexToRgba from "hex-to-rgba"

import Colaborador from '../Colaborador'
import './Time.css'

const Time = ({ time, colaboradores, aoDeletar, mudarCor, aoFavoritar }) => {

    if (colaboradores.length === 0) {
        return null
    }

    return (
        <section
            className='time'
            style={{
                backgroundImage: 'url(/imagens/fundo.png)',
                backgroundColor: hexToRgba(time.cor, '0.6')
            }}
        >
            <input
                type='color'
                className='input-cor'
                value={time.corSecundaria}
                //muda cor de fundo
                onChange={evento => mudarCor(evento.target.value, time.id)}
            />
            <h3
                style={{
                    borderColor: time.corSecundaria
                }}>
                {time.nome}
            </h3>
            <div className='colaboradores'>
                {colaboradores.map(colaborador => (
                    <Colaborador
                        aoFavoritar={aoFavoritar}
                        corDeFundo={time.cor}
                        key={colaborador.id}
                        colaborador={colaborador}
                        aoDeletar={aoDeletar}
                    />
                ))}
            </div>
        </section>
    )
}

export default Time