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