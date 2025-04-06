# CodeQuil - Modern Digital Agency Website

A modern, responsive website for CodeQuil digital agency built with React.js and Tailwind CSS. The website features smooth animations, modern design, and a fully responsive layout.

## Features

- 🎨 Modern, responsive design
- ⚡ Fast performance with Vite
- 🎭 Smooth animations with Framer Motion
- 📱 Mobile-first approach
- 🎯 SEO-friendly structure
- 🎨 Customizable theme with Tailwind CSS

## Tech Stack

- React.js
- Tailwind CSS
- Framer Motion
- Vite
- React Router
- Headless UI
- Hero Icons

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/codequil.git
cd codequil
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open your browser and visit `http://localhost:3000`

### Building for Production

To create a production build:

```bash
npm run build
# or
yarn build
```

The build files will be created in the `dist` directory.

## Project Structure

```
codequil/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Portfolio.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── assets/
│   ├── App.jsx
│   └── index.jsx
├── public/
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## Customization

### Colors

The color scheme can be customized in the `tailwind.config.js` file:

```js
theme: {
  extend: {
    colors: {
      primary: "#0F172A",
      secondary: "#1E293B",
      accent: "#3B82F6",
      // ... other colors
    }
  }
}
```

### Content

Update the content in the respective component files to match your needs. The website uses placeholder content that can be easily replaced.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

Your Name - your.email@example.com
Project Link: https://github.com/yourusername/codequil 