# Tokyo Olympics Data Visualization App (Nextjs Frontend) <img src="https://i.ibb.co/nPRnS5X/logo2.jpg" alt="logo2" border="0" align="center" width="70" border-radius="15">
<img src="https://i.ibb.co/vZvfNNh/Tokyo2021-App-1.png" alt="Tokyo2021-App-1" border="0">

## Project Summary 
* This is a Nextjs app that shows data visualizations via the tableau API and highlights via the youtube API of the 2021 Tokyo Olympics.
* The app also allows you to add, edit and delete comments and likes on the videos via Apollo client to a [**GraphQL springboot server**](https://github.com/mk870/TokyoOlympix-GraphQL-Backend). 

### Project Steps :
* The app has 7 pages using Next-router (homepage, DataVizualisations, Highlights, video, verification, login and signup page)
* This app consumes 1 custom made api, a [**GraphQL springboot server**](https://github.com/mk870/TokyoOlympix-GraphQL-Backend)  with a postgreSQL database.
* Finally, css was used to style the entire application.

### **Resources Used**
***
**Nextjs Version :** 12.2.0  
**Reactjs Version :** 18.2.0  
**Tableau Public**  
**Kaggle** 

**Language Used :** Javascript, GraphQL

**Dependencies**:  tableau-react, React-icons, css, react-context, react-loader-spinner and react-hook-form.  

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=flat&logo=javascript&logoColor=%23F7DF1E) ![Next JS](https://img.shields.io/badge/Next-black?style=flat&logo=next.js&logoColor=white) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=flat&logo=react&logoColor=%2361DAFB)	![JWT](https://img.shields.io/badge/JWT-black?style=flat&logo=JSON%20web%20tokens) ![GraphQL](https://img.shields.io/badge/-GraphQL-E10098?style=flat&logo=graphql&logoColor=white) ![Apollo-GraphQL](https://img.shields.io/badge/-ApolloGraphQL-311C87?style=flat&logo=apollo-graphql) ![React Hook Form](https://img.shields.io/badge/React%20Hook%20Form-%23EC5990.svg?style=flat&logo=reacthookform&logoColor=white) ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=flat&logo=css3&logoColor=white)

**For Web Framework Requirements**: npm install

**APIs**: tableau, youtube ,context Api, [**GraphQL springboot server**](https://github.com/mk870/TokyoOlympix-GraphQL-Backend) 



### **Data Visualizations** 
* The olympics data was collected from Kaggle and tableau public was used to visualize the data and create 4 dashboards.
* Tableau Api is used to pull my tableau dashboards and serve them on the browser.
* The dashboard includes barcharts, piecharts and maps to show the data analysis of athletes, medals won per country, gender representation per discipline etc..

<img src="https://i.ibb.co/H46BD3S/Tokyo2021-App-2.png" alt="Tokyo2021-App-2" border="0">

### **Highlights**  
* The app allows users to watch the olympics highlights from each discipline thanks to the youtube API.


<img src="https://i.ibb.co/vLkfkzp/Tokyo2021-App-3.png" alt="Tokyo2021-App-3" border="0">

### **Comments and Likes/Dislikes**  
* Registered users can comment, like and dislike videos and this is persisted to the server using apollo client.
  

<img src="https://i.ibb.co/30tXN0b/Tokyo2021-App-4.png" alt="Tokyo2021-App-4" border="0">


### **Productionization**
Deployed the app to Vercel.

**Live Implemantation:** [Tokyo Olympix App](https://tokyo-olympix.vercel.app)
