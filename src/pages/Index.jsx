import { Container, Text, VStack, Heading, Box, Image, Button, SimpleGrid } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Index = ({ posts }) => {
  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Welcome to My Personal Blog</Heading>
        <Text fontSize="lg">A place where I share my thoughts, experiences, and stories.</Text>
        <Box boxSize="sm">
          <Image src="/images/blog-welcome.jpg" alt="Welcome to my blog" />
        </Box>
        <Button as={Link} to="/add-post" colorScheme="teal" size="lg">Add New Post</Button>
        <SimpleGrid columns={[1, null, 2]} spacing={10} mt={10}>
          {posts.map((post, index) => (
            <Box key={index} p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">{post.title}</Heading>
              <Text mt={4}>{post.content}</Text>
              {post.image && <Image src={post.image} alt={post.title} mt={4} />}
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;