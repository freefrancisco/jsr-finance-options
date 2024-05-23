import {assertEquals} from "@std/assert"
Deno.test("hello", () => {
    const x = 1 + 2
    assertEquals(x, 3)

})