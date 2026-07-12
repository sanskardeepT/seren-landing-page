import Script from "next/script";

export default function Home() {
  return (
    <>
      {/* External Scripts */}
      <Script src="https://unpkg.com/lucide@latest" strategy="beforeInteractive" />
      <Script src="/script.js" strategy="lazyOnload" />

      <div className="page-noise" aria-hidden="true"></div>
      <div className="site-condition-field" aria-hidden="true">
        <div className="site-condition-track" data-site-track="0"></div>
        <div className="site-condition-track" data-site-track="1"></div>
        <div className="site-condition-track" data-site-track="2"></div>
        <div className="site-condition-track" data-site-track="3"></div>
        <div className="site-condition-track" data-site-track="4"></div>
      </div>

      <header className="topbar" aria-label="SEREN navigation">
        <a className="brand" href="#top" aria-label="SEREN home">
          <span className="brand-mark" aria-hidden="true">
            <svg viewBox="0 0 64 64" role="img">
              <circle cx="32" cy="32" r="28" className="logo-disc" />
              <path
                className="logo-script"
                d="M43 18c-6-6-23-3-24 7-1 13 25 6 23 20-2 12-23 13-29 3"
              />
              <path className="logo-starline" d="M45 12l2 5 5 1-4 3 1 5-4-3-4 3 1-5-4-3 5-1 2-5Z" />
            </svg>
          </span>
          <span>
            <strong>SEREN</strong>
            <small>Every child is a star</small>
          </span>
        </a>
        <nav className="nav-links" aria-label="Sections">
          <a href="#signal">The problem</a>
          <a href="#spectrum">What we screen</a>
          <a href="#check">Try a test</a>
          <a href="#about">About</a>
          <a href="#terms">Terms</a>
        </nav>
        <div className="nav-actions">
          <button className="nav-cta" data-waitlist="school"><i data-lucide="school"></i> Partner your school</button>
          <button className="nav-ghost" data-waitlist="parent">Check yourself</button>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-photo" role="img" aria-label="Students in an Indian classroom"></div>
          <div className="hero-shade"></div>
          <div className="hero-condition-field" aria-hidden="true">
            <div className="hero-condition-track" data-hero-track="0"></div>
            <div className="hero-condition-track" data-hero-track="1"></div>
            <div className="hero-condition-track" data-hero-track="2"></div>
            <div className="hero-condition-track" data-hero-track="3"></div>
            <div className="hero-condition-track" data-hero-track="4"></div>
          </div>

          <div className="hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">For the child, teen, parent, and adult who learned to hide the hard part.</p>
              <h1>Not lazy. Not weak. Just unseen.</h1>
              <p>
                SEREN is building the first screening layer for hidden learning, attention, speech, anxiety, sensory,
                emotional, and confidence struggles. One phone. Simple tasks. A report people can understand.
              </p>
              <div className="hero-actions">
                <button className="primary-button" data-waitlist="school"><i data-lucide="handshake"></i> Partner your school</button>
                <button className="secondary-button" data-waitlist="parent"><i data-lucide="user-round"></i> Check yourself</button>
                <a className="text-button" href="#check"><i data-lucide="activity"></i> Try the signal check</a>
              </div>
            </div>

            <aside className="mirror-card">
              <span>The sentence nobody says out loud</span>
              <p>&quot;I am smart when nobody is watching.&quot;</p>
            </aside>
          </div>

          <div className="hero-metrics" aria-label="SEREN platform metrics">
            <div><b>84+</b><span>hidden profiles</span></div>
            <div><b>400+</b><span>signal points</span></div>
            <div><b>12</b><span>mobile modalities</span></div>
            <div><b>Offline</b><span>India-ready</span></div>
          </div>
        </section>

        <section id="signal" className="section signal-section">
          <div className="section-heading">
            <div>
              <p className="section-kicker">The real signal</p>
              <h2>The problem is usually visible years before it is named.</h2>
            </div>
            <p>
              A child stops reading aloud. A teen avoids the front bench. An adult builds a career around avoiding
              writing, speaking, or being judged. SEREN starts there.
            </p>
          </div>

          <div className="felt-grid">
            <article><span>Reading</span><b>&quot;I read it. It still does not stay.&quot;</b></article>
            <article><span>Speech</span><b>&quot;The answer is ready. My voice is not.&quot;</b></article>
            <article><span>Focus</span><b>&quot;I care. Then my mind disappears.&quot;</b></article>
            <article><span>Masking</span><b>&quot;I look fine because I got good at hiding.&quot;</b></article>
          </div>
        </section>

        <section id="spectrum" className="spectrum-section">
          <div className="spectrum-copy">
            <p className="section-kicker">84+ spectrum</p>
            <h2>A moving map of struggles people carry quietly.</h2>
            <p>
              Not a single-condition app. SEREN maps learning, attention, speech, anxiety, emotional regulation,
              neurodiversity, sensory patterns, and adult confidence wounds in one screening architecture.
            </p>
          </div>
          <div className="condition-stage" aria-label="Animated SEREN condition spectrum">
            <div className="condition-track track-one" data-condition-track="0"></div>
            <div className="condition-track track-two" data-condition-track="1"></div>
            <div className="condition-track track-three" data-condition-track="2"></div>
            <div className="condition-track track-four" data-condition-track="3"></div>
          </div>
        </section>

        <section className="section product-section">
          <div className="section-heading">
            <div>
              <p className="section-kicker">How SEREN earns trust</p>
              <h2>It does not ask people to believe a label. It shows them a pattern.</h2>
            </div>
            <p>
              The real product combines self-report with reaction timing, working memory, speech, handwriting, gaze,
              sensors, teacher/parent input, and progress over time.
            </p>
          </div>

          <div className="product-grid">
            <article><i data-lucide="school"></i><b>Schools</b><span>Classroom screening, teacher-readable reports, NEP-aligned early support.</span></article>
            <article><i data-lucide="heart-handshake"></i><b>Parents</b><span>Plain language. No shame. What to notice and what to do next.</span></article>
            <article><i data-lucide="user-round-check"></i><b>Teens and adults</b><span>A private way to understand old struggles without feeling broken.</span></article>
          </div>
        </section>

        <section id="check" className="check-section">
          <div className="check-intro">
            <p className="section-kicker">SEREN signal check</p>
            <h2>Signal Check - a public demo, not a diagnosis.</h2>
            <p>
              Choose Teen or Adult. Pick one focus area. Try a 12-activity signal pack based on SEREN&apos;s technical blueprint.
              Your result is computed from what you do here, then explained in plain language.
            </p>
          </div>

          <div className="check-app">
            <div className="check-workspace">
              <div className="lens-row" role="group" aria-label="Choose screening lens">
                <button className="lens active" data-lens="teen">Teen</button>
                <button className="lens" data-lens="adult">Adult</button>
              </div>
              <div className="focus-row" role="group" aria-label="Choose focus area">
                <button className="focus active" data-focus="learning">Learning & reading</button>
                <button className="focus" data-focus="attention">Attention & focus</button>
                <button className="focus" data-focus="speech">Speech & fluency</button>
                <button className="focus" data-focus="confidence">Anxiety & confidence</button>
                <button className="focus" data-focus="masking">Silent masking</button>
              </div>

              <div className="check-step" data-panel="tasks">
                <div className="check-header">
                  <span id="taskCountLabel">Activity 1 / 12</span>
                  <b id="taskTitle">Catch the Signal</b>
                </div>
                <div className="task-progress" id="taskProgress"></div>
                <div className="task-shell" id="taskShell"></div>
                <div className="task-nav">
                  <button className="lab-button secondary" id="prevTask">Previous task</button>
                  <button className="lab-button" id="nextTask">Next task</button>
                </div>
              </div>
            </div>

            <aside className="result-panel">
              <span>Screening preview</span>
              <h3 id="resultHeadline">Try a few activities to see your map.</h3>
              <p id="resultBody">The result will update live as you play. It stays simple on purpose.</p>
              <div className="signals-pill" id="signalsPill">Signals used: 0 of 12 modalities</div>
              <div className="score-stack" id="scoreStack"></div>
              <div className="domain-report" id="domainReport"></div>
              <div className="result-card">
                <b id="nextStepTitle">What SEREN would do next</b>
                <p id="nextStepBody">Combine this with speech, handwriting, gaze, and longitudinal signals in the real product.</p>
              </div>
              <div className="credibility-card" id="credibilityCard">
                This public demo uses a partial browser signal set. Production SEREN is designed for 12 modalities across school,
                parent, behaviour, speech, handwriting, gaze, sensors, and progress over time.
              </div>
              <div className="result-actions">
                <button className="lab-button secondary" id="retakePack">Retake this activity pack</button>
                <button className="lab-button" id="tryAnotherFocus">Try another focus area</button>
              </div>
              <small>Screening preview only. It is not a medical diagnosis.</small>
            </aside>
          </div>
        </section>

        <section id="team" className="section team-section">
          <div className="section-heading">
            <div>
              <p className="section-kicker">Team</p>
              <h2>Founders, research, medical advisory, and distribution in one serious build.</h2>
            </div>
            <p>Same table system. Same weight. No pasted-name afterthought.</p>
          </div>

          <div className="team-tables">
            <article className="team-table">
              <div className="team-table-head"><i data-lucide="rocket"></i><h3>Founding team</h3></div>
              <ul>
                <li><b>Mr. Sanskardeep Talikote</b><span>Founder</span></li>
                <li><b>Rekha Aiwale</b><span>Co-founder</span></li>
                <li><b>Aditya Paraskar</b><span>Co-founder</span></li>
                <li><b>Sanket Korde</b><span>Co-founder</span></li>
                <li><b>Abhishek Chavhan</b><span>Co-founder</span></li>
                <li><b>Ayema Ansari</b><span>Co-founder</span></li>
              </ul>
            </article>
            <article className="team-table">
              <div className="team-table-head"><i data-lucide="microscope"></i><h3>Research team</h3></div>
              <ul>
                <li><b>Megha T.</b><span>Research</span></li>
                <li><b>Komal Aiwale</b><span>Research</span></li>
                <li><b>Rekha Aiwale</b><span>Research</span></li>
                <li><b>Risha H.</b><span>Research</span></li>
                <li><b>Sanskardeep Talikote</b><span>Research</span></li>
              </ul>
            </article>
            <article className="team-table">
              <div className="team-table-head"><i data-lucide="stethoscope"></i><h3>Medical advisory</h3></div>
              <ul>
                <li><b>Omkar Ghadge</b><span>MBBS student</span></li>
                <li><b>Dr. Manish Warke</b><span>Medical advisor</span></li>
                <li><b>Shubham A.</b><span>MBBS student</span></li>
                <li><b>Asmitaa</b><span>MBBS student</span></li>
              </ul>
            </article>
            <article className="team-table">
              <div className="team-table-head"><i data-lucide="megaphone"></i><h3>Creator network</h3></div>
              <ul>
                <li><b>@hanmant_yelgatte</b><span>Creator</span></li>
                <li><b>@med._insights</b><span>Creator</span></li>
                <li><b>@explore.wth.omey</b><span>Creator</span></li>
                <li><b>@feeling_fry</b><span>Creator</span></li>
                <li><b>@sanskardeeep</b><span>Creator</span></li>
              </ul>
            </article>
          </div>
        </section>

        <section id="about" className="section about-section">
          <div className="section-heading">
            <div>
              <p className="section-kicker">About</p>
              <h2>SEREN is the first screen that respects quiet struggle.</h2>
            </div>
            <p>
              We combine simple interaction design, a human-readable report, and school-friendly screening cues so hidden
              learning, attention, speech, sensory, and confidence struggles can be noticed earlier.
            </p>
          </div>
        </section>

        <section id="terms" className="section terms-section">
          <div className="section-heading">
            <div>
              <p className="section-kicker">Terms</p>
              <h2>Public demo only. Not a diagnosis.</h2>
            </div>
            <p>
              This site shows a conceptual screening experience for product education and early interest only. Any future
              clinical use would require proper validation, consent, and compliance workflows.
            </p>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div>
            <p className="section-kicker">Partner, pilot, invest</p>
            <h2>Build the first check children should have had years ago.</h2>
            <p>For schools, families, early users, advisors, and investors.</p>
            <div className="contact-actions">
              <button className="primary-button" data-waitlist="school"><i data-lucide="school"></i> Partner your school</button>
              <button className="secondary-button" data-waitlist="parent"><i data-lucide="user-round"></i> Check yourself</button>
            </div>
          </div>
          <div className="contact-card">
            <a className="email-strong" href="mailto:sanskardeepbtalikote19@gmail.com"><i data-lucide="mail"></i> Email: sanskardeepbtalikote19@gmail.com</a>
            <a href="tel:+919403910943"><i data-lucide="phone"></i> Phone: +91 94039 10943</a>
            <span><i data-lucide="map-pin"></i> India-first. Global-ready.</span>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-brand">
          <p className="section-kicker">About SEREN</p>
          <h2>Built to find the quiet struggles people were taught to hide.</h2>
          <p>
            SEREN is an India-first screening platform for learning, attention, speech, sensory, confidence, and masking patterns.
            It is designed for schools, families, and adults who need a clearer starting point.
          </p>
        </div>

        <div className="footer-panel">
          <div className="footer-links">
            <span className="footer-links-label">Links</span>
            <a href="#about">About</a>
            <a href="#terms">Terms</a>
            <a href="#top">Back to top</a>
          </div>
          <p className="footer-note">
            Public demo only. Not a diagnosis. This website is an early product demo, not a substitute for clinical care, and not an emergency service.
          </p>
        </div>

        <div className="footer-bar">
          <span>SEREN &copy; 2026</span>
          <span>India-first. School-ready. Parent-readable.</span>
        </div>
      </footer>

      <div className="modal-backdrop" id="waitlistModal" aria-hidden="true">
        <div className="modal" role="dialog" aria-modal="true" aria-labelledby="modalTitle">
          <button className="modal-close" id="modalClose" aria-label="Close"><i data-lucide="x"></i></button>
          <span id="modalBadge">SEREN access</span>
          <h2 id="modalTitle">Almost ready.</h2>
          <p id="modalText">Leave one contact. We will notify you when the next SEREN step opens.</p>
          <form className="waitlist-form" id="waitlistForm">
            <label><span>Your name</span><input name="name" autoComplete="name" required /></label>
            <label id="schoolField"><span>School / organisation</span><input name="school" /></label>
            <label><span>Email or phone</span><input name="contact" autoComplete="email" required /></label>
            <label><span>City</span><input name="city" autoComplete="address-level2" /></label>
            <button className="primary-button" type="submit">Notify me</button>
          </form>
          <div className="modal-success" id="modalSuccess">
            Thank you - we are finishing SEREN&apos;s core build right now. We will reach out within the next couple of weeks.
          </div>
        </div>
      </div>
    </>
  );
}
