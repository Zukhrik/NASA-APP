import {useNavigate} from "react-router-dom";
import styled from './style.module.scss';
import Moon from '../../../assets/Moon.png';

export const Home = () => {
  const navigate = useNavigate();


  return (
    <div className={styled.Wrapper}>
      <div className={styled.Moon}><img src={Moon} alt={Moon}/></div>
      <div className={styled.Hero}>LEARNING IS EASY WITH US</div>
      <div className={styled.SubHero}>We went beyond what was possible for AR and 3D</div>
      <button
        className={styled.Explore}
        onClick={() => navigate('/pic-of-day')}
      >
        EXPLORE
      </button>
    </div>
  );
};