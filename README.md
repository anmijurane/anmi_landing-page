# Anmijurane's Landing Page

Welcome to the repository for my personal landing page! This project is a modern, fast, and responsive website built to showcase my portfolio and skills.

## 🚀 Tech Stack

This project leverages the power of modern web technologies:

-   **[Astro](https://astro.build/)**: The web framework for content-driven websites.
-   **[Tailwind CSS v4](https://tailwindcss.com/)**: A utility-first CSS framework for rapid UI development.
-   **[Biome](https://biomejs.dev/)**: A fast formatter and linter for the web.

## 📂 Project Structure

The project follows a standard Astro structure:

```text
/
├── public/       # Static assets (images, fonts, etc.)
├── src/
│   ├── components/ # Reusable UI components
│   ├── layouts/    # Page layouts
│   ├── pages/      # Application routes
│   ├── scripts/    # Client-side scripts
│   └── styles/     # Global styles
└── package.json  # Project dependencies and scripts
```

## 🛠️ Getting Started

Follow these steps to get a local copy up and running.

### Prerequisites

-   Node.js (latest LTS version recommended)
-   npm (comes with Node.js)

### Installation

1.  **Clone the repository**

    ```bash
    git clone https://github.com/anmijurane/anmijurane-landing.git
    cd anmijurane-landing
    ```

2.  **Install dependencies**

    ```bash
    npm install
    ```

3.  **Run the development server**

    ```bash
    npm run dev
    ```

    Open [http://localhost:4321](http://localhost:4321) in your browser to see the result.

## 📜 Scripts

Here are the available scripts you can run:

| Command              | Description                                           |
| :------------------- | :---------------------------------------------------- |
| `npm run dev`        | Starts the local development server.                  |
| `npm run build`      | Builds the site for production into the `./dist/` folder. |
| `npm run preview`    | Previews the production build locally.                |
| `npm run check`      | Runs Biome to check for linting errors.               |
| `npm run format:biome`| Runs Biome to format the code.                        |

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/anmijurane/anmijurane-landing/issues).

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
