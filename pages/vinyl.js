import Meta from '../components/Meta'
import Link from 'next/link'

const vinyl = () => {
    return (
        <div>
            <Meta title='Vinyl List' />
            <h1>Vinyl Shopping List</h1>
            <Link href='/'>Go Back</Link>
        </div>
    )
}

export default vinyl