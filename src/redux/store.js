import {configureStore} from '@reduxjs/toolkit'
import reducer from './combinedReducer';

const store = configureStore({
    reducer
})

export default store;