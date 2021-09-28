import PropTypes from 'prop-types';
import s from './Statistic.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ul className={s.statistic__list}>
      <li className={s.statistic__item}>good:{good}</li>
      <li className={s.statistic__item}>neutral:{neutral}</li>
      <li className={s.statistic__item}>bad:{bad}</li>
      <li className={s.statistic__item}>total:{total}</li>
      <li className={s.statistic__item}>
        Positive feedback:{positivePercentage}%
      </li>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
