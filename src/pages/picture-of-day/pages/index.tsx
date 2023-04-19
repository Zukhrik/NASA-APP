import {useEffect} from "react";
import {$astronomyPicOfTheDay, pageClosed, pageOpened} from "../model/model";
import {useStore} from "effector-react";
import styled from './style.module.scss';

export const PictureOfDay = () => {
  const astronomyPicOfTheDay = useStore($astronomyPicOfTheDay);


  useEffect(() => {
    pageOpened();

    return () => pageClosed();
  }, []);


  return (
    <div className={styled.PageWrapper}>
      <img src={astronomyPicOfTheDay?.hdurl} alt={astronomyPicOfTheDay?.title}/>
      <div className={styled.About}>
        <div className='Title'>{astronomyPicOfTheDay?.title}</div>
        <div className='Text'>{astronomyPicOfTheDay?.explanation}</div>
      </div>
    </div>
  );
};