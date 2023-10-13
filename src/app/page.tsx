import Cards from "@/components/Cards";
import { Button, Code, Loader, Text, Title } from "@mantine/core";

export default function Home() {
  return (
    <>
      <Title>Welcome to #play14</Title>
      <Button>Click me</Button>
      <br></br>
      <Code>const scheme = useScheme()</Code>
      <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet nam fuga suscipit incidunt tenetur vero distinctio a repudiandae consectetur illo tempora, consequuntur impedit debitis. Facere quis velit amet placeat quae.</Text>
      <Loader type='dots' />
      <Cards />
    </>
  )
}
