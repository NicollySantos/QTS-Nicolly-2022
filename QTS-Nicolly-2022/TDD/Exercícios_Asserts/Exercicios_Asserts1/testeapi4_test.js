import{
  assertExists
} from "http://deno.land/std/testing/asserts.ts"

assertExists("Denosaurus");
Deno.test("Test Assert Exists", () => {
  assertExists("Denosaurus");
  assertExists(false);
  assertExists(0);
});