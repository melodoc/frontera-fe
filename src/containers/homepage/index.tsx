import React, {useState, useEffect} from 'react';
import Header from './../../components/header';
import Preview from './../../components/preview';
import Trending from './../../components/trending';

const HomePage = () => {
    const [state, setState] = useState(false)
    const toggler = () => {
        setState(!state)
    }

    useEffect(() => {
        fetch("yandex.ru")
    }, [state])

    return (
    <>
        <Header/>
        <Preview/>
        <Trending/>
    </>
)};

class HomePageclass extends React.Component {
    constructor(props){
        super (props)
        this.state = false
        this.toggler = this.toggler.bind(this)
    }
    toggler() {
        this.setState(!this.state)
    }
    componentDidMount(){
        fetch("yandex.ru")
    }
    componentDidUpdate(){
        fetch("yandex.ru")
    }
    render(){
        return(
            <>
                <Header/>
                <Preview/>
                <Trending/>
            </>
        )
    }
}

class NewPageClassc extends HomePageclass {
    
}

export default HomePage