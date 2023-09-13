import { PiTruckLight, PiBowlFoodFill } from 'react-icons/pi';
import { ImPriceTags } from 'react-icons/im';
import { RiLoginBoxLine } from 'react-icons/ri';
import image1 from '../../assets/packackes.jpg';
import image2 from '../../assets/online-shop.png';
import image3 from '../../assets/homeDelive.jpg';

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

export const AboutUsImagesArr = [
  {
    id: 1,
    image: image1,
  },
  {
    id: 2,
    image: image2,
  },
  {
    id: 3,
    image: image3,
  },
];
