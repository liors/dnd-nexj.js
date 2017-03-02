import Link from 'next/link'

export default () => (
  <div style={{ margin: '10px'}}>    
    <Link href='/'>
        <a style={styles.a} >Home</a>
      </Link>

      <Link href='/cowsay'>
        <a style={styles.a}>Cowsay</a>
      </Link>

      <Link href='/user-agent'>
        <a style={styles.a}>user agent</a>
      </Link>

      <Link href='/dnd'>
        <a style={styles.a}>dNd</a>
      </Link>
  </div>
)

const styles = {
  a: {
    marginRight: 10
  },
  div: {
    margin: 10
  }
}