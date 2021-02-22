import React from 'react'

class ErrorBoundary extends React.Component {
    state = {
        isError: false,
    }

    static getDerivedStateFromError () {
        return {
            isError: true
        }
    }

    render() {
        const { isError } = this.state

        if(isError) {
            return <div>Что то пошло не так :( </div>
        }

        return this.props.children
    }
}

export default ErrorBoundary
