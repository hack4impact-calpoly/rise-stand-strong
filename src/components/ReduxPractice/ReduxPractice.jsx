import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import allActions from '../../actions';

const Counter = () => {
  const counter = useSelector((state) => state.counter);

  const dispatch = useDispatch();

  return (
    <div className="ComponentOne">
      <h5>
        Counter:
        { counter }
      </h5>

      <button
        className="btn btn-outline-primary"
        type="button"
        onClick={() => dispatch(allActions.counterActions.increment())}
      >
        Increase Counter
      </button>
      <button
        className="btn btn-outline-secondary"
        type="button"
        onClick={() => dispatch(allActions.counterActions.decrement())}
      >
        Decrease Counter
      </button>
    </div>
  );
};

export default Counter;
