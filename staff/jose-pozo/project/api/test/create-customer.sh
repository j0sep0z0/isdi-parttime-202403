curl -X POST \
-H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NmJiYmNjZjBlYWNiYzExZWM0YzYyODkiLCJpYXQiOjE3MjM1ODM2MjYsImV4cCI6MTcyMzYwNTIyNn0.8AWhOrlOXqKAJfdYReYrlgdwS5M32caDYLNaHMXIj4g" \
-H "Content-Type: application/json" \
-d '{ 
  "name": "Alba",
  "surname": "Rinho",
  "email": "alba@rinho.com"
}' \
-v \
http://localhost:2011/users/customers
