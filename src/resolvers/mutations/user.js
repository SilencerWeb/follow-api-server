const { twitterClient } = require('../../twitter-client');


const createUser = async(_, args, context, info) => {
  const user = await context.prisma.user(
    {
      username: args.username,
    },
  );

  if (user) {
    throw new Error(`User with username "${args.username}" already exists`);
  }

  let name, username, description, avatarUrl;

  await twitterClient.get('users/show', { screen_name: args.username })
    .catch((error) => {
      const errorMessage = error.message;

      if (errorMessage === 'User not found.') {
        throw new Error(`User with username "${args.username}" is not found`);
      }

      throw new Error(errorMessage);
    })
    .then((result) => {
      name = result.data.name;
      username = result.data.screen_name.toLowerCase();
      description = result.data.description;
      avatarUrl = result.data.profile_image_url_https;

      return true;
    });

  return context.prisma.createUser(
    {
      name: name,
      username: username,
      description: description,
      avatarUrl: avatarUrl,
    },
  );
};

const updateUser = (_, args, context, info) => {

  return context.prisma.updateUser(
    {
      where: args.id ? { id: args.id } : { username: args.username.toLowerCase() },
      data: {
        isApproved: args.isApproved,
      },
    },
  );
};

const deleteUser = async(_, args, context, info) => {

  return context.prisma.deleteUser(
    args.id ? { id: args.id } : { username: args.username.toLowerCase() },
  );
};


module.exports = {
  createUser,
  updateUser,
  deleteUser,
};