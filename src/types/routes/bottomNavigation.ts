import {
  BOTTOM_NAVIGATION_DASHBOARD,
  BOTTOM_NAVIGATION_MARKET_DATA,
  BOTTOM_NAVIGATION_PROFILE,
} from 'routes/const';
import {IpDetailDto} from 'types/components/ipDetail';

export type BottomNavigationRoute = {
  [BOTTOM_NAVIGATION_DASHBOARD]: undefined;
  [BOTTOM_NAVIGATION_MARKET_DATA]: undefined;
  [BOTTOM_NAVIGATION_PROFILE]: {
    imageSource: string;
    data: IpDetailDto;
  };
};
