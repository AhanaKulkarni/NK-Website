import React from 'react';

export default function NKAPL2023() {
  return (
    <div style={{ paddingTop: '120px', paddingBottom: '80px', minHeight: '100vh', backgroundColor: 'var(--color-surface)' }}>
      <div className="container">
        <h1 className="display-font" style={{ fontSize: '3.5rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>
          NK APL 2023
        </h1>
        <p style={{ fontSize: '1.25rem', color: 'var(--color-supporting)', marginBottom: '4rem' }}>
          Annual Premier League Cricket Tournament
        </p>

        <div style={{ display: 'grid', gap: '3rem', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
          
          <div style={{ backgroundColor: 'white', padding: '3rem', borderRadius: 'var(--radius-card)', boxShadow: 'var(--shadow-diffuse)' }}>
            <h2 className="display-font" style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--color-primary)' }}>
              Events & Rules
            </h2>
            <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--color-text)' }}>
              <li><strong>Detailed sports event rules:</strong> All ICC standard rules apply unless specified below.</li>
              <li><strong>Powerplays:</strong> Strategically designated overs to elevate the competitive spirit.</li>
              <li><strong>Girl Player Handicap:</strong> Special scoring system applied when female players are batting to encourage inclusive participation.</li>
              <li><strong>Umpire Rules:</strong> Umpire decisions are final and binding. Zero tolerance for arguing with match officials.</li>
              <li><strong>Time Slots:</strong> Matches strictly adhere to the scheduled time slots. Teams must report 30 minutes prior.</li>
            </ul>
          </div>

          <div style={{ backgroundColor: 'white', padding: '3rem', borderRadius: 'var(--radius-card)', boxShadow: 'var(--shadow-diffuse)' }}>
            <h2 className="display-font" style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--color-primary)' }}>
              Participating Teams
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', color: 'var(--color-text)' }}>
              <div style={{ padding: '1rem', borderLeft: '4px solid var(--color-accent)', backgroundColor: 'var(--color-surface)' }}>
                <strong>Parents East (PE)</strong>
              </div>
              <div style={{ padding: '1rem', borderLeft: '4px solid var(--color-accent)', backgroundColor: 'var(--color-surface)' }}>
                <strong>Parents West (PW)</strong>
              </div>
              <div style={{ padding: '1rem', borderLeft: '4px solid var(--color-primary)', backgroundColor: 'var(--color-surface)' }}>
                <strong>Teachers (TR)</strong>
              </div>
              <div style={{ padding: '1rem', borderLeft: '4px solid #475569', backgroundColor: 'var(--color-surface)' }}>
                <strong>Rotary Club (RC)</strong>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
