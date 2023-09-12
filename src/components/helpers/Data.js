import { PiTruckLight, PiBowlFoodFill } from 'react-icons/pi';
import { ImPriceTags } from 'react-icons/im';
import { RiLoginBoxLine } from 'react-icons/ri';

export const HowItWorksArr = [
  {
    id: 1,
    icon: <RiLoginBoxLine />,
    instruction: 'Sign In and choose from our available products',
  },
  {
    id: 2,
    icon: <ImPriceTags />,
    instruction: 'Pay a commitment fee for us to deliver your purchase',
  },
  {
    id: 3,
    icon: <PiTruckLight />,
    instruction: 'We will deliver your purchase',
  },
  {
    id: 4,
    icon: <PiBowlFoodFill />,
    instruction: 'Enjoy your tasty traditional foods',
  },
];
