# Gunakan image Node.js versi terbaru
FROM node:18

# Tentukan working directory
WORKDIR /app

# Copy package.json dan package-lock.json terlebih dahulu untuk caching
COPY package.json ./

# **Nonaktifkan Husky saat install dependencies**
RUN npm install

# Copy seluruh kode proyek ke dalam container
COPY . .

# Build Strapi untuk production
RUN npm run build

# Expose port yang digunakan oleh Strapi
EXPOSE 1338

# Jalankan Strapi dalam mode production
CMD ["npm", "run", "start"]
