db.sync({force: true}).then(() => {
  _.times(10, () => {
    return User.create({
      facebook_id: Faker.random.number({
          'min': 1000000000000000,
          'max': 9999999999999999
      }),
      username: Faker.internet.userName(),
      password: Faker.internet.password(),
      first_name: Faker.name.firstName(),
      last_name: Faker.name.lastName(),
      email: Faker.internet.email(),
      city: Faker.address.city(),
      state: Faker.address.streetAddress(),
      avatar: Faker.internet.avatar()
    })
      .then(user => {
        return Site.create({
          name: Faker.address.streetName(),
          address: Faker.address.streetAddress(),
          city: Faker.address.city(),
          state: Faker.address.stateAbbr(),
          zip_code: Faker.address.zipCode(),
          review_count: Faker.random.number({ 'min': 0, 'max': 99999 })
        })
          .then(site => {
            const userID = user.SOMETHING.id;
            const siteID = site.SOMETHING.id;
            return user.createReview({
              rating: Faker.random.number({
                'min': 0,
                'max': 5,
              }),
              title: Faker.lorem.words(),
              text: Faker.lorem.paragraphs(),
              userID,
              siteID
            });
          })
      })
  });
});
// user has many reviews
// review has one user

// site has many reviews
// review has one site




db.sync({force: true}).then(() => {
  _.times(10, () => {
    return User.create({
      facebook_id: Faker.random.number({
          'min': 1000000000000000,
          'max': 9999999999999999
      }),
      username: Faker.internet.userName(),
      password: Faker.internet.password(),
      first_name: Faker.name.firstName(),
      last_name: Faker.name.lastName(),
      email: Faker.internet.email(),
      city: Faker.address.city(),
      state: Faker.address.streetAddress(),
      avatar: Faker.internet.avatar()
  }).then(user => {
      return Site.create({
        name: Faker.address.streetName(),
        address: Faker.address.streetAddress(),
        city: Faker.address.city(),
        state: Faker.address.stateAbbr(),
        zip_code: Faker.address.zipCode(),
        review_count: Faker.random.number({
          'min': 0,
          'max': 99999
        })
      }).then(site => {
        const userId = user.dataValues.id;
        const siteId = site.dataValues.id;
        _.times(3, () => {
          return user.createReview({
            rating: Faker.random.number({
              'min': 0,
              'max': 5,
            }),
            title: Faker.lorem.words(),
            text: Faker.lorem.paragraphs(),
            userId: userId,
            siteId: siteId
          });
        })
      });
    });
  });
});