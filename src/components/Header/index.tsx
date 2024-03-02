import { useSelector } from 'react-redux'
import cesta from '../../assets/cesta.png'
import { paraReal } from '../Produto'
import { RootReducer } from '../../store'
import * as S from './styles'

const Header = () => {
  const itensSelecionados = useSelector(
    (state: RootReducer) => state.carrinho.itens
  )
  const valorTotalProdutos = itensSelecionados.reduce((acc, item) => {
    acc += item.preco
    return acc
  }, 0)
  const itensFavoritados = useSelector(
    (state: RootReducer) => state.favoritos.itens
  )
  const qtdFavoritados = itensFavoritados.length

  return (
    <S.Header>
      <h1>EBAC Sports</h1>
      <div>
        <span>{qtdFavoritados} favoritos</span>
        <img src={cesta} />
        <span>
          {itensSelecionados.length} itens, valor total:{' '}
          {paraReal(valorTotalProdutos)}
        </span>
      </div>
    </S.Header>
  )
}

export default Header
