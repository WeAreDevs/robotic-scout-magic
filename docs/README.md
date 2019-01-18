# Robotic Scout Magic (RSM)
> A ~~mockup~~ working prototype for a FRC scouting web app.

## Getting Started
1. To start, make sure you have [Node.js](https://nodejs.org/en/) installed.
2. Clone or download this repository to a folder somewhere on the device.
3. Run `npm i -D && npm run build` to install all the needed dependencies.
3. Install [panr](https://github.com/emmercm/panr) and set it up on the machine that is running the server.
4. Run `npm run production` to start the server and access the form page at `http://localhost:8000/`.
5. If you connect external devices, connect to the server though the PAN network, and instead of `localhost`, use the server's local IP. You can find this
by running `ipconfig` in the console.

> [!WARNING]
> We are not sure 100% on how panr works, as we have not tested on a Linux machine yet.

> [!DANGER]
> It is important that you run `npm i -D && npm run build` before your start the production server, as the rendering happens from the dist/ folder. Also remember to do this if you ever update RSM.

Are one of the forms missing something you want? Do you not need something on one of the forms. You can easily edit the forms though a JSON file  in the `forms/` directory. More information on the [Forms](forms.md) page.

## Why Bluetooth?
RSM uses bluetooth for it's connections to it's devices because WiFi access points are banned at competitions.
![](http://i.imgur.com/aKL8OjC.png)

## Licensing
This software is under the MIT Licesne, meaning you can do what ever you want to it. ~~Just don't sue us.~~

## Help Contribute
We are always open to help on this project. See the [Contributing](contributing.md) page.