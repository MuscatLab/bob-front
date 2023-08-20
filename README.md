## BoB - Bring your Own BoB!

### Development Environment

#### Default Information

- After clone git repository, run `npm install` to install dependencies

#### Folder Structure

**src/app**
- api
  - getAllMenu : Fetch all menus from API server.
  - postCard : Trying to pay with user ID and menu selection
- order
  - menu : Show menus and recommended menu from previous user data
  - result : Notice order number and show status of order

- `page.tsx` in **src/app** : Check if login and Advertise new/promotion products

### Environment Settings

- If you want to deploy at `CloudFlare Pages`, please add `nodejs_compat` flag to compaitibility flag menu.

#### `.env` file settings

- Add `BASE_URL` for backend endpoint, and add `BUCKET_URL` without `http://` or `https://` to download promotion image from your own server.

### Open-source License

- [React.js](https://react.dev): MIT License
- [Next.js](https://nextjs.org): MIT License
- [Tailwind CSS](https://tailwindcss.com): MIT License
- [PostCSS](https://postcss.org): MIT License
- [TypeScript](https://www.typescriptlang.org/): Apache 2.0 License
- [React Icons](https://react-icons.github.io/react-icons/): [See License List at official repository](https://github.com/react-icons/react-icons)
- [ESLint](https://eslint.org/): MIT License
