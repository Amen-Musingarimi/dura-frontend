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

export const FAQsDataArr = [
  {
    id: 1,
    question: 'How long does it take to deliver my order?',
    answer:
      'Delivery times may vary, but we aim to deliver within [X] business days. You will receive a delivery estimate during the checkout process.',
  },
  {
    id: 2,
    question: 'Why do I need to pay 30% before delivery?',
    answer:
      'We require a 30% commitment fee to ensure that your order is prioritized and prepared for delivery. This helps us manage our resources efficiently and provide you with the best service possible.',
  },
  {
    id: 3,
    question: 'What areas do you deliver to?',
    answer:
      'Currently, we offer delivery services within Harare. We are working to expand our delivery areas to serve more regions in the future.',
  },
  {
    id: 4,
    question: 'Can I track my order?',
    answer:
      'Yes, we provide order tracking services. You will receive a tracking number once your order is dispatched, allowing you to monitor its progress until it reaches your doorstep.',
  },
  {
    id: 5,
    question: 'Do you offer international shipping?',
    answer:
      'Currently, we only offer delivery within Zimbabwe. We do not provide international shipping services at this time.',
  },
  {
    id: 6,
    question: 'What if I receive damaged or incorrect items?',
    answer:
      'We take quality seriously. If you receive damaged or incorrect items, please contact our customer support team within [X] days of delivery, and we will promptly resolve the issue.',
  },
];
