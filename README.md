# Project REST-Rant

REST-Rant is an app where users can review restaurants.
| Method        | Path                      | Purpose                               |
|------------   |-----------                |-------                                |
|GET            |`/`                        |The home page                          |
|GET            |`/places`                  |Places index page                      |
|POST           |`/places`                  |Create new place                       |  
|GET            |`/places/new`              |Form page for creating a new place     |   
|GET            |`/places/:id`              |Details about a particular place       |
|PUT            |`/places/:id`              |Update a particular page               |
|GET            |`/places/:id/edit`         |Form page for editing an existing page |
|DELETE         |`/places/:id`              |Delete a particular place              |
|POST           |`/places/:id/rant`         |Create a rant about a particular place |
|DELETE         |`/places/:id/rant/:rantId` |Delete rant about a particular place   |
|GET            |`*`                        |404 page (matches any route not above) |
