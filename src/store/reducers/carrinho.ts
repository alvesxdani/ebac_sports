import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type CarrinhoState = {
  itens: Produto[]
}

const initialState: CarrinhoState = {
  itens: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<Produto>) => {
      const adicionado = action.payload
      if (state.itens.find((produto) => produto.id === adicionado.id)) {
        alert('Jogo já existe no carrinho!')
      } else {
        state.itens = [...state.itens, adicionado]
      }
    }
  }
})

export const { adicionar } = carrinhoSlice.actions
export default carrinhoSlice.reducer
