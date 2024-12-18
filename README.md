# Empty Template

A clean and minimal starter template for modern web development with **Next.js 15**, **TypeScript**, and **Tailwind CSS**.

## Features

- **Next.js 15**: Leverage the latest features of Next.js, including performance optimizations and the Turbopack bundler.
- **TypeScript**: Static typing for a robust development experience.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.
- **ESLint**: Ensure code quality and consistency.
- **Bun**: A fast JavaScript runtime for package management and development.

## Getting Started

### Prerequisites

Ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (v18 or higher)
- [Bun](https://bun.sh/) (recommended for package management and scripts)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Vanckoe/next15-clean-template.git
   cd next15-clean-template
   ```

2. Install dependencies using Bun:

   ```bash
   bun install
   ```

### Running the Development Server

Start the development server:

```bash
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view your application.

### Building for Production

To build your application for production:

```bash
bun run build
```

Start the production server:

```bash
bun run start
```

## Project Structure

```plaintext
.
├── pages/          # Next.js pages
├── components/     # Reusable React components
├── styles/         # Tailwind CSS styles
├── public/         # Static assets
├── tsconfig.json   # TypeScript configuration
├── package.json    # Project metadata and dependencies
```

## Dependencies

### Main Dependencies

- `react`: ^19.0.0
- `react-dom`: ^19.0.0
- `next`: 15.1.1

### Development Dependencies

- `typescript`: ^5
- `@types/node`: ^20
- `@types/react`: ^19
- `@types/react-dom`: ^19
- `postcss`: ^8
- `tailwindcss`: ^3.4.1
- `eslint`: ^9
- `eslint-config-next`: 15.1.1
- `@eslint/eslintrc`: ^3
- `@types/bun`: latest

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests to improve this template.

Happy coding! 🎉
