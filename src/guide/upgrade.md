---
order: 7
title: "Version Upgrade"
---

## How to upgrade your project to the latest version?

1. Update the dependencies in your go.mod file to the latest version.
2. Regenerate the makefile using the `goctls extra makefile` command.
3. Regenerate the dockerfile using the `goctls docker` command.
4. Update the Ent template using the `goctls extra ent template` command.
5. Regenerate project files using `make gen-api` and `make gen-rpc`.
