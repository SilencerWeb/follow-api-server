const { twitterClient } = require('../../twitter-client');


const createUser = async(_, args, context, info) => {
  let name, username, description, avatarUrl;

  await twitterClient.get('users/show', { screen_name: args.username })
    .catch((error) => {
      throw new Error(error.message);
    })
    .then((result) => {
      name = result.data.name;
      username = result.data.screen_name;
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