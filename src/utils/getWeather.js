
import {imagesDict} from '../constants/index';

export const weatherImage =(currentWeather) =>{
    return imagesDict[currentWeather]
  }