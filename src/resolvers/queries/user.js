const user = (_, args, context, info) => {
  
  return context.prisma.user(
    {
      where: {
        username: args.username,
      },
    },
    info,
  );
};

const users = (_, args, context, info) => {
  
  return context.prisma.users(
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