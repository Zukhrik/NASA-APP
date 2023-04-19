import styled from '../atom/navigation.module.scss'

const navigationData = [
  {name: 'home'},{name: 'pick-of-day'}
]
export const Navigation = () => {


  return (
    <div className={styled.NavigationWrapper}>
      {navigationData.map(({name}) => (
        <div
          key={name}
          className={styled.Nav}
        >
          {name}
        </div>
      ))}
    </div>
  );
};