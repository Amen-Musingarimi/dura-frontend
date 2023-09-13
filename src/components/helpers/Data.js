import { PiTruckLight, PiBowlFoodFill } from 'react-icons/pi';
import { ImPriceTags } from 'react-icons/im';
import { RiLoginBoxLine } from 'react-icons/ri';
import image1 from '../../assets/packackes.jpg';
import image2 from '../../assets/online-shop.png';
import image3 from '../../assets/homeDelive.jpg';
import { MdFastfood } from 'react-icons/md';
import { PiTruckBold } from 'react-icons/pi';
import { FaRegClock } from 'react-icons/fa';

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

export const ReasonsDataArr = [
  {
    id: 1,
    icon: <MdFastfood />,
    name: 'Authentic Flavors',
    description:
      'We offer a curated selection of authentic Zimbabwean traditional foods, ensuring that you experience the true taste of your heritage.',
  },
  {
    id: 2,
    icon: <PiTruckBold />,
    name: 'Delivery to Your Doorstep',
    description:
      'We provide doorstep delivery within Harare, bringing the essence of Zimbabwean culture right to your home.',
  },
  {
    id: 3,
    icon: <FaRegClock />,
    name: 'Reliable Service',
    description:
      'Count on us for dependable and punctual service, ensuring your traditional foods are delivered when you need them.',
  },
];
