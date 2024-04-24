# NoCountry Wings
NoCountry Wings es una plataforma online para reserva y compra de pasajes de avión.
A donde quieras ir, nosotros te llevamos.

# Tecnologías usadas
##Frontend
![React Icon](https://github.com/No-Country/c17-37-m-java/assets/125413569/5c2e4e54-392b-4338-808c-2d7be9da8472)
![Vite Icon](https://github.com/No-Country/c17-37-m-java/assets/125413569/40e2a945-f2f3-47f0-b645-d7ff4777a766)
![React Router Icon](https://github.com/No-Country/c17-37-m-java/assets/125413569/05ef002a-358c-44e4-a5c8-f2545738ddf9)
![Formik Icon](https://github.com/No-Country/c17-37-m-java/assets/125413569/e7378374-c399-4422-876e-cb892ce4d57e)
![Material IU Icon](https://github.com/No-Country/c17-37-m-java/assets/125413569/c3b9ef8e-210a-4235-82df-7d6dbf678318)
![ThreeJs Icon](https://github.com/No-Country/c17-37-m-java/assets/125413569/af47c42e-c42d-4dca-a48c-7c7531165799)
![Eslint Icon](https://github.com/No-Country/c17-37-m-java/assets/125413569/0e79e158-06f1-43a8-b6db-6334211c7bb3)

##Backend
![Java Icon](https://github.com/No-Country/c17-37-m-java/assets/125413569/6c55f877-ea74-4ae6-a1af-e1018d3ad36d)
![Spring Icon](https://github.com/No-Country/c17-37-m-java/assets/125413569/f26fbc45-eb02-4f26-adaf-6793ff523931)
![MySQL Icon](https://github.com/No-Country/c17-37-m-java/assets/125413569/2a7f2976-1e64-4871-9420-92e1ea2176c2)
![PostMan Icon](https://github.com/No-Country/c17-37-m-java/assets/125413569/41335804-d3a2-4794-ab53-934b0796c1e7)

#Organización
![Slack Icon](https://github.com/No-Country/c17-37-m-java/assets/125413569/5ee180ad-8880-46b5-bc4d-315f3df17cd6)
![Figma Icon](https://github.com/No-Country/c17-37-m-java/assets/125413569/6a588b26-4a8b-42d1-b4e7-b9b147c2210f)
![Trello Icon](https://github.com/No-Country/c17-37-m-java/assets/125413569/cae78f2f-b6b6-4a95-a3d5-e002eb009802)
![Miro Icon](https://github.com/No-Country/c17-37-m-java/assets/125413569/e74f066b-c0f9-4f99-ba0b-524056e74cf1)

## Instalación
### Prerequisitos 🔨
Estas instrucciones le permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para fines de desarrollo y prueba.

1. Instalar Node ^20
2. Instalar java JDK 17
3. Instalar MySql

#### Clonar el repositorio

```bash
git clone https://github.com/No-Country/c17-37-m-java.git
```

### Instalar las dependencias dentro de la carpeta Frontend

```bash
npm install
```

#### Inicia el proyecto

```bash
npm run dev
```

Ahora puedes abrir [http://localhost:5173](http://localhost:5173) y comenzar a codear en tu IDE favorito.


## Cómo ejecutar el Backend

###Aplicación Spring Boot

##### Setting Database

```
host: localhost/ip
port: 3306
dbname: viajestravel
user: root
pass: 1234
```


##### Inicia la aplicación Travel-Platform dentro del IDE de tu preferencia

Sigue estas intrucciones para ejecutar la aplicación:

1. Run TravelPlatformApplication service `(c17-37-m-java/src/main/java/com/viajes/Travel/platform/TravelPlatformApplication.java)`.

##### Documentación de Endpoints

##### CREAR USER ENDPOINT

POST =
BODY = {

}

Con estos datos crearás el usuario que necesitarás para crear el token.
##### CREAR TRAVELS ENDPOINT

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

Con estos datos crearás un travel



## Members
### Backend: 
- **Luciana Coronel**: Backend Developer
- <a href="https://github.com/trujisxd1"> **Gustavo Martinez** <a/>:Backend Developer
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
