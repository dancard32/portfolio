import { Card, H1, Spinner, Text } from "@blueprintjs/core";
import { useShallow } from "zustand/shallow";
import useStylingStore from "../redux/store";

export default function FallBackComponent() {
  const { isDark } = useStylingStore(
    useShallow((state) => ({
      isDark: state.isDark,
    }))
  );

  return (
    <div
      className={isDark ? "bp6-dark" : "bp6"}
      style={{ width: "100vw", height: "100vh" }}
    >
      <Card className="loading-content flex justify-center w-full h-full">
        <Card className="flex-col justify-center w-1/2 h-3/4">
          <H1 className="text-center" style={{ fontFamily: "impact" }}>
            <strong>DanCard()</strong>
          </H1>
          <Text className="text-center my-4">Loading...</Text>
          <Spinner />
        </Card>
      </Card>
    </div>
  );
}
