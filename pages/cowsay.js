import cowsay from 'cowsay-browser'
import Section from '../components/Section'
import Header from '../components/Header'

export default () => (
    <div>
        <Header />
        <Section>
            <pre>{ cowsay.say({ text: 'hi there!' }) }</pre>
        </Section>
    </div>
)