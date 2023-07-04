import { describe, it, expect } from "vitest";
import { add, api_url, emp, fetchData, reveser, student } from "./Helper";
import axios from "axios";

describe("add two num", () => {
  it("add 5+3=8", () => {
    expect(add(7, 3)).toBe(10);
  });
  it("add 500+500=1000", () => {
    expect(add(500, 500)).toBe(1000);
  });
  it("adding string 2 + string 3= 0 ", () => {
    expect(add("3", "5")).toBe(0);
  });
});

describe("reverse function", () => {
  it("reverse like abc=cba", () => {
    expect(reveser("abacus")).toBe("sucaba");
  });
});

describe("api url check", () => {
  it("api valid check", () => {
    expect(api_url).toBe("https://jsonplaceholder.typicode.com/users");
  });
});
describe("arry check", () => {
  it("array validation", () => {
    expect(emp).toEqual(["srenath", "savitha", "sumesh", "aryan"]);
  });
});

describe("student details", () => {
  it("student data check", () => {
    expect(student).toHaveProperty("name");
    expect(student).toHaveProperty("age");
  });
});

describe("api new testing", () => {
  it("api check", async () => {
    const data = await fetchData();
    expect(data).toHaveProperty("userId");
  });
});

describe("function check",()=>{
    it("reverse",()=>{
        expect(reveser).toBeDefined()
    })
})