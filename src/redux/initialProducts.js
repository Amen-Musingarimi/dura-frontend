import dummyImage from '../assets/zviyo.jpg';
import nyimo from '../assets/nyimo.jpeg';
import madora from '../assets/madora.webp';
import mhunga from '../assets/mhunga.jpg';
import mupunga from '../assets/mupunga.jpg';
import wheat from '../assets/wheat.jpg';
import nzungu from '../assets/nzungu.jpg';
import nyemba from '../assets/nyemba.jpg';
import munyemba from '../assets/munyemba.jpg';

const PRODUCTS = [
  {
    id: 1,
    name: 'Zviyo',
    englishName: 'Finger Millet',
    description:
      'Zviyo (Finger Millet Meal) is a complete multi-nutritional food supplement which is rich in fiber, proteins, calcium and other minerals. Due to its amazing health benefits, pediatricians recommend Zviyo (Finger Millet Meal) food for infants as well. As, organic Zviyo (Finger Millet Meal) is a fibrous carbohydrate and gives us loads of dietary fibres, it helps in weight loss, bone development, lowers blood cholesterol levels and helps in preventing anemia.',
    image: dummyImage,
    price: 16,
  },
  {
    id: 2,
    name: 'Mhunga',
    englishName: 'Pearl Millet Meal',
    description:
      'Millets are a great source of starch, making it a high-energy food. It is also an excellent source of protein and fiber. It is said that the amino acids in the pearl millet are more easily digestible than the ones found in wheat. Due to essential nutrients such as methionine (an amino acid), B complex vitamins (niacin, thiamin, and riboflavin), folic acid, lecithin, potassium, magnesium, manganese and zinc, millets are very effective in several roles. Niacin reduces cholesterol while magnesium is essential for maintaining good heart health, as it lowers blood pressure and reduces the risk of heart attacks.',
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
      'Nyimo, also known as roundnuts, are a popular snack in Zimbabwe. These nuts are commonly roasted and enjoyed for their rich flavor. They are a source of essential nutrients.As you may have known already, nyimo (like most legumes) are a good source of protein as well as fibre, complex carbohydrates, healthy fats, folate, potassium, iron, calcium, phosphorus and magnesium.',
    image: nyimo,
    price: 9.08,
  },
  {
    id: 5,
    name: 'Mupunga',
    englishName: 'Unrefined Brown Rice',
    description:
      'Mupunga, or unrefined brown rice, is a staple food in Zimbabwe. It is rice that retains its outer bran layer, providing additional nutrients and a nutty flavor. Brown rice is better for you than white — most of us know that!',
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
  {
    id: 9,
    name: 'Munyemba',
    englishName: 'Cow Peas leaves',
    description:
      'Dried Cow Peas Leaves. Regular use of Cow Pea leaves in our food prevents the deficiency of vitamins A, B1, B2 and C, Iron and Potassium. It protects against defective vision and respiratory infections',
    image: munyemba,
    price: 5.61,
  },
];

export default PRODUCTS;
