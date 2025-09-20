# Etapa de build
FROM node:18 AS builder

WORKDIR /app

# Copia os arquivos do projeto
COPY . .

# Instala as dependências ignorando conflitos de peer dependencies
RUN npm install --legacy-peer-deps

# Gera os arquivos de produção
RUN npm run build

# Etapa final: servidor Nginx para servir os arquivos
FROM nginx:alpine AS production

# Remove os arquivos padrão do Nginx
RUN rm -rf /usr/share/nginx/html/*

# Copia os arquivos gerados pelo build para o Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Copia a configuração personalizada do Nginx (opcional)
# COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
