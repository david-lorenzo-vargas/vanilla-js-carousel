# Product carousel with filters

## Table of Contents
1. [Description](#description)
2. [Technologies](#technologies)
3. [Demo](#demo)
4. [Installation and viewing](#installation-and-viewing)
5. [Implementation, observations, other notes](#implementation-observations-other-notes)


## Description:
The app consist of a carousel of products and 3 filters: search, price range and types. All the 3 filters can be applied in different combinations together.
</br>
When the user clicks to an item in the carousel, there is a pop-up with item details and a link to the product page.
</br>
For the large screens, there is also a navigation bar implemented, so that the user can go through the collection using navigation dots.

## Technologies:
JavaScript, CSS, HTML, Webpack, Babel, Eslint, Autoprefixer, Stylelint.

## Demo:
1. Mobile version

![new look mobile](https://user-images.githubusercontent.com/72414745/107164743-959a2580-69b0-11eb-815c-0e078d2042a6.gif)

2. tablet version

![new look tablet](https://user-images.githubusercontent.com/72414745/107164761-ab0f4f80-69b0-11eb-9fd9-45a87acb08cf.gif)

3. Responsive

![new look responsive](https://user-images.githubusercontent.com/72414745/107164782-bfebe300-69b0-11eb-919f-3e1b267774de.gif)

4. Slider functionality

![new look slider](https://user-images.githubusercontent.com/72414745/107164822-e578ec80-69b0-11eb-8b18-ce452b67c646.gif)

5. Item pop up

![new look popup item](https://user-images.githubusercontent.com/72414745/107164881-25d86a80-69b1-11eb-8047-bc4d757d9959.gif)

6. Filter functionality

![new look filters](https://user-images.githubusercontent.com/72414745/107164862-0d685000-69b1-11eb-815b-5ae81b4b7d90.gif)

7. Error message

![new look error](https://user-images.githubusercontent.com/72414745/107164907-456f9300-69b1-11eb-9708-30a2da2376ad.gif)

## Installation and viewing
1. Clone the repo in your code editor `git clone https://github.com/david-lorenzo-vargas/vanilla-js-carousel.git`
2. Install NPM packages `npm install`
3. View the project in the browser: `npm run start`

## Implementation, observations, other notes:

### Carousel
The carousel is built dynamically using JavaScript. The user can navigate using the next and previous arrows and in the desktop view, they can also use navigation dots under the carousel. When the length of the array of items is smaller than the viewport, both the arrows and navigation dots are desactivated.

### Filters
There are 3 available filters: search, price range and product type. The filters search for matching criteria as the user types, so that no additional action/button click is required to start the search. Once the filter is cleared, the search criteria goes back to inital settings.
</br>
</br>
All the 3 filters can work both individually and together. This way the user can filter items in many different ways at the same time.
</br>
</br>
In case there are no items matching search criteria, a message is rendered in the carousel body. The message informs the user about the result and suggests to re-adjust the search.
</br>
</br>
For types options (drop-down menu), the options are taken dynamically from the array of urls provided using JS reduce function.

### Popup
When a product item is clicked, a popup shows up with item details and a link to the product page. The user can close the popup both by clicking on the "close" button and by clicking outside of pop-up item (available in bigger viewports).

### Cross browser compatibility
Autoprefixer has been used to make sure all CSS and JavaScript features are supported in major browsers.

### Responsive
The task is built Mobile first. Media queries and responsive design techniques (%, relative length units em and rem, displays flex and grid, etc.) are applied to make sure the app adjusts to all view ports.

### Styles
Plain CSS

### Favicon
New Look Favicon added

### Additional implementations
In addition to current code of the task, I believe the following implementations would be beneficial:</br>
- The data with an array of products can be fetched from an API rather that from a mock file.
- Additional testing with Jest could be implemented in order to check the logic of the filters and other utilities.
