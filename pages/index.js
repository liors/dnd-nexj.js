import Header from '../components/Header'
import Section from '../components/Section'

export default () => (
    <div>
        <Header />
        <Section>
          <p style={styles.a}>Welcome to next.js!</p>
        </Section>
    </div>
)

const styles = {
  a: {
    marignTop: '1em'
  }
}