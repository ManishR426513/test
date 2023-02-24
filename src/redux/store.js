import { createStore } from 'redux'
import { cartreducer } from './main';




const store = createStore(cartreducer );
export default store