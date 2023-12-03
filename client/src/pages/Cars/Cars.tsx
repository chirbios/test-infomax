import { useState } from 'react';
import { FC } from "react";
import carsJSON from "../../fake_cars.json";
import { Query } from "../../graphql/generated";
import { css } from "@emotion/react";
import { backgroundGray, backgroundViolet, fontSize14, fontSize16, fontSize24, fontWidth400, fontWidth500, whiteColor } from "../../styles/global.styles";
import Panel from "../../layout/Panel";
import NoActiveLike from '../../ui/svg/DisabledLike';
import ActiveLike from '../../ui/svg/ActiveLike';
import DisabledLike from '../../ui/svg/NoActiveLike';
import { gql, useQuery } from 'urql';
import { observer } from 'mobx-react-lite';
import { carsStore } from '../../CarsStore';

const CarsQuery = gql`
  query Cars {
    cars {
      id
      brand
      model
      color
      model_year
      img_src
      price
      description
      availability
    }
  }
`;

const Cars = observer(() => {
  const BASE_URL = 'http://localhost:4000'
  const [like, setLike] = useState(false);
  const [result, reexecuteQuery] = useQuery({
    query: CarsQuery,
  });

  const { data, fetching, error } = result;

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;
  return (
    <>
      <Panel/>
      <div 
        css={css`
          margin: 42px 40px 0px 40px;
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 445px)) ;
          column-gap: 14px;
          row-gap: 73px;
          justify-content: space-around;
        `}
      >
        {data.cars.map((car:any) => (
          <div 
            key={car.id}
          >
            <div 
              css={css`
                display: flex;
                flex-direction: column;
                width: 445px;
                border-radius: 15px 15px 0 0;
                img {
                  border: 1px solid #d9d9d9;
                  border-radius: 15px 15px 0 0;
                  width: 100%;
                  height: 310px;
                  object-fit: cover;
                }
              `}
            >
              <img
                src={BASE_URL + car?.img_src}
                alt={`${car.brand} ${car.model}`}
                css={css`
                  ${!car.availability && 'opacity: .5;'}
                `}
              />
              <div 
                css={css`
                  ${fontSize24}
                  ${fontWidth500}
                  white-space: nowrap;
                  overflow: hidden;
                  width: 445px;
                  text-overflow: ellipsis;
                  margin-top: 26px;
                  line-height: 28px;
                `}
              >{car.brand + ' ' + car.model}</div>
              <div 
                css={css`
                  ${fontSize14}
                  ${fontWidth400}
                  color: #595959;
                  margin-top: 12px;
                  display: flex;
                  line-height: 16px;
                  gap: 14px;
                `}
              >
                <div>Год: {car.model_year}</div>
                <div>Цвет: {car.color}</div>
              </div>
              <span 
                css={css`
                  ${fontSize16}
                  ${fontWidth500}
                  margin-top: 12px;
                  line-height: 18px;
                `}
              >от {car.price}</span>
            </div>
            <div
              css={css`
                display: flex;
                gap: 25px;
              `}
            >
              <button
                disabled={!car.availability}
                css={css`
                  ${!car.availability ? backgroundGray : backgroundViolet}
                  ${fontSize16}
                  ${fontWidth500}
                  ${!car.availability ? 'color: #000;' : whiteColor}
                  margin-top: 20px;
                  display: flex;
                  padding: 19px 99.3px;
                  gap: 10px;
                  border-radius: 5px;
                  line-height: 18px; 
                  border: none;
                `}
              >Купить</button>
              <div
                css={css`
                  margin-top: 35px;
                `}
                onClick={() => setLike(like => !like)}
              >
              {car.availability==false ? <DisabledLike/> :
              like==true ? <ActiveLike/> : <NoActiveLike/>}
              </div>
              <div
                css={css`
                  ${fontSize24}
                  ${fontWidth500}
                  ${whiteColor}
                  position: absolute;
                  line-height: 28px;
                  border-radius: 15px;
                  background: #000;
                  padding: 15px 33px 16px 34px;
                  transform: translate(101px, -311px);
                  ${car.availability && 'display: none;'}
                `}
              >Нет в наличии</div>
            </div>
          </div>
        ))}
      </div>
    </>
    
  );
});

export default Cars;
