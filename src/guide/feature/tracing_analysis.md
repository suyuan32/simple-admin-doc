---
order: 14
title: 'Tracing Analysis'
---

## Go Zero supports jaeger for link tracking by default, just declare it in the etc configuration file

```yaml
Telemetry:
  Name: core-api  # service name 
  Endpoint: http://127.0.0.1:14268/api/traces  # jaeger url
  Sampler: 1.0
  Batcher: jaeger
```

## Jaeger local environment deployment
Open `simple-admin-core/deploy/docker-compose/jaeger folder, execute

```shell
docker-compose up -d
```

The local docker was deployed and you can visit `http://localhost:16686/` locally.

> To use ES, please cancel the ES comment in `docker-compose.yaml`, jaeger supports multiple backends at the same time, see [Backend Storage](https://www.jaegertracing.io/docs/1.18/deployment /#storage-backends)

## Preview

![Jaeger UI](/assets/jaeger_ui.png)
