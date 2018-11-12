const user = (_, args, context, info) => {
  return context.prisma.user(
    args.id ? { id: args.id } : { username: args.username.toLowerCase() },
  );
};

const users = (_, args, context, info) => {
  return context.prisma.users();
};


module.exports = {
  user,
  users,
};