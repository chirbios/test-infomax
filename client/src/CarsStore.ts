import axios from "axios";

import { makeAutoObservable } from "mobx"
import { Car, Query } from "./graphql/generated";
import { gql, useQuery } from 'urql';



class CarsStore {
  allCars:Query["cars"] = [];
  car:Query["car"];

  constructor() {
    makeAutoObservable(this)
  }

}

export const carsStore =  new CarsStore();