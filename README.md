# Naibedya Bhuyan's Portfolio

A highly interactive, dual-mode personal portfolio website built with modern web technologies. This project showcases a unique "split personality" concept, offering visitors two distinct ways to experience the portfolio:

*   **Visual & Experience Mode**: A sleek, minimal, and creatively driven interface for general visitors and recruiters looking for design capabilities.
*   **Engineering Lab (Technical Mode)**: A terminal-inspired, data-heavy interface tailored for developers and technical recruiters, featuring system stats, raw data visualization, and a hacker-style aesthetic.

## 🚀 Live Demo
[naibedyabhuyan.com](https://naibedyabhuyan.com) *(Update with actual URL if different)*

## ✨ Key Features

-   **Dual Interface System**: Toggle between "Visual" and "Technical" modes at any time.
-   **3D Interactive Elements**: Built with Three.js and React Three Fiber.
-   **Responsive Design**: Fully responsive layout that adapts gracefully from desktop monitors to mobile phones.
-   **Performance Optimized**: Uses code splitting and lazy loading for fast initial paint.
-   **SEO Ready**: Customized meta tags and Open Graph support for social sharing.
-   **Analytics**: Integrated visitor counting (privacy-friendly).

## 🛠️ Tech Stack

-   **Framework**: [React 18+](https://react.dev/)
-   **Build Tool**: [Vite](https://vitejs.dev/)
-   **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
-   **Animations**:
    -   [Framer Motion](https://www.framer.com/motion/) (Layout & UI transitions)
    -   [GSAP](https://gsap.com/) (Complex sequences)
-   **3D Graphics**:
    -   [Three.js](https://threejs.org/)
    -   [@react-three/fiber](https://docs.pmndrs.assets/react-three-fiber)
    -   [@react-three/drei](https://github.com/pmndrs/drei)
-   **Icons**: [Lucide React](https://lucide.dev/)
-   **Email**: [EmailJS](https://www.emailjs.com/)

## 📦 Installation & Setup

1.  **Clone the repository**
    ```bash
    git clone https://github.com/Naivedya456/Portfolio.git
    cd Portfolio
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Run development server**
    ```bash
    npm run dev
    ```

4.  **Build for production**
    ```bash
    npm run build
    ```

## 📂 Project Structure

```
src/
├── animations/         # GSAP & generic animation configs
├── components/         # Reusable UI components (Navbar, Footer, etc.)
├── layouts/            # Main layout wrappers (Dashboard.jsx)
├── sections/           # Individual page sections (Hero, Projects, Skills)
│   ├── Landing.jsx     # The split-screen onboarding page
│   ├── ...
├── App.jsx             # Root component with routing/mode logic
└── main.jsx            # Entry point
```

## 🔒 Environment Variables

Create a `.env` file in the root directory if you plan to use the contact form:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
