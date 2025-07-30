import Link from "next/link";
import Image from "next/image"; // Correct import for Image component
import {
    FaGithub,
    FaLinkedin,
    FaEnvelope,
    FaFileDownload,
    FaTwitter,
} from "react-icons/fa";

export default function Home() {
    return (
        <div className="container">
            {/* Header */}
            <header className="header">
                <div className="header-content">
                    <h1>Eric Miller</h1>
                    <nav>
                        <Link href="#about">About</Link>
                        <Link href="#experience">Experience</Link>
                        <Link href="#education">Education</Link>
                        <Link href="#skills">Skills</Link>
                        <Link href="#certifications">Certifications</Link>
                        <Link href="#activities">Activities</Link>
                        <Link href="#projects">Projects</Link>
                        <Link href="#contact">Contact</Link>
                    </nav>
                </div>
            </header>

            {/* Main Content */}
            <main className="main-content">
                {/* About Section */}
                <section id="about" className="section">
                    <h2>About Me</h2>
                    <p>
                        Eric Miller is a seasoned tech leader and full-stack
                        engineer with over 20 years of experience driving
                        impactful projects in finance, healthcare, and defense.
                        Based in Omaha, NE, he’s led high-performing teams at
                        places like A-S Medication Solutions and Moody’s
                        Analytics, delivering complex software solutions using
                        tools like .NET, React, AWS, and Azure while mastering
                        Agile practices. Known for turning around critical
                        initiatives, like a decade-delayed project at A-S, Eric
                        blends strategic vision with hands-on expertise. Outside
                        work, he’s a dedicated family man with two teenage kids,
                        a Midwest native, and a passionate volunteer with Team
                        Rubicon, aiding communities in crisis.
                    </p>
                    <a
                        href="/EricMiller-Resume.pdf"
                        download
                        className="download-link"
                    >
                        <FaFileDownload size={20} /> Download Resume
                    </a>
                </section>

                {/* Experience Section */}
                <section id="experience" className="section">
                    <h2>Experience</h2>
                    <div className="experience-item">
                        <h3>Software Development Manager</h3>
                        <p className="subtext">
                            A-S Medication Solutions | Feb 2024 - Jul 2025
                        </p>
                        <ul>
                            <li>
                                Reported to CTO, designed and delegated software
                                development efforts across onshore and offshore
                                teams, improving project coordination and
                                efficiency.
                            </li>
                            <li>
                                Managed SDLC, ensuring delivery of user stories
                                through Agile practices (Scrum, Kanban).
                            </li>
                            <li>
                                Developed Software Development Incident Response
                                Plan, reducing disruptions and enhancing
                                resilience.
                            </li>
                            <li>
                                Utilized Power Automate Flow to automate report
                                generation and augment Azure DevOps features,
                                streamlining processes.
                            </li>
                        </ul>
                    </div>
                    <div className="experience-item">
                        <h3>Application Development Leader</h3>
                        <p className="subtext">
                            Orion Advisor Technology | Nov 2021 - Sep 2023
                        </p>
                        <ul>
                            <li>
                                Led two remote teams, reducing production bugs
                                by 40% and increasing velocity by 30%.
                            </li>
                            <li>
                                Managed daily operations as Development Manager
                                and Scrum Master, using Azure DevOps and Jira.
                            </li>
                            <li>
                                Improved efficiency with DataDog monitoring and
                                delivered weekly metric reports via Power BI and
                                SharePoint.
                            </li>
                        </ul>
                    </div>
                    <div className="experience-item">
                        <h3>Principal Software Engineer</h3>
                        <p className="subtext">
                            Moodys Analytics | Aug 2014 - Nov 2021
                        </p>
                        <ul>
                            <li>
                                Led a 12-engineer team managing a web
                                application serving 800+ global clients ($40M
                                portfolio).
                            </li>
                            <li>
                                Shaped development standards, conducted code
                                reviews, and coached Agile practices as Scrum
                                Master.
                            </li>
                            <li>
                                Promoted from Senior Software Engineer (2014) to
                                Lead (2016) and Principal Software Engineer
                                (2020).
                            </li>
                        </ul>
                    </div>
                    <div className="experience-item">
                        <h3>Senior Consultant</h3>
                        <p className="subtext">
                            Midwest Cloud Computing | Jul 2013 - Aug 2014
                        </p>
                        <ul>
                            <li>
                                Architected mobile-first HR applications using
                                cognitive and EQ analysis for team building.
                            </li>
                            <li>
                                Utilized .NET, C#, PostgreSQL, Angular,
                                Bootstrap, Azure, and JavaScript to develop
                                robust applications.
                            </li>
                        </ul>
                    </div>
                    <div className="experience-item">
                        <h3>Senior Consultant</h3>
                        <p className="subtext">
                            Capstone Consulting | Jan 2012 - Jul 2013
                        </p>
                        <ul>
                            <li>
                                Designed web applications for agriculture,
                                including hardware and data architecture.
                            </li>
                            <li>
                                Migrated Drupal from MySQL to PostgreSQL and
                                developed RESTful APIs.
                            </li>
                        </ul>
                    </div>
                    <div className="experience-item">
                        <h3>Consultant</h3>
                        <p className="subtext">
                            Client Resources Inc. | Aug 2011 - May 2012
                        </p>
                        <ul>
                            <li>
                                Developed front-end interfaces using Angular,
                                TypeScript, and SCSS.
                            </li>
                            <li>
                                Built Android-based mobile apps and
                                JavaScript-driven web wrappers for finance.
                            </li>
                        </ul>
                    </div>
                    <div className="experience-item">
                        <h3>Webmaster</h3>
                        <p className="subtext">
                            Medico Insurance | Sep 2009 - Jun 2011
                        </p>
                        <ul>
                            <li>
                                Led a team of 4 to modernize Java web
                                applications and migrate HTML sites to Drupal.
                            </li>
                            <li>
                                Built mobile-friendly interfaces and API
                                middleware for enhanced integration.
                            </li>
                        </ul>
                    </div>
                    <div className="experience-item">
                        <h3>Webmaster / Lead Coordinator</h3>
                        <p className="subtext">
                            The Nebraska Medical Center | Jul 2008 - Aug 2009
                        </p>
                        <ul>
                            <li>
                                Managed a 12-person team to align web
                                initiatives with hospital marketing goals.
                            </li>
                            <li>
                                Implemented social media campaigns and supported
                                disaster management communications.
                            </li>
                        </ul>
                    </div>
                    <div className="experience-item">
                        <h3>Webmaster</h3>
                        <p className="subtext">
                            RSI Medical Staffing | Apr 2006 - Jun 2008
                        </p>
                        <ul>
                            <li>
                                Led a $7M enterprise application, boosting staff
                                performance by 30% and recovering $1.7M.
                            </li>
                            <li>
                                Served as interim IT Director for 6 months,
                                enhancing system efficiency.
                            </li>
                        </ul>
                    </div>
                    <div className="experience-item">
                        <h3>Executive Support Applications Developer</h3>
                        <p className="subtext">
                            PayPal Inc. | Nov 2005 - Mar 2006
                        </p>
                        <ul>
                            <li>
                                Developed PHP applications for executive
                                leadership.
                            </li>
                            <li>
                                Administered LAMP and WAMP servers, improving
                                system performance.
                            </li>
                        </ul>
                    </div>
                    <div className="experience-item">
                        <h3>Web Systems Engineer</h3>
                        <p className="subtext">
                            Creighton University | Sep 2004 - Nov 2005
                        </p>
                        <ul>
                            <li>
                                Developed and administered Typo3 CMS with 508
                                W3C-compliant templates.
                            </li>
                            <li>
                                Created training materials for users and
                                administrators.
                            </li>
                        </ul>
                    </div>
                    <div className="experience-item">
                        <h3>Web Developer Intern</h3>
                        <p className="subtext">
                            Union Pacific Railroad | Jan 2004 - Sep 2004
                        </p>
                        <ul>
                            <li>
                                Developed Cold Fusion applications and SQL
                                reports for the Mechanical Division.
                            </li>
                            <li>
                                Created Flash components to enhance user
                                interfaces.
                            </li>
                        </ul>
                    </div>
                </section>

                {/* Education Section */}
                <section id="education" className="section">
                    <h2>Education</h2>
                    <div>
                        <h3>
                            B.S., Management of Information Systems / Leadership
                        </h3>
                        <p className="subtext">
                            Creighton University | 2004 - 2006
                        </p>
                    </div>
                    <div>
                        <h3>A.A.S., Web Development</h3>
                        <p className="subtext">
                            ITT Technical Institute | 2002 - 2004
                        </p>
                    </div>
                </section>

                {/* Skills Section */}
                <section id="skills" className="section">
                    <h2>Skills</h2>
                    <div className="skills-grid">
                        <span>.NET</span>
                        <span>.NET C# (4.8/CORE/6/7/8)</span>
                        <span>AWS</span>
                        <span>Angular</span>
                        <span>AngularJS</span>
                        <span>Bootstrap</span>
                        <span>C#</span>
                        <span>CSS/LESS/SASS</span>
                        <span>Cloud Computing Services (GCS)</span>
                        <span>Cost Analysis</span>
                        <span>Critical Thinking</span>
                        <span>Cybersecurity</span>
                        <span>Data Architecture</span>
                        <span>DataDog</span>
                        <span>Docker</span>
                        <span>Entity Framework</span>
                        <span>Firebase</span>
                        <span>Flask</span>
                        <span>Flexibility</span>
                        <span>Generative AI</span>
                        <span>GitHub Actions</span>
                        <span>GitHub Administration</span>
                        <span>HTML5</span>
                        <span>JIRA</span>
                        <span>JavaScript</span>
                        <span>Javascript / Typescript</span>
                        <span>KanBan</span>
                        <span>LINQ</span>
                        <span>Lambda</span>
                        <span>Leadership</span>
                        <span>Leadership & Management</span>
                        <span>ML</span>
                        <span>MS SQL</span>
                        <span>Microsoft Teams</span>
                        <span>Mobile-first Web</span>
                        <span>MySQL</span>
                        <span>N-Tier Architecture</span>
                        <span>Next.js</span>
                        <span>OSINT</span>
                        <span>Object-Oriented Programming</span>
                        <span>People Management</span>
                        <span>PostGreSQL</span>
                        <span>Power Automate</span>
                        <span>Power Automate Flow</span>
                        <span>Power BI</span>
                        <span>Problem-Solving</span>
                        <span>Project Management</span>
                        <span>Python</span>
                        <span>REST APIs</span>
                        <span>REST / WCF / Micro Services</span>
                        <span>Razor</span>
                        <span>React</span>
                        <span>ReactJS</span>
                        <span>Responsibility</span>
                        <span>Responsive Design</span>
                        <span>SCRUM</span>
                        <span>SaaS Application Design</span>
                        <span>SMART Goals</span>
                        <span>SQL</span>
                        <span>Scalable Design Pattern</span>
                        <span>Sharepoint</span>
                        <span>Slack</span>
                        <span>Test-Driven Development</span>
                        <span>Thin-Client</span>
                        <span>TypeScript</span>
                        <span>UI/UX</span>
                        <span>WCF</span>
                        <span>Web Components</span>
                        <span>Azure DevOps</span>
                        <span>Agile Methodologies</span>
                        <span>jQuery</span>
                        <span>node.js</span>
                        <span>Reusable Controls</span>
                    </div>
                </section>

                {/* Certifications Section */}
                <section id="certifications" className="section">
                    <h2>Certifications</h2>
                    <ul>
                        <li>
                            Stop the Bleed | American College of Surgeons (Jan
                            2025)
                        </li>
                        <li>
                            IS-200: Basic Incident Command System for Initial
                            Response | FEMA (April 2024)
                        </li>
                        <li>
                            IS-800: Introduction to the National Response
                            Framework | FEMA (April 2024)
                        </li>
                        <li>
                            IS-100: Introduction to Incident Command System |
                            FEMA (May 2015)
                        </li>
                        <li>
                            IS-700: Introduction to National Incident Management
                            System (NIMS) | FEMA (May 2015)
                        </li>
                        <li>
                            Certified ScrumMaster (CSM) | Scrum Alliance (2014)
                        </li>
                    </ul>
                </section>

                {/* Activities Section */}
                <section id="activities" className="section">
                    <h2>Other Activities</h2>
                    <div className="activity-item">
                        <Image
                            src="/thumbnail-national-defense-lab.jpg"
                            alt="National Defense Lab Board of Directors"
                            width={100}
                            height={100}
                            className="activity-thumbnail"
                        />
                        <div>
                            <h3>
                                Board of Directors - Research and Innovation
                            </h3>
                            <p className="subtext">
                                National Defense Lab | Aug 2023 - Present
                            </p>
                            <p>
                                Actively serving on the board, contributing to
                                civil-defense-focused initiatives with local,
                                state, and federal agencies.
                            </p>
                        </div>
                    </div>
                    <div className="activity-item">
                        <Image
                            src="/thumbnail-team-rubicon.png"
                            alt="Team Rubicon Greyshirt Volunteer"
                            width={100}
                            height={100}
                            className="activity-thumbnail"
                        />
                        <div>
                            <h3>Greyshirt</h3>
                            <p className="subtext">
                                Team Rubicon | May 2019 - Present
                            </p>
                            <p>
                                Disaster response volunteer supporting
                                communities post-crisis.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Projects Section */}
                <section id="projects" className="section">
                    <h2>Side Projects</h2>
                    <div className="projects-grid">
                        <div className="project-item">
                            <Image
                                src="/thumbnail-ram-one-productions.png"
                                alt="RAM ONE Productions WordPress Site"
                                width={200}
                                height={150}
                                className="project-thumbnail"
                            />
                            <h3>RAM ONE Productions WordPress Site</h3>
                            <p className="subtext">Feb 2024 - Present</p>
                            <p>
                                Developed a custom WordPress theme for a local
                                author’s book promotion, integrating UI/UX
                                design and social media.
                            </p>
                            <a
                                href="https://ramoneproductions.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-link"
                            >
                                View Project
                            </a>
                        </div>
                        <div className="project-item">
                            <Image
                                src="/thumbnail-python-image-converter.png"
                                alt="Python Image Conversion Script"
                                width={200}
                                height={150}
                                className="project-thumbnail"
                            />
                            <h3>Python Image Conversion Script</h3>
                            <p className="subtext">Jan 2024</p>
                            <p>
                                Created a multithreaded Python script to convert
                                29GB of TIFF images to JPEG, reducing storage by
                                66%.
                            </p>
                            <a
                                href="https://github.com/PseudoNinja/py_scripts"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-link"
                            >
                                View Code
                            </a>
                        </div>
                        <div className="project-item">
                            <Image
                                src="/thumbnail-ram-master-training.jpg"
                                alt="rammastertraining.com"
                                width={200}
                                height={150}
                                className="project-thumbnail"
                            />
                            <h3>RAM Master Training</h3>
                            <p className="subtext">Oct 2022 - Jun 2023</p>
                            <p>
                                Converted static HTML to a WordPress site for a
                                firearms instructor, integrating ticketing and
                                SEO.
                            </p>
                            <a
                                href="https://rammastertraining.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-link"
                            >
                                View Project
                            </a>
                        </div>
                        <div className="project-item">
                            <Image
                                src="/thumbnail-daisho-tactical.png"
                                alt="Daisho Tactical"
                                width={200}
                                height={150}
                                className="project-thumbnail"
                            />
                            <h3>Daisho Tactical</h3>
                            <p className="subtext">Oct 2021 - Jul 2022</p>
                            <p>
                                Created a Shopify storefront for a local vendor,
                                optimizing images and implementing SEO.
                            </p>
                            <a
                                href="https://daishotactical.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-link"
                            >
                                View Project
                            </a>
                        </div>
                        <div className="project-item">
                            <Image
                                src="/thumbnail-susan-miller.jpg"
                                alt="Vote Susan Miller"
                                width={200}
                                height={150}
                                className="project-thumbnail"
                            />
                            <h3>Vote Susan Miller</h3>
                            <p className="subtext">Nov 2021 - Nov 2022</p>
                            <p>
                                Developed a WordPress site for a political
                                candidate, integrating Stripe and SEO.
                            </p>
                            <a
                                href="https://susanmiller.vote"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-link"
                            >
                                View Project
                            </a>
                        </div>
                        <div className="project-item">
                            <Image
                                src="/thumbnail-deep-race.png"
                                alt="A photograph of a computer screen with the silhouette of a black car on a low-resolution race track"
                                width={200}
                                height={150}
                                className="project-thumbnail"
                            />
                            <h3>AWS Deepracer</h3>
                            <p className="subtext">Jul 2020</p>
                            <p>
                                AWS DeepRacer gives you an interesting and fun
                                way to get started with reinforcement learning
                                (RL). RL is an advanced machine learning (ML)
                                technique that takes a very different approach
                                to training models than other machine learning
                                methods. Its super power is that it learns very
                                complex behaviors without requiring any labeled
                                training data, and can make short term decisions
                                while optimizing for a longer term goal. Using
                                my first-hand racing knowledge I attempted to
                                train my Response Learning (RL) model to:
                            </p>
                            <ul>
                                <li>recognize a corner</li>
                                <li>identify the apex</li>
                                <li>diamond the corner</li>
                                <li>carry speed through the corner.</li>
                            </ul>
                            <p>The demo is from one of my test runs.</p>
                            <a
                                href="https://youtube.com/shorts/ac2kbC3LzI0?feature=share"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-link"
                            >
                                View Demo
                            </a>
                            <a
                                href="https://github.com/PseudoNinja/deepracer-2020.2"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-link"
                            >
                                View Code
                            </a>
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section id="contact" className="section">
                    <h2>Contact</h2>
                    <div className="contact-links">
                        <a href="mailto:hireme@pseudoninja.com">
                            <FaEnvelope size={24} />
                        </a>
                        <a
                            href="https://github.com/pseudoninja"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaGithub size={24} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/pseudoninja"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaLinkedin size={24} />
                        </a>
                        <a
                            href="https://www.x.com/thepseudoninja"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaTwitter size={24} />
                        </a>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="footer">
                <div>
                    © {new Date().getFullYear()} Eric Miller. All rights
                    reserved.
                </div>
            </footer>
        </div>
    );
}
