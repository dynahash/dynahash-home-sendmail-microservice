# dynahash-home-sendmail-microservice repository

## Router `/sendmail`

This is an email sending router. Use the body structure for example:

```json
{
  "to": "dynahash@gmail.com",
  "subject": "This is a subject",
  "html": "<p>you can send html formats in this element from json</p>"
}
```
## How to start the API

Use before the `yarn` command, after use the `yarn start` for start the application.

Obs: If you use html and text element, only the html will be sent. 
