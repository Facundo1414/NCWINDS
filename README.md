# c17-37-m-java
# Travel platform

This platform provides a seamless experience for users to book flight tickets hassle-free.

## Dependencies used:

- React: ^18.2.0
- material-UI: ^5.15.15
- ESLint: ^8.57.0
- node: 20
## Development:

## Prerequisites 🔨

1. Install Node ^20
2. Install java JDK 17
3. Install MySql

### Local Installation

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

#### Requirements

- [Node.js](https://nodejs.org/en/)
- [Git](https://git-scm.com/downloads)

#### Clone the repo

```bash
git clone https://github.com/No-Country/c17-37-m-java.git
```

#### Install the dependencies inside Frontend Folder

```bash
npm install
```

#### Start the project

```bash
npm run dev
```

Now you can open [http://localhost:5173](http://localhost:5173) and start coding in your favorite code editor (preferably in [Visual Studio Code](https://code.visualstudio.com/)).


## Backend Applications:

<h4>Tecnologías usadas en Back End</h4>

  <a  href="https://www.java.com/es/" target="_blank">

  ![Java](https://img.shields.io/badge/Java-%2523ED8B00.svg?style=for-the-badge&logo=oracle&logoColor=red&color=white)

  </a>

  <a  href="https://spring.io/projects/spring-framework" target="_blank">

  ![Spring](https://img.shields.io/badge/spring-%236DB33F.svg?style=for-the-badge&logo=spring&logoColor=white)

  </a>

  <a  href="https://www.mysql.com/products/connector/" target="_blank">

  ![MYSQL](https://img.shields.io/badge/MYSQL-237f97?style=for-the-badge&logo=MYSQL&logoColor=fff)

  </a>

  <a  href="https://projectlombok.org/" target="_blank">

  ![Lombok](https://img.shields.io/badge/Lombok-bc1f2d?style=for-the-badge&logo=Lombok&logoColor=fff)

  </a>

### 2.- Spring Boot Application


##### Setting Database

```
host: localhost/ip
port: 3306
dbname: viajestravel
user: root
pass: 1234
```


##### Start Travel-Platform application inside of IDE of your preference

Follow this order of deployment when running the application:

1. Run TravelPlatformApplication service `(c17-37-m-java/src/main/java/com/viajes/Travel/platform/TravelPlatformApplication.java)`.

##### Documentation Endpoints

##### CREATE USER ENDPOINT

POST =
BODY = {

}

With this data you will create the user that you will need to create the token.
##### CREATE TRAVELS ENDPOINT

POST = http://localhost:8080/viajes
BODY = {
    "destiny": "Santa Cruz Bolivia",
    "price": 730,
    "description": "this is a description",
    "origin": "Miami",
    "duration":"2hrs",
    "scaleNumbers":"1",
    "dateOfDestiny":"2024-04-12T08:45:10",
    "dateOfOrigin":"2024-04-13T16:45:10"   
}

With this data you will create a travel 


## Members
### Backend: 
- **Luciana Coronel**: Backend Developer
- **Gustavo Martinez**: Backend Developer
- **Manuel Claros**: Backend Developer

### Frontend:
- **Bruno Sosa**: Frontend Developer

### Fullstack:
- **Marco Antonio**: Fullstack Developer
- **Facundo Allende**: Fullstack Developer

### Diseño UX/UI:
- **Bruno Sosa**: UX/UI Designer

### Team Leader:
- **Lucas Koch**: Team Leader
