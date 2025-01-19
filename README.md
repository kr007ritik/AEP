# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


### Suggestions

- Router : If Nested routing is not in use then, always implement self closing tag `<Route element={<App />} />.` Also nested component should be not be directly merged to create a final component in parent routing file.

- Directory structure could be more easy to read, like the larger component should be kept in a seperate folder like `pages` and components in `component` folder

#### Implementation ideas

- Props are not used anywhere, consider using that.

- Form validation could be implemented using javasscript. Suggested library are `formik` & `Yup`.

- Implement hooks like `useReducer` & `useContext`.

- Consider using `tailwind`.

- Consider implementing api call.