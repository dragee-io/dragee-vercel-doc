#!/usr/bin/env zx

import "zx/globals";

const docusaurus = await $`docusaurus write-translations`.pipe(process.stdout);

echo("Creating i18n/fr/docusaurus-plugin-content-docs/current folder");
const creatingFolder =
  await $`mkdir -p i18n/fr/docusaurus-plugin-content-docs/current`.pipe(
    process.stdout
  );

echo("Copying original doc to fr locale folder");
const copyingDoc =
  await $`cp -r docs/** i18n/fr/docusaurus-plugin-content-docs/current`.pipe(
    process.stdout
  );
