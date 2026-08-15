import { Metadata } from 'next';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Book a Free Demo Class | NK Academy',
  description: 'Experience the NK Academy difference. Book a free demo class today and start your journey towards academic excellence.',
};

export default function DemoPage() {
  return (
    <div style={{ backgroundColor: '#f8f9fa', minHeight: 'calc(100vh - 80px)', padding: '5rem 0' }}>
      <div className="container">
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', marginBottom: '3rem' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>Experience the NK Academy Difference</h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--color-supporting)' }}>
            Join our free demo class to see why thousands of parents trust us with their children's future.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
          {/* Social Proof */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <Card>
              <p style={{ fontSize: '1.125rem', fontStyle: 'italic', marginBottom: '1rem' }}>
                "The demo class was an eye-opener. My son finally understood concepts he struggled with for months. We enrolled immediately."
              </p>
              <div style={{ fontWeight: '600' }}>— Priya S., Parent of SSC Student</div>
            </Card>
            <Card>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Why Attend a Demo?</h3>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', listStyle: 'none', color: 'var(--color-supporting)' }}>
                <li>✓ Experience our unique teaching methodology</li>
                <li>✓ Interact with expert faculty members</li>
                <li>✓ Get a personalized roadmap for your child</li>
                <li>✓ Evaluate our comprehensive study materials</li>
              </ul>
            </Card>
          </div>

          {/* Form */}
          <Card>
            <h2 style={{ fontSize: '2rem', marginBottom: '2rem', textAlign: 'center' }}>Book Your Spot</h2>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontWeight: '500' }}>Student's Name</label>
                <input type="text" style={{ padding: '0.75rem', borderRadius: '8px', border: '1px solid #ddd', fontSize: '1rem' }} required />
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontWeight: '500' }}>Parent's Mobile Number</label>
                <input type="tel" style={{ padding: '0.75rem', borderRadius: '8px', border: '1px solid #ddd', fontSize: '1rem' }} required />
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontWeight: '500' }}>Standard / Board</label>
                <select style={{ padding: '0.75rem', borderRadius: '8px', border: '1px solid #ddd', fontSize: '1rem' }} required>
                  <option value="">Select Option</option>
                  <option value="ssc">SSC Board</option>
                  <option value="cbse">CBSE Board</option>
                  <option value="icse">ICSE Board</option>
                  <option value="science">Science</option>
                  <option value="commerce">Commerce</option>
                  <option value="sanskrit">Sanskrit Toolkit</option>
                </select>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontWeight: '500' }}>Preferred Branch</label>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <label style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                    <input type="radio" name="branch" value="east" required /> Borivali East
                  </label>
                  <label style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                    <input type="radio" name="branch" value="west" /> Borivali West
                  </label>
                </div>
              </div>

              <Button variant="primary" size="large" style={{ width: '100%', marginTop: '1rem' }}>
                Confirm Demo Booking
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
}
