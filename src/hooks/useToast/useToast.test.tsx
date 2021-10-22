import { act, renderHook } from "@testing-library/react-hooks";
import TelluriaProvider from "..";
import { useToast } from "./useToast";

describe("useToastHook", () => {
  it("should add Toast", () => {

    const { result } = renderHook(() => useToast(), { wrapper: TelluriaProvider });

    act(() => result.current.addToast({ title: "Alert", description: "This is a alert" }));

  });
});
