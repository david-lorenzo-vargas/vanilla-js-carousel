const data = [
  {
    productUrl: 'https://www.newlook.com/uk/womens/clothing/coats-jackets/dark-grey-faux-fur-longline-coat/p/619712403',
    imageSrc: 'https://media2.newlookassets.com/i/newlook/619712403.jpg',
    productTitle: 'Dark Grey Faux Fur Longline Coat',
    price: '45.99',
  },
  {
    productUrl: 'https://www.newlook.com/uk/womens/clothing/tops/black-ribbed-long-sleeve-roll-neck-top/p/635105501',
    imageSrc: 'https://media2.newlookassets.com/i/newlook/635105501.jpg',
    productTitle: 'Black Ribbed Long Sleeve Roll Neck Top',
    price: '8.99',
  },
  {
    productUrl: 'https://www.newlook.com/uk/womens/clothing/leggings/black-coated-leather-look-leggings/p/634018201',
    imageSrc: 'https://media3.newlookassets.com/i/newlook/634018201.jpg',
    productTitle: 'Black Coated Leather-Look Leggings',
    price: '19.99',
  },
  {
    productUrl: 'https://www.newlook.com/uk/womens/clothing/coats-jackets/black-faux-fur-longline-coat/p/619712401',
    imageSrc: 'https://media3.newlookassets.com/i/newlook/619712401.jpg',
    productTitle: 'Black Faux Fur Longline Coat',
    price: '45.99',
  },
  {
    productUrl: 'https://www.newlook.com/uk/womens/clothing/jeans/black-high-waist-super-skinny-hallie-jeans/p/635654901',
    imageSrc: 'https://media2.newlookassets.com/i/newlook/635654901.jpg',
    productTitle: 'Black High Waist Super Skinny Hallie Jeans',
    price: '25.99',
  },
  {
    productUrl: 'https://www.newlook.com/uk/womens/clothing/coats-jackets/formal-coats/camel-revere-collar-coat/p/619653214',
    imageSrc: 'https://media2.newlookassets.com/i/newlook/619653214.jpg',
    productTitle: 'Camel Revere Collar Coat',
    price: '35.99',
  },
  {
    productUrl: 'https://www.newlook.com/uk/womens/clothing/jeans/black-%27lift-%26-shape%27-jeggings/p/623140201',
    imageSrc: 'https://media3.newlookassets.com/i/newlook/623140201.jpg',
    productTitle: 'Black Lift & Shape Jeggings',
    price: '17.99',
  },
  {
    productUrl: 'https://www.newlook.com/uk/womens/clothing/coats-jackets/black-leather-look-aviator-jacket/p/632207701',
    imageSrc: 'https://media2.newlookassets.com/i/newlook/632207701.jpg',
    productTitle: 'Black Leather-Look Aviator Jacket',
    price: '55.99',
  },
  {
    productUrl: 'https://www.newlook.com/uk/womens/clothing/coats-jackets/formal-coats/light-grey-fluffy-houndstooth-double-breasted-coat-/p/631197208',
    imageSrc: 'https://media3.newlookassets.com/i/newlook/631197208.jpg',
    productTitle: 'Light Grey Fluffy Houndstooth Double Breasted Coat',
    price: '49.99',
  },
  {
    productUrl: 'https://www.newlook.com/uk/womens/clothing/leggings/black-high-waist-leggings/p/616323901',
    imageSrc: 'https://media3.newlookassets.com/i/newlook/616323901.jpg',
    productTitle: 'Black High Waist Leggings',
    price: '8.99',
  },
  {
    productUrl: 'https://www.newlook.com/uk/womens/clothing/jeans/black-coated-super-skinny-hallie-jeans/p/631910801',
    imageSrc: 'https://media2.newlookassets.com/i/newlook/631910801.jpg',
    productTitle: 'Black Coated Super Skinny Hallie Jeans',
    price: '27.99',
  },
  {
    productUrl: 'https://www.newlook.com/uk/womens/footwear/boots/black-leather-look-chunky-lace-up-boots/p/629029201',
    imageSrc: 'https://media3.newlookassets.com/i/newlook/629029201.jpg',
    productTitle: 'Black Leather-Look Chunky Lace Up Boots',
    price: '27.99',
  },
  {
    productUrl: 'https://www.newlook.com/uk/womens/clothing/jeans/black-%27lift-%26-shape%27-high-waist-skinny-jeans/p/631911801',
    imageSrc: 'https://media3.newlookassets.com/i/newlook/631911801.jpg',
    productTitle: 'Black Lift & Shape High Waist Skinny Jeans',
    price: '25.99',
  },
  {
    productUrl: 'https://www.newlook.com/uk/womens/footwear/boots/wide-fit-black-teddy-lined-chunky-lace-up-boots/p/637716701',
    imageSrc: 'https://media3.newlookassets.com/i/newlook/637716701.jpg',
    productTitle: 'Wide Fit Black Teddy Lined Chunky Lace Up Boots',
    price: '27.99',
  },
  {
    productUrl: 'https://www.newlook.com/uk/womens/clothing/coats-jackets/dark-green-faux-fur-longline-coat/p/619712438',
    imageSrc: 'https://media3.newlookassets.com/i/newlook/619712438.jpg',
    productTitle: 'Dark Green Faux Fur Longline Coat',
    price: '45.99',
  },
  {
    productUrl: 'https://www.newlook.com/uk/womens/clothing/nightwear/pale-grey-fluffy-hooded-dressing-gown/p/629877202',
    imageSrc: 'https://media3.newlookassets.com/i/newlook/629877202.jpg',
    productTitle: 'Pale Grey Fluffy Hooded Dressing Gown',
    price: '25.99',
  },
  {
    productUrl: 'https://www.newlook.com/uk/womens/clothing/coats-jackets/formal-coats/pale-grey-revere-collar-coat/p/619653202',
    imageSrc: 'https://media2.newlookassets.com/i/newlook/619653202.jpg',
    productTitle: 'Pale Grey Revere Collar Coat',
    price: '35.99',
  },
  {
    productUrl: 'https://www.newlook.com/uk/womens/clothing/jeans/black-super-soft-super-skinny-india-jeans/p/623185401',
    imageSrc: 'https://media2.newlookassets.com/i/newlook/623185401.jpg',
    productTitle: 'Black Super Soft Super Skinny India Jeans',
    price: '22.99',
  },
  {
    productUrl: 'https://www.newlook.com/uk/womens/clothing/coats-jackets/black-leather-look-biker-jacket-/p/620187701',
    imageSrc: 'https://media2.newlookassets.com/i/newlook/620187701.jpg',
    productTitle: 'Black Leather-Look Biker Jacket',
    price: '32.99',
  },
  {
    productUrl: 'https://www.newlook.com/uk/womens/footwear/boots/black-leather-flat-chelsea-boots/p/633518801',
    imageSrc: 'https://media2.newlookassets.com/i/newlook/633518801.jpg',
    productTitle: 'Black Leather Flat Chelsea Boots',
    price: '35.99',
  },
];

export default data;
