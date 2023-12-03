import { FC } from "react";
import { css } from "@emotion/react";
import Filter from "../ui/Filter";
import SearchCar from "../ui/SearchCar";

const Panel: FC = () => {

  return (
    <div 
      css={css`
        margin: 56px 40px 0 40px;
        display: flex;
        align-items: center;
        justify-content: space-between;
      `}
    >
        <Filter/>
        <SearchCar/>
    </div>
  );
};

export default Panel;
