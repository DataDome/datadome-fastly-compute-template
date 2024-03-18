/// <reference types="@fastly/js-compute" />
// @ts-ignore
import { DataDome } from "@datadome/fastly-compute-at-edge";

addEventListener("fetch", (event) => event.respondWith(DataDome.handleRequest(event)));
