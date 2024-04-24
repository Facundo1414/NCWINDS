# NoCountry Wings
NoCountry Wings es una plataforma online para reserva y compra de pasajes de avión.
A donde quieras ir, nosotros te llevamos.

# Tecnologías usadas
## Frontend
![React Icon](https://github.com/No-Country/c17-37-m-java/assets/125413569/5c2e4e54-392b-4338-808c-2d7be9da8472)
![Vite Icon](https://github.com/No-Country/c17-37-m-java/assets/125413569/40e2a945-f2f3-47f0-b645-d7ff4777a766)
![React Router Icon](https://github.com/No-Country/c17-37-m-java/assets/125413569/05ef002a-358c-44e4-a5c8-f2545738ddf9)
![Formik Icon](https://github.com/No-Country/c17-37-m-java/assets/125413569/e7378374-c399-4422-876e-cb892ce4d57e)
![MaterialIU Icon](https://github.com/No-Country/c17-37-m-java/assets/125413569/6d0a029c-c06f-429c-9700-d84b532cc4bf)
![ThreeJs Icon](https://github.com/No-Country/c17-37-m-java/assets/125413569/af47c42e-c42d-4dca-a48c-7c7531165799)
![Eslint Icon](https://github.com/No-Country/c17-37-m-java/assets/125413569/0e79e158-06f1-43a8-b6db-6334211c7bb3)

## Backend
![Java Icon](https://github.com/No-Country/c17-37-m-java/assets/125413569/6c55f877-ea74-4ae6-a1af-e1018d3ad36d)
![Spring Icon](https://github.com/No-Country/c17-37-m-java/assets/125413569/f26fbc45-eb02-4f26-adaf-6793ff523931)
![MySQL Icon](https://github.com/No-Country/c17-37-m-java/assets/125413569/2a7f2976-1e64-4871-9420-92e1ea2176c2)
![PostMan Icon](https://github.com/No-Country/c17-37-m-java/assets/125413569/41335804-d3a2-4794-ab53-934b0796c1e7)

# Organización
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain-wordmark.svg" alt="Slack Logo" width="90" height="90"><img src="https://asset.brandfetch.io/idAnDTFapY/idG4aRyg5R.svg?updated=1669900249741" alt="Miro Logo" width="90" height="90"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="Figma Logo" width="60" height="60"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain-wordmark.svg" alt="Trello Logo" width="90" height="90">


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

### Aplicación Spring Boot

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


# Equipo C17-37-M-Java 

<table align='center'>
  <tr>
    <td align='center'>
      <div >
        <a href="https://github.com/Facundo1414" target="_blank" rel="author">
          <img width="110" src="https://avatars.githubusercontent.com/u/116677124?v=4"/>
        </a>
        <a href="" target="_blank" rel="author">
          <h4 style="margin-top: 1rem;">Facundo Allende</br><small>Fullstack</small></h4>
        </a>
        <div style='display: flex; flex-direction: column'>
        <a href="https://github.com/Facundo1414" target="_blank">
          <img style='width:8rem' src="https://img.shields.io/static/v1?style=for-the-badge&message=GitHub&color=172B4D&logo=GitHub&logoColor=FFFFFF&label="/>
        </a>
        <a href="https://www.linkedin.com/in/facundotarzoallende/" target="_blank">
          <img style='width:8rem' src="https://img.shields.io/badge/linkedin%20-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white"/>
        </a>
        </div>
      </div>
    </td>
    <td align='center'>
      <div >
        <a href="https://github.com/Bruno1084" target="_blank" rel="author">
          <img width="110" src="https://avatars.githubusercontent.com/u/125413569?v=4"/>
        </a>
        <a href="" target="_blank" rel="author">
          <h4 style="margin-top: 1rem;">Bruno Sosa</br><small>Frontend</small></br><small>Diseñador</small></h4>
        </a>
        <div style='display: flex; flex-direction: column'>
        <a href="https://github.com/Bruno1084" target="_blank">
          <img style='width:8rem' src="https://img.shields.io/static/v1?style=for-the-badge&message=GitHub&color=172B4D&logo=GitHub&logoColor=FFFFFF&label="/>
        </a>
        <a href="https://www.linkedin.com/in/brunos0sa/" target="_blank">
          <img style='width:8rem' src="https://img.shields.io/badge/linkedin%20-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white"/>
        </a>
        </div>
      </div>
    </td>
    <td align='center'>
      <div >
        <a href="https://github.com/marcorios26" target="_blank" rel="author">
          <img width="110" src="https://media.licdn.com/dms/image/D4D03AQEYEY7uneoGXQ/profile-displayphoto-shrink_200_200/0/1677028124918?e=1719446400&v=beta&t=2lKWmzwuHe8eCMfAYLNqIIdyjhIVehSpuchMIDzqqFs"/>
        </a>
        <a href="" target="_blank" rel="author">
          <h4 style="margin-top: 1rem;">Marco Antonio</br><small>Fullstack</small></h4>
        </a>
        <div style='display: flex; flex-direction: column'>
        <a href="https://github.com/marcorios26" target="_blank">
          <img style='width:8rem' src="https://img.shields.io/static/v1?style=for-the-badge&message=GitHub&color=172B4D&logo=GitHub&logoColor=FFFFFF&label="/>
        </a>
        <a href="https://www.linkedin.com/in/marco-antonio-rios-ramos-a8724515b/" target="_blank">
          <img style='width:8rem' src="https://img.shields.io/badge/linkedin%20-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white"/>
        </a>
        </div>
      </div>
    </td>
  </tr>
  </table>

<table align='center'>
  <tr>
    <td align='center'>
      <div >
        <a href="https://github.com/lucoro" target="_blank" rel="author">
          <img width="110" src="https://media.licdn.com/dms/image/D4D03AQGXplHbP5McYA/profile-displayphoto-shrink_200_200/0/1712427267961?e=1719446400&v=beta&t=Y3iXmLjigo5voLvwDBpiJcGYtaQ7H-VEV_AcjwVmfrk"/>
        </a>
        <a href="" target="_blank" rel="author">
          <h4 style="margin-top: 1rem;">Luciana Coronel</br><small>Backend</small></h4>
        </a>
        <div style='display: flex; flex-direction: column'>
        <a href="https://github.com/lucoro" target="_blank">
          <img style='width:8rem' src="https://img.shields.io/static/v1?style=for-the-badge&message=GitHub&color=172B4D&logo=GitHub&logoColor=FFFFFF&label="/>
        </a>
        <a href="https://www.linkedin.com/in/luciana-agustina-coronel-acosta/" target="_blank">
          <img style='width:8rem' src="https://img.shields.io/badge/linkedin%20-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white"/>
        </a>
        </div>
      </div>
    </td>
    <td align='center'>
      <div >
        <a href="https://github.com/trujisxd1" target="_blank" rel="author">
          <img width="110" src="https://avatars.githubusercontent.com/u/115821790?v=4"/>
        </a>
        <a href="" target="_blank" rel="author">
          <h4 style="margin-top: 1rem;">Gustavo Martinez</br><small>Backend</small></h4>
        </a>
        <div style='display: flex; flex-direction: column'>
        <a href="https://github.com/trujisxd1" target="_blank">
          <img style='width:8rem' src="https://img.shields.io/static/v1?style=for-the-badge&message=GitHub&color=172B4D&logo=GitHub&logoColor=FFFFFF&label="/>
        </a>
        <a href="" target="_blank">
          <img style='width:8rem' src="https://img.shields.io/badge/linkedin%20-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white"/>
        </a>
        </div>
      </div>
    </td>
    <td align='center'>
      <div >
        <a href="https://github.com/marcorios26" target="_blank" rel="author">
          <img width="110" src="https://media.licdn.com/dms/image/D4D03AQEYEY7uneoGXQ/profile-displayphoto-shrink_200_200/0/1677028124918?e=1719446400&v=beta&t=2lKWmzwuHe8eCMfAYLNqIIdyjhIVehSpuchMIDzqqFs"/>
        </a>
        <a href="" target="_blank" rel="author">
          <h4 style="margin-top: 1rem;">Marco Antonio</br><small>Fullstack</small></h4>
        </a>
        <div style='display: flex; flex-direction: column'>
        <a href="https://github.com/marcorios26" target="_blank">
          <img style='width:8rem' src="https://img.shields.io/static/v1?style=for-the-badge&message=GitHub&color=172B4D&logo=GitHub&logoColor=FFFFFF&label="/>
        </a>
        <a href="https://www.linkedin.com/in/marco-antonio-rios-ramos-a8724515b/" target="_blank">
          <img style='width:8rem' src="https://img.shields.io/badge/linkedin%20-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white"/>
        </a>
        </div>
      </div>
    </td>
  </tr>
  </table>
