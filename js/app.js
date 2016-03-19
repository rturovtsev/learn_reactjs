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


var Article = React.createClass({
    render: function() {
        var author = this.props.data.author,
            text = this.props.data.text;

        return (
            <div className="article">
                <p className="news__author">{author}</p>
                <p className="news__text">{text}</p>
            </div>
        );
    }
});


var News = React.createClass({
    render: function() {
        var data = this.props.data;
        var newsTemplate;

        if (data.length > 0) {
            newsTemplate = data.map(function(item, index) {
                return (
                    <div key={index}>
                        <Article data={item} />
                    </div>
                );
            });
        } else {
            newsTemplate = <p>Новостей нет</p>;
        }

        return (
            <div className="news">
                {newsTemplate}
                <strong className={'news__count ' + (data.length > 0 ? '' : 'none')}>Всего новостей: {data.length}</strong>
            </div>
        );
    }
});


var App = React.createClass({
    render: function() {
        return (
            <div className="app">
                <h3>Новости</h3>
                <News data={myNews} /> {/* свойство data */}
            </div>
        );
    }
});


ReactDOM.render(
    <App />,
    document.getElementById('root')
);