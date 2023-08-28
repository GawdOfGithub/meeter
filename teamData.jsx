const member = [];

for (let i = 1; i <= 50; i++) {
  const randomU = Math.floor(Math.random() * 1000000); // Generate a random u parameter
  member.push({
    id: i,
    name: `Team Member ${i}`,
    role: 'Role',
    image: `https://i.pravatar.cc/200?u=${randomU}`,
    index: i - 1,
  });
}

export default member;
