import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Toast from "./index";

describe("avatar component", () => {
  it("should render the component", () => {
    render(<Toast message={{ id: "1", title: "Title", description: "description" }} style={{}} />);
  });
});
