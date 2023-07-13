#QUICK START

# npm init

- npm install joy // untuk melakukan validasi
- npm install express //
- npm install --save-dev @types/express // bantuan auto complate teks editor yang kita gunakan
- npm install --save-dev prisma // untuk database
- npm install winston // untuk logger
- npm install bcrypt // untuk hashing password
- npm install --save-dev @types/bcrypt // bantuan auto complate teks editor yang kita gunakan
- npm install uuid // untuk nyimpan session dalam bentuk unique id
- npm install --save-dev @types/uuid // bantuan auto complate teks editor yang kita gunakan
- npm install --save-dev jest @types/jest // untuk unit test beserta aut complate teks editornya
- npm install --save-dev babel-jest @babel/preset-env // jest belum support untuk module, babel digunakan untuk mentranslate ketika dijalakan jest
- setup babel https://babeljs.io/setup#installation
- "scripts": {
  "test": "jest -i" // agar unit test sequensial
  },
- npm install --save-dev supertest @types/supertest // karena menggunakan express supaya lebih mudah implementasi unit test jest

## PROJECT

- atur database
- buat schema
- buat validation
- buat service
- buat controller
- buat route (public api)
- panggil public api pada application web.js
- buat middleware
- panggil middleware pada applicationn web.js
-
