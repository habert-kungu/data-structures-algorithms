import fs from "node:fs";
const wasmBuffer = fs.readFileSync("/add.wasm");
WebAssembly.instantiate(wasmBuffer).then((wasmModule) => {
  const { add } = wasmModule.instance.exports;
  const sum = add(5, 3);
  console.log(sum);
});
