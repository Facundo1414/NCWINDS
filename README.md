# c17-37-m-java
# Travel platform

This platform provides a seamless experience for users to book flight tickets hassle-free.

## Dependencies used:

- React: ^18.2.0
- material-UI: ^5.15.15
- ESLint: ^8.57.0
- node: 20
  <strong>Frontend</strong> : <br><br>
   <img src=https://user-images.githubusercontent.com/25181517/117447155-6a868a00-af3d-11eb-9cfe-245df15c9f3f.png width="50" height="50">
   <img src=https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png width="50" height="50">
   <img src=https://github-production-user-asset-6210df.s3.amazonaws.com/62091613/261395532-b40892ef-efb8-4b0e-a6b5-d1cfc2f3fc35.png width="50" height="50">
   <img src=https://user-images.githubusercontent.com/25181517/183898054-b3d693d4-dafb-4808-a509-bab54cf5de34.png width="50" height="50">
   <img src=https://user-images.githubusercontent.com/25181517/192108891-d86b6220-e232-423a-bf5f-90903e6887c3.png width="50" height="50"><br>
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

<h4>Technologies used in Back End</h4>

<div>
  <strong>Backend</strong>: <br><br>
   <img src=https://user-images.githubusercontent.com/25181517/117201156-9a724800-adec-11eb-9a9d-3cd0f67da4bc.png width="50" height="50">
   <img src=https://user-images.githubusercontent.com/25181517/117201470-f6d56780-adec-11eb-8f7c-e70e376cfd07.png width="50" height="50">
   <img src=https://user-images.githubusercontent.com/25181517/192108890-200809d1-439c-4e23-90d3-b090cf9a4eea.png width="50" height="50">
   <img src=https://user-images.githubusercontent.com/25181517/183896128-ec99105a-ec1a-4d85-b08b-1aa1620b2046.png width="50" height="50">
   <img src=https://user-images.githubusercontent.com/25181517/192109061-e138ca71-337c-4019-8d42-4792fdaa7128.png width="50" height="50">
   <img src=https://user-images.githubusercontent.com/25181517/192107858-fe19f043-c502-4009-8c47-476fc89718ad.png width="50" height="50">
 </div>

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
