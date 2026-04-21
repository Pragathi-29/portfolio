import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks';
import { experiences } from '../data';

const MAP = {
  react: 'React',
  ts: 'TypeScript',
  node: 'Node.js',
  python: 'Python',
  next: 'Next.js',
  js: 'JavaScript',
};

export default function Experience() {
  const { ref, inView } = useInView();
  return (
    <section id='experience' className='section'>
      <div className='container'>
        <div ref={ref}>
          <motion.span
            className='section-label'
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
          >
            1.5 — Experience
          </motion.span>
          <motion.h2
            className='section-title'
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Where I've <span>worked</span>
          </motion.h2>
        </div>
        <ol
          style={{
            position: 'relative',
            paddingLeft: '2.25rem',
            listStyle: 'none',
          }}
          aria-label='Work experience'
        >
          <div
            style={{
              position: 'absolute',
              left: 0,
              top: '10px',
              bottom: 0,
              width: '1px',
              background:
                'linear-gradient(to bottom,var(--gold),rgba(232,201,122,.1),transparent)',
            }}
          />
          {experiences.map((exp, i) => (
            <motion.li
              key={exp.id}
              style={{
                position: 'relative',
                marginBottom: i < experiences.length - 1 ? '2.25rem' : 0,
              }}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
            >
              <span
                style={{
                  position: 'absolute',
                  left: '-2.25rem',
                  top: '1.6rem',
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  background: 'var(--gold)',
                  transform: 'translateX(-5px)',
                  border: '3px solid var(--bg)',
                  boxShadow: '0 0 10px rgba(232,201,122,.45)',
                }}
                aria-hidden='true'
              />
              <div
                style={{
                  background: 'var(--glass)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--r-lg)',
                  padding: '1.6rem',
                  transition: 'border-color var(--tr),box-shadow var(--tr)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(232,201,122,.22)';
                  e.currentTarget.style.boxShadow = 'var(--sh-card)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    flexWrap: 'wrap',
                    gap: '.75rem',
                    marginBottom: '.85rem',
                  }}
                  className='exp-header'
                >
                  <div>
                    <h3
                      style={{
                        fontFamily: 'var(--ff-display)',
                        fontWeight: 700,
                        fontSize: '1.05rem',
                        color: 'var(--text)',
                        marginBottom: '.2rem',
                      }}
                    >
                      {exp.role}
                    </h3>
                    <p style={{ fontSize: '.88rem', color: 'var(--muted)' }}>
                      {exp.company}{' '}
                      <span style={{ color: 'var(--dim)' }}>
                        · {exp.location}
                      </span>
                    </p>
                  </div>
                  <span
                    style={{
                      fontSize: '.75rem',
                      color: 'var(--gold)',
                      background: 'rgba(232,201,122,.1)',
                      border: '1px solid rgba(232,201,122,.2)',
                      padding: '.22rem .8rem',
                      borderRadius: 'var(--r-full)',
                      whiteSpace: 'nowrap',
                      flexShrink: 0,
                    }}
                  >
                    {exp.period}
                  </span>
                </div>
                <p
                  style={{
                    color: 'var(--muted)',
                    fontSize: '.87rem',
                    lineHeight: '1.75',
                    marginBottom: '1rem',
                  }}
                >
                  {exp.description}
                </p>
                <div
                  style={{ display: 'flex', gap: '.4rem', flexWrap: 'wrap' }}
                >
                  {exp.tags.map((t) => (
                    <span key={t} className={`tag ${t}`}>
                      {MAP[t] || t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
      <style>{`
        @media(max-width:600px) { .exp-header{flex-direction:column;} }
      `}</style>
    </section>
  );
}
