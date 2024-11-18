# dragee-vercel-doc

This repository constructs documentation for the Dragee.io project.

## General information

This project is based on [Docusaurus](https://docusaurus.io/) with [docusaurus-plugin-typedoc](https://typedoc-plugin-markdown.org/plugins/docusaurus) and [Bun](https://bun.sh/).  
It also is automatically deployed on https://dragee-vercel-doc.vercel.app/ with [Vercel](https://vercel.com).

The generated documentation contains dynamic asserters and graphers docs.  
The asserters and graphers repos are git submodules for this project, see the [submodules README](./projects/README.md) and [.gitmodules](.gitmodules)

## Local usage

### Install

```shell
bun install
git submodule update --init --recursive
```

### Update

```shell
git submodule update --recursive --remote
```
