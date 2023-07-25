const Notification = ( {type, message} ) => {
    if (message === '') {
        return null
    }

    if (type) {
        return (
            <div className="goodNotification">
                {message}
            </div>
        )
    }

    return (
        <div className="badNotification">
                {message}
        </div>
    )

}

export default Notification