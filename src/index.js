require('dotenv').config();

const { GraphQLServer } = require('graphql-yoga');

const { prisma } = require('./generated');
const { resolvers } = require('./resolvers');


const server = new GraphQLServer({
  typeDefs: 'src/schema.graphql',
  resolvers: resolvers,
  context: {
    prisma: prisma,
  },
  resolverValidationOptions: {
    requireResolversForResolveType: false,
  },
});


server.start(({ port }) => console.log(`GraphQL server is running on the port ${port}`));