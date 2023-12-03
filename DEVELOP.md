# Developer History

## Overview

This markdown is simply for me to write down my thoughts and all the important set-up commands that I used for this repository. This is mostly for me to streamline developing in the future and to understand my developer ideas for future reference.

## Commands

### React Set-up
Initial React set-up
```bash
git clone https://github.com/dancard32/portfolio.git
cd portfolio
npx create-react-app .
```

### Tailwind CSS Set-up

Refer to the [https://tailwindcss.com/docs/guides/create-react-app](Tailwind CSS) guide, I ran the following:
```bash
npm install -D tailwindcss
npx tailwindcss init
```

### Flowbite Set-up

Flowbite requires the following dependencies
```bash
npm install -D postcss autoprefixer
npm install flowbite flowbite-react
```

Add flowbite as a required plugin
```bash
module.exports = {

    plugins: [
        require('flowbite/plugin')
    ]

}
```

## React Plugins
### Router Set-up
The following is a dependency to be able to route
```bash
npm install react-router-dom
```

### Typewriter
This allows for the typewriter for the splash page
```bash
npm install typewriter-effect
```

### react-reveal
Hasn't been updated since like 2018 and must use legacy
```bash
npm install react-reveal --legacy-peer-deps
```

### react-pdf
Hasn't been updated in a while and must use legacy
```bash
npm install react-pdf --legacy-peer-deps
```

### react-scroll-to-top
Required to scroll to the top of the page
```bash
npm install react-scroll-to-top
```