#!/bin/bash

eecho "🐳 Ready for Docker deployment with Node.js 22"ho "🚀 Starting Node.js 22 migration and build process..."

# Exit on any error
set -e

echo "📦 Installing dependencies..."
yarn install --frozen-lockfile

echo "🔄 Building the application..."
yarn build

echo "✅ Build completed successfully!"
echo "🐳 Ready for Docker deployment with Node.js 22"
