# Welcome to Spotify app!

This is my first attempt to write a mini application on React. 
## Functionality
The application includes a navigation bar from where you can move from page to page. 

 - **Home page**. The home page includes a list of artists. When the user clicks on one of the available bands, their released albums are displayed. Moreover, there is the remove button in order to hide any item from the list.
 -  **Search page**.  On this page user can 
	 - Seach for a band by name
	 - Filter the returned results
	 - Sort asceding/desceding the available items
	 - Click on heart-icon to add the band on favorites list
 - **Favorites page**. This is the page where the user can see the bands marked as favorites. There is the ability to display the results in 3 ways:
	 - list
	 - 3 column grid
	 - 4 column grid
 and to remove band from favorites by clicking on the heart-button.

## Third party components used
### Results Library
In order to have items to display on screen, I have used json-server. File db.json simulates database data.

### Bootstap 4
For the display, bootstap 4 library had been used.

## Setup
Please follow this steps in order to be able to run the application

 1. Clone repo locally on your machine
 2. Run command **npm install**
 3. Run command **npm start**
 4. Run command **npm run server**
