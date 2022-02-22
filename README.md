# Strigo SDK

An SDK that initiates and manages the in-app Strigo experience.

# Getting Started

## Usage

Include this snippet in the `<head>` section of your web application (you can copy it directly from Strigo's administrative console, in the Account page, with `webApiKey` and `subdomain` included):

```html
<script>
  (function () {
    var s = document.createElement("script");
    s.id = "strigo-sdk";
    s.type = "text/javascript";
    s.async = true;
    s.src = "https://cdn.jsdelivr.net/gh/strigo/strigo-sdk@latest/dist/production/strigo.sdk.min.js";
    s.setAttribute("data-web-api-key", "<webApiKey>");
    s.setAttribute("data-subdomain", "<subdomain>");
    var x = document.getElementsByTagName("script")[0];
    x.parentNode.insertBefore(s, x);
  })();
</script>
```

This will add the `StrigoSDK` to your `window` and call `StrigoSDK.init()` to initialize the script.

## API

### Get the user token

In order for `StrigoSDK` to communicate properly with Strigo, a token must be retrieved for your end user.
This token represents the user and the permissions it has against Strigo.
This token can be retrieved using [Strigo's API](https://docs.strigo.io/#sdk-user-token) using a server-to-server means of communication.

Make sure to retrieve the token before calling `StrigoSDK.setup()`.

### Setup

To start the Strigo experience, call `setup` with the following parameters:

```js
window.StrigoSDK.setup({
  email: "user@domain.com",
  // The token you received from Strigo's API
  token: {
    token: "",
    expiration: ""
  }
});
```

### Listen to SDK changes

`StrigoSDK` allows you to register to events, so you can be reactive to it.
For instance, if you want to make changes to your web app's UI based on the state of the Strigo Panel, you can listen to the `strigo-opened` event - which the SDK will trigger whenever the `StrigoSDK.setup()` is called.

```js
window.addEventListener("strigo-opened", () => {
  // Your custom code here
  // e.g : setButtonDisabled(true)
});
```

### Shutdown

To shut the Strigo experience down, simply call:

```js
window.StrigoSDK.shutdown();
```

The `localStorage` and `sessionStorage` will be erased and the page will refresh.

# Development

## Testing

Edit the `.env` file to include `SDK_HOSTING_PORT` as you like (7000 is the default port).

Then, just run:

```sh
npm start
```

It will bundle the script and styles, and watch for changes.
The scripts will be served in:

- `http://localhost:SDK_HOSTING_PORT/strigo.sdk.js`
- `http://localhost:SDK_HOSTING_PORT/styles/strigo.css`

You can include the script and call it from your local app.

## Build

Our built script is served **_directly_** from GitHub, so please handle it correctly

```sh
npm run build
```

Will bundle and minify both `js` and `css` files to `dist/production` directory.

## Serve

The files in the `dist/production` directory can be fetched by the free CDN at [JsDelivr](https://www.jsdelivr.com/).

- https://cdn.jsdelivr.net/gh/strigo/strigo-sdk@latest/dist/production/strigo.sdk.min.js
- https://cdn.jsdelivr.net/gh/strigo/strigo-sdk@latest/dist/production/styles/strigo.min.css

## Invalidate CDN

You can refresh the script manually in JSDelivr CDN - just run `npm run purge` after building and pushing to master.

# Development guideline

## Script Mechanism

`StrigoSDK` can operate in one of the following ways:

- `Host` - the script that invokes the `setup` method and initiated page manipulation
- `SUBSCRIBER` - the script that runs "underneath" inside the Iframe, and one can only send events to its `HOST`, using the `sessionStorage` or `localStorage`

### Init

The `init` method determines the status of the SDK. If the SDK is already invoked `session.isPanelOpen()` - the status of the SDK will be `SUBSCRIBER` and it won't be able to run `setup`.

### Page manipulation

The `setup` method clears the original page and creates 2 iframes, side by side:

- Strigo iframe - using the `token` and `webApiKey` provided.
- Original webpage iframe - with the original page structure and content.

### Storing data

The `setup` method creates two storage sessions / types:

- `strigoConfig` - on `localStorage` - represents the relevant data for the script initiation and operation.

**_Example:_**

```js
{
  "email": "hidday+strigo-user@strigo.io",
  "initSite": {
    "host": "strigo-demo.web.app",
    "pathName": "/",
    "href": "https://strigo-demo.web.app/",
    "origin": "https://strigo-demo.web.app",
    "search": "",
    "params": {}
  },
  "token": {
    "token": "RhrsHoc1bDcQagl7znXdg-7f4WKeLWa_99zZMj92zen",
    "expiration": 1644512345678
  },
  "webApiKey": "zzzzzz",
  "subDomain": "strigo.dev"
}
```

- `strigoSession` - on `sessionStorage` - represents the data that's relevant to the current session / tab.

**_Example_**

```js
{
  "currentUrl": "https://strigo-demo.web.app/",
  "isPanelOpen": true
}
```

## Code structure and tools

### General notes

We try to keep the script as **zero-dependency** as possible, since it's a code that's intended to run inside your application.

### Modules you can use

- `url` - url tools to parse and build urls.
- `document` - document manipulation tools, for appending Iframes, CSS, other elements to the documetn.
- `storage-utils` - a helper module to manage both `localStorage` and `sessionStorage`.
- `config` - the module that manages `strigoConfig` on `localStorage`.
- `session` - the module that manages `strigoSession` on `sessionStorage` - data is relevant for every session (tab).

## Contributions

Found a bug? Please file a PR!
