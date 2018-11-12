const createUser = (_, args, context, info) => {

  return context.prisma.createUser(
    {
      name: 'Name',
      username: args.username,
      description: 'Description',
      avatarUrl: 'avatar url',
    },
  );
};

const updateUser = (_, args, context, info) => {

  return context.prisma.updateUser(
    {
      where: {
        id: args.id,
      },
      data: {
        isApproved: args.isApproved,
      },
    },
  );
};

const deleteUser = async(_, args, context, info) => {

  return context.prisma.deleteUser(
    {
      id: args.id,
    },
  );
};


module.exports = {
  createUser,
  updateUser,
  deleteUser,
};