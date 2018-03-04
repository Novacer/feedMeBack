# API Specs

### POST - "/register"
Register user in MongoDB.

--------
```JSON
parameters: {
  "email": "string",
  "companyName": "string",
  "password": "string",
  "products": "string[]"
}

response: {
  "success": "boolean",
  "msg": "string"
}
```

### POST - "/login"
Authenticate user login. Return user if pass.

--------
```JSON
parameters: {
  "email": "string",
  "password": "string"
}

response: {
  "success": "boolean",
  "msg": "string",
  "user": "Object"
}
```

### POST - "/feedback"
update the user's feedback array with a new feedback entry. Return new user if successful

--------
```JSON
parameters: {
  "email": "string",
  "feedback": "Object**"
}

response: {
  "success": "boolean",
  "msg": "string",
  "user": "Object"
}
```

```JSON
** Object: {
  "products": "string[]",
  "rating": "number[]"
}
```
### POST - "/get-questions"
Sends a response to the mobile side.

--------
```JSON
parameters: {
  "email": "string",
}

response: {
  "success": "boolean",
  "questions": "string[]",
  "products": "string[]"
}
```
