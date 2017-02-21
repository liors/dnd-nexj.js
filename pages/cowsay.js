import cowsay from 'cowsay-browser'

import Header from '../components/Header'

export default () => (
    <div>
        <Header />
        <pre>{ cowsay.say({ text: 'hi there!' }) }</pre>
    </div>
)