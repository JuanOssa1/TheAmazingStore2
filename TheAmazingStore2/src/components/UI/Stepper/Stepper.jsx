import React from 'react';
import { useReducer } from 'react';
import Button from '../Button/Button';
import FormTitle from '../FormTitle/FormTitle';
import styles from './Stepper.module.scss';
import { AiFillStar } from 'react-icons/ai';

const defaultStepState = {
  score: 0,
  stars: [],
};
const stepReducer = (state, action) => {
  let currentScore = state.score;

  if (action.type === 'ADD') {
    if (currentScore < 5) {
      currentScore++;
    }
    return {
      stars: selectStars(currentScore),
      score: currentScore,
    };
  }
  if (action.type === 'DECREASE') {
    if (currentScore > 0) {
      currentScore--;
    }
    return {
      stars: selectStars(currentScore),
      score: currentScore,
    };
  }
};
const selectStars = (score) => {
  if (score <= 2) {
    return renderStars(score, 'red');
  }
  if (score === 3) {
    return renderStars(score, 'yellow');
  }
  if (score >= 4) {
    return renderStars(score, 'green');
  }
};
const renderStars = (quantity, color) => {
  const stars = [];
  for (let i = 0; i < quantity; i++) {
    stars.push(<AiFillStar key={i} style={{ color: color }} />);
  }
  return stars;
};

const Stepper = ({ onChange }) => {
  const [stepperState, dispatchStepper] = useReducer(
    stepReducer,
    defaultStepState
  );

  const addStarsHandler = (event) => {
    event.preventDefault();
    onChange(stepperState.score + 1);
    dispatchStepper({
      type: 'ADD',
    });
  };
  const removeStarsHandler = (event) => {
    event.preventDefault();
    onChange(stepperState.score - 1);
    dispatchStepper({
      type: 'DECREASE',
    });
  };

  return (
    <>
      <FormTitle text={'Asignar numero de estrellas'}></FormTitle>
      <div className={`${styles['stepper']}`}>
        <Button
          onClick={removeStarsHandler}
          className={`${styles['stepper__button']}`}
          text={'-'}
          variant1
        />
        <FormTitle
          className={`${styles['stepper__counter']}`}
          text={stepperState.score}
        />
        <Button
          onClick={addStarsHandler}
          className={`${styles['stepper__button']}`}
          text={'+'}
          variant1
        />
      </div>
      <div className={`${styles['stars-showcase']}`}>{stepperState.stars}</div>
    </>
  );
};

export default Stepper;
