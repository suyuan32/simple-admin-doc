---
order: 3
title: "Doge Deployment Tools"
---


## Introduction

Doge is a command-line tool for downloading and deploying modules for Simple Admin. It provides functions such as module source code download, module docker, k8s deployment, server maintenance, etc. Users can upload their own paid modules to earn revenue. More than 10 modules have been collected.

::: warning
Doge is an exclusive tool for members. Since this tool needs to connect to the server to download files and paid modules, only members can use it.
:::

## Deploying Modules

Use the `deploy` command to deploy modules.

```shell
doge docker deploy -a "moduleId"
```

## Module List


| **ID**       | **Name**                          | **Description**                                                            |
| ------------ | --------------------------------- | -------------------------------------------------------------------------- |
| core         | Core - Core Module                | Core module, responsible for user authentication, backend management, etc. |
| cms          | Cms - Article Module              | Article management module                                                  |
| pay-api      | Pay API - Payment Service (API)   | Payment service                                                            |
| pay-rpc      | Pay Rpc - Payment Service (RPC)   | Payment service                                                            |
| mms-rpc      | Member RPC - Member Service (RPC) | Member service                                                             |
| mms-api      | Member API - Member Service (API) | Member service                                                             |
| job          | Job - Scheduled Task              | Scheduled task service                                                     |
| mcms         | Message Center - Message Center   | Provides SMS and email services                                            |
| fms          | File - File Management            | File upload management service                                             |
| backend-vben | Simple Admin Backend UI - Vben    | Vben-based backend interface                                               |
| simple-uni   | Simple Uni                        | Uni App frontend scaffold                                                  |
