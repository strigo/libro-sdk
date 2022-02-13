# Libro SDK

An SDK that initiates and manages the in-app strigo experience, providing side-by-side exercises and assessments, easily integrated into your app

# Getting Started

## Usage

Include this snippet in the `<head>` section your website (you can copy it directly from Lounge, `web-api-key` included):

```html
<script>
  (function () {
    var s = document.createElement("script");
    s.id = "libro-sdk";
    s.type = "text/javascript";
    s.async = true;
    s.src =
      "https://cdn.jsdelivr.net/gh/strigo/libro-sdk/dist/production/libro.sdk.min.js";
    s.setAttribute("data-web-api-key", "<web-api-key>");
    var x = document.getElementsByTagName("script")[0];
    x.parentNode.insertBefore(s, x);
  })();
</script>
```

This will add the `LibroSDK` to your `window` and call `LibroSDK.init()` to initialize the script

## API

### Get the user token

Before calling `LibroSDK.setup()`, please retreive the user token using strigo-api (server-to-server). The flow is documented [here](https://docs.strigo.io/).

This token is required to identify each user that uses the LibroSDK.

### Setup

To initiate Libro session, call `setup` with the following parameters:

```js
window.LibroSDK.setup({
  email: "user@domain.com",
  // The token you received from strigo-api
  token: {
    token: "",
    expiration: ""
  }
});
```

### Shutdown

To exit Libro session, simply call:

```js
window.LibroSDK.shutdown();
```

The `localStorage` and `sessionStorage` will be erased and the page will refresh.


# Development

## Testing

Edit the `.env` file to include `SDK_HOSTING_PORT` as you like (7000 is the default port) 

Then, just run:

```sh
npm start
```

It will bundle the script and styles, and watch for changes.
The scripts will be served in:

* `http://localhost:SDK_HOSTING_PORT/libro.sdk.js`
* `http://localhost:SDK_HOSTING_PORT/styles/libro.css`

You can include the script and call it from your

## Build

Our built script is served **_directly_** from GitHub - so please handle it correctly

```sh
npm run build
```

Will bundle and minify both `js` and `css` files to `dist/production` directory

## Serve

These files in the `dist/production` directory can be fetched by the free CDN [JsDelivr](https://www.jsdelivr.com/)

- https://cdn.jsdelivr.net/gh/strigo/libro-sdk/dist/production/libro.sdk.min.js
- https://cdn.jsdelivr.net/gh/strigo/libro-sdk/dist/production/styles/libro.min.css


# Development guidline

## Script Mechanism

LibroSDK can operate as one of the following ways:

- `Host` - the script that invokes the `setup` method and initiated page manipulation
- `SUBSCRIBER` - the script that runs "underneath" inside the Iframe - this one can only send events to its `HOST`, using the `sessionStorage` or `localStorage`

### Init

The `init` method determines the status of the SDK. If the SDK is already invoked `session.isPanelOpen()` - the status of the SDK will be `SUBSCRIBER` and it won't be able to run `setup`.

### Page manipulation

The `setup` method clears the original page and creates 2 Iframes, side by side:

- Libro Iframe - using the `token` and `webApiKey` provided
- Original webpage Iframe - with the original page

### Storing data

The `setup` method creates two storage sessions / types:

- `libroConfig` - on `localStorage` - represents the relevant data for the script initiation and operation

***Example:***
```js
{
  "email": "hidday+libro-user@strigo.io",
  "initSite": {
    "host": "libro-demo.web.app",
    "pathName": "/",
    "href": "https://libro-demo.web.app/",
    "origin": "https://libro-demo.web.app",
    "search": "",
    "params": {}
  },
  "token": {
    "token": "RhrsHoc1bDcQagl7znXdg-7f4WKeLWa_99zZMj92zen",
    "expiration": 1644512345678
  },
  "webApiKey": "zzzzzz",
  "subDomain": "libro.dev"
}
```

- `libroSession` - on `sessionStorage` - represents the data that's relevant to the current session / tab

***Example***
```js
{
  "currentUrl": "https://libro-demo.web.app/",
  "isPanelOpen": true
}
```

## Code structure and tools

### General notes

We try to keep the script as **zero-dependency** as possible, since this it's a code that's intended to run inside our customers codebase

### Modules you can use

- `url` - url tools to parse and build urls
- `document` - document manipulation tools, for appending Iframes, CSS, other elements to the documetn
- `storage-utils` - a helper module to manage both `localStorage` and `sessionStorage`
- `config` - the module that manages `libroConfig` on `localStorage`
- `session` - the module that manages `libroSession` on `sessionStorage` - data is relevant for every session (tab)
