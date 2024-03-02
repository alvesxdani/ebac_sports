import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type FavoritoState = {
  itens: Produto[]
}

const initialState: FavoritoState = {
  itens: []
}

const favoritosSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    favoritar: (state, action: PayloadAction<Produto>) => {
      const favoritado = action.payload
      if (state.itens.find((produto) => produto.id === favoritado.id)) {
        alert('O produto já está favoritado!')
      } else {
        state.itens = [...state.itens, favoritado]
      }
    }
  }
})

export const { favoritar } = favoritosSlice.actions
export default favoritosSlice.reducer
