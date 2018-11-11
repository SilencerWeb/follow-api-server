const createUser = (_, args, context, info) => {

  return context.prisma.createUser(
    {
      data: {
        name: 'Name',
        username: args.username,
        description: 'description',
        avatarUrl: 'avatar url',
      },
    },
    info,
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
    info,
  );
};

const deleteUser = async(_, args, context, info) => {

  return context.prisma.deleteUser(
    {
      where: {
        id: args.id,
      },
    },
    info,
  );
};


module.exports = {
  createUser,
  updateUser,
  deleteUser,
};