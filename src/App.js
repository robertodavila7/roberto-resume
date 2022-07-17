import React from 'react';

import Header from './components/Header/Header';
import Bio from './components/Bio/Bio';
import ProfessionalSkills from './components/ProfessionalSkills/ProfessionalSkills';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';

import './App.scss';


function App() {
  return (
    <div className="content">
      <header>
        <Header />
      </header>
      <section>
        <Bio />
      </section>
      <section>
        <ProfessionalSkills />
      </section>
      <section>
        <Experience title="Work Experience" />
      </section>
      <section>
        <Experience title="Education" />
      </section>
      <section>
        <Projects title="Open-source Projects" />
      </section>
      <section>
        <Projects title="Certifications" />
      </section>
    </div>
  );
}

export default App;
