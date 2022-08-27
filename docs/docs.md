# Documentation


### Table of Contents

- [Introduction](#introduction)
- [Info](#info)
- [BaseUrl](#baseUrl)
- [Tags](#tags)
- [Security Definitions](#securityDefinitions)
- [Paths](#paths)
- [Definitions](#definitions)
- [Components](#components)


#### Introduction

Before explaining about the documentation, you can see a simple example about the yaml file structure in [this link](https://github.com/treegex/openrtp/tree/main/example/openRTP.yaml)


#### Info

It gives explanations about the service, this information includes:

 * title
 * version
 * contact 
   * email 
   * phoneNumber
 * license 
   * name
   * url
 * description

```yaml
info:
  title: Auth Service
  version: 1.0.0
```

#### BaseUrl


```yaml
baseUrl: http://localhost:3000
```


#### Tags

You can group any of the route into a group of tags

```yaml
tags:
  - name: SingUp
    description: Operations about user singup
    
paths:
  - on: SINGUP_USER
      tags:
        - SingUp
```

#### Security Definitions

```yaml
securityDefinitions:
  apiKey:
    description: REST API uses a persistent Api Key.
    type: apiKey
    in: header
    schema: all
    name: apiKey
```

The schema object in security definitions help to common auth.


#### Paths

```yaml
paths:
  /:

    - on: LOGIN_USER
      tags:
        - Login
      parameters:
        - in: param
          name: email
          type: integer
          required: true
        - in: param
          name: password
          type: string
          required: true
      security:
        - apiKey
      events:
        - $ref:
            - components/OK
            - components/NOT_FOUND
```


#### Definitions

Its data model


```yaml
definitions:
  Status:
    - name: name
      type: string
      description: Name of the user
    - name: age
      type: integer
      description: Age of the user
  Response:
    - name: status
      type: integer
      description: Event reponse status code
    - name: message
      type: string
      description: Event reponse mssage
```


#### Components

You can use components to make it easier to write and prevent the code from getting messy.


```yaml
components:
  events:
    CREATED:
      - name: Created
        description: Successfully Created
    OK:
      - name: OK
        description: Successful
    NOT_FOUND:
      - name: NOT_FOUND
        description: Resource not found
    BOOK_LIST:
      - name: BOOK_LIST
        description: List of user books
  parameters:
    SingUp_P:
      - in: param
        name: name
        type: string
        required: true
      - in: param
        name: phoneNumber
        type: string
        required: true
      - in: param
        name: email
        type: string
        required: true
      - in: param
        name: age
        type: integer
        required: true
```