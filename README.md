# Afterlife Online Electron Client

## Description
This project is a simple Electron client that allows users to connect and play Afterlife Online.

## Prerequisites
- Node.js (v14.x.x or higher recommended)
- npm (v7.x.x or higher recommended)

## Installation
1. Clone the repository: git clone https://github.com/spoonpaw/afterlife-online-electron.git
2. Navigate to the project folder: cd afterlife-online-electron
3. Install the dependencies: npm install

## Usage

### Development
To run the development build: npm start

### Production
To run the production build: npm run start-prod

## Packaging
- For macOS: npm run package-mac
- For Ubuntu: npm run package-ubuntu
- For Windows: npm run package-windows

## Features
- Connect to a local or remote Afterlife Online game server
- Window size of 800x600
- Menu bar is disabled for a clean UI

## Version Information
This project is currently at version 1.0.0.

## Dev Dependencies
- TypeScript: 4.9.5
- Electron: 25.8.2
- Electron-packager: 17.1.1
- Cross-env: 7.0.3
- @types/node: 14.18.48
- ts-node: 9.1.1

## Known Issues
- The icon might not show up in the menu bar on some operating systems; clearing the cache or packaging the application may resolve this issue.
