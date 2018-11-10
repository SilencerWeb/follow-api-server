require('dotenv').config();

const { GraphQLServer } = require('graphql-yoga');
const { Prisma } = require('prisma-binding');

const { resolvers } = require('./resolvers');


const server = new GraphQLServer({
  typeDefs: 'src/schema.graphql',
  resolvers,
  context: (request) => ({
    ...request,
    prisma: new Prisma({
      typeDefs: 'src/generated/prisma.graphql',
      endpoint: process.env.PRISMA_ENDPOINT,
      secret: process.env.PRISMA_SECRET,
    }),
  }),
  resolverValidationOptions: {
    requireResolversForResolveType: false,
  },
});


server.start(() => console.log(`GraphQL server is running on http://localhost:4000`));