<h1 align="center">
Parcel Deliver
</h1>

<div align="center">

> Delivery tracker running on Docker using VueJS3 and Express js

</div>

---

### Progress

- Finished and tested Api endpoints.
- Added seeds with related records data with inserting `seeds/seederData.js`
- Refactored the project's structure

### In progress

<ul>

  <li> <input type="checkbox" disabled  checked /><del>  Vue Integration </del></li>
  <li> <input type="checkbox" disabled  checked /> <del>SPA with Drag n Drop feature</del></li>
  <li> <input type="checkbox" disabled />Building assets and importing dist in Backend project</li>
  <li> <input type="checkbox" disabled /> JWT AUTH</li>
  <li> <input type="checkbox" disabled /> Complete post - put methods cycle </li>
  <li> <input type="checkbox" disabled /> Test and Modify Docker to Expose vue  </li>

</ul>

---

### TODO

<ul>
  <li> <input type="checkbox" disabled />Make exprimental services available</li>
  <li> <input type="checkbox" disabled />typescript </li>
  <li> <input type="checkbox" disabled />deployment of container on Oracle Cloud </li>
  <li> <input type="checkbox" disabled />LoadBalancer Proxy Nginx - HTTPS SSL </li>
</ul>

## Fast links:

| Endpoint                                               | description                         |
| ------------------------------------------------------ | ----------------------------------- |
| http://localhost:4000/api/parcels                      | http get all parcels                |
| http://localhost:4000/api/parcels/:id                  | http get parcel                     |
| http://localhost:4000/api/senders/:id/parcels          | http get sender's parcels           |
| http://localhost:4000/api/senders/:id/parcels/:status  | http get sender's parcels by status |
| http://localhost:4000/api/bikers/:id/parcels           | http get biker's available parcels  |
| http://localhost:4000/api/bikers/:id/parcels/picked-up | http get biker's available parcels  |
| http://localhost:4000/api/bikers/:id/parcels/delivered | http get biker's available parcels  |

---

## 1. Getting Started

### Using Docker

##### 1st time only

```
docker-compose up -d --build
```

##### 1. Installing Dependencies

```
docker-compose up -d
```

##### Manually installing Dependencies

```
docker-compose run npm install
```

##### 2. Building Assets For Development

```
docker-compose run npm run dev
```

##### 3. Seed MONGODB DB with NPM CLI

```
docker-compose run npm run seed
```

---

### Manual Without Docker

##### 1. Installing Dependencies

```
npm install
```

###### Modify env

```
NODE_LOCAL_PORT=4000
NODE_DOCKER_PORT=8888
```

##### 3. Migrating and Seeding MYSQL DB

```
npm run seed
```

##### 5. Building Assets For Development

```
npm run dev
```

##### 6. Building Assets For Production

```
npm run prod
```

---

##### 7. Run server

```
npm start
```

##### 7. Hit server

```
http://localhost:4000/parcels
```

---

## Bundled [VueDevTools](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
