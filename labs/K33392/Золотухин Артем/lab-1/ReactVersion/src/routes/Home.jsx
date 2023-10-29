import './styles/home.css'
import swal from 'sweetalert'

function Home() {
  const skillsData = {
    android: {
      title: 'Android:',
      skills: [
        'Android SDK',
        'Kotlin, Java',
        'XML/Jetpack compose/Navigation',
        'Clean Architecture, MVVM',
        'Retrofit, Coil',
        'Kotlin Coroutines',
        'Room, PostgreSQL',
        'Shared Preferences, DataStore',
        'Dagger 2, Hilt',
      ],
    },
    frontend: {
      title: 'Frontend:',
      skills: ['HTML+CSS+JS', 'Bootstrap', 'React/Router'],
    },
    languages: {
      title: 'Languages:',
      skills: ['Russian - Native', 'English - C1 (FCE B2)'],
    },
  }

  const socialLinks = {
    telegram: 'https://t.me/ReallyUselles',
    vk: 'https://vk.com/mdirs',
    github: 'https://github.com/ArtemZolotukh1n',
    linkedin: 'https://www.linkedin.com/in/artem-zolotukhin-2a52b5276/',
  }

  const copyEmailToClipboard = () => {
    const email = 'artem.zolotukhin.303@gmail.com'
    navigator.clipboard
      .writeText(email)
      .then(() => {
        swal('Email copied to clipboard', email, 'success')
      })
      .catch((error) => {
        console.error('Error copying to clipboard: ', error)
      })
  }

  return (
    <div className='home'>
      <div className='content'>
        <div className='column one'>
          <div>
            <h1>
              Hi, I'm <span className='green_text'>Artem</span>
            </h1>
            <p className='low_visibility_text'>Welcome to my page</p>
          </div>

          <h4>
            I'm:
            <span className='green_text'>Junior Native Android Developer</span>,
            third year ITMO Student on Mobile and network technologies faculty,
            who also just started learning front-end development.
          </h4>

          <div className='skills'>
            <h5>My skills:</h5>
            <div className='skills-list'>
              {Object.keys(skillsData).map((category, index) => (
                <div key={index} className='skills-column'>
                  <h4>{skillsData[category].title}</h4>
                  <ul>
                    {skillsData[category].skills.map((skill, skillIndex) => (
                      <li className='skills-list-column_text' key={skillIndex}>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className='column two'>
          <h1>Want to hire me?</h1>
          <div className='column-email_segment'>
            <p className='low_visibility_text'>
              I strive to reply within an hour.
            </p>
            <button
              className='column-contact_button'
              onClick={copyEmailToClipboard}
            >
              <img src='src/assets/email.svg' alt='blog SVG' />
              EMAIL
            </button>
          </div>

          <div className='separator_row'>
            <hr />
            or
            <hr />
          </div>
          <div className='contacts_row'>
            {Object.entries(socialLinks).map(([network, link], index) => (
              <a
                href={link}
                target='_blank'
                rel='noopener noreferrer'
                key={index}
              >
                <button className='column-contact_button'>
                  <img
                    src={`src/assets/${network}.png`}
                    alt={`${network} SVG`}
                    className='icon'
                  />
                </button>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
