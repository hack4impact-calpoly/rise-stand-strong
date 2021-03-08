import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions';

export default () => {
   const counter = useSelector(state => state.counter);
   const isLogged = useSelector(state => state.isLogged);
   const dispatch = useDispatch();

   return (
      <div>
         <h1> Counter {counter}</h1>
         <button onClick={() => dispatch(increment())} >+</button>
         <button onClick= {()=> dispatch(decrement())} >-</button>
      </div>
   )
}