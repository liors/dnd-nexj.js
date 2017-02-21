import Header from '../components/Header'

export default () => (
    <div>
        <Header />
        <p style={styles.a}>Welcome to next.js!</p>
    </div>
)

const styles = {
  a: {
    marignTop: '1em'
  }
}