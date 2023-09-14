import { PiTruckLight, PiBowlFoodFill } from 'react-icons/pi';
import { ImPriceTags } from 'react-icons/im';
import { RiLoginBoxLine } from 'react-icons/ri';
import image1 from '../../assets/packackes.jpg';
import image2 from '../../assets/online-shop.png';
import image3 from '../../assets/homeDelive.jpg';
import { MdFastfood } from 'react-icons/md';
import { PiTruckBold } from 'react-icons/pi';
import { FaRegClock } from 'react-icons/fa';
import user1 from '../../assets/user1.jpg';
import user2 from '../../assets/user2.jpg';
import user3 from '../../assets/user3.jpg';
import user4 from '../../assets/user4.jpg';
import user5 from '../../assets/user5.jpg';
import user6 from '../../assets/user6.jpg';

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

export const TestimonialsDataArr = [
  {
    id: 1,
    name: 'Sarah Johnson',
    image: user1,
    location: 'Harare',
    testimonial:
      "ZimFlavors is a game-changer for anyone who craves the authentic taste of Zimbabwe. The quality and authenticity of their traditional foods are unmatched. I've never been more satisfied!",
  },
  {
    id: 2,
    name: 'Daniel Munoz',
    image: user2,
    location: 'Bulawayo',
    testimonial:
      "I'm impressed with the convenience ZimFlavors offers. Ordering traditional foods has never been easier. They have made it accessible for people like me outside of Harare.",
  },
  {
    id: 3,
    name: 'Grace Ngugi',
    image: user3,
    location: 'Mutare',
    testimonial:
      "I'm a repeat customer because of ZimFlavors' reliability and commitment to quality. Their traditional foods have become a staple in my household.",
  },
  {
    id: 4,
    name: 'Mike Omondi',
    image: user4,
    location: 'Gweru',
    testimonial:
      'ZimFlavors provides an authentic taste of Zimbabwe. Their service is reliable, and the quality of the traditional foods is outstanding. Highly recommended!',
  },
  {
    id: 5,
    name: 'Nomsa Sibanda',
    image: user5,
    location: 'Victoria Falls',
    testimonial:
      'I appreciate the convenience of ZimFlavors. The ordering process is straightforward, and the delivery is always on time. Great job!',
  },
  {
    id: 6,
    name: 'Tinashe Chikore',
    image: user6,
    location: 'Chinhoyi',
    testimonial:
      'ZimFlavors has reconnected me with the flavors of my childhood. The authenticity of their foods is remarkable. A wonderful service for Zimbabwean cuisine enthusiasts!',
  },
];
