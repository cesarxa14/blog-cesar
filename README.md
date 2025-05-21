# 📝 Cesar Blog

**Cesar Blog** is a simple blog application built with **Angular 14** that allows users to browse and read posts. It uses `json-server` as a mock backend to serve post data from a local JSON file.

## 🚀 Technologies Used

- Angular 14
- Bootstrap 5


## Features

- List of blog posts from json-server

- Filter posts by title using an input box

- View detailed post pages using dynamic routing

- Uses @Input() and @Output() for communication between components

- Responsive UI styled with Bootstrap

- Angular animations applied between route transitions

- Redirect to homepage if the route does not exist

## 📦 Installation & Setup

Follow the steps below to run the project locally:

### 1. Clone the repository

```bash
git clone https://github.com/cesarxa14/blog-cesar
cd blog-cesar
```

### 2. Install all dependencies 

```bash
npm install
```

### 3. Install json-server globally (if not already installed)

```bash
npm install -g json-server
```

### 4. Run the mock API server

```bash
json-server --watch db.json --port 3000
```
This will serve data from db.json at:
http://localhost:3000/posts

### 5. Run the Angular app

```bash
ng serve -o
```










