# Frontend - Backend

## 1. Create Project Folder

1. Create a project folder.
2. Create `frontend` and `backend` folders.
3. Open the Lab7 integrated terminal and split it into two terminals.
4. Open the `frontend` folder in the left-side terminal.
5. Open the `backend` folder in the right-side terminal.

---

## 2. Backend

### a. Initialize Backend

Initialize the backend using:

```bash
npm init -y
```

### b. Install Nodemon

Install Nodemon using:

```bash
npm i nodemon
```

### c. Update `package.json`

Open `package.json` from the backend folder and update:

* `type` to `module`
* `scripts`

### d. Create `app.js`

Create an `app.js` file in the backend folder.

---

## 3. Frontend

### a. Create Vite Project

Run:

```bash
npm create vite@latest
```

### b. Enter Project Name

Enter:

```text
.
```

as the project name.

### c. Select Framework

Select **React** using the arrow keys.

### d. Select Variant

Select **JavaScript** using the arrow keys.

### e. Select Linting

Select **ESLint** for linting using the arrow keys.

### f. Install and Start Frontend

Install the dependencies and start the frontend.

---

# COMPONENTS

1. Simple JavaScript functions that return HTML directly.
2. The component name must start with a capital letter.
3. It should be treated as an HTML tag.
4. It must be closed.

---

# Object Destructuring

```javascript
const { bname, price, quantity, rating, picUrl } = props.book;
```

### 1. Does not depend on order

Object destructuring does not depend on the order of properties.

If a property is not available, it is initialized with `undefined`.

### 2. Components include styles

There are three ways to apply styles:

#### External CSS

* Create the style in `index.css`.
* Use it in the component.

#### Internal CSS

Create a property as an object:

```javascript
const qtyStyle = {
    fontSize: "1rem",
    color: "blue",
    textAlign: "center",
    backgroundColor: "yellow",
    padding: "10px",
};
```

Then apply it using the `style` attribute:

```jsx
<h3 style={qtyStyle}>Quantity: {quantity}</h3>
```

#### Inline CSS

In this method, we use two curly braces `{}` with the `style` attribute.

All CSS properties must use camelCase, for example `textAlign`.

```jsx
<h4 style={{ color: "red", textAlign: "center" }}>
    Rating: {rating}
</h4>
```
App.jsx should contain minimum code
by Default button in html is submit button