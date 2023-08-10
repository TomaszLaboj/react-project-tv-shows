import { cleanUpSummary } from "./cleanUpSummary";

test("return summary without html tags", () => {
  expect(
    cleanUpSummary(
      "<p>The survivors plan their next steps; Cersei makes a power move.</p><p></p>"
    )
  ).toBe("The survivors plan their next steps; Cersei makes a power move.");
});
