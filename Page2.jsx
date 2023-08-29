import React from 'react';
import { SimpleGrid, Container, Center } from '@chakra-ui/react';
import TeamMemberCard from './teamMemberCard';
import member from './teamData';

const Page2 = () => {
  const cardsPerRow = { base: 2, md: 3, lg: 4, xl: 5 }; // Adjust the numbers as needed
  const cardWidth = { base: '100%', md: '50%', lg: '33.33%', xl: '25%' };

  return (
    <Container maxW="200vh">
      <Center>
        <TeamMemberCard member={member[0]} style={{ width: cardWidth.base }} />
      </Center>

      <SimpleGrid columns={4} spacing={4} mt="4">
        {member.slice(1, 30).map((member) => (
          <TeamMemberCard key={member.id} member={member} style={{ width: cardWidth.base }} />
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default Page2;
