var myNews = [
    {
        author: 'Саша',
        text: 'Текст от саши'
    },
    {
        author: 'Петя',
        text: 'Текст от пети'
    },
    {
        author: 'Вася',
        text: 'Текст от васи'
    }
];


var News = React.createClass({
    render: function() {
        var data = this.props.data;
        var newsTemplate = data.map(function(item, index) {
            return (
                <div key={index}>
                    <p className="news__author">{item.author}</p>
                    <p className="news__text">{item.text}</p>
                </div>
            );
        });

        return (
            <div className="news">
                {newsTemplate}
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
                <News data={myNews} /> {/* свойство data */}
                <Comments />
            </div>
        );
    }
});


ReactDOM.render(
    <App />,
    document.getElementById('root')
);