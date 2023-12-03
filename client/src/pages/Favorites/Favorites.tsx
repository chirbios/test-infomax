import { FC } from "react";
import carsJSON from "../../fake_cars.json";
import { Query } from "../../graphql/generated";
import { css } from "@emotion/react";

const Favorites: FC = () => {
  const cars: Query["cars"] = carsJSON;
  return (
    <div
      css={css`
        margin: 46px 40px 0 40px;
      `}
    >
      <div
        css={css`
          font-size: 48px;
          font-style: normal;
          font-weight: 700;
          line-height: 58px;
        `}
      >Избранные товары — {cars.length} {cars.length == 1 ? 'позиция' : 
        cars.length >= 2 && cars.length <= 4 ? 'позиции' : 
      "позиций" } </div>
      <hr 
        css={css`
          stroke-width: 1px;
          stroke: #D9D9D9;
          margin: 26px 0 64px 0;
        `}
      />
      <div
        css={css`
          display: flex;
          flex-direction: column;
          gap: 36px;
        `}
      > 
        {cars.map((car) => (
          <div 
            key={car.id}
            css={css`
              display: flex;
              gap: 20px;
            `}
          >
            <div>
              <img
                src={car.img_src}
                alt={`${car.brand} ${car.model}`}
                css={css`
                  width: 443px;
                  height: 100%;
                  border: 1px solid #D9D9D9;
                  border-radius: 12px;
                  object-fit: cover;
                  :before {  
                    width: 446px;
                    height: 100px;
                  }
                `}
              />
            </div>
            <div
              css={css`
                max-width: 810px;
              `}
            >
              <div
                css={css`
                  font-size: 36px;
                  font-weight: 700;
                  line-height: 42px; 
                `}
              >{car.brand + ' ' + car.model}</div>
              <div
                css={css`
                margin-top: 16px;
                font-size: 14px;
                font-weight: 400;
                line-height: 16px;
                color: #595959;
                `}
              >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut officiis nostrum quo aperiam accusantium eum nesciunt modi, omnis nobis, eius quas veritatis minima natus exercitationem dolores, maxime vero ipsam magnam!</div>
              <div
                css={css`
                  margin-top: 16px;
                  font-size: 14px;
                  font-weight: 400;
                  line-height: 16px;
                  color: #595959;
                `}
              >Год: {car.model_year}</div>
              <div
                css={css`
                  margin-top: 16px;
                  font-size: 14px;
                  font-weight: 400;
                  line-height: 16px;
                  color: #595959;
                `}
              >Цвет: {car.color}</div>
              <div
                css={css`
                  margin-top: 33px;
                  font-size: 24px;
                  font-weight: 500;
                  line-height: 28px;
                `}
              >от {car.price}</div>
              <div
                css={css`
                  display: flex;
                  gap: 20px;
                  align-items: flex-end;
                `}
              >
                <button
                  css={css`
                    margin-top: 20px;
                    display: flex;
                    padding: 19px 34px;
                    gap: 10px;
                    border-radius: 5px;
                    background: #4F2CD9;
                    font-size: 16px;
                    font-style: normal;
                    font-weight: 500;
                    line-height: 18px; 
                    color: #FFF;
                    border: none;
                  `}
                >Выбрать комплектацию</button>
                <div
                  css={css`
                    width: 56px;
                    height: 56px;
                    padding: 19px;
                    border-radius: 5px;
                    border: 2px solid #D73737;
                  `}
                >
                  <svg 
                    css={css`
                      transform: translate(-2px, -3px);
                    `}
                    xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20" fill="none">
                    <path d="M2 17.6068C2 18.7098 2.897 19.6068 4 19.6068H14C15.103 19.6068 16 18.7098 16 17.6068V5.60675H2V17.6068ZM4 7.60675H14L14.002 17.6068H4V7.60675Z" fill="#D73737"/>
                    <path d="M12 2.60675V0.60675H6V2.60675H0V4.60675H18V2.60675H12Z" fill="#D73737"/>
                    <path d="M8 9.60675H6V15.6068H8V9.60675Z" fill="#D73737"/>
                    <path d="M12 9.60675H10V15.6068H12V9.60675Z" fill="#D73737"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        ))} 
      </div>

    </div>
  );
};

export default Favorites;
