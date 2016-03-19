var News = React.createClass({
    render: function() {
        return (
            <div className="news">
                Новостей нет.
            </div>
        );
    }
});


var Comments = React.createClass({
    render: function() {
        return (
            <div className="comments">
                Нет новостей - комментировать нечего.
            </div>
        );
    }
});


var App = React.createClass({
    render: function() {
        return (
            <div className="app">
                Компонент App!
                <News />
                <Comments />
            </div>
        );
    }
});


ReactDOM.render(
    <App />,
    document.getElementById('root')
);