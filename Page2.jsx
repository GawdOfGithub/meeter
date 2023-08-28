import React from 'react';
import { SimpleGrid, Container, Center } from '@chakra-ui/react';
import TeamMemberCard from './teamMemberCard';
import member from './teamData';

const Page2 = () => {
  const cardsPerRow = { base: 2, md: 6 };
  const cardWidth = { base: '100%', md: '20%', lg: '33.33%' };

  return (
    <Container maxW="200vh">
      <Center>
        <TeamMemberCard member={member[0]} style={{ width: cardWidth }} />
      </Center>

      <SimpleGrid columns={cardsPerRow} spacing={4} mt="4">
        {member.slice(1, 13).map((member) => (
          <TeamMemberCard key={member.id} member={member} style={{ width: cardWidth }} />
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default Page2;
