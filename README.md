# 🐳 Taller Práctico de Docker - Aplicación Web con Node.js, MongoDB y Docker Compose
### Integrantes: 
Caleb Villalba Hernández - T00047691

## 🎯 Objetivo

Desarrollar una solución distribuida usando contenedores Docker, que incluya:

- Una aplicación web en Express (Node.js)
- Almacenamiento de mensajes en archivo (volumen)
- Integración con base de datos MongoDB
- Orquestación con Docker Compose

---

## 📁 Estructura del Proyecto

```bash
taller-docker/
│
├── app/
│   ├── index.js
│   └── package.json
├── Dockerfile
├── .dockerignore
└── docker-compose.yml

```

---

## ⚙️ Requisitos

- Docker
- Docker Compose
- WSL (opcional si usas Windows)

---

## 🚀 Instrucciones

### 1. Clonar el proyecto

```bash
git clone https://github.com/keilevv/taller-docker.git
cd taller-docker
```

### 1. Construir con Docker Compose

```bash
docker-compose up --build

```

## 🌐 Endpoints disponibles

### GET /

Devuelve el saludo

```bash
curl http://localhost:3000

```

### POST /mensaje

Guarda un mensaje en la base de datos

```bash
curl -X POST http://localhost:3000/mensaje \
  -H "Content-Type: application/json" \
  -d '{"mensaje": "Hola desde Docker Compose"}'

```
