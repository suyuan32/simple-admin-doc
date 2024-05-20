---
order: 14
title: 'Tracing Analysis'
head:
  - - meta
    - name: keywords
      content: tracing, go zero, jaeger, debug, local deployment
---

## Go Zero supports Jaeger for link tracking by default, just declare it in the etc configuration file

```yaml
Telemetry:
  Name: core-api # Service name
  Endpoint: localhost:4317
  Sampler: 1.0
  Batcher: otlpgrpc # use grpc
```

## Jaeger local environment deployment
Open `simple-admin-core/deploy/docker-compose/jaeger folder, execute

```shell
docker-compose up -d
```

The local docker was deployed and you can visit `http://localhost:16686/` locally.

> To use ES, please cancel the ES comment in `docker-compose.yaml`, Jaeger supports multiple backends at the same time, see [Backend Storage](https://www.jaegertracing.io/docs/1.18/deployment /#storage-backends)

## Preview

![Jaeger UI](/assets/jaeger_ui.png)
