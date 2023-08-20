import * as C from './styles'
import { CountryItemTS } from '../../types/CountryItem'
import { Link } from 'react-router-dom'
import { useForm } from '../../contexts/ThemeContext'

export const CountryItem = ({name, flag}: CountryItemTS) => {
    const {state} = useForm()

    return (
        <C.CountryItem theme={state.theme}>
            <Link to={`/country/${name}`}>
                <div className='img--area'>
                    <img src={flag} alt={`Bandeira do País: ${name}`} />
                </div>
                <div className='data--area'>
                    <p className='country--name'>{name}</p>
                </div>
            </Link>
        </C.CountryItem>
    )
}