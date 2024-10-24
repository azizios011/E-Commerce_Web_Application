
---

# **E-Commerce Web Application Frontend**

Welcome to the **Frontend of the E-Commerce Web Application**! This project is built with **Next.js** and **TypeScript** to provide a fast, scalable, and user-friendly interface for your e-commerce platform. The frontend leverages the **App Router** introduced in Next.js, along with reusable components and modern tools like **Framer Motion** for animations and **Stripe** for payment processing.

With this organized codebase, the application ensures easy maintenance, scalability, and seamless integration of features such as authentication, cart management, and payments.

---

## **Features of the Frontend**

- **Authentication Pages**: Manage user sign-in and sign-up with modular routes.
- **Payment Integration**: Secure payments handled via **Stripe** API.
- **Reusable Components**: Header, Footer, Navbar, and Buttons are organized in modular layouts.
- **Animations**: Smooth page transitions and animations powered by **Framer Motion**.
- **TypeScript**: Strong typing ensures code safety and predictability.
- **CSS with Tailwind**: Fast styling with utility classes.

---

## **Getting Started**

To run the frontend locally, follow these instructions.

### **Prerequisites**

Make sure you have the following installed:
- **Node.js** (v16 or above recommended)
- **npm** (comes with Node.js) or **yarn**

---

## **Installation**

Clone the project and navigate to the `frontend` directory:

```bash
git clone <your-repository-url>
cd E-Commerce_Web_Application/frontend
```

### **Install Dependencies**

First, install all necessary dependencies:

```bash
npm install --legacy-peer-deps
```

This flag (`--legacy-peer-deps`) helps resolve peer dependency conflicts that may occur due to version mismatches (like the **framer-motion** and **Stripe.js** conflict with React 19).

---

### **Special Dependency Recommendations**

#### **Framer Motion**
Since **Framer Motion v11.11.9** might encounter peer dependency issues with React 19, we recommend running:

```bash
npm install framer-motion --legacy-peer-deps
```

This ensures the animation library integrates smoothly with your project without breaking changes.

#### **Stripe.js**
If the standard installation of `@stripe/stripe-js` fails due to dependency conflicts, use:

```bash
npm install @stripe/stripe-js --legacy-peer-deps
```

This command ensures that Stripe will function properly for payment integration.

---

## **Running the Development Server**

Once dependencies are installed, start the development server:

```bash
npm run dev
```

Open your browser and navigate to:

```
http://localhost:3000
```

This will load the application’s homepage. Changes made in the code will reflect live thanks to **hot reloading**.

---

## **Build for Production**

To build the project for production, run:

```bash
npm run build
```

This will generate optimized static files in the `.next/` folder.

---

## **Folder Structure Overview**

The project is structured to maintain **modularity and scalability**. Below is a summary of the key folders:

- **`app/`**: Contains routes and global layout components.
- **`src/API/`**: Manages API models and services.
- **`src/components/`**: Contains reusable UI components.
- **`public/`**: Stores static assets like images and icons.
- **`pages/`**: Contains the core pages for the store and homepage.

For a more detailed breakdown, refer to the **README.md** files in individual folders.

---

## **Scripts Available**

- **`npm run dev`**: Starts the development server.
- **`npm run build`**: Builds the project for production.
- **`npm run start`**: Starts the production server.
- **`npm run lint`**: Runs ESLint for code quality checks.

---

## **Troubleshooting**

1. **Peer Dependency Conflicts**:
   - Use the `--legacy-peer-deps` flag during installation if you encounter conflicts.
   - Example:
     ```bash
     npm install <package-name> --legacy-peer-deps
     ```

2. **Hydration Errors** (Common in Next.js):
   - Ensure that any **stateful client components** do not contain non-deterministic code (like `Date.now()` or `Math.random()`).
   - Move conditional logic (like `if (typeof window !== 'undefined')`) into **useEffect hooks** to avoid mismatched server and client HTML.

---

## **Recommended Improvements**

- **State Management**: Add **Context API** or **Redux** to manage the global state (like cart items or user authentication).
- **Service Layer**: Implement **API services** to handle network requests separately from the models in `src/API`.
- **Testing**: Integrate **Jest** or **Cypress** for unit and end-to-end testing.

---

## **Contributing**

We welcome contributions from the community. Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes and commit them (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a Pull Request.

---

## **License**

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

---

## **Contact**

If you encounter any issues or have questions, feel free to open an issue or contact the project maintainers.

---
