import { Flex, Button, Text } from "@radix-ui/themes";

function App() {
  return (
    <div>
      <Flex direction="column" gap="2">
        <Text>Hello, this is a greeting msg</Text>
        <Button>Let&apos;s Go</Button>
      </Flex>
    </div>
  );
}

export default App;
