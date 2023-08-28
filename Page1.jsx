import React from 'react';
import { Container, Flex, Spacer } from '@chakra-ui/react';
import TeamMemberCard from './teamMemberCard';
import member from './teamData';

const Page1 = () => {
  const cardWidth = { base: '100%', md: '20%', lg: '33.33%' };

  return (
    <Container maxW="200vh">
      <Flex direction="column" alignItems="center">
        {/* First Card */}
        <TeamMemberCard member={member[0]} style={{ width: cardWidth }} />
      </Flex>

      {/* Triangular Layout */}
      <Flex justifyContent="center" mt="4">
        {/* Spacer */}
        <Spacer />

        {/* Second Card */}
        <Flex direction="column" alignItems="center">
          <TeamMemberCard member={member[1]} style={{ width: cardWidth }} />
        </Flex>

        {/* Spacer */}
        <Spacer />

        {/* Third Card */}
        <Flex direction="column" alignItems="center">
          <TeamMemberCard member={member[2]} style={{ width: cardWidth }} />
        </Flex>

        {/* Spacer */}
        <Spacer />
      </Flex>
    </Container>
  );
};

export default Page1;
