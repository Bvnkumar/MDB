import { connect } from 'react-redux'
import Albums from './albumsComponent'


const mapStateToProps = (state) => {
    const { albums: { albumsData } } = state
    return {
        albumsData
    }
}
const mapDispatchToProps = () => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Albums)