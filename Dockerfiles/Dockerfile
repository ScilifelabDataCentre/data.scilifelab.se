# Use alpine Linux, download desired version of HUGO and build html files
FROM alpine:3.23.8@sha256:469c9ea410b9215eaee7976ba6c0639039b444be8e5d638f7abbada189971eb2 AS build
RUN apk update && apk upgrade
RUN apk add --no-cache wget=1.25.0-r2
ARG HUGO_VERSION="0.157.0"
ARG HUGO_ENV_ARG
WORKDIR /src
COPY ./ /src
RUN wget --quiet "https://github.com/gohugoio/hugo/releases/download/v${HUGO_VERSION}/hugo_${HUGO_VERSION}_Linux-64bit.tar.gz" && \
    tar xzf hugo_${HUGO_VERSION}_Linux-64bit.tar.gz && \
    rm -r hugo_${HUGO_VERSION}_Linux-64bit.tar.gz && \
    mv hugo /usr/bin && \
    chmod 755 /usr/bin/hugo && \
    mkdir /target && \
    hugo -d /target -e "${HUGO_ENV_ARG}"

# Serve the generated html using nginx
FROM nginx/nginx-unprivileged:stable-alpine@sha256:637c35e46af7bc0dd3d3bcf7162e004e13ab3b370fde7cd416e2ac410b5a985a
COPY Dockerfiles/site.conf /etc/nginx/conf.d/default.conf
COPY --from=build /target /usr/share/nginx/html

EXPOSE 8080
