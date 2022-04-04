import type { NextPage } from 'next'
import styles from '../../styles/Home.module.css'
import Counter from "../components/Counter/Counter";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <h1>Hello React.js Testing Series Friends!!!</h1>
      <Counter description="My Counter" defaultCount={0} />
    </div>
  )
}

export default Home
