# Kasir App - React JS
Ini merupakan repository aplikasi kasir CRUD sederhana hasil [Tutorial YouTube](https://www.youtube.com/playlist?list=PLIan8aHxsPj1ugN7lJ6zdibcetnzpaeVm) namun dengan sedikit perubahan dalam syntax React JS yang mana telah menggunakan **Functional Component** dan **React Hooks**, alih-alih menggunakan **React Class Component**.
### # Cara Instalasi
Clone Repo
```
https://github.com/AlfitoDimasss/React-Kasir-App.git
```
Install JSON Server
```
npm install -g json-server
```
Masuk ke folder `simple-app`
```
npm install
```
### # Cara Pakai
Masuk ke folder `simple-app-be` dan jalankan perintah untuk mengaktifkan database
```
json-server --watch db.json --port=3004
```
JSON server dapat diakses pada `http://localhost:3004/`

Masuk ke folder `simple-app` dan jalankan perintah
```
npm start
```


Daftar product dapat diubah atau ditambah dengan mengedit file `simple-app-be/db.json`.
