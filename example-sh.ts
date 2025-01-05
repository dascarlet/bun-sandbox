import { $ } from "bun";

const result = await $`echo "Hello World from Bun Shell" | wc -w`.text();

console.log(result);
