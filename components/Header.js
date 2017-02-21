
import Link from 'next/link'

export default () => (
  <div>
    <Link href='/'>
      <a style={styles.a} >Home</a>
    </Link>

    <Link href='/cowsay'>
      <a style={styles.a} >Cowsay</a>
    </Link>

    <Link href='/user-agent'>
      <a style={styles.a} >user agent</a>
    </Link>
  </div>
)

const styles = {
  a: {
    marginRight: 10
  }
}