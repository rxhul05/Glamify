# Glamify - Beauty & Cosmetics App

A premium, modern mobile application for browsing and purchasing beauty products, built with **Expo (React Native)** and **TypeScript**. This app features a sleek UI with dark mode support, category browsing, and curated collections.

## 📱 Features

- **Modern UI/UX**: clean, responsive design using `react-native-safe-area-context` and custom styles.
- **Dark Mode Support**: Seamless toggle between light and dark themes using Zustand for state management.
- **Product Discovery**:
  - **Dynamic Hero Banners**: Auto-scrolling carousel showcasing top brands (Fenty, Rare Beauty, etc.).
  - **Shop by Category**: Easy navigation for Makeup, Skincare, Fragrance, and Hair.
  - **Premium Collections**: Exclusive sections for high-end curated items.
- **Product Listings**: Horizontal scrolling lists for trending items like Perfumes, Body Care, and more.
- **Navigation**: robust file-based routing with **Expo Router**.
- **State Management**: Scalable global state using **Zustand** (Auth, Cart, Theme, Wishlist).
- **Backend Integration**: Ready for **Supabase** integration.

## 🛠 Tech Stack

- **Framework**: [Expo](https://expo.dev/) (React Native)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Routing**: [Expo Router](https://docs.expo.dev/router/introduction/)
- **State Management**: [Zustand](https://github.com/pmndrs/zustand)
- **Icons**: [Lucide React Native](https://lucide.dev/guide/packages/lucide-react-native)
- **Backend**: [Supabase](https://supabase.com/) (configured in dependencies)

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Expo Go](https://expo.dev/client) app installed on your iOS/Android device (for testing)

### Installation

1.  **Clone the repository** (if applicable) or navigate to the project directory:
    ```bash
    cd /path/to/project
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    # or
    yarn install
    ```

### Running the App

Start the development server:

```bash
npx expo start
```

This will display a QR code in your terminal.
- **Scan with your phone** (using the Expo Go app).
- **Press 'i'** to open in the iOS Simulator (macOS only).
- **Press 'a'** to open in the Android Emulator.
- **Press 'w'** to open in the Web browser.

## 📂 Project Structure

```
├── app/                  # Application source code (Screens & Routing)
│   ├── (tabs)/           # Main tab navigation (Home, browse, etc.)
│   ├── _layout.tsx       # Root layout configuration
│   └── ...
├── components/           # Reusable UI components
├── constants/            # Global constants (Colors, Fonts, etc.)
├── data/                 # Mock data (Products, Categories)
├── store/                # Global state stores (Zustand)
│   ├── authStore.ts
│   ├── themeStore.ts
│   └── ...
├── assets/               # Images and static assets
└── package.json          # Project dependencies and scripts
```

## 🎨 Customization

### Themes
Edit `constants/Colors.ts` to modify the color palette. Dark mode logic is handled in `store/themeStore.ts`.

### Data
Mock data for products and categories can be found in `data/products.ts`. Update this file or replace it with API calls to `Supabase` for real-time data.

## 🤝 Contributing

1.  Fork the project
2.  Create your feature branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

