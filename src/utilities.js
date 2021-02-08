import data from './data';

const getMinPrice = (data) => (Math.min(...data.map((item) => item.price)));
const getMaxPrice = (data) => (Math.max(...data.map((item) => item.price)));

const minPrice = Number(getMinPrice(data));
const maxPrice = Number(getMaxPrice(data));

const getSearchedProducts = (products, value) => (products.filter(product => {
  const str = product.productTitle.toLowerCase();
  return str.includes(value);
}));

const getProductsByType = (products, selectedType) => {
  return products.filter(product => {
    const type = getItemType(product);
    return (type === selectedType);
  })
};

const getProductsByPrice = (products, priceRange) => {
  const { min, max } = priceRange;

  if (!min && max >= minPrice) {
    return (
      products.filter(product => (product.price >= 0 && product.price <= max))
    )
  }

  if (!min && max < minPrice) {
    return (
      products.filter(product => (product.price >= 0 && product.price <= maxPrice))
    )
  }

  if (!max) {
    return (
      products.filter(product => (product.price >= min && product.price <= maxPrice))
    )
  }

  if (min >= max) {
    return (
      products.filter(product => (product.price >= min && product.price <= maxPrice))
    )
  }

  return (
    products.filter(product => (product.price >= min && product.price <= max))
  )
};

export const getSelectTypeOptions = (data) => {
  return data.reduce((acc, item) => {
    const type = getItemType(item);

    if (acc.length !== 0 && acc.includes(type)) {
      return acc;
    }

    acc = [...acc, type];
    return acc;
  }, [])
};

const getItemType = (item) => {
  const urlArray = item.productUrl.split('/');
  const index = urlArray.indexOf('womens');
  const type = urlArray[index + 2];
  return type;
}

export const getItems = (products, searchValue, priceRange, selectedType) => {
  const isMin = !priceRange.min;
  const isMax = !priceRange.max;

  //no filters applied
  if (!searchValue && isMin && isMax && !selectedType) {
    return products;
  }

  //all filters applied
  if (searchValue && (!isMin || !isMax) && selectedType) {
    const searchResults = getSearchedProducts(products, searchValue);
    const priceResults = getProductsByPrice(searchResults, priceRange);
    const results = getProductsByType(priceResults, selectedType);
    return results;
  }

  //search filter applied only
  if (searchValue && isMin && isMax && !selectedType) {
    const results = getSearchedProducts(products, searchValue);
    return results;
  }

  //search and price range filters applied
  if (searchValue && (!isMin || !isMax) && !selectedType) {
    const searchResults = getSearchedProducts(products, searchValue);
    const results = getProductsByPrice(searchResults, priceRange);
    return results;
  }

  //search and type filters applied
  if (searchValue && isMin && isMax && selectedType) {
    const searchResults = getSearchedProducts(products, searchValue);
    const results = getProductsByType(searchResults, selectedType);
    return results;
  }

  //price range filter applied only
  if ((!isMin || !isMax) && !searchValue && !selectedType) {
    const results = getProductsByPrice(products, priceRange);
    return results;
  }

  //price range and type filters applied
  if (!!selectedType && (!isMin || !isMax) && !searchValue) {
    const searchResults = getProductsByType(products, selectedType);
    const results = getProductsByPrice(searchResults, priceRange);
    return results;
  }

  //type filter applied only
  if (isMin && isMax && !searchValue && !!selectedType) {
    const results = getProductsByType(products, selectedType);
    return results;
  }
}
