# SingleDeploy Docker

> 单体服务部署项目

## 支持服务

- Nginx
- MySql
- Redis
- Golang Server
- Nextjs
- Nestjs

## Requirements

- Docker
- Docker Compose

## Init

To initialize the environment, run the following command:

```bash
cp .env.example .env
```

## Commands

To start the environment, run the following command:

```bash
sh ./scripts/up.sh
```

To stop the environment, run the following command:

```bash
sh ./scripts/down.sh
```

To restart the environment, run the following command:

```bash
sh./scripts/restart.sh
```
