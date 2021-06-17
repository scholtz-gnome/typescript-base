import Classy from "../src/Classy";

describe("Classy class", () => {
  describe("When instantiated", () => {
    it("has swag property", () => {
      const classyPerson = new Classy(true);

      expect(classyPerson.swag).toBe(true);
    });
  });
});
