{
  "compilerOptions": {
    "target": "ES2020",            // Output JavaScript that works with ES2020
    "module": "ESNext",            // Use ESNext module system for better tree-shaking
    "moduleResolution": "node",    // Resolve modules like Node.js
    "strict": true,                // Enable all strict type-checking options
    "esModuleInterop": true,       // Allows using non-ES modules
    "skipLibCheck": true,          // Skip type-checking of declaration files
    "forceConsistentCasingInFileNames": true,  // Ensure consistent casing in file names
    "outDir": "./dist",            // Output directory for the compiled files
    "rootDir": "./src",            // Root directory for the TypeScript source files
    "declaration": true,           // Generate .d.ts declaration files
    "allowJs": true,               // Allow JavaScript files to be compiled
    "resolveJsonModule": true      // Allow importing JSON files
  },
  "include": [
    "src/**/*"
  ],
  "exclude": [
    "node_modules"
  ]
}

