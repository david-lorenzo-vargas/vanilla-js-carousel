import data from './data';
import { getItems, getSelectTypeOptions } from './utilities';

const carousel = document.querySelector('.carousel');
const search = document.querySelector('#search');
const min = document.querySelector('#min');
const max = document.querySelector('#max');
const typeSelect = document.querySelector('#type-select');
const popup = document.querySelector('.pop-up');
const innerWidth = window.innerWidth;

const app = () => {
  let state = {
    products: data,
    slideNumber: 0,
    searchValue: '',
    priceRange: {
      min: '',
      max: '',
    },
    selectedType: '',
    isPopupActive: false,
    productSelected: {},
  };

  const init = () => {
    render();
  };

  const setState = (newState) => {
    state = { ...state, ...newState };
    render();
  };

  const render = () => {
    const { products, searchValue, priceRange, selectedType, isPopupActive, productSelected } = state;
    carousel.innerHTML = '';
    const results = getItems(products, searchValue, priceRange, selectedType);
    const content = getCarouselContent(results);
    carousel.appendChild(content);
    togglePopup(productSelected, isPopupActive);
  };

  const getCarouselContent = (results) => {
    const noItems = results.length === 0;
    const carouselContainer = createCarouselContainer(results);
    const noResultsMessage = createNoResultsMessage();
    const content = noItems ? noResultsMessage : carouselContainer;
    return content;
  }

  const goToNextSlide = () => {
    const isLastSlide = state.slideNumber === state.products.length - 1;
    const slideNumber = isLastSlide ? 0 : state.slideNumber + 1;

    setState({
      slideNumber,
    });
  };

  const goToPreviousSlide = () => {
    const isFirstSlide = state.slideNumber === 0;

    const slideNumber = isFirstSlide
      ? state.products.length - 1
      : state.slideNumber - 1;

    setState({
      slideNumber,
    });
  };

  const togglePopup = (productSelected, isPopupActive) => {
    const isSelected = productSelected && (Object.keys(productSelected).length !== 0);

    if (isPopupActive) {
      popup.classList.add('pop-up--active');
      const popupItem = createItem(productSelected, 'pop-up__item');
      popup.appendChild(popupItem);
      popup.addEventListener('click', handlePopupClick);
    }

    if (!isPopupActive && !isSelected) {
      popup.classList.remove('pop-up--active');
      popup.removeEventListener('click', handlePopupClick);
    }
  };

  // --------------------------------Event Handlers--------------------------------
  const handleNextButtonClick = () => {
    goToNextSlide();
  };

  const handlePreviousButtonClick = () => {
    goToPreviousSlide();
  };

  const handleHideButtonClick = () => {
    togglePopup();
  }

  const handleNavigationItemClick = (index) => {
    setState({
      slideNumber: index
    });
  };

  const handleSearchChange = (event) => {
    const { value } = event.target;

    setState({
      searchValue: value,
    });
  }

  const handleMinChange = (event) => {
    const { priceRange } = state;
    const { value } = event.currentTarget;
    const num = Number(value);
    let newState = {};

    if (num >= 0) {
      newState = {
        priceRange: {
          ...priceRange,
          min: num,
        },
      };
    }

    setState(newState);
  }

  const handleMaxChange = (event) => {
    const { priceRange } = state;
    const { value } = event.target;
    const num = Number(value);
    let newState = {};

    if (num > 0) {
      newState = {
        priceRange: {
          ...priceRange,
          max: num,
        },
      };
    }

    setState(newState);
  }

  const handleOptionChange = (event) => {
    const { value } = event.target;

    setState({
      selectedType: value,
    });
  }

  const handleItemClick = (product) => {
    setState({
      isPopupActive: true,
      productSelected: product,
    });
  }

  const handlePopupClick = () => {
    setState({
      isPopupActive: false,
      productSelected: {},
    });
  }

  search.addEventListener('input', handleSearchChange);
  search.addEventListener('propertychange', handleSearchChange); // for IE8
  min.addEventListener('input', handleMinChange);
  min.addEventListener('propertychange', handleMinChange); // for IE8
  max.addEventListener('input', handleMaxChange);
  max.addEventListener('propertychange', handleMaxChange); // for IE8
  typeSelect.addEventListener('change', handleOptionChange);

  // --------------------------------DOM Nodes--------------------------------
  const createOption = (element, index) => {
    const option = document.createElement('option');
    option.classList.add('option');
    option.innerText = element;
    option.setAttribute('value', element);
    option.setAttribute('id', index);

    return option;
  }

  const types = getSelectTypeOptions(data);

  types.forEach((element, index) => {
    const option = createOption(element, index);
    typeSelect.appendChild(option);
  });

  const createPreviousButton = (isDisabled) => {
    const button = document.createElement('button');
    button.classList.add('button', 'button--previous');
    button.innerHTML = '&#11164;';
    button.addEventListener('click', handlePreviousButtonClick);

    if (isDisabled) {
      button.classList.add('button--disabled');
      button.setAttribute('disabled', true)
    }

    return button;
  };

  const createNextButton = (isDisabled) => {
    const button = document.createElement('button');
    button.classList.add('button', 'button--next');
    button.innerHTML = '&#11166;';
    button.addEventListener('click', handleNextButtonClick);

    if (isDisabled) {
      button.classList.add('button--disabled');
      button.setAttribute('disabled', true)
    }

    return button;
  };

  const createHideButton = () => {
    const button = document.createElement('button');
    button.classList.add('button', 'button--hide');
    button.innerHTML = '&#9587;';
    button.addEventListener('click', handleHideButtonClick);

    return button;
  };

  const createItem = (product, className) => {
    const { imageSrc, productTitle, price, productUrl } = product;
    const item = document.createElement('div');
    item.classList.add(className);

    const itemImage = document.createElement('div');
    itemImage.classList.add(`${className}__image`);
    itemImage.style.backgroundImage = `url(${imageSrc})`;

    const itemDetails = document.createElement('div');
    itemDetails.classList.add(`${className}__details`);

    const itemTitle = document.createElement('div');
    itemTitle.classList.add(`${className}__title`);
    itemTitle.innerText = `${productTitle}`;
    itemDetails.appendChild(itemTitle);

    const itemPrice = document.createElement('div');
    itemPrice.classList.add(`${className}__price`);
    itemPrice.innerText = `£${price}`;
    itemDetails.appendChild(itemPrice);

    if (className === 'pop-up__item') {
      const popupHideButton = createHideButton();

      const itemLink = document.createElement('div');
      itemPrice.classList.add(`${className}__link`);
      const link = document.createElement('a');
      link.setAttribute('href', productUrl);
      link.innerText = 'View this item'
      itemLink.appendChild(link);
      itemDetails.appendChild(itemLink);

      const elements = [itemImage, itemDetails, popupHideButton];

      elements.forEach((element) => {
        item.appendChild(element);
      });
    }

    const elements = [itemImage, itemDetails];

    elements.forEach((element) => {
      item.appendChild(element);
    });

    return item;
  };

  const createItems = (results) => {
    const items = document.createElement('div');
    items.classList.add('items');

    const marginLeft = -300 * state.slideNumber;
    items.style.marginLeft = `${marginLeft}px`;

    results.forEach((product) => {
      const item = document.createElement('div');
      item.classList.add('item__container');
      item.addEventListener('click', () => handleItemClick(product))

      const element = createItem(product, 'item');
      item.appendChild(element);

      items.appendChild(item);
    });

    return items;
  }

  const createItemsContainer = (results) => {
    const contentWidth = (results.length) * 300;
    const isDisabled = innerWidth >= contentWidth;
    const itemsContainer = document.createElement('div');
    itemsContainer.classList.add('items-container');
    const items = createItems(results);
    const previousButton = createPreviousButton(isDisabled);
    const nextButton = createNextButton(isDisabled);

    const elements = [previousButton, nextButton, items];

    elements.forEach((element) => {
      itemsContainer.appendChild(element);
    });

    return itemsContainer;
  };

  const createCarouselContainer = (results) => {
    const carouselContainer = document.createElement('div');
    carouselContainer.classList.add('carousel-container');

    const itemsContainer = createItemsContainer(results);
    const navigationContainer = createNavigationContainer(results)

    const elements = [itemsContainer, navigationContainer];

    elements.forEach((element) => {
      carouselContainer.appendChild(element);
    });

    return carouselContainer;
  };

  const createNavigationItem = (index, isDisabled) => {
    const navigationItem = document.createElement('div');

    navigationItem.classList.add('navigation-container__item');

    if (state.slideNumber === index) {
      navigationItem.classList.add('navigation-container__item--active');
    }

    navigationItem.addEventListener('click', () => {
      handleNavigationItemClick(index);
    });

    if (isDisabled) {
      navigationItem.classList.add('navigation-container__item--disabled');
      navigationItem.setAttribute('disabled', true);

      navigationItem.removeEventListener('click',
        handleNavigationItemClick);
    }

    return navigationItem;
  };

  const createNavigationContainer = (results) => {
    const contentWidth = (results.length) * 300;
    const isDisabled = innerWidth >= contentWidth;
    const navigationContainer = document.createElement('div');
    navigationContainer.classList.add('navigation-container');

    if (state.isPopupActive) {
      navigationContainer.classList.add('navigation-container--hidden');
    }

    if (!state.isPopupActive) {
      navigationContainer.classList.remove('navigation-container--hidden');
    }

    results.forEach((element, index) => {
      const item = createNavigationItem(index, isDisabled);
      navigationContainer.appendChild(item);
    });

    return navigationContainer;
  };

  const createNoResultsMessage = () => {
    const noResultsMessage = document.createElement('div');
    noResultsMessage.classList.add('message');
    noResultsMessage.innerText = 'Oops! Sorry, no items matching your search criteria found. Please change the filters.'

    return noResultsMessage;
  }

  init();
};

export default app;
