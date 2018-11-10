const user = (_, args, context, info) => {
  return context.prisma.query.user(
    {
      where: {
        username: args.username,
      },
    },
    info,
  );
};

const users = (_, args, context, info) => {
  return context.prisma.query.users(
    {
      where: {},
    },
    info,
  );
};


module.exports = {
  user,
  users,
};