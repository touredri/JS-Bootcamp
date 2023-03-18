const hamburgerToggler = document.querySelector('.hamburger');
const navLinksContainer = document.querySelector('.nav-links');
const clo = document.querySelectorAll('.scroll');
const toggleNav = () => {
  hamburgerToggler.classList.toggle('open');
  const ariaToggle =
    hamburgerToggler.getAttribute('aria-expanded') === 'true'
      ? 'false'
      : 'true';
  hamburgerToggler.setAttribute('aria-expanded', ariaToggle);
  navLinksContainer.classList.toggle('open');
  if (ariaToggle === 'true') {
    clo.forEach((element) => {
      element.addEventListener('click', () => {
        navLinksContainer.classList.remove('open');
        hamburgerToggler.classList.remove('open');
        hamburgerToggler.setAttribute('aria-expanded', 'false');
      });
    });
  }
};
hamburgerToggler.addEventListener('click', toggleNav);

const prof = [
  {
    name: 'Dr. Jason Lee',
    image: './images/gettyimages1.jpg',
    profession: 'Software Developper',
    descrition:
      'Jason is a skilled developer who specializes in building mobile applications for iOS and Android platforms. He enjoys creating intuitive and user-friendly interfaces for his clients.',
  },
  {
    name: 'Dr. Alex Johnson',
    image: './images/gettyimages2.jpg',
    profession: 'Full-Stack Developer',
    descrition:
      'Alex is a seasoned developer with experience in both front-end and back-end development. They excel at building and maintaining complex web applications.',
  },
  {
    name: 'Dr. Sharah Kim',
    image: './images/gettyimages3.jpg',
    profession: 'Web Developer',
    descrition:
      'Sharah is a creative web developer who enjoys designing and building websites that are visually appealing and easy to use. She is proficient in HTML, CSS, and JavaScript.',
  },
  {
    name: 'Dr. Ethan Nguyen',
    image: './images/gettyimages4.jpg',
    profession: 'Back-End Developer',
    descrition:
      'Ethan is an experienced back-end developer who builds and maintains server-side systems for web applications. He has expertise in programming languages such as Python and Ruby. ',
  },
  {
    name: 'Dr. Rachel Chen',
    image: './images/gettyimages5.jpg',
    profession: 'Data Scientist',
    descrition:
      'Rachel has a strong background in data science and machine learning, which she uses to develop AI-based systems that can improve business processes.',
  },
  {
    name: 'Dr. A. K. Singh',
    image: './images/gettyimages6.jpg',
    profession: 'Database Administrator',
    descrition:
      "Maintains and manages the organization's databases, ensuring data security and accessibility.",
  },
];

const speaker = document.getElementById('prof');
const screenWidth = window.innerWidth;
if (screenWidth >= 768) {
  prof.forEach((elm) => {
    const div = document.createElement('div');
    div.className = 'row no-gutters col-md-6';
    div.innerHTML = `
  <div class="row no-gutters col-md-12">
  <div class="col-5">
    <img src="${elm.image}" class="card-img border border-1" alt="prof image" />
  </div>
  <div class="col-7 p-0">
    <div class="car-body">
      <h3 class="card-title">${elm.name}</h3>
      <p class="profession m-1">${elm.profession}</p>
      <hr class="w-50 m-0" />
      <p class="background">
        ${elm.descrition}
      </p>
    </div>
  </div>
</div>
            `;
    speaker.appendChild(div);
  });
}
if (screenWidth < 768) {
  let i = 0;
  while (i < 3) {
    const div = document.createElement('div');
    div.className = 'row no-gutters col-md-6';
    div.innerHTML = `
      <div class="row no-gutters col-md-12">
      <div class="col-5">
        <img src="${prof[i].image}" class="card-img border border-1" alt="prof image" />
      </div>
      <div class="col-7 p-0">
        <div class="car-body">
          <h3 class="card-title">${prof[i].name}</h3>
          <p class="profession m-1">${prof[i].profession}</p>
          <hr class="w-50 m-0" />
          <p class="background">
            ${prof[i].descrition}
          </p>
        </div>
      </div>
    </div>
                `;
    speaker.appendChild(div);
    i += 1;
  }
}

const enrol = document.querySelector('.enrol');

function popForm() {
  const contai = document.createElement('div');
  const popform = document.createElement('div');
  popform.className = 'pop-form';
  contai.className = 'contain';
  popform.innerHTML = `
    <form action="https://formspree.io/f/xbjearpw"
    method="POST">
        <div class="mb-3">
            <label for="name" class="form-label">Full Name</label>
            <input type="text" name="name" class="form-control" id="name" aria-describedby="nameHelp">
        </div>
        <div class="mb-3">
            <label for="email" class="form-label">Email address</label>
            <input type="email" name="email" class="form-control" id="email" aria-describedby="emailHelp">
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div class="mb-3">
            <label for="password" class="form-label">Pasword</label>
            <input type="password" name="password" class="form-control" id="password" aria-describeby="pass">
            <div id="pass" class="form-text"> Create a strong password</div>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    `;
  contai.appendChild(popform);
  document.body.appendChild(contai);
  // console.log('hi');
  // contai.addEventListener('click', () => {
  //   document.body.removeChild(contai);
  // });
  // popform.addEventListener('click', () => {
  //   document.body.appendChild(contai);
  // });
}

enrol.addEventListener('click', popForm);
