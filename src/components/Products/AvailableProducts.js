import Card from '../UI/Card';
import ProductItem from './ProductItem/ProductItem';
import classes from './AvailableProducts.module.css';
import dummyImage from '../../assets/zviyo.jpg';

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
    image: dummyImage,
    price: 17.9,
  },
  {
    id: 3,
    name: 'Madora',
    englishName: 'Mopane Worms',
    description:
      'Madora, also known as mopane worms, are a traditional delicacy in Zimbabwe. These are large caterpillar larvae that feed on mopane trees. They are a good source of protein and are often dried, seasoned, and enjoyed as a crunchy snack or added to stews for extra flavor.',
    image: dummyImage,
    price: 10,
  },
  {
    id: 4,
    name: 'Nyimo',
    englishName: 'Roundnuts',
    description:
      'Nyimo, also known as roundnuts, are a popular snack in Zimbabwe. These nuts are commonly roasted and enjoyed for their rich flavor. They are a source of essential nutrients and are often sold by street vendors.',
    image: dummyImage,
    price: 9.08,
  },
  {
    id: 5,
    name: 'Mupunga',
    englishName: 'Unrefined Rice',
    description:
      "Mupunga, or unrefined rice, is a staple food in Zimbabwe. It is rice that retains its outer bran layer, providing additional nutrients and a nutty flavor. It's commonly used to make porridge or rice-based dishes.",
    image: dummyImage,
    price: 14.18,
  },
  {
    id: 6,
    name: 'Gorosi',
    englishName: 'Unrefined Wheat',
    description:
      'Gorosi is a cereal grain that is a worldwide staple food. Described as unrefined wheat used for making traditional bread (hupfu hunobikwa chingwa).',
    image: dummyImage,
    price: 23.45,
  },
  {
    id: 7,
    name: 'Nzungu',
    englishName: 'Groundnuts',
    description:
      'Nzungu, also known as groundnuts or peanuts, are commonly enjoyed as a snack in Zimbabwe. They are also used to make peanut butter, which is a versatile ingredient used in various dishes and sauces.',
    image: dummyImage,
    price: 12.5,
  },
];

const AvailableProducts = () => {
  const ProductsList = PRODUCTS.map((prod) => (
    <ProductItem
      key={prod.id}
      id={prod.id}
      name={prod.name}
      englishName={prod.englishName}
      description={prod.description}
      image={prod.image}
      price={prod.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <ul>{ProductsList}</ul>
    </section>
  );
};

export default AvailableProducts;
