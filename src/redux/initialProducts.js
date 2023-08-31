import dummyImage from '../assets/zviyo.jpg';
import nyimo from '../assets/nyimo.jpeg';
import madora from '../assets/madora.webp';
import mhunga from '../assets/mhunga.jpg';
import mupunga from '../assets/mupunga.jpg';
import wheat from '../assets/wheat.jpg';
import nzungu from '../assets/nzungu.jpg';
import nyemba from '../assets/nyemba.jpg';

const PRODUCTS = [
  {
    id: 1,
    name: 'Zviyo',
    englishName: 'Finger Millet',
    description:
      "Zviyo, also known as finger millet porridge, is a staple food in Zimbabwe. It's made from finger millet flour and water, cooked to a thick consistency. It's similar to sadza but specifically uses finger millet.",
    image: dummyImage,
    price: 16,
  },
  {
    id: 2,
    name: 'Mhunga',
    englishName: 'Sorghum',
    description:
      "Mhunga is another type of porridge made from sorghum flour. It's a common traditional dish in Zimbabwe, often served as a staple food. Sorghum is a drought-resistant grain that is ground into flour to make porridge.",
    image: mhunga,
    price: 17.9,
  },
  {
    id: 3,
    name: 'Madora',
    englishName: 'Mopane Worms',
    description:
      'Madora, also known as mopane worms, are a traditional delicacy in Zimbabwe. These are large caterpillar larvae that feed on mopane trees. They are a good source of protein and are often dried, seasoned, and enjoyed as a crunchy snack or added to stews for extra flavor.',
    image: madora,
    price: 10,
  },
  {
    id: 4,
    name: 'Nyimo',
    englishName: 'Roundnuts',
    description:
      'Nyimo, also known as roundnuts, are a popular snack in Zimbabwe. These nuts are commonly roasted and enjoyed for their rich flavor. They are a source of essential nutrients and are often sold by street vendors.',
    image: nyimo,
    price: 9.08,
  },
  {
    id: 5,
    name: 'Mupunga',
    englishName: 'Unrefined Rice',
    description:
      "Mupunga, or unrefined rice, is a staple food in Zimbabwe. It is rice that retains its outer bran layer, providing additional nutrients and a nutty flavor. It's commonly used to make porridge or rice-based dishes.",
    image: mupunga,
    price: 14.18,
  },
  {
    id: 6,
    name: 'Gorosi',
    englishName: 'Unrefined Wheat',
    description:
      'Gorosi is a cereal grain that is a worldwide staple food. Described as unrefined wheat used for making traditional bread (hupfu hunobikwa chingwa).',
    image: wheat,
    price: 23.45,
  },
  {
    id: 7,
    name: 'Nzungu',
    englishName: 'Groundnuts',
    description:
      'Nzungu, also known as groundnuts or peanuts, are commonly enjoyed as a snack in Zimbabwe. They are also used to make peanut butter, which is a versatile ingredient used in various dishes and sauces.',
    image: nzungu,
    price: 12.5,
  },
  {
    id: 8,
    name: 'Nyemba',
    englishName: 'Cowpeas',
    description:
      'Nyemba or cow-peas in English are quite popular in Zimbabwe. The leaves are eaten as a side dish and the cow-peas are usually served boiled in water and some salt.',
    image: nyemba,
    price: 8.23,
  },
];

export default PRODUCTS;
