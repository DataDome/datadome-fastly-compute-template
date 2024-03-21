/// <reference types="@fastly/js-compute" />
// @ts-ignore
import { DataDome } from "@datadome/module-fastly-compute";

addEventListener("fetch", (event) => event.respondWith(DataDome.handleRequest(event)));
