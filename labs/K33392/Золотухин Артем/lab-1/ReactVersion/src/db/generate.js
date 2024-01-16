module.exports = function () {
  const { faker } = require('@faker-js/faker')
  let _ = require('lodash')

  return {
    results: _.times(100, function (n) {
      let gender = faker.person.gender()
      let job = faker.person.jobTitle()
      let avatarUrl = `https://randomuser.me/api/portraits/${
        gender === 'female' ? 'women' : 'men'
      }/${n}.jpg`

      return {
        id: n,
        gender: gender,
        first_name: faker.person.firstName(gender),
        last_name: faker.person.lastName(gender),
        avatar: avatarUrl,
        job: job,
        description: `I'm a ${job} who loves their job and is currently seeking new opportunities. A bit about me: ${faker.person.bio()}`,
        email: faker.internet.email(),
        phone: faker.phone.number(),
        address: `${faker.location.streetAddress()}, ${faker.location.city()}, ${faker.location.state()}, ${faker.location.country()}`,
        birthdate: faker.date
          .birthdate({ min: 18, max: 60, mode: 'age' })
          .toISOString()
          .split('T')[0],
        website: faker.internet.url(),
        skills: faker.helpers.multiple(() => faker.word.noun(), { count: 5 }),

        education:
          faker.helpers.arrayElements(['Bachelors', 'Masters', 'PhD'])[0] +
          ' in ' +
          faker.helpers.arrayElements([
            'Computer Science',
            'Business',
            'Engineering',
            'Arts',
            'Science',
          ])[0],
        languages:
          faker.helpers.arrayElements([
            'English',
            'Spanish',
            'French',
            'German',
            'Chinese',
          ])[0] +
          ', ' +
          faker.helpers.arrayElements([
            'Russian',
            'Arabic',
            'Japanese',
            'Italian',
            'Hindi',
          ])[0],
      }
    }),
  }
}
