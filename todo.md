Boards

- id uuid
- name string

Statuses

- id uuid
- name string

Cards

- id uuid
- title string
- description string
- statusId uuid
- boardId uuid

GET - boards/:id
POST - boards/create
PUT - boards/:id
DELETE - boards/:id

GET - cards/:boardId
POST - cards/create
PUT - cards/:id
DELETE - cards/:id

To do:

[x] Joi
[x] move card into another status
[] Jest unit tests
[] Redis
[] configure Render.io deploy
